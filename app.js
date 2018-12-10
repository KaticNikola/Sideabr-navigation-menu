let toggleDiv = document.querySelector('.toggle');


toggleDiv.addEventListener('click', function(){
    let element = document.querySelector('.sidebar');
    element.classList.toggle('active');
});

