
var now = document.getElementById("data");
var res = document.getElementById("res");

now.addEventListener("input",function(e){
    var tar = e.target.value;
    if(tar.length <= 1){
    res.innerText = "RESULT" + " : "  + "weak";
    res.style.color = "red";
    }if(tar.length >= 4 && tar.length <= 8){
        res.innerHTML = "RESULT" + " : " + "medium";
     res.style.color = "green";
    }if(tar.length >= 10 && tar.length <= 15){
        res.innerHTML = "RESuLT" + " :  " + "strong";
        res.style.color = "yellow";
    }if(tar.length == 0){
        res.remove();
    }

    
})



