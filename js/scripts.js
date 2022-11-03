// business logic

function isEquilateral(sideA, sideB, sideC) {
  return sideA === sideB === sideC;
}

function isIsosceles(sideA, sideB, sideC) {
  if (sideA === sideB) {
    return sideC !== sideA;
  } else if (sideA === sideC) {
    return sideB !== sideA;
  } else if (sideB === sideC) {
    return sideB !== sideA;
  } else {
    return false;
  }
}

function triangulate(event) {
  event.preventDefault();
  nullP = document.getElementById("null-error")
  if (!(nullP.classList.contains("hidden"))) {
    nullP.classList.add("hidden")
  }
  let sideA = document.getElementById("side-a").value;
  let sideB = document.getElementById("side-b").value;
  let sideC = document.getElementById("side-c").value;
  if (sideA === "" || sideB === "" || sideC === "") {
    nullP.classList.remove("hidden")
  }
}

window.onload = function () {
  const form = document.getElementById("triangle-form");
  form.addEventListener("submit", triangulate);
}