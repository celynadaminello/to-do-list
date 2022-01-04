onload = function() {
   // let elementList = localStorage.getItem("elementList");
   // elementList.innerHTML = elementList;
   //let jsonTasks = [];
   var tasks = localStorage.getItem("textTask");
   var textTask = JSON.parse(tasks);
   console.log(textTask.id);
   tasks.innerHTML = textTask
   //tasks.innerHTML = "textTask"

}

const elementInput = document.querySelector("input");
const elementSend = document.querySelector("button");
const elementList = document.querySelector("ul");

var tasks = [];

elementSend.setAttribute('onclick', 'addTask()');
elementInput.setAttribute('onchange', 'addTask()');

function getTask(){

    elementList.innerHTML = "";

    for (task of tasks){
        const elementTask = document.createElement("li");
        const textTask= document.createTextNode(task);

        elementTask.appendChild(textTask);
        elementList.appendChild(elementTask);
    }
}
//getTask() 


function addTask(){
    const textTask= elementInput.value;
    tasks.push(textTask)
    elementInput.value = "";

    console.log(textTask)

    //var jsonTasks = JSON.stringify(tasks);

    localStorage.setItem("textTask", JSON.stringify(tasks));

    //console.log(window.localStorage.getItem("textTask"))

    console.log(localStorage)

    getTask()

}

