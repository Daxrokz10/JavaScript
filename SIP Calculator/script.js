let invest = document.getElementById("invest");
let invest_range = document.getElementById("invest-range");
let rate = document.getElementById("rate");
let rate_range = document.getElementById("rate-range");
let time = document.getElementById("time");
let time_range = document.getElementById("time-range");
let invest_amount = document.getElementById("invest-amount");
let est_return = document.getElementById("est-return");
let total_val = document.getElementById("total-val");
// Set both to the same initial value

(() => {
  invest_range.value = invest.value;
  rate_range.value = rate.value;
  time_range.value = time.value;
  updateSIPFields();
})();

function updateSIPFields() {
  // Parse values
  const P = parseFloat(invest.value) || 0;
  const r = (parseFloat(rate.value) || 0) / 100 / 12;
  const n = (parseFloat(time.value) || 0) * 12;
  // SIP formula
  let totalInvest = P * n;
  let maturity = 0;
  if (r > 0 && n > 0) {
    maturity = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  }
  let estReturn = maturity - totalInvest;
  invest_amount.innerText = totalInvest.toLocaleString("en-IN", {maximumFractionDigits: 0});
  est_return.innerText = estReturn > 0 ? estReturn.toLocaleString("en-IN", {maximumFractionDigits: 0}) : 0;
  total_val.innerText = maturity > 0 ? maturity.toLocaleString("en-IN", {maximumFractionDigits: 0}) : 0;
}

const handleChange = () => {
  invest.value = invest_range.value;
  rate.value = rate_range.value;
  time.value = time_range.value;
  if (invest.value == "0" || rate.value == "0" || time.value == "0") {
    confirm("Please enter a valid amount");
    invest.value = 500;
    rate.value = 5;
  }
  updateSIPFields();
};
const handleChangerev = () => {
  invest_range.value = invest.value;
  rate.value = rate_range.value;
  time.value = time_range.value;
  if (invest.value == "0" || rate.value == "0" || time.value == "0") {
    confirm("Please enter a valid amount");
    invest.value = 500;
    rate.value = 5;
  }
  updateSIPFields();
};
