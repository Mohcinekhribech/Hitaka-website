const bars = document.getElementById("fa-bars")
const x = document.getElementById("fa-x");
const xx = document.getElementById("xa-x");
const shop = document.getElementById("fa-bag-shopping")
const sel = document.getElementsByTagName("select")
var i=0;
var sum=0;
var text=[]


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
    console.log(sum);
    if(document.getElementById("not")!=undefined){
        document.getElementById("not").remove()
    }
    
    const cont = document.getElementById("cont")
    var p = document.createElement("p")
    text[i]=document.createTextNode(name)
        p.appendChild(text[i])
    cont.appendChild(p)
    i++;
}
function Totale (){
    document.getElementById("Tprice").innerText = sum;
}

