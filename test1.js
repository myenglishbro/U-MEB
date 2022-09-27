//creando un arrya de preguntas
var questions=
[
    {
        pregunta: "The bag is __________ the desk",
        answer:"under"
    },

    {
        pregunta: "The poster is__________the window",
        answer:"next to"
    },
    {
        pregunta: "The photo is __________the clock and the plant.",
        answer:"between"
    },
    {
        pregunta: "The chair is ___________ the desk",
        answer:"in front of "
    },
    {
        pregunta: "The computer is___________the desk",
        answer:"on"
    },
    {
        pregunta: " The carpet is  _____ the floor",
        answer:"on"
    },
    {
        pregunta: "The lamp is_____ the wall",
        answer:"on"
    },
    {
        pregunta: "The socks are  _____ coach",
        answer:"under"
    },
    {
        pregunta: "The teddy bear is  _____ the lamp",
        answer:"in front of"
    },
    {
        pregunta: "The clothes are _____ the wardrove",
        answer:"in"
    },
    {
        pregunta: "My teddy is _______________ my doll. \n next to \n between \n in",
        answer:"next to"
    },
    {
        pregunta: "I like sitting _______________ my mum and my dad on the sofa.\n under \n in \n between",
        answer:"between"
    },
    {
        pregunta: "Can you swim _______________ water? \n in front of \n under \n next to",
        answer:"under"
    },
    {
        pregunta: "My dad is _______ the kitchen",
        answer:"in"
    },
    {
        pregunta: "Our cat likes sleeping with me _______________ the bed. \n between \n on \n in front of",
        answer:"on"
    },

]


var score=0;

for (let i=0;i<questions.length;i++)
{
   let  response = prompt(questions[i].pregunta)
   if(response==questions[i].answer){
    score++
    alert("correct!");
   }
   else{
    alert("wrong!");
   }

}
alert("you got " + score+ "/"+questions.length)