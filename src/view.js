import {
  projectState,
  selectProject,
  getSelectedProject,
  getTODO,
} from "./project";
import { checkTodoCrossed } from "./todoitem";
import "../styles/personal-page.css";
import "../styles/form-styles.css";
import logoImage from "../resources/todologo.png";

const root = document.getElementById("content");

function openForm(optionFormToOpen) {
  root.style.transition = "0.2s";
  root.style.opacity = 0.3;

  const overlay = document.createElement("div");
  overlay.id = "overlay";
  document.body.appendChild(overlay);

  const formContainer = document.createElement("div");
  formContainer.id = "formContainer";

  //form.innerHTML += htmlContent
  addFormHTML(optionFormToOpen, formContainer);

  overlay.appendChild(formContainer);

  // if a click is outside the form or the save/discard button is clicked, close the form
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeForm();
  });
}

function addFormHTML(option, formContainer) {
  if (option === "new-todo") htmlContentTODO(formContainer);
  else if (option === "new-project") htmlContentPROJECT(formContainer);
}

function htmlContentTODO(form) {
  //TITLE PARAGRAPH
  const p = document.createElement("p");
  p.id = "formProjectTitle";
  p.textContent = `Create a new To-Do for ${getSelectedProject().name}`;
  form.appendChild(p);

  // INTERNAL FORM
  const innerForm = document.createElement("form");
  innerForm.id = "formOfNewTODO";

  // TITLE WRAP
  const titleWrap = document.createElement("div");
  titleWrap.id = "title-wrap";

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title";
  titleWrap.appendChild(titleLabel);

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "title_to_do";
  titleInput.name = "title_to_do";
  titleInput.placeholder = "Title...";
  titleInput.minLength = "5";
  titleWrap.appendChild(titleInput);

  innerForm.appendChild(titleWrap);

  // DUE DATE WRAP
  const dueWrap = document.createElement("div");
  dueWrap.id = "dueDate-wrap";

  const dueLabel = document.createElement("label");
  dueLabel.textContent = "Due date";
  dueWrap.appendChild(dueLabel);

  const dueInput = document.createElement("input");
  dueInput.type = "date";
  dueInput.id = "dueDate_to_do";
  dueInput.name = "dueDate_to_do";
  dueInput.placeholder = "Due date...";
  dueWrap.appendChild(dueInput);

  innerForm.appendChild(dueWrap);

  // PRIORITY WRAP
  const priorityWrap = document.createElement("div");
  priorityWrap.id = "priority-wrap";

  const priorityLabel = document.createElement("label");
  priorityLabel.textContent = "Priority";
  priorityWrap.appendChild(priorityLabel);

  const prioritySelect = document.createElement("select");
  prioritySelect.id = "priority_to_do";
  prioritySelect.name = "priority_to_do";
  prioritySelect.style.color = "black";

  const optionDefault = document.createElement("option");
  optionDefault.value = "";
  optionDefault.disabled = true;
  optionDefault.selected = true;
  optionDefault.hidden = true;
  optionDefault.textContent = "Priority...";
  prioritySelect.appendChild(optionDefault);

  const optionHigh = document.createElement("option");
  optionHigh.value = "high";
  optionHigh.textContent = "High";
  prioritySelect.appendChild(optionHigh);

  const optionMedium = document.createElement("option");
  optionMedium.value = "medium";
  optionMedium.textContent = "Medium";
  prioritySelect.appendChild(optionMedium);

  const optionLow = document.createElement("option");
  optionLow.value = "low";
  optionLow.textContent = "Low";
  prioritySelect.appendChild(optionLow);

  priorityWrap.appendChild(prioritySelect);
  innerForm.appendChild(priorityWrap);

  // SUBMIT BUTTON
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Add new To-Do";
  innerForm.appendChild(submitBtn);

  form.appendChild(innerForm);
}

function htmlContentPROJECT(form) {
  const p = document.createElement("p");
  p.id = "formProjectTitle";
  p.textContent = "Create a new Project";
  form.appendChild(p);

  const innerForm = document.createElement("form");
  innerForm.id = "formOfNewProject";

  const titleWrap = document.createElement("div");
  titleWrap.id = "title-wrap";

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title";
  titleWrap.appendChild(titleLabel);

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "title_project";
  titleInput.name = "title_project";
  titleInput.placeholder = "Title...";
  titleWrap.appendChild(titleInput);

  innerForm.appendChild(titleWrap);

  const descWrap = document.createElement("div");
  descWrap.id = "description-wrap";

  const descLabel = document.createElement("label");
  descLabel.textContent = "Description";
  descWrap.appendChild(descLabel);

  const descInput = document.createElement("input");
  descInput.type = "text";
  descInput.id = "description_project";
  descInput.name = "description_project";
  descInput.placeholder = "Description...";
  descWrap.appendChild(descInput);

  innerForm.appendChild(descWrap);

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Add new Project";
  innerForm.appendChild(submitBtn);

  form.appendChild(innerForm);
}

