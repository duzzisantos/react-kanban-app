import "./components";
// import { DragEnter, DragOver, DragStart, DropEvent } from "./components";
import './1-menu-options';

export const options = [
  {
    id: 1,
    span: "Options",
    paragraph: "Change theme",
    label1: "Theme  1:",
    label2: "Theme 2:",
    label3: "Theme 3:",
    brightness: "Default ",
    otherProjects: "Open other projects",
    newProject: "New project",
    report: "Report",
    deleteBoard: "Delete board",
  },

  {
    id: 2,
    span: "Options",
    paragraph: "Change theme",
    label1: "Theme 1",
    label2: "Theme 2",
    label3: "Theme 3",
    brightness: "Default ",
    otherProjects: "Open other projects",
    newProject: "New project",
    report: "Report",
    deleteBoard: "Delete board",
  },
  {
    id: 3,
    span: "Options",
    paragraph: "Change theme",
    label1: "Theme 1",
    label2: "Theme 2",
    label3: "Theme 3",
    brightness: "Default ",
    otherProjects: "Open other projects",
    newProject: "New project",
    report: "Report",
    deleteBoard: "Delete board",
  },
];

//FUNCTION FOR CHANGING THE THEMES OF THE CARDS
export  const ReflectThemeChange = () => {
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const input3 = document.getElementById("input3");
  const input4 = document.getElementById("input4");
  const scheduled = document.getElementById("scheduled");
  const doing = document.getElementById("doing");
  const done = document.getElementById("done");
  const addBoard = document.getElementById("add-board");

  input1.addEventListener("input", (e) => {
    e.preventDefault();
    scheduled.style.backgroundColor = "#EFF0D1";
    doing.style.backgroundColor = "#EFF0D1";
    done.style.backgroundColor = "#EFF0D1";
    addBoard.style.backgroundColor = "#EFF0D1";
  });

  input2.addEventListener("input", (e) => {
    e.preventDefault();
    scheduled.style.backgroundColor = "#D0BCD5";
    doing.style.backgroundColor = "#D0BCD5";
    done.style.backgroundColor = "#D0BCD5";
    addBoard.style.backgroundColor = "#D0BCD5";
  });

  input3.addEventListener("input", (e) => {
    e.preventDefault();
    scheduled.style.backgroundColor = "#F3FCF0";
    doing.style.backgroundColor = "#F3FCF0";
    done.style.backgroundColor = "#F3FCF0";
    addBoard.style.backgroundColor = "#F3FCF0";
  });

  input4.addEventListener("input", (e) => {
    e.preventDefault();
    scheduled.style.backgroundColor = "whitesmoke";
    doing.style.backgroundColor = "transparent";
    done.style.backgroundColor = "transparent";
    addBoard.style.backgroundColor = "transparent";
  });
};


