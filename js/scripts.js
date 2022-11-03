// business logic

function isEquilateral(sideA, sideB, sideC) {
  console.log("func eq")
  return sideA === sideB && sideA === sideC;
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

function isValidTriangle(sideA, sideB, sideC) {
  return (
    sideA + sideB > sideC
    && sideA + sideC > sideB
    && sideB + sideB > sideA
  )
}


function hideResultsAndError () {
  nullP = document.getElementById("null-error");
  typeField = document.getElementById("triangle-type");
  sideP = document.getElementById("side-error");
  if (!(nullP.classList.contains("hidden"))) {
    nullP.classList.add("hidden");
  }
  if (!(sideP.classList.contains("hidden"))) {
    sideP.classList.add("hidden");
  }
  if (!(typeField.classList.contains("hidden"))) {
    typeField.classList.add("hidden");
  }
}

function triangulate(event) {
  event.preventDefault();
  hideResultsAndError ();
  nullP = document.getElementById("null-error");
  sideP = document.getElementById("side-error");
  typeField = document.getElementById("triangle-type");
  let sideA = document.getElementById("side-a").value;
  let sideB = document.getElementById("side-b").value;
  let sideC = document.getElementById("side-c").value;

  if (sideA === "" || sideB === "" || sideC === "") {
    nullP.classList.remove("hidden");
    return;
  }

  sideA = parseFloat(sideA);
  sideB = parseFloat(sideB);
  sideC = parseFloat(sideC);

  if (!(isValidTriangle(sideA, sideB, sideC))) {
    sideP.classList.remove("hidden");
    return;
  }



  let nameField = document.getElementById("triangle-name");
  if (isEquilateral(sideA, sideB, sideC)) {
    nameField.innerText = "Equilateral";
  } else if (isIsosceles(sideA, sideB, sideC)) {
    nameField.innerText = "Isosceles";
  } else {
    nameField.innerText = "Scalene";
  }
  typeField.classList.remove("hidden");
  
}

window.onload = function () {
  const form = document.getElementById("triangle-form");
  form.addEventListener("submit", triangulate);
}