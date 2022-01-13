import { React, useState } from "react";
import "./App.css";
// import { ChangeTheme } from "./themes";

export const Navigator = () => {
  //The reusable navbar component
  return (
    <nav>
      <input type="checkbox" id="check"></input>
      <label htmlFor="check" className="checkbtn">
        ==
      </label>
      <label className="logo">Kanban</label>
      <ul className="nav-links">
        <li>
          <a href="https://www.jpmorgan.com">Sign up</a>
        </li>
        <li>
          <a href="https://www.mtnonline.com">Login</a>
        </li>
        <li>
          <a href="https://www.quora.com">Create new</a>
        </li>
        <li>
          <a href="https://www.reddit.com/r/football">My projects</a>
        </li>
        <li>
          <a href="https://www.google.com">
            <ChangeTheme />
          </a>
        </li>
      </ul>
    </nav>
  );
};

//The main body that wraps all except the navbar component
export const Container = () => {
  return (
    <div className="container">
      <ScheduledTasks />
      <DoingTasks />
      <DoneTasks />
      <ExpandList />
    </div>
  );
};

const ScheduledTasks = () => {
  //App function htmlFor scheduled tasks
  const [scheduled, setScheduled] = useState([]);

  const handleScheduledTasks = (event) => {
    //event listener for adding new items on the anban board
    event.preventDefault();
    setScheduled((task) => [...task, `${task.length + 1}.`]);
    const adjustableBody = document.getElementById("root"); //needs modification
    adjustableBody.scrollTop = adjustableBody.scrollHeight;
  };

  const handleRemoveTasks = (event) => {
    //event listener for clearing items on the kanban board
    event.preventDefault();
    const newSchedule = scheduled.filter(
      (schedule) => schedule.lastElementChild
    );
    alert("Are you sure you want to clear items?"); //add a dialog box here instead of an alert.
    setScheduled(newSchedule);
    console.log("Schedule has been cleared.");
  };
  return (
    <div id="scheduled" onDrop={DropEvent} onDragOver={DragOver}>
      <h4>To do</h4>
      {scheduled.map((task) => (
        <textarea id="textArea" draggable="true" spellCheck='false' onDragStart={DragStart}>
          {task}
        </textarea>
      ))}

      <button type="button" id="btn-add" onClick={handleScheduledTasks}>
        +
      </button>
      <button type="button" id="btn-remove" onClick={handleRemoveTasks}>
        <span style={{ color: "orangered" }}>-</span>
      </button>
    </div>
  );
};

const DoingTasks = () => {
  //App function htmlFor tasks being done
  return (
    <div id="doing" onDrop={DropEvent} onDragOver={DragOver} droppable='true'>
      <h4>Doing</h4>
      
    </div>
  );
};

const DoneTasks = () => {
  //App function htmlFor done tasks
  return (
    <div id="done" onDrop={DropEvent} onDragOver={DragOver}>
      <h4>Done</h4>
      
    </div>
  );
};

const ExpandList = () => {
  //App function htmlFor adding extra tasks

  const [expand, setExpand] = useState([]);
  const [newAdd, setNewAdd] = useState([]);
  const [newRemove, setNewRemove] = useState([]);

  const handleExpandList = (event) => {
    //event listener for creating more kanban boards
    event.preventDefault();
    setExpand((myExpand) => [...myExpand, myExpand.length.toString]);
    setNewAdd((myNewAdd) => [...myNewAdd, myNewAdd.length.toString]);
    setNewRemove((myNewRemove) => [
      ...myNewRemove,
      myNewRemove.length.toString,
    ]);
  };

  // const handleNewAdd = () =>{

  // }

  // const handleNewRemove = () =>{
  //    setNewRemove((myNewRemove) => [...myNewRemove, `${myNewRemove.innerHTML = ""}`])
  // }
  return (
    <>
      {expand.map((expansion) => (
        <div
          id="expand"
          style={{ backgroundColor: "#EFF6E0" }}
          onDrop={DropEvent}
          onDragOver={DragOver}
        >
          {expansion}
          {newAdd.map((newAdds) => (
            <button id="new-add-btn">+{newAdds}</button>
          ))}
          {newRemove.map((newRemoves) => (
            <button id="new-remove-btn">
              {" "}
              <span style={{ color: "orangered" }}>-</span>
              {newRemoves}
            </button>
          ))}
        </div>
      ))}
      <button type="button" id="btn-expand" onClick={handleExpandList}>
        +
      </button>
    </>
  );
};

//Themes htmlFor day and night mode

const ChangeTheme = () => {
  const [background, setBackground] = useState("");
  const [buttonColor, setButtonColor] = useState("");

  const handleNightMode = (event) => {
    //theme change event listener
    const nightBtn = document.getElementById("night-mode-btn");
    const docBody = document.querySelector(".container");
    event.preventDefault();
    setBackground(() => {
      docBody.style.backgroundColor = "black";
    });
    setButtonColor(() => {
      nightBtn.style.backgroundColor = "rgb(56, 56, 56)";
    });
  };

  const handleDayMode = (event) => {
    //theme change event listener
    const dayBtn = document.getElementById("day-mode-btn");
    const docBody = document.querySelector(".container");
    event.preventDefault();
    setBackground(() => {
      docBody.style.backgroundColor = "white";
    });
    setButtonColor(() => {
      dayBtn.style.backgroundColor = "rgb(56, 56, 56)";
    });
  };

  return (
    <>
      {background}
      {buttonColor}
      <button type="button" id="night-mode-btn" onClick={handleNightMode}>
        &#127769;
      </button>
      <button type="button" id="day-mode-btn" onClick={handleDayMode}>
        &#127774;
      </button>
    </>
  );
};


//Drag events 

function DragStart(event) {
  event.dataTransfer.setData('Text', event.target.id);
  IncreaseBoardSize();
}

function DragOver(event) {
  event.preventDefault();
}

function DropEvent(event) {
  event.preventDefault();
  var droppedData = event.dataTransfer.getData('Text');
  event.target.appendChild(document.getElementById(droppedData)); //this gets the data via the ID of the element we are dragging
}

//increase board size during dragEvent

function IncreaseBoardSize(){
  var increaseDoingSize = document.getElementById("doing");
  increaseDoingSize.style.height = 'fit-content';
  var increaseDoneSize = document.getElementById("done");
  increaseDoneSize.style.height = 'fit-content';
  console.log("drag started");
}
