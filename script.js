function checkResult(){
    let name=document.getElementById("name").value;
    let marks=document.getElementById("marks").value;
    if(marks>=50){
        document.getElementById("result").innerHTML=name+"-PASS";
    }else{
        document.getElementById("result").innerHTML=name+"-FAIL";

    }
    }


