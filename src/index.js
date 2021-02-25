document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // Grabbing elements
  let inputBox = document.getElementById("create-task-form");
  let userInput = document.getElementById("new-task-description");
  let taskList = document.getElementById("tasks");
  let priority = document.getElementById("priority");

  // Event listeners
  inputBox.addEventListener("submit", (e) => {
    e.preventDefault();

    let liTask = document.createElement("li");
    liTask.textContent = userInput.value;
    liTask.setAttribute("contenteditable", "");
    liTask.classList.add(priority.value);
    taskList.appendChild(liTask);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    liTask.appendChild(deleteButton);
    deleteButton.classList.add("parentcide");

    
    let deleteBtn = document.getElementsByClassName("parentcide");
    // converting html collection to array, to use array methods
    Array.prototype.slice.call(deleteBtn).forEach(function (item) {
      // iterate and add the event handler to it
      item.addEventListener("click", function (e) {
        e.target.parentNode.remove();
      });
    });

    e.target.reset();
  });

  // code modified from https://www.w3schools.com/howto/howto_js_sort_list.asp
  function sortList() {
     let switching = true;
     while (switching) {
       switching = false;
       let listItems = taskList.getElementsByTagName("LI");
       for (let i = 0; i < (listItems.length - 1); i++) {
         let shouldSwitch = false;
         if (listItems[i].innerHTML.toLowerCase() > listItems[i + 1].innerHTML.toLowerCase()) {
           shouldSwitch = true;
           break;
         }
       }
       if (shouldSwitch) {
         listItems[i].parentNode.insertBefore(listItems[i + 1], b[i]);
         switching = true;
       }
     }
   } 

});