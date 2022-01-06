const elementInput = document.querySelector("input");
const elementSend = document.querySelector("button");
const elementList = document.querySelector("ul");
const elementClear = document.getElementById("clear-txt");
let elementUl = JSON.parse(localStorage.getItem("saveLocal")) || [];

elementSend.setAttribute("onclick", "addTask()");
elementClear.setAttribute("onclick", "clearAll()");

    function addTask(){
        var textTask= elementInput.value;

        if (textTask =="") {
             
            alert("Please, Write your Task first!")
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

            
            const elementTask = document.createElement("li");
            const textTask= document.createTextNode(task);
            
            const elementClear = document.createElement('ion-icon');
            elementClear.setAttribute("name","trash-outline");
            const pos = elementUl.indexOf(task);
           
            elementClear.setAttribute("onclick", `clearElement(${pos})`);

            elementTask.appendChild(textTask);
            elementList.appendChild(elementTask);
            elementTask.appendChild(elementClear);

            console.log(task)
        }
}
            getTask()

    function saveLocal() {

        localStorage.setItem("saveLocal", JSON.stringify(elementUl))
        
    }

   function clearElement(pos) {

        elementUl.splice(pos, 1)
        getTask()
        saveLocal()
    }

    function clearAll(){

        elementUl = [];
        localStorage.clear();
        elementList.innerHTML = "";
    }

    addEventListener('keypress',e=>{

        if(e.key=="Enter") addTask()

})