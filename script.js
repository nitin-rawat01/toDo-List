const form = document.querySelector('form');
const container = document.querySelector('.cointainer');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const userInput = document.querySelector('#task').value;
    console.log(userInput);
    taskVerification(userInput); 
})
function taskVerification(userInput){
    if(!userInput){
        alert('Please Enter a Task!');
    }else{
        addTask(userInput);
    } 
}
function addTask(userInput){
    // userInput.value = " "; //this is not working
    form.reset(); //this is working

    const div = document.createElement('div');
    div.classList.add('flexBox');
    container.appendChild(div);
    const p = document.createElement('p');
    p.classList.add('goal');
    p.textContent = userInput;
    div.appendChild(p);
    addButtons(div, p);
}

function addButtons(div, p){
    const checkBtn = document.createElement('img');
    const deleteBtn = document.createElement('img');
    checkBtn.setAttribute('src', 'https://img.icons8.com/?size=100&id=FtLmdPsoq9br&format=png&color=000000');
    deleteBtn.setAttribute('src', 'https://img.icons8.com/?size=100&id=pre7LivdxKxJ&format=png&color=000000');
    checkBtn.classList.add('icon');
    deleteBtn.classList.add('icon');
    div.appendChild(checkBtn);
    div.appendChild(deleteBtn);   
    crossTask(checkBtn, p);
    deleteTask(deleteBtn, div);
}

// Why they work: no idea 

function crossTask(checkBtn, p ){
   checkBtn.addEventListener('click', function(e){
    if(p.classList.contains('taskComplete')){
     console.log('if is working');
     p.classList.remove("taskComplete");
    }else{
     p.classList.add('taskComplete');
     console.log('else is working');
    }
   })
}

function deleteTask(deleteBtn, div){
    deleteBtn.addEventListener('click', function(e){
        container.removeChild(div);
    })
}

