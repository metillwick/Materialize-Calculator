const clear  = document.querySelectorAll("button")[12];
const equals = document.getElementById("equals");
let label    = document.getElementById("label");
let buttons = document.querySelectorAll(".equate");

buttons.forEach(function(btn){
  btn.addEventListener("click", function(){
    label.innerText += btn.value;
  })
})

clear.addEventListener("click", function(){
  label.innerText = clear.value;
})

equals.addEventListener("click", function(){
  label.innerText = eval(label.innerText);
});
