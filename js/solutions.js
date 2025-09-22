let servicesCards = document.querySelectorAll(".services-cards-container .service-card-wrapper");
servicesCards.forEach(card => {
    if(!card.classList.contains("featured-card-wrapper")) //this prevents featured card from having redundant event listener
    card.addEventListener("click",handleServiceCardClick);
});

document.querySelector('.featured-card-wrapper .close-button').addEventListener("click",event=>{
    // event.currentTarget.classList.toggle('hidden');
    document.querySelector(".featured-card-wrapper").classList.toggle('hidden');
});

function handleServiceCardClick(event){
    
    let featuredCard = document.querySelector(".featured-card-wrapper");
    
    //? this grabs the components inside the card that triggered the event , ignores the inner div and sets variables that hold the value of each of the components

    let stuff = event.currentTarget.querySelectorAll("*");
    let [div,icon,heading,parag] = stuff;
    console.log(
        icon.getAttribute('src'),
        heading.innerText,
        parag.innerText
    );

    featuredCard.querySelector("img").setAttribute('src',icon.getAttribute('src'));
    featuredCard.querySelector("h3").innerText=heading.innerText;
    featuredCard.querySelector("p").innerText=parag.innerText;
    if(featuredCard.classList.contains('hidden')){
        featuredCard.classList.toggle('hidden')
    }
    
    
}



// ??? this following code is for the client card hover interaction , css implementation can get buggy with children elements

let clientCards = document.querySelectorAll(".client-card");
clientCards.forEach(card=>{
    card.addEventListener('mouseenter',handleClientCardHoverIn);
    card.addEventListener('mouseleave',handleClientCardHoverOut);
});

function handleClientCardHoverOut(event){
    let currentCard = event.currentTarget;
    let currentCardBackground = currentCard.querySelector('.client-card-background');

    currentCardBackground.classList.remove('client-card-background-hover');
}
function handleClientCardHoverIn(event){
    
    let currentCard = event.currentTarget;
    let currentCardBackground = currentCard.querySelector('.client-card-background');

    currentCardBackground.classList.add('client-card-background-hover');
}








// ///////////////////////////////////////////////////////
// this is for handling the projects section

let allYearsContainers = document.querySelectorAll(".year-container");

allYearsContainers.forEach(container=>{
    container.addEventListener('click',handleYearContainerClick);
});


function handleYearContainerClick(event){
    // console.log(event.currentTarget.innerHTML)

    // console.log(event.currentTarget.querySelector(".year-content"));
    
    // event.currentTarget.querySelector(".year-content").classList.toggle("year-content-expanded");

    let yearContent = event.currentTarget.querySelector(".year-content");
    
    if(yearContent.style.maxHeight=='0px'){
        yearContent.style.maxHeight=yearContent.scrollHeight+'px';
    }else{
        yearContent.style.maxHeight=0+'px';
    }
}