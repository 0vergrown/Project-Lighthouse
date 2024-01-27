// Initialize to show all images and set the "All" button as active
window.onload = function() {
  filterSelection('all');
  document.querySelector(".btn-filter.active").classList.remove("active"); // Remove active class from all buttons
  document.querySelector(".btn-filter[data-filter='all']").classList.add("active"); // Add active class to the "All" button
};

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("image-container"); // Changed to "image-container"
  if (c == "all") c = "";
  
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var arr1 = element.className.split(" ");
  var arr2 = name.split(" ");
  if (arr1.indexOf(arr2[0]) == -1) {
    element.className += " " + name;
  }
}

function RemoveClass(element, name) {
  var arr1 = element.className.split(" ");
  var arr2 = name.split(" ");
  while (arr1.indexOf(arr2[0]) > -1) {
    arr1.splice(arr1.indexOf(arr2[0]), 1); 
  }
  element.className = arr1.join(" ");
}

// Initialize to show all images
window.onload = function() {
  filterSelection('all');
};

// Update active class on buttons
var btns = document.querySelectorAll(".btn-filter");
btns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        // Remove active class from all buttons
        document.querySelector(".btn-filter.active").classList.remove("active");
        // Add active class to the clicked button
        this.classList.add("active");
    });
});