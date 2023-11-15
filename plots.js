const url = "http://127.0.0.1:5000/api/v1.0/moviesinfo";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});

// Create an array of each country's numbers
let ratings = Object.values(data.rating);
let revenue = Object.values(data.revenue);

// Create an array of category labels
let labels = Object.keys(data.title);

let trace1 = {
  x: ratings,
  y: revenue
};

let data1 = [trace1];

let layout = {
  title: "A Plotly plot"
};

Plotly.newPlot("plot", data, layout);
// Display the default plot
// function init() {
//   let data = [{
//     values: australia,
//     labels: labels,
//     type: "pie"
//   }];

//   let layout = {
//     height: 600,
//     width: 800
//   };

//   Plotly.newPlot("pie", data, layout);
// }


// init();
