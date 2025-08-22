let chart;
let data = [];
let direction = 1;

function generateZigzag() {
  if (data.length> 50) data.shift();
  const last = data.length? data[data.length - 1]: 50;
  const next = last + (Math.random() * 10 - 5) * direction;
  data.push(next);
