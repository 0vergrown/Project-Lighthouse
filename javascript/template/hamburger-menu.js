function toggleOverlayMenu() {
    var overlay = document.getElementById("overlayMenu");
    if (overlay.classList.contains("active")) {
        overlay.classList.remove("active");
        // Re-enable scrolling on the body
        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto"; // Add this line
    } else {
        overlay.classList.add("active");
        // Prevent scrolling on the body
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden"; // Add this line
    }
}