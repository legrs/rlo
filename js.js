let btn1 = document.querySelector("#btnrlo");
let btn2 = document.querySelector("#btnlro");
let rlo = "‮‮";

btn1.addEventListner('click',()=>{
  navigator.clipboard.writeText(rlo);
}

btn1.addEventListner('click',()=>{
  navigator.clipboard.writeText('‭');
}
