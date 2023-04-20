let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let button = document.querySelector("#mybutton")
let calType = document.querySelector("#calType")
let resultElement = document.querySelector(".計算結果");

button.addEventListener("click", function () {

  let num1 = +input1.value;
  let num2 = +input2.value;
  let result;

switch(calType.value){
  case "+" :
  result = num1 + num2;
  break
  case "-" :
  result = num1 - num2;
  break
  case "x" :
  result = num1 * num2;
  break
  case "%" :
  result = num1 / num2;
  break
}
    console.log(result);
    resultElement.textContent = result;
});




