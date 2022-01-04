const elementInput = document.querySelector("input");
const elementSend = document.querySelector("button");
const elementList = document.querySelector("ul");

const tasks = [];

function getTask(){

    elementList.innerHTML = "";

    for (task of tasks){
        const elementTask = document.createElement("li");
        const textTask= document.createTextNode(task);

        elementTask.appendChild(textTask);
        elementList.appendChild(elementTask);
    }
}
getTask() 


function addTask(){
    const textTask= elementInput.value;
    tasks.push(textTask)
    elementInput.value = "";

    getTask()

}

elementSend.setAttribute('onclick', 'addTask()')