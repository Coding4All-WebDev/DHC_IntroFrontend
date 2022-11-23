let inputEnter = document.getElementById("showVal");

inputEnter.addEventListener("click", () => {
    let taskValue = localStorage.getItem("task");
    console.log(taskValue);

    document.getElementById('taskValue').innerHTML = `<h2> ${ taskValue } </h2>`;
});