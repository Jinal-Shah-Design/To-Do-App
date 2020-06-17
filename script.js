//Part 1

const input = document.querySelector('#input-text');
const form = document.querySelector('#todo-form'); 
const toDoList = document.querySelector('#list');

//Function to create line-through on LI element click
//Function to remove entire LI on button click 

toDoList.addEventListener('click', function(e) {
    e.preventDefault();
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove(); 
    }
    else if (e.target.tagName === 'LI') {
        e.target.style.textDecoration = "line-through";
    }
})

//Function to create new LI elements and new Button elements on submit 
//Function also takes the input from the form and attaches the value to the LI 
//Delegation allows new buttons to be functional 

form.addEventListener('submit', function(evt){ 
    evt.preventDefault(); 
    const newToDo = document.createElement('li');
    const newButton = document.createElement('button');
    newToDo.innerText = input.value; 
    input.value = '';
    newButton.innerText = "X";
    toDoList.appendChild(newToDo);
    newToDo.appendChild(newButton);
});

//Store in local storage - I would like mentor help this wednesday to walk through part 2. LocalStorage is very confusing to me at the moment. 

