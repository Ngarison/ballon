let ballon = document.querySelector('#ballon');
let style = getComputedStyle(ballon);

let b_Width = parseInt(style.width);
let b_Height = parseInt(style.height);
let b_borderRadius= parseInt(style.borderRadius);
console.log("Width: ",b_Width," Height: ",b_Height, " Border-Radius: ",b_borderRadius);
let tab_color=["red", "green", "blue"];
let clique =1;

function blow(){
    b_Width=b_Width+10;
    b_Height=b_Height+10;
    b_borderRadius=b_borderRadius+10;
    
    document.getElementById("ballon").style.width=b_Width+"px";
    document.getElementById("ballon").style.height=b_Height+"px";
    document.getElementById("ballon").style.borderRadius=b_borderRadius+"px";
    document.getElementById("ballon").style.backgroundColor=tab_color[clique]+"";


    if(clique>=2){
        clique=0;
    }else{
        clique++;
    }  
    console.log(parseInt(style.width));
    if(parseInt(style.width)>=420){
         console.log("limite atteinte");
                b_Width=200;
                b_Height=200;
                clique=0;
        /* let img= new Image();
        img.src="images/pff-loser.gif";
        document.getElementById("ballon").appendChild(img);
        setTimeout(()=>{document.querySelector("img").style.display="none"}, 5000);  */
    }
}


let mouseOut=clique-1;
function sizeReset(){
    console.log("Test du CLique",clique);
    if(parseInt(style.width)>200){
        b_Width=b_Width-5;
        b_Height=b_Height-5;
        b_borderRadius=b_borderRadius+5;

    document.getElementById("ballon").style.width=b_Width+"px";
    document.getElementById("ballon").style.height=b_Height+"px";
    document.getElementById("ballon").style.borderRadius=b_borderRadius+"px";
    
    if(mouseOut<0){
        mouseOut=2;
        document.getElementById("ballon").style.backgroundColor=tab_color[mouseOut]+"";
    }else{
        document.getElementById("ballon").style.backgroundColor=tab_color[mouseOut]+"";
        mouseOut--;
    }  

    console.log(parseInt(style.width));
    console.log("vous avez quitté!")
 }
 
}