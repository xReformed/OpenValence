import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ComponentPropsWithoutRef, CSSProperties } from "react";

type RevealDirection = "start" | "end" | "center";
type AnimateOn = "load" | "view" | "hover" | "inViewHover" | "click";
type ClickMode = "once" | "toggle";

const styles: Record<"wrapper" | "srOnly", CSSProperties> = {
  wrapper: {
    display: "inline-block",
    whiteSpace: "pre-wrap",
  },
  srOnly: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0,0,0,0)",
    border: 0,
  },
};

const DEFAULT_CHARACTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";

function scramble(text: string, revealed: Set<number>, pool: string[]) {
  return text
    .split("")
    .map((char, i) => {
      if (char === " ") return " ";
      if (revealed.has(i)) return char;
      return pool[Math.floor(Math.random() * pool.length)];
    })
    .join("");
}

function computeOrder(len: number, revealDirection: RevealDirection) {
  const order: number[] = [];
  if (len <= 0) return order;

  if (revealDirection === "start") {
    for (let i = 0; i < len; i++) order.push(i);
    return order;
  }
  if (revealDirection === "end") {
    for (let i = len - 1; i >= 0; i--) order.push(i);
    return order;
  }

  const middle = Math.floor(len / 2);
  let offset = 0;
  while (order.length < len) {
    const idx =
      offset % 2 === 0 ? middle + offset / 2 : middle - Math.ceil(offset / 2);
    if (idx >= 0 && idx < len) order.push(idx);
    offset++;
  }
  return order;
}

function removeRandom(set: Set<number>, count: number) {
  const arr = Array.from(set);
  for (let i = 0; i < count && arr.length > 0; i++) {
    arr.splice(Math.floor(Math.random() * arr.length), 1);
  }
  return new Set(arr);
}

export interface DecryptedTextProps extends Omit<
  ComponentPropsWithoutRef<"span">,
  "children" | "className"
