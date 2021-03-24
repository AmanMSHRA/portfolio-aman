const s = document.querySelector('#info_form2');
const c = document.querySelector('#info_form1');
const u = document.querySelector('#info_form3');
const b = document.querySelector('#btn');

const aud = document.querySelector('#aud');

window.addEventListener('load',()=>{
   aud.play();
   
})
//handling Events for form 2
 s.addEventListener('mouseenter',() =>{
   document.getElementById("info_form2").style.boxShadow = "1px -10px 50px rgba(0,0,0)";
   document.getElementById("info_form2").style.transform = "scale(1.2)";
   document.getElementById("info_form2").style.fontSize = "45px";

 })
 s.addEventListener('mouseleave',() =>{
   document.getElementById("info_form2").style.boxShadow = "1px -10px 10px rgba(0,0,0)";
   document.getElementById("info_form2").style.transform = "none";
   document.getElementById("info_form2").style.fontSize = "20px";
 })

//handling Events for form 1

 c.addEventListener('mouseenter',() =>{
   document.getElementById("info_form1").style.boxShadow = "1px -10px 50px rgba(0,0,0)";
   document.getElementById("img1").style.boxShadow = "1px -10px 50px rgba(0,0,0)";
   document.getElementById("img1").style.transform = "scale(1.2)";
   document.getElementById("info_form1").style.transform = "scale(1.2)";
   document.getElementById("info_form1").style.fontSize = "50px";
})
c.addEventListener('mouseleave',() =>{
  document.getElementById("info_form1").style.boxShadow = "1px -10px 10px rgba(0,0,0)";
  document.getElementById("img1").style.boxShadow = "1px -10px 10px rgba(0,0,0)";
  document.getElementById("img1").style.transform = "none";
  document.getElementById("info_form1").style.transform = "none";
  document.getElementById("info_form1").style.fontSize = "30px";
})

//handling Events for form 3

u.addEventListener('mouseenter' , () =>{
   
  document.getElementById("info_form3").style.boxShadow = "1px -10px 50px black";
  document.getElementById("btn").style.boxShadow = "1px -10px 30px black";
  document.getElementById("info_form3").style.transform = "scale(1.2)";
  document.getElementById("info_form3").style.fontSize = "50px";
})

u.addEventListener('mouseleave' , () =>{
  document.getElementById("info_form3").style.boxShadow = "1px -10px 10px rgba(0,0,0)";
  document.getElementById("btn").style.boxShadow = "1px -10px 9px rgba(0,0,0)";
  document.getElementById("info_form3").style.transform = "none";
  document.getElementById("info_form3").style.fontSize = "30px";
})


