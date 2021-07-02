showtask();
let task_bar = document.getElementById("task_bar");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  addtask_barval = task_bar.value;
  let webtask = localStorage.getItem("localtask");
  if (addtask_barval.trim() != 0) {
    if (webtask == null) {
      taskobj = [];
    } else {
      taskobj = JSON.parse(webtask);
    }
    taskobj.push(addtask_barval);
    localStorage.setItem("localtask", JSON.stringify(taskobj));
    task_bar.value = '';
  }
  showtask();
});

function showtask() {
  let webtask = localStorage.getItem("localtask");
  if (webtask == null) {
    taskobj = [];
  } else {
    taskobj = JSON.parse(webtask);
  }
  html = "";
  let addedtasklist = document.getElementById("container");
  taskobj.forEach((item, index) => {
    html += `<div id="item">
    <input type="text" id="addedtasklist" value="${item}" disabled />
    <button id="editbutton" onclick="edittask(${index})"><img src="edit.jpg" alt="N"></button>
    <button id="removebutton" onclick="deleteitem(${index})"><img src="delete.jpg" alt="D"></button>
  </div>`;
  });
  addedtasklist.innerHTML = html;
}
//edittask
function edittask(index) {
  let saveindex = document.getElementById("saveindex");
  let btn = document.getElementById("btn");
  let savebutton = document.getElementById("savebutton");
  saveindex.value = index;
  let webtask = localStorage.getItem("localtask");
  taskobj = JSON.parse(webtask);
  task_bar.value = taskobj[index];
  btn.style.display = "none";
  savebutton.style.display = "block";
}

//save task
let savebutton = document.getElementById("savebutton");
savebutton.addEventListener("click",function(){
  let webtask = localStorage.getItem("localtask");
  taskobj = JSON.parse(webtask);
  let saveindex = document.getElementById("saveindex").value;
  taskobj[saveindex] = task_bar.value;
  btn.style.display = "block";
  savebutton.style.display = "none";
  localStorage.setItem("localtask", JSON.stringify(taskobj));
  showtask();
})

//deletion
function deleteitem(index){
  let webtask = localStorage.getItem("localtask");
  taskobj = JSON.parse(webtask);
  taskobj.splice(index, 1);
  localStorage.setItem("localtask", JSON.stringify(taskobj));
  showtask();
}

//delete All
let deleteallbtn = document.getElementById("deleteallbtn")
deleteallbtn.addEventListener("click", function(){
  let saveindex = document.getElementById("saveindex");
  let btn = document.getElementById("btn");
  let webtask = localStorage.getItem("localtask");
  taskobj = JSON.parse(webtask);
  if (webtask == null) {
    taskobj = [];
  } else {
    taskobj = JSON.parse(webtask);
    taskobj = [];
  }
  savebutton.style.display = "none";
  btn.style.display = "block";
  localStorage.setItem("localtask", JSON.stringify(taskobj));
  showtask();
})