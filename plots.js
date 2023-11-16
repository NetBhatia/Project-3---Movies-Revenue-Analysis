const url = "http://127.0.0.1:5000/api/v1.0/moviesinfo";
let ratinglist = [];
let revenlist = [];

// Define function
function init() {
    
  // Fetch the JSON data and console log it
  d3.json(url).then(function(data) {

        // console.log(data);
      movinfo = data.moviedata;
      ratinglist = movinfo.rating;
    // Loop through the array of films
    //   for (let i = 0; i < movinfo.length; i++) {
    
    // // Store the data at index `i` for evaluation
    //     row = movinfo[i];
    //     ratinglist.push(row.rating);
    //     revenlist.push(row.revenue);
    // }
    console.log(ratinglist)
// Trace data for the bar chart
    let trace = [{
    x: ratinglist,
    y: revenlist,
    text: revenlist,
    type: "bar",
    marker: {
      color: "rgb(160,178,239)"
    },
    orientation: "h"
    }];

// Use Plotly to plot the data in a bar chart
  Plotly.newPlot("bar", trace);
  });

  let trace1 = {
    x: ratinglist,
    y: revenlist
  };

  let datadisp = [trace1];

  let layout = {
    title: "Movie Revenue Plot"
  };

  Plotly.newPlot("plot", datadisp, layout);

  let trace = {
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
  let data2 = [trace, trace2];

// Note that we omitted the layout object this time
// This will use default parameters for the layout
  Plotly.newPlot("plot", data2);
}
init();