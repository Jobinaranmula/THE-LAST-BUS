const routeButtons = document.querySelectorAll(".route-btn");
const selectedRoute = document.getElementById("selectedRoute");
const enterBus = document.getElementById("enterBus");

let currentRoute = null;

routeButtons.forEach(button => {

  button.addEventListener("click", () => {

    // Remove previous selection
    routeButtons.forEach(btn => {
      btn.classList.remove("selected");
    });

    // Select current route
    button.classList.add("selected");

    currentRoute = button.dataset.route;

    selectedRoute.textContent = currentRoute;

    // Enable Enter button
    enterBus.disabled = false;

  });

});


enterBus.addEventListener("click", () => {

  if (!currentRoute) return;

  // Save selected route for Screen 2
  localStorage.setItem("lastBusRoute", currentRoute);

  // Screen 2
  window.location.href = "bus.html";

});
