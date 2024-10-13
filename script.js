const successBtn = document.querySelector(".success");
const failedBtn = document.querySelector(".failed");
const invalidBtn = document.querySelector(".invalid");
const toastBox = document.getElementById("toast-box");

invalidBtn.addEventListener("click", () => {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  const icon = '<i class="fa-solid fa-circle-exclamation"></i>';
  let text = "Invalid! Please check ";
  toast.innerHTML = text + icon;
  toastBox.appendChild(toast);
  if (toast.innerHTML.includes('Invalid')) {
    toast.classList.add("invalid");
  }
  setTimeout(()=>{
    toast.remove();
  },5000)
});

successBtn.addEventListener("click", () => {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  const icon = '<i class="fa-solid fa-circle-check"></i>';
  toast.innerHTML = "Submit completed successfully " + icon;
  toastBox.appendChild(toast);
  setTimeout(()=>{
    toast.remove();
  },5000)
});

failedBtn.addEventListener("click", () => {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  const icon = '<i class="fa-solid fa-circle-xmark"></i>';
  toast.innerHTML = "Submit failed!! " + icon;
  toastBox.appendChild(toast);
  if (toast.innerHTML.includes('failed')) {
    toast.classList.add("failed");
  }
  setTimeout(()=>{
    toast.remove();
  },5000)
});
