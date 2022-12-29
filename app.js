function GenerateRandomColorCode(){
 return Math.floor(Math.random()* (255-10)+10);
}
let bgcolor=`rgb(${GenerateRandomColorCode()},${GenerateRandomColorCode()},${GenerateRandomColorCode()})`;
document.getElementById('body').style.background=bgcolor;
document.getElementById('color').innerHTML=bgcolor;
;

let t=document.getElementById('clickme')
t.addEventListener('click',function(){
    navigator.clipboard.writeText(document.getElementById('color').innerHTML)
    t.innerHTML="copied"
})
   setTimeout(() => {
    location.reload()
},5000);



