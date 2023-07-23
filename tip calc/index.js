function calculation() {
  let bill = +document.getElementById("billInput").value;
  let tip = +document.getElementById("tipInput").value;

  let result = bill + (bill * tip) / 100;

  document.getElementById("totalOutput").innerText = result;
}
