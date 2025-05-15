function arvutamine() {
  var x = document.getElementById("x").value;
  var y = document.getElementById("y").value;
  var z = document.getElementById("z").value;
  x = parseInt(x);
  y = parseInt(y);
  z = parseFloat(z);
  
  if (isNaN(z)) {
    z = 0.11;
  }
  
  document.getElementById("a").textContent = (x / 1000) * y + " kWh";
  document.getElementById("b").textContent = ((x/1000) * y * z).toFixed(2) + " €";
}
