const bars = document.getElementById("fa-bars")
const x = document.getElementById("fa-x");
const xx = document.getElementById("xa-x");
const shop = document.getElementById("fa-bag-shopping")
const sel = document.getElementsByTagName("select")
var i=0;
var sum=0;
var text=[];
var txt=[];


console.log(xx);
bars.addEventListener("click",e => {
    console.log("open");
    document.getElementById("aah").style.display='block';
})
x.addEventListener("click",e => {
    console.log("open");
    document.getElementById("aah").style.display='none';
})
xx.addEventListener("click",e => {
    console.log("open");
    document.getElementById("crta").style.display='none';
})
shop.addEventListener("click",e => {
    
    document.getElementById("crta").style.display='block';
})
var select = document.getElementById('sel');
function a() {
    var val = select.value;
    if(val === 'Salade'){
        document.getElementById('salade').style.display="block";
        document.getElementById('plats').style.display="none";
        document.getElementById('obento').style.display="none";
    }else if(val === 'Plat'){
        document.getElementById('salade').style.display="none";
        document.getElementById('plats').style.display="block";
        document.getElementById('obento').style.display="none";
    }else if(val === 'Obento'){
        document.getElementById('salade').style.display="none";
        document.getElementById('plats').style.display="none";
        document.getElementById('obento').style.display="block";
    }else {
        document.getElementById('salade').style.display="block";
        document.getElementById('plats').style.display="block";
        document.getElementById('obento').style.display="block";
    }
}
function clickOne(price, name){
    sum+=price;
    if(document.getElementById("not")!=undefined){
        document.getElementById("not").style.display="none"
    }
    const cont = document.getElementById("cont")
    txt[i]=name;
    cont.innerHTML+=`<p class="Sprdt">${name}</p>`
    i++;
    document.querySelector("#pcont").innerText=i;
}
document.getElementById("xx-x").addEventListener("click",e => {
    document.getElementById("valider").style.display="none"
})
function Totale (){
    document.getElementById("valider").style.display="block"
    document.getElementById("Tprice").innerText = sum;
    document.getElementById("mvalId").innerText = sum;
}
document.getElementById("fa-recycle").addEventListener("click",e =>{
    var sup = document.getElementsByClassName("Sprdt")
    sum =0;
    i=0;
    document.getElementById("Tprice").innerText = sum;
    document.getElementById("mvalId").innerText = sum;
    document.querySelector("#pcont").innerText=i;
    document.getElementById("not").style.display="block"
    for(let j=sup.length-1;j>=0;j++){
      sup[sup.length-1].remove()
    }
})