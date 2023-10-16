const addButton = document.getElementById("addBtn")
const taskLine = document.getElementById("taskLine")
const list = document.getElementById("list")

let idCounter = 0

function addNewTask(){
    let msg = taskLine.value
    if (msg.trim() === ""){
        alert("Task is empty!")
    }else{
        let li = document.createElement("li");
        li.classList.add("flex");
        li.id = idCounter

        let c = document.createElement("input")
        c.type = "checkbox"
        c.classList.add("mx-2")

        let p = document.createElement("p");
        p.textContent = msg;

        let button = document.createElement("button");
        button.id = idCounter
        button.classList.add("justify-self-end", "mx-2", "text-[#0ec6df]");
        button.textContent = "Delete";
        button.onclick = function () {
            let element = document.getElementById(button.id)
            element.remove()
        }

        li.appendChild(c);
        li.appendChild(p);
        li.appendChild(button);
        list.appendChild(li)

        taskLine.value = ""
        idCounter += 1
    }
}


addButton.addEventListener("click", addNewTask)