msg = $("#message");
score = 0;
score_text = $("#score");
var divs = document.getElementsByTagName('div');
btn = document.getElementById('btn');//_btn holds a button element
//_ns holds the letters notation system
nsl = ["E", "A", "D", "G", "F", "B", "E", "A", "G", "C", "F", "B", "A", "D", "G", "C"];
btn2 = document.getElementById('btn2');//_btn holds a button element
//_nss holds the solfeg notation system
nss = ["mi", "la", "re", "sol", "fa", "si", "mi", "la", "sol", "do", "fa", "si", "la", "re", "sol", "do"];
img_path = "images/notes/note-";
time_input = document.getElementById("time");
time_btn = document.getElementById("time_btn");
$("[type='number']").keypress(function (evt) {
    evt.preventDefault();
});

function random_right_msg(){
    var correct = ["Good!", "Right", "Awesome"]
    correct_text = correct[Math.floor(Math.random()*correct.length)];
}

function random_color(){
    var colors = ["#94b8b8", "#53c68c", "#66b3ff"]
    color = colors[Math.floor(Math.random()*colors.length)];
}

function rndimg(){// displaying random note
var notes = [];
for(var i = 1; i <= 16; i++){
    notes.push("images/notes/note-" + i + ".png")
}
note = notes[Math.floor(Math.random()*notes.length)];
random_right_msg()
random_color()
$(document).ready(function(){
    $("#staff").attr("src", note);
});

}
rndimg();
function show_score(){score_text.text("Score : " + score)};
//validating the open strings
function test(){  
//validating the rest of strings   
   for(var i = 1; i <= 16; i++){
       if((this.getAttribute("id") === "note" + i) && (note === img_path + i + ".png"))
           {msg.text(correct_text); msg.attr("style", "background-color: " + color +";"); score += 10 ;show_score(); rndimg();break;}  
           //wrong answer
       if (i == 16){msg.attr("style", "background-color: #cc0000;"); msg.text("wrong");if(score != 0) {score -= 10}; show_score()}             
} 

};


//adding event listeners to all divs
for (i = 0; i < divs.length; i++) 
    {divs[i].addEventListener("click", test);}

//_notation_system_letters to change the title for every place on the violin
function notation_system_letters(){
    for (i = 0; i < divs.length; i++) 
    {divs[i].setAttribute("title", nsl[i]);}
}

btn.addEventListener("click", notation_system_letters);

//adding event listeners to all divs
var divs = document.getElementsByTagName('div');
for (i = 0; i < divs.length; i++) 
    {divs[i].addEventListener("click", test);}




//_notation_system_letters to change the title for every place on the violin
function notation_system_solfege(){
    for (i = 0; i < divs.length; i++) 
    {divs[i].setAttribute("title", nss[i]);}
}

btn2.addEventListener("click", notation_system_solfege);

function myFunction(){
    setTimeout(function(){ alert("time end. your score is : " + score); score = 0; show_score()}, time_input.value * 1000 * 60);

}

    
