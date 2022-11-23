

const func=()=>{
    localStorage.setItem('myCat', 'Tom');
    const cat = localStorage.getItem('myCat');
    console.log(cat)
}
//function 1

let a= inputEnter = document.getElementById("todoEnter");
const tableAdd = (todoItem) => {
    let table = document.getElementById("todoTable");
    table.insertRow(0).insertCell(0).innerHTML = todoItem;

    console.log("We added: " + todoItem);
    func()

};
//function 2
    let b=inputEnter = document.getElementById("todo_tEnter");
    const tableAdd1 = (todo_tItem) => {
        let table = document.getElementById("todo_tTable");
        table.insertRow(0).insertCell(0).innerHTML = todo_tItem
        console.log("We added: " + todo_tItem);
};




    
 

a.addEventListener("click", () => {
    let inputTodo = document.getElementById("todo").value;
    tableAdd(inputTodo);

});



b.addEventListener("click", () => {
    let inputTodo_t = document.getElementById("todo_t").value;
    tableAdd1(inputTodo_t);
});
