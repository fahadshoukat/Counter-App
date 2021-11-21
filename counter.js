let count = 0;

const value = document.getElementById('value');

const heading = document.getElementById('heading');

const decreaseBtn = document.getElementById('dBtn');

const resetBtn = document.getElementById('rBtn');

const increaseBtn = document.getElementById('iBtn');

    decreaseBtn.addEventListener("click", function () {

    count = count - 1;
    value.textContent = count;
    if(count < 0){
        value.style.color = 'red';
        heading.style.color= 'red';
    }
});

    resetBtn.addEventListener("click", function () {

    count = 0;
    value.textContent = count;
    if(count === 0){
        value.style.color = 'black';
        heading.style.color = 'black';
    }
});

    increaseBtn.addEventListener("click", function () {

    count = count + 1;
    value.textContent = count;
    if(count > 0){
        value.style.color = 'green';
        heading.style.color = 'green';
    }
});

