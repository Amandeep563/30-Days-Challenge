// bill
const billInp = document.getElementById("bill");
// tip
const tipInt = document.getElementById("tip");
// calculate
const calculateBtn = document.getElementById("calculate");
// total
const totalVal = document.getElementById("total");

calculateBtn.addEventListener("click", function () {
  // take the value from input fields
  const bill = parseFloat(billInp.value);
  const tip = parseFloat(tipInt.value);

  // Calculate the total
  const total = bill + (bill * (tip / 100))

  // Display the value
  totalVal.textContent = `${total.toFixed(2)}`;
});
