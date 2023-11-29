function changename() {
    var newname=prompt("I LOVE YOU");

    if(newname){
        document.getElementById("ada").innerText=newname;
        document.getElementById("ada").classList.add("animate")
        
    }
}
