// CLICKING ON Q
var activeQ = "";

const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");
const q4 = document.getElementById("q4");
const q5 = document.getElementById("q5");

q1.onclick = function(){qPressed("1")};
q2.onclick = function(){qPressed("2")};
q3.onclick = function(){qPressed("3")};
q4.onclick = function(){qPressed("4")};
q5.onclick = function(){qPressed("5")};

function qPressed(num_string) {
    if (activeQ == "") {
        // set active question
        document.getElementById("q" + num_string).style.fontWeight = 700;
        document.getElementById("q" + num_string + "_arrow").style.transform = "rotate(180deg)";
        document
    }

    else if (activeQ == num_string) {
        // reset
        document.getElementById("q" + num_string).style.fontWeight = "";
        document.getElementById("q" + num_string + "_arrow").style.transform = "";   
        num_string = "";    
    }

    else if (activeQ != num_string) {
        // reset previous Q
        document.getElementById("q" + activeQ).style.fontWeight = "";
        document.getElementById("q" + activeQ + "_arrow").style.transform = "";   
        // set new Q
        document.getElementById("q" + num_string).style.fontWeight = 700;
        document.getElementById("q" + num_string + "_arrow").style.transform = "rotate(180deg)";
    }

    activeQ = num_string;
}