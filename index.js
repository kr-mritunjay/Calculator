
function displayvalue(e){
  calculator.screen.value += e.value;
}
function ClearALL(){
  calculator.screen.value=null;
}
function Clear(){
  let s=calculator.screen.value;
  calculator.screen.value=s.slice(0, -1);
}
function Calculate(){
  calculator.screen.value = eval(calculator.screen.value);
}