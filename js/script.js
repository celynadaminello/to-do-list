const elementInput = document.querySelector("input");
const elementSend = document.querySelector("button");
const elementList = document.querySelector("ul");
const elementClear = document.getElementById("clear-txt");
let elementUl = JSON.parse(localStorage.getItem("saveLocal")) || [];

elementSend.setAttribute("onclick", "addTask()");
elementInput.setAttribute("onchange", "addTask()");



    function addTask(){
        var textTask= elementInput.value;

        if (elementInput == "") {
             
            alert("Write your Task")
        }
        else{

            elementUl.push(textTask)
            elementInput.value = "";

            getTask()
            saveLocal()
        }   
}

    function getTask(){

        elementList.innerHTML = "";

        for (task of elementUl){

            console.log(task)
            const elementTask = document.createElement("li");
            const textTask= document.createTextNode(task);
            //const id = elementUl.indexOf(task);
            const elementClear = document.createElement('trash');
            const pos = elementClear.indexOf(task);

            elementClear.setAttribute("onclick", `clearAll(${pos})`);

            elementTask.appendChild(textTask);
            elementList.appendChild(elementTask);
            elementTask.appendChild(elementClear);
        }
}
            getTask()

    function saveLocal() {

        localStorage.setItem("saveLocal", JSON.stringify(elementUl))
        
    }

   function clearAll(pos) {

        elementClear.splice(pos, 1)
        getTask()
    }