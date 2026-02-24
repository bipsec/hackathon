let currentTask = "task1";
let task1Initialized = false;
let task2Initialized = false;
let task3Initialized = false;

function switchTask(taskId) {
  currentTask = taskId;

  document.querySelectorAll(".task-sidebar").forEach(el => el.style.display = "none");
  document.querySelectorAll(".task-view").forEach(el => el.style.display = "none");

  document.getElementById(taskId + "Sidebar").style.display = "";
  document.getElementById(taskId + "View").style.display = "";

  if (taskId === "task1" && !task1Initialized) {
    task1Initialized = true;
    if (typeof buildField === "function") buildField();
    if (typeof initDrone === "function") initDrone();
    const dimEl = document.getElementById("fieldDims");
    if (dimEl && typeof CONFIG !== "undefined") {
      dimEl.textContent = CONFIG.IMG_W + " × " + CONFIG.IMG_H + " px";
    }
  }

  if (taskId === "task2" && !task2Initialized) {
    task2Initialized = true;
    if (typeof initWeedApp === "function") initWeedApp();
  }

  if (taskId === "task3" && !task3Initialized) {
    task3Initialized = true;
    if (typeof initTask3 === "function") initTask3();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const sel = document.getElementById("taskSelect");
  sel.addEventListener("change", () => switchTask(sel.value));
  switchTask("task1");
});
