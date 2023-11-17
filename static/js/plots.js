const url = "http://127.0.0.1:5000/api/v1.0/moviesinfo";
let ratinglist = []; 
let revenlist = [];

// Define function
function init() {
    
  // Fetch the JSON data and console log it
  d3.json(url).then(function(data) {

    movinfo = typeof data.moviedata === 'string' ? JSON.parse(data.moviedata) : data.moviedata;
    
    // Loop through the array of films
       for (let i = 0; i < movinfo.length; i++) {
    
    // // Store the data at index `i` for evaluation
      newNum = movinfo[i];   
      
        ratinglist.push(newNum.rating);
        revenlist.push(newNum.revenue);
    };
    console.log(ratinglist);
    console.log(revenlist);
// Trace data for the bar chart
    let trace = [{
    y: revenlist,
    x: ratinglist,
    text: revenlist,
    type: "bar",
    marker: {
      color: "purple"
    },
    }];

    let layout2 = {
      title: "Movie Revenue Bar Graph"
    };

// Use Plotly to plot the data in a bar chart
  Plotly.newPlot("bar", trace, layout2);
  

  let trace1 = [{
    x: ratinglist,
    y: revenlist,
    text: revenlist,
    type: "histogram",
    marker: {
      color: "rgb(160,178,239)"
  }}];
  
  let layout = {
    title: "Movie Revenue Histogram Graph"
  };

  Plotly.newPlot("plot", trace1, layout);

  // Create Bar chart & Scatter plot
  let trace4 = {
    x: ratinglist,
    y: revenlist,
    type: "bar"
  };

  let trace2 = {
    x: ratinglist,
    y: revenlist,
    type: "scatter"
  };

// The data array consists of both traces
  let data2 = [trace4, trace2];


  let layout1 = {
    title: "Movie Revenue Scatter Plot"
   };

// Note that we omitted the layout object this time
// This will use default parameters for the layout
  Plotly.newPlot("newPlot", data2, layout1);
});
}
init();