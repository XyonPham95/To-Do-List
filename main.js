let inputValue = document.getElementById("todoInput")
let checkBox = document.getElementById("checkBox")
let todoList =[];
let list =[];
const linethrough="lineThrough"

let addItem =() =>
{   let todoValue = inputValue.value;   
    let seclect = checkBox.value;
    todoList.push({
        text: todoValue,
        done: false,
        number: seclect
    
    })
    

    render();
    
}

let el = document.getElementById("resultArea");
el.addEventListener('click', function() {
    el.classList.toggle('done');
 });

// let todoToggle=()=>{
//     if(done=true){
//         document.getElementById("todoToggle").style.display="none";
//     }else{document.getElementById("todoToggle").style.display="block"}
// }


let removeItem = (index) => {
    todoList.splice(index,1);
    render();
}

// completeToDo(element) => {
//     element.classList.toggle(Done);
//     element.classList.toggle(UnDone);
//     todoList[element.id].done=todoList[element.id].done ? false:true?}


let render = () => {
         let htmltoArray = todoList.map((item,index)=>{
        return `<li> ${item.text} ${item.number} <button onclick="removeItem(${index})">X</button></li>`}).join('');
        document.getElementById("resultArea").innerHTML= htmltoArray;
        document.getElementById("countA").innerHTML=todoList.length;

}




