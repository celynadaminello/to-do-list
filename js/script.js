onload = function(){

    let container = localStorage.getItem("container");
    let content = document.getElementById("container");
    content.innerHTML = container;
}
     
    function txtList(t) {

    let addTxt = t.value;
    console.log(addTxt);
    
    let content = document.getElementById("container");
    content.innerHTML = addTxt;

    let list = []

    let taskList = document.createElement("li");
    taskList.innerHTML = addTxt;

    localStorage.setItem("container", addTxt);
    
    
} 

/*function clearButtom(e){

    let erase = e.value;
    let erase1 = document.getElementById("buttom");
    localStorage.clear(this.getElementById("container"));
} */