let detells=[
    {
        id:1,
        image:"img/img2.jpg" ,
        title:"Cristiano Ronaldo" ,
        content:"Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for and captains both Saudi Professional League club Al Nassr and the Portugal national team ",

    },
    {
        id:2,
        image:"img/img3.jpg" ,
        title: "Messi",
        content: "Lionel Andrés Messi, also known as Leo Messi, is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team.",

    },

    {
        id:3,
        image:"img/img4.jpg ",
        title: " Dhoni " ,
        content:" Doni was known for his vision, technical ability and creativity as an offensive midfield playmaker. He was capable of scoring and assisting alike, due to his"
    },
    {
        id:4,
        image:"img/img5.jpg" ,
        title:"virat kohli " ,
        content:"Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team. Widely regarded as one of the greatest batsmen in the history of the sport, he plays for Royal Challengers Bangalore in the IPL and Delhi in domestic cricket",
    },    
    
    {
        id:5,
        image:"img/img6.jpg" ,
        title:"Vijay" ,
        content:"Joseph Vijay Chandrasekhar, known professionally as Vijay, is an Indian actor and singer who works predominantly in Tamil cinema.He is among the highest paid actors in India and has featured in Forbes India",

    },

    {
        id:6,
        image:"img/img7.jpg" ,
        title:"Thenush" ,
        content:" Dhanush presently lives in Alwarpet in Chennai along with his family.",

    },
]






//card section


var caerSction=document.getElementById("card");

//container

var div1=document.createElement("div");
div1.classList.add("container");
caerSction.appendChild(div1);

//card row

var div2=document.createElement("div");
div2.classList.add("card-row");
div1.appendChild(div2);

detells.forEach(function(e){
//col
var cardCol=document.createElement("div");
cardCol.classList.add("card-col");
div2.appendChild(cardCol);


//card
var card=document.createElement("div");
card.classList.add("card");
cardCol.appendChild(card);


//img
var pictiure=document.createElement("img");
card.appendChild(pictiure);
pictiure.setAttribute("src",e.image);

//heading
var heading=document.createElement("h1");
card.appendChild(heading);
heading.innerHTML=e.title;

//para
var content=document.createElement("p");
card.appendChild(content);
content.innerHTML=e.content;
})