export function closeForm() {
  root.style.opacity = 1;
  const overlay = document.getElementById("overlay");
  if (overlay) overlay.remove();
}

export function crossTODO(todo) {
  const todo_internal_item = getTODO(todo.id);
  let is_todo_crossed = checkTodoCrossed(todo_internal_item);

  if (!is_todo_crossed) {
    todo.style.textDecoration = "line-through";
    todo.style.opacity = "0.4";
    todo_internal_item.crossed = true;
  } else {
    todo.style.textDecoration = "none";
    todo.style.opacity = "1";
    todo_internal_item.crossed = false;
  }
}

// MAIN RENDER FUCNTION

export function render() {
  root.innerHTML = "";

  const app = document.createElement("div");
  app.id = "app";
  app.style.display = "flex";

  root.appendChild(app);

  // SIDEBAR
  const sideBar = document.createElement("div");
  sideBar.id = "sidebar";
  app.appendChild(sideBar);

  // LOGO
  const logo = document.createElement("img");
  logo.src = logoImage;
  logo.id = "logo";
  logo.style.width = "120px";
  sideBar.appendChild(logo);

  // TITLE
  const title = document.createElement("p");
  title.textContent = "Projects";
  title.style.fontWeight = "bold";
  title.style.textAlign = "start";
  title.style.marginBottom = "10px";
  title.style.fontSize = "38px";
  sideBar.appendChild(title);

  // PROJECT LIST CONTAINER
  const projectList = document.createElement("div");
  projectList.id = "projectList";
  sideBar.appendChild(projectList);

  // DISPLAY PROJECTS
  projectState.projects.forEach((project) => {
    const item = document.createElement("div");
    item.textContent = project.name;
    item.dataset.id = project.id;
    item.style.padding = "8px";
    item.style.cursor = "pointer";

    // current project
    if (project.id === projectState.selectedProjectID) {
      item.style.fontWeight = "bold";
    }

    // listener
    item.addEventListener("click", () => {
      selectProject(project.id);
      render();
    });

    projectList.appendChild(item);
  });

  const selectedProject = getSelectedProject();

  // NEW PROJECT BUTTON
  const newProjectButton = document.createElement("button");
  newProjectButton.id = "newProjectButton";
  sideBar.appendChild(newProjectButton);
  newProjectButton.addEventListener("click", () => {
    openForm("new-project");
  });

  // MAIN LAYOUT
  const main = document.createElement("div");
  main.id = "main";
  app.appendChild(main);

  // CURRENT PROJECT TITLE
  const selectedProjectTitle = document.createElement("p");
  selectedProjectTitle.id = "selectedProjectTitle";

  if (selectProject) {
    selectedProjectTitle.textContent = selectedProject.name;
  } else {
    selectedProjectTitle.textContent = "No project selected";
  }

  main.appendChild(selectedProjectTitle);

  // ANNEX OF MAIN LAYOUT
  const annex = document.createElement("div");
  annex.id = "annexMainLayout";

  const titleAnnex = document.createElement("div");
  titleAnnex.id = "titleAnnex";
  titleAnnex.textContent = "Title";
  annex.appendChild(titleAnnex);

  const dateAnnex = document.createElement("div");
  dateAnnex.id = "dateAnnex";
  dateAnnex.textContent = "Date";
  annex.appendChild(dateAnnex);

  const priorityAnnex = document.createElement("div");
  priorityAnnex.id = "priorityAnnex";
  priorityAnnex.textContent = "Priority";
  annex.appendChild(priorityAnnex);

  main.appendChild(annex);
  // DISPLAY TODO'S OF SELECTED PROJECT

  if (selectedProject) {
    const toDoContainer = document.createElement("div");
    toDoContainer.id = "toDoContainer";

    selectedProject.todos.forEach((todo) => {
      const toDoItem = document.createElement("div");
      toDoItem.className = "toDoItem";
      toDoItem.id = todo.id;

      const toDoItemTitle = document.createElement("div");
      toDoItemTitle.textContent = todo.title;
      toDoItem.appendChild(toDoItemTitle);

      const toDoDueDate = document.createElement("div");
      toDoDueDate.textContent = todo.dueDate;
      toDoItem.appendChild(toDoDueDate);

      const toDoPriority = document.createElement("div");
      toDoPriority.textContent = todo.priority.toUpperCase();
      toDoItem.appendChild(toDoPriority);

      toDoContainer.appendChild(toDoItem);

      if (todo.crossed) {
        toDoItem.style.textDecoration = "line-through";
        toDoItem.style.opacity = "0.4";
      }
    });

    const newToDoButton = document.createElement("button");
    newToDoButton.id = "newToDoButton";
    toDoContainer.appendChild(newToDoButton);

    // event listener for creating a new to do
    newToDoButton.addEventListener("click", () => {
      openForm("new-todo");
    });

    main.appendChild(toDoContainer);
  }
}