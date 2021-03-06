// navbar burger
(function() {
  var burger = document.querySelector(".burger");
  var nav = document.querySelector("#" + burger.dataset.target);

  burger.addEventListener("click", function() {
    burger.classList.toggle("is-active");
    nav.classList.toggle("is-active");
  });
})();

// edit post on article page
let deleteModal = document.getElementById("deleteModal");
let deleteArticleBtn = document.getElementById("deleteArticleBtn");
let closeBtn = document.getElementById("closeBtn");
let cancel = document.getElementById("cancel");
let articleModalBackground = document.getElementById("articleModalBackground");
let articleEdits = document.getElementById("articleEdits");

// index notification
let notification = document.getElementById("pysheetNotification");
let closeNotificationButton = document.getElementById("pysheetCloseNotification");

// main notification
let mainNotification = document.getElementById("mainNotification");
let closeMainNotification = document.getElementById("closeMainNotification");

// bottom notification
let bottomModal = document.getElementById("bottomModal");
let closeBottomModal = document.getElementById("closeBottomModal");

const openModal = () => deleteModal.classList.add("is-active");
const closeModal = () => deleteModal.classList.remove("is-active");
const closePysheetNoti = () => (notification.style.display = "none");
const closeMainNoti = () => (mainNotification.style.display = "none");
const closeModalbottom = () => bottomModal.style.display = "none";

if (closeNotificationButton) {
  closeNotificationButton.addEventListener("click", closePysheetNoti);
}

if (mainNotification) {
  closeMainNotification.addEventListener("click", closeMainNoti);
}

if (articleEdits) {
  deleteArticleBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);
  cancel.addEventListener("click", closeModal);
  articleModalBackground.addEventListener("click", closeModal);
}

if (bottomModal) {
  closeBottomModal.addEventListener("click",closeModalbottom);
}
