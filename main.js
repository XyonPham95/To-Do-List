let inputValue = document.getElementById("todoInput");
let checkBox = document.getElementById("checkBox");
let todoList = [];
let list = [];
const linethrough = "lineThrough";

let addItem = () => {
  let todoValue = inputValue.value;
  let seclect = checkBox.value;
  todoList.push({
    text: todoValue,
    isDone: false,
    number: seclect
  });
  saveData();
  render(todoList);
};

let removeItem = index => {
  todoList.splice(index, 1);
  saveData();
  render(todoList);
};

function toggleDone(index) {
  todoList[index].isDone = !todoList[index].isDone;

  saveData();
  render(todoList);
}

let showUndone = () => {
  let newArray =[];
  if (document.getElementById("myCheck").checked == true) {
    newArray = todoList.filter((item) => item.isDone == false);
    console.log(newArray);
    render(newArray);
    
  } else {
    console.log(todoList);
    render(todoList);
  }

};

let render = (array) => {
  let htmltoArray = array.map((item, index) => {
    if ((item.isDone == false)) {
      return `<li> ${item.text} ${item.number} <button onclick="removeItem(${index})">X</button> <button onclick="toggleDone(${index})"> UnDone </button></li>`.strike();
    } else {
      return `<li> ${item.text} ${item.number} <button onclick="removeItem(${index})">X</button> <button onclick="toggleDone(${index})"> Done </button></li>`;
    }
  }).join("");

  
  document.getElementById("resultArea").innerHTML = htmltoArray;
  document.getElementById("countA").innerHTML = todoList.length;
};

function saveData(){
    localStorage.setItem("data", JSON.stringify(todoList));
}

function getData(){
    let data = localStorage.getItem("data");
    todoList = JSON.parse(saveList);
    if (data == null){
        todoList=[];
    }else{let result = JSON.parse(data);
    todoList =result;
    render(todoList);}
}


