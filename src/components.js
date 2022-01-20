import { React, useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSun, faMoon, faBars } from "@fortawesome/free-solid-svg-icons";
import { handleScheduledMenu } from "./1-menu-options";
import { handleDoingMenu } from "./2-menu-options";
import { handleDoneMenu } from "./3-menu-options";
import { handleAddNewBoard } from "./newboard";
import shortid from "shortid";
import { Signup, Login, CreateNew, MyProjects, NightDayMode } from "./navlinks";

export const Navigator = () => {
  //The reusable navbar component
  return (
    <nav>
      <input type="checkbox" id="check"></input>
      <label htmlFor="check" className="checkbtn">
      <FontAwesomeIcon icon={faBars}/>
      </label>
      <label className="logo">Kanban</label>
      <ul className="nav-links">
       <Signup/>
       <Login/>
       <CreateNew/>
       <MyProjects/>
       <NightDayMode/>
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
      <ExpandButton />
    </div>
  );
};

//Global declaration of our divs and delete button

const ScheduledTasks = () => {
  //App function htmlFor scheduled tasks
  const [scheduled, setScheduled] = useState([]);

  const handleScheduledTasks = (event) => {
    //event listener for adding new items on the kanban board
    event.preventDefault();
    setScheduled((task) => [...task, task.length.toString]); // key={shortid.generate}
  };

  const handleCardDelete = () => {
    const scheduler = document.getElementById("scheduled");
    const doing = document.getElementById("doing");
    const done = document.getElementById("done");
    const addBoard = document.getElementById("add-board");
    const cardDeletes = document.querySelectorAll(".card-delete-btn");
    cardDeletes.id = shortid.generate();
    const textareaWrap = document.querySelectorAll(".textarea-wrap");
    textareaWrap.id = shortid.generate();
    for (let i = 0; i < textareaWrap.length; i++) {
      for (let j = 0; j < cardDeletes.length; j++) {
        cardDeletes[j].addEventListener("click", (e) => {
          e.preventDefault();
          if (scheduler.contains(cardDeletes[j])) {
            scheduler.removeChild(textareaWrap[i]);
          } else if (doing.contains(cardDeletes[j])) {
            doing.removeChild(textareaWrap[i]);
          } else if (done.contains(cardDeletes[j])) {
            done.removeChild(textareaWrap[i]);
          } else if (addBoard.contains(cardDeletes[j])) {
            addBoard.removeChild(textareaWrap[i]);
          }
        });
      }
    }
  };

  return (
    <div
      id="main-wrapper1"
      onDrop={DropEvent}
      onDragOver={DragOver}
      onDragEnter={DragEnter}
    >
      <div id="scheduled">
        <div id="title-wrap1">
          <input
            type="text"
            id="board-title1"
            spellCheck="false"
            placeholder="Title 1"
            autoCorrect="on"
            autoComplete="off"
          ></input>
          <button
            type="button"
            className="options-btn-scheduled"
            onClick={handleScheduledMenu}
          >
            ...
          </button>
        </div>
        {scheduled.map((task) => (
          <div
            className="textarea-wrap"
            id={shortid.generate()}
            draggable="true"
            onDragStart={DragStart}
          >
            {task}
            <textarea
              className="textArea"
              id={shortid.generate()}
              spellCheck="false"
              autoCorrect="on" //this is compatible with Safari Browser
              autoComplete="off"
            ></textarea>
            <input type="date" className="timer-btn"></input>
            <button type="button" className="card-save-btn">
              Save
            </button>
            <button
              type="button"
              className="card-delete-btn"
              onClick={handleCardDelete}
              id={shortid.generate()}
            >

              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        ))}

        <button type="button" id="btn-add" onClick={handleScheduledTasks}>
          +
        </button>
        {/* <button type="button" id="btn-remove" onClick={handleRemoveTasks}>
          <span style={{ color: "orangered" }}>-</span>
        </button> */}
      </div>
    </div>
  );
};

const DoingTasks = () => {
  //App function For tasks being done
  return (
    <div
      id="main-wrapper2"
      onDrop={DropEvent}
      onDragOver={DragOver}
      onDragEnter={DragEnter}
      onDragStart={DragStart}
    >
      <div id="doing">
        <div id="title-wrap2">
          <input
            type="text"
            id="board-title2"
            spellCheck="false"
            placeholder="Title 2"
            autoCorrect="on"
            autoComplete="off"
          ></input>
          <button
            type="button"
            className="options-btn-doing"
            onClick={handleDoingMenu}
          >
            ...
          </button>
        </div>
      </div>
    </div>
  );
};

const DoneTasks = () => {
  //App function htmlFor done tasks
  return (
    <div
      id="main-wrapper3"
      onDrop={DropEvent}
      onDragOver={DragOver}
      onDragEnter={DragEnter}
      onDragStart={DragStart}
    >
      <div id="done">
        <div id="title-wrap3">
          <input
            type="text"
            id="board-title3"
            spellCheck="false"
            placeholder="Title 3"
            autoCorrect="on"
            autoComplete="off"
          ></input>
          <button
            type="button"
            className="options-btn-done"
            onClick={handleDoneMenu}
          >
            ...
          </button>
        </div>
      </div>
    </div>
  );
};

const ExpandButton = () => {
  return (
    <button type="button" id="btn-expand" onClick={handleAddNewBoard}>
      +
    </button>
  );
};

//THEMES FOR CHANGING TO NIGHTMODE AND DAYMODE

export const ChangeTheme = () => {
  const [background, setBackground] = useState("");
  const [buttonColor, setButtonColor] = useState("");

  const handleNightMode = (event) => {
    //theme change event listener
    const nightBtn = document.getElementById("night-mode-btn");
    const docBody = document.querySelector(".container");
    event.preventDefault();
    setBackground(() => {
      docBody.style.backgroundColor = "rgb(46,46,46)";
    });
    setButtonColor(() => {
      nightBtn.style.backgroundColor = "transparent";
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
      dayBtn.style.backgroundColor = "transparent";
    });
  };

  return (
    <>
      {background}
      {buttonColor}
      <button type="button" id="night-mode-btn" onClick={handleNightMode}>
        <FontAwesomeIcon icon={faMoon} />
      </button>
      <button type="button" id="day-mode-btn" onClick={handleDayMode}>
        <FontAwesomeIcon icon={faSun} />
      </button>
    </>
  );
};

//DRAG AND DROP LOGIC
export function DragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

export function DragOver(event) {
  event.preventDefault();
}

export function DragEnter(event) {
  event.preventDefault();
}

export function DropEvent(event) {
  event.preventDefault();
  var droppedData = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(droppedData));
  //this gets the data via the ID of the textarea (in #scheduled)
}

export function DragLeave(event) {
  event.preventDefault();
}
