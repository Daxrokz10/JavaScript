// Get range sliders and value boxes
let invest_range = document.getElementById("invest-range");
let rate_range = document.getElementById("rate-range");
let time_range = document.getElementById("time-range");
let invest_value = document.getElementById("invest-value");
let rate_value = document.getElementById("rate-value");
let time_value = document.getElementById("time-value");
let invest_amount = document.getElementById("invest-amount");
let est_return = document.getElementById("est-return");
let total_val = document.getElementById("total-val");

// Set initial values
invest_range.value = 25000;
rate_range.value = 12;
time_range.value = 10;
invest_value.innerText = invest_range.value;
rate_value.innerText = rate_range.value;
time_value.innerText = time_range.value;

function updateSIPFields() {
  const P = parseFloat(invest_range.value) || 0;
  const r = (parseFloat(rate_range.value) || 0) / 100 / 12;
  const n = (parseFloat(time_range.value) || 0) * 12;
  let totalInvest = P * n;
  let maturity = 0;
  if (r > 0 && n > 0) {
    maturity = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  }
  let estReturn = maturity - totalInvest;
  invest_amount.innerText =
    "₹" +
    (totalInvest
      ? totalInvest.toLocaleString("en-IN", { maximumFractionDigits: 0 })
      : 0);
  est_return.innerText =
    "₹" +
    (estReturn > 0
      ? estReturn.toLocaleString("en-IN", { maximumFractionDigits: 0 })
      : 0);
  total_val.innerText =
    "₹" +
    (maturity > 0
      ? maturity.toLocaleString("en-IN", { maximumFractionDigits: 0 })
      : 0);
}

function handleChange() {
  invest_value.innerText = invest_range.value;
  rate_value.innerText = rate_range.value;
  time_value.innerText = time_range.value;
  updateSIPFields();
}

// Initialize display
updateSIPFields();
