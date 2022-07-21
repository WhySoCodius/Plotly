    //********************************************************************************************* */
    //*********************Deliverable 1: Create a Horizontal Bar Chart**************************** */
    //********************************************************************************************* */

    function init() {
      var selector = d3.select("#selDataset");
    
      d3.json("samples.json").then((data) => {
        console.log(data);
        var sampleNames = data.names;
        sampleNames.forEach((sample) => {
          selector
            .append("option")
            .text(sample)
            .property("value", sample);
        });
       // Call the functions to display the content relative to the first name on page launch
        buildCharts(sampleNames[0]);
        buildMetadata(sampleNames[0]);
    })
    
    
    }
    
    
    
    init();
    
    function optionChanged(newSample) {
        buildMetadata(newSample);
        buildCharts(newSample);
      // console.log(newSample);
    };
    
    function buildMetadata(sample){
        d3.json("samples.json").then((data)=>{
            var metadata = data.metadata;
            var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
            var result = resultArray[0];
            var PANEL = d3.select("#sample-metadata");
            PANEL.html("");
            Object.entries(result).forEach(([key,value])=>{
                dataResult = (key.toUpperCase() +": "+ value);
                // console.log(key +":"+value);
             
            
    
           
            PANEL.append("h5").text(dataResult);
    
          });
         
        });
    };
    // 1. Create the buildCharts function.
    function buildCharts(sample) {
    // 2. Use d3.json to load and retrieve the samples.json file 
    d3.json("samples.json").then((data) => {
      // 3. Create a variable that holds the samples array. 
      var chartData = data.samples;
    
      // 4. Create a variable that filters the samples for the object with the desired sample number.
      var chartArray = chartData.filter(element => element.id == sample);
     
      //  5. Create a variable that holds the first sample in the array.
      var chartResult = chartArray[0];
    
      // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
      var otuIds = chartResult.otu_ids;
      var otuLabels = chartResult.otu_labels;
      var sampleValues = chartResult.sample_values;
      // console.log(sampleValues);
      // console.log(otuIds);
    
      // 7. Create the yticks for the bar chart.
      // Hint: Get the the top 10 otu_ids and map them in descending order  
      //  so the otu_ids with the most bacteria are last. 
      var xticks = sampleValues.sort((a,b)=>b-a).slice(0, 10).reverse();
      var yticks = otuIds.slice(0,10).map(elem=> `OTU :${elem}`).reverse();
      // console.log(yticks);
      // console.log(xticks);
      
    
      // 8. Create the trace for the bar chart. 
      var trace1 = {
        x: xticks,
        y: yticks,
        orientation:"h",
        type:"bar"
        };
      
      // 9. Create the layout for the bar chart. 
      var barLayout = {
        title: "Top 10 Bacteria Cultures Found",
        xaxis: { title: " " },
        yaxis: { title: " " }
       
      };
     
      // 10. Use Plotly to plot the data with the layout. 
      Plotly.newPlot("bar", [trace1],barLayout);


    //********************************************************************************************* */
    //*****************************Deliverable 2: Create a Bubble Chart**************************** */
    //********************************************************************************************* */

// 1. Create the trace for the bubble chart.
var trace2 = {
  x:otuIds,
  y:sampleValues,
  text:otuLabels,
  mode:"markers",
  marker:{
    color:otuIds,
    size:sampleValues,
    colorscale:"Rainbow"

  }

};



// 2. Create the layout for the bubble chart.
var bubLayout = {
  title: "Bacteria Cultures Per Sample",
  hovermode:"closest",
  xaxis:{title:"OTU ID"},
  height: 600,
  width: 1200
 };


// 3. Use Plotly to plot the data with the layout.
Plotly.newPlot("bubble",[trace2],bubLayout);

    //********************************************************************************************* */
    //*****************************Deliverable 3: Create a Gauge Chart**************************** */
    //********************************************************************************************* */
    

// Create a variable that holds the metadata array. 


// Create a variable that  filters the metadata array for the object with the desired sample number.


//  Create a variable that holds the first metadata in the array.


// create a variable that converts the washing frequency to a floating point number.

var washFreq = (data.metadata.filter(sampleObj => sampleObj.id == sample))[0].wfreq;

// 4. Create the trace for the gauge chart.
var gaugeData = [{
  domain: { x: otuIds, y:sampleValues },
  value: washFreq,
  title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week" },
  type: "indicator",
  mode: "gauge+number",
  gauge: {
    axis: { range: [0, 10] },
    bar: {color:"black"},
    steps: [
      { range: [0, 2], color: "red" },
      { range: [2, 4], color: "orange" },
      { range: [4, 6], color: "yellow"},
      { range: [6, 8], color: "lightgreen"},
      { range: [8, 10], color: "green"}

    ]}
}
 
];

// 5. Create the layout for the gauge chart.
var gaugeLayout = {
  width: 600, height: 450, margin: { t: 0, b: 0 }


// 6. Use Plotly to plot the gauge data and layout.
};
Plotly.newPlot("gauge",gaugeData,gaugeLayout);
});
}