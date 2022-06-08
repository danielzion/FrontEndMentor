document.querySelectorAll('.circle').forEach((circle) => {
    circle.addEventListener('click', function(e) {
        // Reset the currently active buttons:
        document.querySelectorAll('.circle-active').forEach((circle) => {
            circle.classList.remove('circle-active');
    });
    let value = e.target.dataset.value;
    window.stars = value;
    // Add active class to the clicked function
    circle.classList.add('circle-active');
    
    });
});

document.querySelector('.submit').addEventListener('click', function(e) {
    e.preventDefault();
    if(window.stars) {
        const selectRating = document.querySelector('.add-rating');
        selectRating.innerHTML = window.stars
        const cardVisible = document.querySelector('.thank-you');
        cardVisible.classList.remove('thank-you-visible')
        // console.log(cardVisible)
    }
    else {
        alert('Please Select a valid rating')
    }
})

