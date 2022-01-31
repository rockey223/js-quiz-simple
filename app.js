function validate(){
    const username = document.getElementById('username').value;
    var insert = /^[0-9]+$/;

    if(username=="" || username.length<3 || username.match(insert)  )
    {
        alert("Enter Your proper name.");
    }
    else{
        quiz();
    }
}

function quiz(){
    document.getElementById("primary").classList.add("hide");
    document.getElementById("secondary").classList.remove("hide");       
}

function calc(){
    const answer1 = document.getElementsByName('answer1');
    const answer2 = document.getElementsByName('answer2');
    const answer3 = document.getElementsByName('answer3');
    var score = 0;
    if(answer1[2].checked){
       score++;    
    }
    if(answer2[1].checked){
        score++;
    }
    if(answer3[0].checked){
        score++;   
    }
    document.getElementById('score-display').innerText = "your Score is " + score + ".";

       
}

