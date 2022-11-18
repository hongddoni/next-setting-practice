const dataset = [15, 5, 32,  21];

d3.select('.app')
.selectAll('p')
.data(dataset)
.enter()
.append('p')
.text('hello')