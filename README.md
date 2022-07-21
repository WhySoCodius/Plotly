# Plotly_Biodiversity

## Overview of the analysis

Roza has a partially completed dashboard that she needs to finish. She has a completed panel for demographic information and now needs to visualize the bacterial data for each volunteer. Specifically, her volunteers should be able to identify the top 10 bacterial species in their belly buttons. That way, if Improbable Beef identifies a species as a candidate to manufacture synthetic beef, Roza's volunteers will be able to identify whether that species is found in their navel.

## Resources 
### Data Sources: 
We used the following [samples](/samples.json) were used to to create the webpage.

### Softwares:
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)

## Results

#### Dashboard

After deploying webpage for the with the Belley Button Biodiversity Data the [Dashboard](/static/images/dashboard.png) looks like this:

![dashboard.png](/static/images/dashboard.png)

#### Bubble Chart
When an individual's ID is selected from the drop-down menu on the webpage, the code can be found in the bubble chart, which we have designed to represent bacteria cultures per sample, i.e. corresponding sample values (bacterial species name for each OTU ID) against the OTU ID.

![bubble_chart.png](/static/images/bubble_chart.png)

When a user's ID is chosen from the drop-down menu on the webpage, the bar chart's code can be found. The horizontal bar chart shows the top 10 bacterial species (OTUs). 
When an individual ID is selected from the drop-down menu on the webpage, the code can be found in the gauge chart, which we have designed to display the value of the weekly washing frequency and display the value as a measure from 0 to 10 on the progress bar in the gauge chart.

![bar_and_gauge.png](/static/images/bar_and_gauge.png)