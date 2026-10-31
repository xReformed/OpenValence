---
title: "4.1: Analog and Digital Data"
book: "Instrumental Analysis (LibreTexts)"
chapter: "4: Analog and Digital Data"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/04%3A_Digital_Electronics_and_Microcomputers_(TBD)/4.01%3A_Analog_and_Digital_Signals"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

Figure 4.1.1 shows an xy-recorder that we can use to provide a permanent record of a cyclic voltammetry experiment. In this particular experiment, we apply a variable potential to an electrochemical cell and measure the current that flows in response to this potential (see Chapter 25 for a discussion of cyclic voltammetry). The potential and the current, which is converted into a voltage for the purpose of recording the cyclic voltammogram, are fed into the recorder using the cables on the right side of the recorder. The Y1 Range and the X Range controls allow us to adjust the scales of the axes.

Figure 4.1.1: Photograph (a) of an xy-recorder and (b) close-up view of the recorder's controls.
Photograph of an xy-recorder.

The vertical bar on the xy-recorder moves toward the recorder's left or right based on the applied potential, and a pen attached to the vertical bar moves toward the recorder's top or bottom based on the measured current. The applied potential and the current are continuous variables within the instrument's range; the resulting cyclic voltammogram in Figure 4.1.2 is an analog record of the experiment.

Figure 4.1.2: Example of the type of output obtained with the xy-recorder for a cyclic voltammetry experiment.
Cyclic voltammogram.

Although the analog trace in Figure 4.1.2 provides a permanent record of an experiment, it is not in a form that gives us access to the raw data. We can take the image and use digitizing software (see here for an open-source digitizer) to extract a digital version of the data, or we can design our instruments to collect the data in digital form by sampling the analog signal at preset intervals and then saving the data. Such files often are in a format that includes metadata that explains how to extract the data from the file. For example, xy-coordinate data for a wide variety of spectroscopy experiments is often stored digitally using a format established by the Joint Committee on Atomic and Molecular Physical Data (JCAMP). Such files have the extension .jdx and can be opened using a variety of different software programs.

[Note: corrected; the source prints "it is not in form that" where this reads "it is not in a form that". The article is missing.]

Figure 4.1.3 is a screenshot that illustrates how we can work with digitized data using data analysis software, such as R and RStudio. The upper left panel shows some of the contents of a .jdx file that contains the IR spectrum of methanol (in this case, digitized by NIST from an analog hard copy). The lines preceded by double hashtags (##) are metadata that provide information about the x-axis scale (minimum and maximum limits and increments between values), the y-axis scale (minimum and maximum values), and the number of data points. This is followed by multiple lines of digitized data. Each line of data contains one value of x and five values of y. The R package readJDX was used to extract the information from the .jdx file and to store it in a variable given the name methanol (see upper right panel). Code written in R (see lower left panel) was used to plot (see lower right panel) the spectrum.

Figure 4.1.3: Screenshot from RStudio showing the analysis of a digitized spectrum. See text for details.
Analysis of a digitized spectrum.

Although the spectrum for methanol in Figure 4.1.3—with its smooth, continuous line—looks like an analog spectrum, this is a result of choosing to plot the data as a sequence of lines that connect individual points without actually displaying the individual points themselves. Figure 4.1.4, in which we plot only the individual data points, shows us that the spectrum actually consists of discrete, digitized data.

[Note: corrected; the source prints "methanol in Figure 4.1.4—with" where this reads "methanol in Figure 4.1.3—with". The spectrum drawn as a continuous line is the plot in the lower right panel of Figure 4.1.3; Figure 4.1.4 is the point plot the next sentence contrasts with it.]

Figure 4.1.4: The IR spectrum for methanol from the .jdx data in Figure 4.1.3 plotted here using individual points instead of a line that connects the individual points.
IR spectrum of methanol shown as digitized data.

[Note: corrected; the source prints "data in Figure 4.1.2" where this reads "data in Figure 4.1.3". The .jdx data for methanol are shown in Figure 4.1.3; Figure 4.1.2 is the cyclic voltammogram.]
