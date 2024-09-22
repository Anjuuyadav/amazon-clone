let modee = document.querySelector("#mode");

let curMode = "light";
modee.addEventListener("click", () => {
if(curMode === "light"){
    curMode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
}else{
    curMode = "light";
    document.querySelector("body").style.backgroundColor = "white";
}

console.log(curMode);
});
  