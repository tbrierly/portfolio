$(document).ready(function(){
  $('.parallax').parallax();
  $('.materialboxed').materialbox();
  
   $('.scrollspy').scrollSpy();
   $('.leftAni').hide("slow");
   $('.rightAni').hide("slow");

}); 
$('.leftAni').show('slow');
//Create Chart//

function generateData(length) {
  var data = [
  {
    name: 'Html',
    value: 95
  },
  {
    name: 'Css',
    value: 95
  },
  {
    name: 'Javascript',
    value: 85
  },
  {
    name: 'jQuery',
    value: 80
  },
  {
    name: 'Php',
    value: 75
  },
  {
    name: 'Git',
    value: 50
  },
  {
    name: 'Ajax',
    value: 60
  }
];
  
 /* function randomValue() {
	  var skills = [20, 50];
   return Math.floor(Math.random() * 100 + 1);

  }
  
  for (var i = 0; i < length; i++) {
    data.push({
      'name': 'Week ' + (i + 1),
      'value': randomValue()
    });
  }
  */
  return data;
}


function draw(){
// load 20 items of random data
var data = generateData(7);

// set the dimensions and margins of the graph
var margin = {top: 40, right: 20, bottom: 50, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// define transition
var t = d3.transition()
			.duration(750)
			.ease(d3.easeQuadOut);

// set the ranges

// bar color scale
var color = d3.interpolateRdYlGn;
var colorScale = d3.scaleLinear()
  .range([1, 0])
  .domain([d3.max(data, function(d) { return d.value; }), 0]);

// x-axis scale
var x = d3.scaleBand()
          .range([0, width])
          .domain(data.map(function(d) { return d.name; }))
          .padding(0.05);
// y-axis scale
var y = d3.scaleLinear()
          .range([height, 0])
          .domain([0, d3.max(data, function(d) { return d.value; })]);
   
// create svg element
var svg = d3.select('#chart').append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .attr('viewBox', '0 0 ' + (width + margin.left + margin.right) + ' ' + (height + margin.top + margin.bottom))
  .append('g')
  .attr('transform', 
        'translate(' + margin.left + ',' + margin.top + ')');

// create x-axis
var xAxis = svg.append('g')
  .attr('class', 'x-axis axis')
  .attr('transform', 'translate(0,' + height + ')')
  .call(d3.axisBottom(x))
.append('text')
  .attr('x', width)
  .attr('y', 30)
  .attr('dy', '.71em')
  .style('text-anchor', 'end')
  .text('Skills');

// create y-axis
var yAxis = svg.append('g')
  .attr('class', 'y-axis axis')
  .call(d3.axisLeft(y).ticks(10, 's'))
.append('text')
  .attr('y', -20)
  .attr('dy', '.71em')
  .style('text-anchor', 'end')
  .text('Awesomeness-Meter');

// create bars
var bars = svg.selectAll('.bar')
  .data(data)
  .enter().append('rect')
  .attr('class', 'bar')
  .attr('x', function(d) { return x(d.name); })
  .attr('width', x.bandwidth())
  .attr('y', function(d) { return y(0); })
	.attr('height', height - y(0))
	.transition(t)
  .attr('y', function(d) { return y(d.value); })
  .attr('height', function(d) { return height - y(d.value); })
  .attr('fill', '#0071b9')
  .attr('fill-opacity', function(d) {
    return colorScale(d.value);
  });
}

	
//Scroll Fire//
var options = [
	
	{selector: '#chart', offset: 500, callback: function(el) {
        //Materialize.showStaggeredList($(el));
		draw();

      } },
	
	{selector: '.leftAni', offset: 500, callback: function() {
        //Materialize.showStaggeredList($(el));
		$('.leftAni').show("slow");
		
		$('.leftAni').addClass('animated bounceInLeft');
		
	
      } },
	  
	  {selector: '.rightAni', offset: 500, callback: function() {
        //Materialize.showStaggeredList($(el));
		$('.rightAni').show("slow");
		$('.rightAni').addClass('animated bounceInRight');
		
      } },
	
  ];
  
  Materialize.scrollFire(options);

//Pie code//



