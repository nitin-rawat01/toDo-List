let form =  document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
     userInput = document.querySelector('#task').value;
    console.log(userInput);
})

