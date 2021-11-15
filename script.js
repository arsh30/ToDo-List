let input = document.querySelector(".task-input");
let ul = document.querySelector(".task-list");

function deleteTask(e){
    e.currentTarget.remove();
}
input.addEventListener("keypress",function(e){  //keypress - > agar up chahte h ki up arrow se add ho to add krege
    if(e.key == "Enter"){
    let task = input.value;
    if(!task){
        alert("ERROR - Adding Empty Task");
        return;
    }
    input.value = "";
    // create li Tag  -> createElement
    let li = document.createElement("li");
    li.innerText = task; //pehle kuch nhi tha usme fir hmne task dala
   
    ul.append(li); //ul me append krdiya
    li.addEventListener("dblclick", deleteTask);
}
})