function btn(){
    let randomenum=Math.floor(Math.random()*16777215)
    let newnum="#"+randomenum.toString(16)
    console.log(newnum)
    document.querySelector(".color-code").innerText=newnum;
    let bgColor=document.querySelector(".bg-clr")
    bgColor.style.backgroundColor=newnum;
        
}