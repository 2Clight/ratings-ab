const thankYou= document.querySelector('.thank-you');
const main= document.querySelector('.main-container')
const submit= document.querySelector('.btn_submit');
const goBack= document.querySelector('.go_back');
const ratings=document.querySelectorAll('.btn');
const rating=document.getElementById('rating');

submit.addEventListener("click", ()=> {
    const isRatingSelected = Array.from(ratings).some((rate) => rate.classList.contains('selected'));


    if (!isRatingSelected) {
        alert("Please select a rating before submitting.");
        return; 
    }

    thankYou.classList.remove("hidden");
  
    
    main.style.display="none";
    
    
});
goBack.addEventListener('click', ()=>{
    thankYou.classList.add("hidden");
    
    main.style.display="block";
});
ratings.forEach((rate)=>{
    
    rate.addEventListener('click', ()=>{
        rate.classList.add('selected');
        rating.innerText= rate.innerHTML
    });
   
});

document.body.addEventListener('click', (event) => {
    // Check if the click event occurred within the rating area or its children
    const isRatingClicked = Array.from(ratings).some((rate) => rate.contains(event.target));
    
    // If the click occurred within the rating area, return and do nothing
    if (isRatingClicked) {
        return;
    }

    // If the click occurred outside of the rating area, remove the selected class from all rating buttons
    ratings.forEach((rate) => {
        rate.classList.remove('selected');
    });
});
