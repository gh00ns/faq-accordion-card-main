// CLICKING ON Q
var activeQ = "";
var i;

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
    var q_var = document.getElementById("q" + num_string);
    var q_arrow_var = document.getElementById("q" + num_string + "_arrow");
    var q_answer_var = document.getElementById("q" + num_string + "_answer");

    if (activeQ == "") {
        // set active question
        q_var.style.fontWeight = 700;
        q_arrow_var.style.transform = "rotate(180deg)";
        q_answer_var.style.display = "block";
        q_answer_var.style.maxHeight = q_answer_var.scrollHeight + "px";
    }

    else if (activeQ == num_string) {
        // reset
        q_var.style.fontWeight = "";
        q_arrow_var.style.transform = "";   
        q_answer_var.style.maxHeight = "0px";
        num_string = "";    
    }

    else if (activeQ != num_string) {
        // reset previous Q
        document.getElementById("q" + activeQ).style.fontWeight = "";
        document.getElementById("q" + activeQ + "_arrow").style.transform = "";   
        document.getElementById("q" + activeQ + "_answer").style.maxHeight = "0px";
        // set new Q
        q_var.style.fontWeight = 700;
        q_arrow_var.style.transform = "rotate(180deg)";
        q_answer_var.style.display = "block";
        q_answer_var.style.maxHeight = q_answer_var.scrollHeight + "px";
    }

    activeQ = num_string;
}