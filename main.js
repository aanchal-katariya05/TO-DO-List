function addTask()
{
   let task = document.getElementById("taskInput").value;
   
   if(task === ""){
    alert("Please enter a task");
    return;
   }

  let li =document.createElement("li");
  li.onclick = function(){
    li.style.textDecoration = "line-through";
  }
  li.innerText = task;
     document.getElementById("TaskList").appendChild(li);
   
  let button = document.createElement("button");
  button.innerText = "Delete";
  button.onclick = function(){
    li.remove();
  }
  li.appendChild(button);


}