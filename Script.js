

    function sign(){
        let a=Number(document.getElementById("first").value);
       // check if number is greater than 0
        if (a > 0) {
            document.getElementById("number").innerHTML= "positive";
        }

       // check if number is 0
        else if (a == 0) {
            document.getElementById("number").innerHTML= "zero";
        }

        // if number is less than 0
        else {
            document.getElementById("number").innerHTML="negative";
        }
        
        
        }


