//code JS:calculator //

function appendValue(value) {
    document.getElementById("result").value += value;
  }
  
  function calculate() {
    var display = document.getElementById("result").value;
    var result = eval(display);
    document.getElementById("result").value = result;
  }
  
  function clearDisplay() {
    document.getElementById("result").value = '';
  }