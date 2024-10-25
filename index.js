let confirmBtns = document.querySelectorAll(".confirm-btn");
let cancelBtns = document.querySelectorAll(".cancel-btn");
let viewBtn = document.querySelector(".view-btn");
let profileList = document.querySelector(".profile-list");

confirmBtns.forEach((targetBtn) => {
  targetBtn.addEventListener("click", () => {
    targetBtn.classList.toggle("confirm-active");
    targetBtn.parentElement.innerHTML = "<p>You are now friends</p>"
  });
});
cancelBtns.forEach((targetBtn) => {
  targetBtn.addEventListener("click", () => {
    targetBtn.classList.toggle("confirm-active");
    targetBtn.parentElement.innerHTML = "<p>Request Removed</p>"
  });
});

viewBtn.addEventListener("click", () => {
  profileList.classList.toggle("view-active");
  viewBtn.innerHTML = profileList.classList.contains("view-active")
    ? "View less"
    : "View all";
});
