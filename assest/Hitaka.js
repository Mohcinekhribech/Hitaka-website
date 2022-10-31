const bars = document.getElementById("fa-bars")
const x = document.getElementById("fa-x");
const xx = document.getElementById("xa-x");
const shop = document.getElementById("fa-bag-shopping")
const sel = document.getElementsByTagName("select")
var i=0;
var sum=0;
var text=[];
var txt=[];
var idindex = Array();
for(let z=0;z<16;z++) idindex[z]=0;

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
function clickOne(price, name,id){
    sum+=price;
    if(document.getElementById("not")!=undefined){
            document.getElementById("not").style.display="none"
           }
    const cont = document.getElementById("cont")
          txt[i]=name;
    for(let y=0;y<16;y++){
        if(id==y+1&&idindex[y]==0){
          cont.innerHTML+=`<p class="Sprdt">(<span id="${id}">1</span>)${name}</p>`
          document.getElementById(id).innerHTML=idindex[y]+1
            idindex[y]++
          
          console.log(idindex[y])
          
        }else if(id==y+1&&idindex[y]>=0){
            document.getElementById(id).innerHTML=idindex[y]+1
            idindex[y]++;
            console.log(idindex[y])
        }
    }
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
    for(let z=0;z<16;z++) idindex[z]=0;
    document.getElementById("Tprice").innerText = sum;
    document.getElementById("mvalId").innerText = sum;
    document.querySelector("#pcont").innerText=i;
    document.getElementById("not").style.display="block"
    for(let j=sup.length-1;j>=0;j--){
      sup[j].remove()
    }
})
function msg(){
    document.getElementById("mcn").style.display="block"
}
function f(){
    document.getElementById("mcn").style.display="none"
}