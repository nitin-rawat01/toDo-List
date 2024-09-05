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
        var taskNumber = Math.random().toString(36).substr(2, 9);
        addTask(userInput, taskNumber);
        addToLocalStorage(userInput, taskNumber);
    } 
}

function addToLocalStorage(userInput, taskNumber){
    localStorage.setItem(taskNumber, userInput);
}

function reloadTask(){
    keys = Object.keys(localStorage).length;
   for(let i =0; i<keys; i++){
        userInput =  localStorage.getItem(localStorage.key(i));
        addTask(userInput, localStorage.key(i));
   }
}
reloadTask();

function addTask(userInput, taskNumber){
    form.reset(); 

    var div = document.createElement('div');
    div.classList.add('flexBox');
    div.id = taskNumber;
    console.log(div.id);
    container.appendChild(div);
    let p = document.createElement('p');
    p.classList.add('goal');
    p.textContent = userInput;
    div.appendChild(p);
    addButtons(div, p, taskNumber);
}

function addButtons(div, p, taskNumber){
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
        
        localStorage.removeItem(div.id);
        console.log(div);
        container.removeChild(div);
    })
}

