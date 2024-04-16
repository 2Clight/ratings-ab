const thankYou= document.querySelector('.thank-you');
const main= document.querySelector('.main-container')
const submit= document.querySelector('.btn_submit');
const goBack= document.querySelector('.go_back');
const ratings=document.querySelectorAll('.btn');
const rating=document.getElementById('rating');

submit.addEventListener("click", ()=> {
    thankYou.classList.remove("hidden");
    
    main.style.display="none";
    

});
goBack.addEventListener('click', ()=>{
    thankYou.classList.add("hidden");
    
    main.style.display="block";
});
ratings.forEach((rate)=>{
    rate.addEventListener('click', ()=>{
        rating.innerText= rate.innerHTML
    });
});
document.body.addEventListener('click', (event) => {
    const isRatingClicked = Array.from(ratings).some((rate) => rate.contains(event.target));
    const isRatingCancelled = !isRatingClicked && !event.target.classList.contains('btn_submit');
    
    if (isRatingCancelled) {
        rating.innerText = "__"; // Clear rating if user clicks outside of ratings area
    }
});