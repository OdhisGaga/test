let chart;
let data = [];
let direction = 1;

function generateZigzag() {
  if (data.length> 50) data.shift();
  const last = data.length? data[data.length - 1]: 50;
  const next = last + (Math.random() * 10 - 5) * direction;
  data.push(next);
chart.data.datasets[0].data = data;
  chart.update();
}

function setupChart() {
  const ctx = document.getElementById('tradeChart').getContext('2d');
  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array(50).fill(''),
      datasets: [{
        label: 'Market',
        data: data,
        borderColor: 'blue',
        fill: false
}]
},
    options: {
      animation: false,
      scales: {
        y: {
          min: 0,
          max: 100
}
}
}
});
  setInterval(generateZigzag, 1000);
}

function deposit() {
  const phone = document.getElementById('phone').value;
  const amount = parseInt(document.getElementById('amount').value);
  fetch('https://your-backend-url/payment/deposit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({ phone, amount})
}).then(res => res.json()).then(data => {
    alert('Deposit successful! Balance: ' + data.balance);
});
}

function enterTrade(type) {
  const start = data[data.length - 1];
  setTimeout(() => {
    const end = data[data.length - 1];
    if (type === 'buy' && end < start) {
      alert('Price dropped. You lost.');
} else {
      alert('Trade completed.');
}
}, 10000);
}

function withdraw() {
  alert('Withdrawal feature coming soon.');
}

function refer() {
  alert('Share your referral code to earn!');
}

setupChart();
