const button=document.getElementById("btn");
const person=document.getElementById("footer");
const quote=document.getElementById("text");


const quotes=[

    { 
        quote:"The best way to find yourself is to lose yourself in the service of others",
    person:"Mahatma Gandhi"
    },
    {
        quote:"If you want to live a happy life, tie it to a goal, not to people or things",
        person:"Albert Einstein"
    },
    {
    quote:"At this best, man is the noblest of all animals; separated from law and justice he is the worst",
    person:"Aristole"
    },
    {
    quote:"Your time is limited, so don't waste it living someone else life",
    person:"Steve John"
    },
    {
        quote:"Tell me and i forget. Teach me and i remeber. involve me and i learn",
        person:"Benjamin Franklin"
    }
];

button.addEventListener("click",()=>{

var random=Math.floor(Math.random()*quotes.length);
quote.innerText=quotes[random].quote;
person.innerText=quotes[random].person;

});