> {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: RevealDirection;
  useOriginalCharsOnly?: boolean;
  characters?: string;
  animateOn?: AnimateOn;
  clickMode?: ClickMode;
  delay?: number;
  className?: string;
  encryptedClassName?: string;
  parentClassName?: string;
}

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  characters = DEFAULT_CHARACTERS,
  animateOn = "hover",
  clickMode = "once",
  delay = 0,
  className = "",
  encryptedClassName = "",
  parentClassName = "",
  ...props
}: DecryptedTextProps) {
  const startsScrambled = animateOn === "click" || animateOn === "load";

  const pool = useMemo(
    () =>
      useOriginalCharsOnly
        ? Array.from(new Set(text.split(""))).filter((char) => char !== " ")
        : characters.split(""),
    [useOriginalCharsOnly, text, characters],
  );

  const [displayText, setDisplayText] = useState(() =>
    startsScrambled ? scramble(text, new Set(), pool) : text,
  );
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(
    () => new Set(),
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDecrypted, setIsDecrypted] = useState(!startsScrambled);
  const [direction, setDirection] = useState<"forward" | "reverse">("forward");
  const [hasAnimated, setHasAnimated] = useState(false);

  const containerRef = useRef<HTMLSpanElement>(null);
  const orderRef = useRef<number[]>([]);
  const pointerRef = useRef(0);
  const revealedRef = useRef<Set<number>>(new Set());
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const setRevealed = useCallback((next: Set<number>) => {
    revealedRef.current = next;
    setRevealedIndices(next);
  }, []);

  const allIndices = useCallback(
    () => new Set(Array.from({ length: text.length }, (_, i) => i)),
    [text],
  );

  const encryptInstantly = useCallback(() => {
    setRevealed(new Set());
    setDisplayText(scramble(text, new Set(), pool));
    setIsDecrypted(false);
  }, [text, pool, setRevealed]);

  const triggerDecrypt = useCallback(() => {
    orderRef.current = computeOrder(text.length, revealDirection);
    pointerRef.current = 0;
    setRevealed(new Set());
    setDirection("forward");
    setIsAnimating(true);
  }, [text.length, revealDirection, setRevealed]);

  const triggerReverse = useCallback(() => {
    orderRef.current = computeOrder(text.length, revealDirection).reverse();
    pointerRef.current = 0;
    const full = allIndices();
    setRevealed(full);
    setDisplayText(scramble(text, full, pool));
    setDirection("reverse");
    setIsAnimating(true);
  }, [text, revealDirection, allIndices, pool, setRevealed]);

  const resetToPlainText = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsAnimating(false);
    setRevealed(new Set());
    setDisplayText(text);
    setIsDecrypted(true);
    setDirection("forward");
  }, [text, setRevealed]);

  useEffect(() => {
    if (!isAnimating) return;

    let iteration = 0;

    const stop = (decrypted: boolean) => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setIsAnimating(false);
      setIsDecrypted(decrypted);
    };

    const id = setInterval(() => {
      const order = orderRef.current;

      if (direction === "forward") {
        if (sequential) {
          if (pointerRef.current >= order.length) {
            setDisplayText(text);
            stop(true);
            return;
          }
          const next = new Set(revealedRef.current);
          next.add(order[pointerRef.current++]);
          setRevealed(next);
          setDisplayText(scramble(text, next, pool));
        } else {
          setDisplayText(scramble(text, revealedRef.current, pool));
          if (++iteration >= maxIterations) {
            setDisplayText(text);
            stop(true);
          }
        }
        return;
      }

      if (sequential) {
        if (pointerRef.current >= order.length) {
          stop(false);
          return;
        }
        const next = new Set(revealedRef.current);
        next.delete(order[pointerRef.current++]);
        setRevealed(next);
        setDisplayText(scramble(text, next, pool));
        if (next.size === 0) stop(false);
        return;
      }

      const current =
        revealedRef.current.size === 0 ? allIndices() : revealedRef.current;
      const removeCount = Math.max(
        1,
        Math.ceil(text.length / Math.max(1, maxIterations)),
      );
      const next = removeRandom(current, removeCount);
      setRevealed(next);
      setDisplayText(scramble(text, next, pool));
      if (next.size === 0 || ++iteration >= maxIterations) {
        setRevealed(new Set());
        setDisplayText(scramble(text, new Set(), pool));
        stop(false);
      }
    }, speed);

    intervalRef.current = id;
    return () => clearInterval(id);
  }, [
    isAnimating,
    direction,
    sequential,
    text,
    pool,
    speed,
    maxIterations,
    allIndices,
    setRevealed,
  ]);

  useEffect(() => {
    if (animateOn !== "load" && animateOn !== "click") return;

    const id = setTimeout(
      () => {
        encryptInstantly();
        if (animateOn === "load") triggerDecrypt();
      },
      animateOn === "load" ? Math.max(delay, 0) : 0,
    );
    return () => clearTimeout(id);
  }, [animateOn, delay, text, encryptInstantly, triggerDecrypt]);

  useEffect(() => {
    if (animateOn !== "view" && animateOn !== "inViewHover") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            encryptInstantly();
            triggerDecrypt();
            setHasAnimated(true);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.1 },
    );

    const current = containerRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [animateOn, hasAnimated, encryptInstantly, triggerDecrypt]);

  const handleClick = () => {
    if (animateOn !== "click" || isAnimating) return;

    if (clickMode === "once") {
      if (isDecrypted) return;
      triggerDecrypt();
      return;
    }
    if (isDecrypted) triggerReverse();
    else triggerDecrypt();
  };

  const handleMouseEnter = () => {
    if (isAnimating) return;
    encryptInstantly();
    triggerDecrypt();
  };

  const interaction =
    animateOn === "hover" || animateOn === "inViewHover"
      ? { onMouseEnter: handleMouseEnter, onMouseLeave: resetToPlainText }
      : animateOn === "click"
        ? { onClick: handleClick }
        : {};

  return (
    <span
      ref={containerRef}
      className={parentClassName}
      style={styles.wrapper}
      {...interaction}
      {...props}
    >
      <span style={styles.srOnly}>{text}</span>

      <span aria-hidden="true">
        {displayText.split("").map((char, index) => (
          <span
            key={index}
            className={
              revealedIndices.has(index) || (!isAnimating && isDecrypted)
                ? className
                : encryptedClassName
            }
          >
            {char}
          </span>
        ))}
      </span>
    </span>
  );
}
