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
    let yearContent = event.currentTarget.querySelector(".year-content");
    if (!yearContent) return;

    if (yearContent.style.maxHeight && yearContent.style.maxHeight !== "0px") {
        // Collapse
        yearContent.style.maxHeight = "0px";
        yearContent.style.padding = "0px";
        yearContent.style.opacity="0"
    } else {
        let verticalPadding = 18;
        // Expand: First set padding, then measure height
        yearContent.style.padding = `${verticalPadding}px 24px`;
        // Force a reflow to ensure padding is applied
        // yearContent.offsetHeight;


        // Now measure with padding included
        yearContent.style.maxHeight = yearContent.scrollHeight+(2 * verticalPadding) + "px";

        yearContent.style.opacity="100%"
    }
}