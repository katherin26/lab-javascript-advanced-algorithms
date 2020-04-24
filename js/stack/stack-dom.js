const stackList = document.getElementById("stack-list");
const stackInput = document.getElementById("stack-input");
const container = document.getElementById("container");
const warningTopStack = document.querySelector("#stack-container .warning-top");
const warningBottomStack = document.querySelector(
  "#stack-container .warning-bottom"
);
const addStackBtn = document.getElementById("add-stack");
const takeStackBtn = document.getElementById("take-stack");

const newStack = new StackDataStructure(); //call the constructor!

const clearStackInput = () => {
  stackInput.value = ""; //we are cleaning the input.
};

const renderListStack = () => {
  warningBottomStack.style.display = "none"; // We need to hide the underflow label .
  warningTopStack.style.display = "none"; // we need to hide the overflow label.

  let elements = newStack.display(); // display has the array from this.stackControl. that's why we can iterate with a forLoop.
  stackList.innerHTML = ""; // This is for clean the html inside the tag.

  for (let i = 0; i < elements.length; i++) {
    // we are iterating with the for loop and we used the variable elements because this one has the array.
    let list = document.createElement("li"); // we are using DOM here and we create a new li element.
    list.innerText = elements[i];
    stackList.appendChild(list); //we add the final result to stackList because that's the variable with the array.
  }
};

renderListStack();

const generateWarningStack = (type) => {
  //WARNING SIGN!
  if (type === "underflow") {
    warningBottomStack.style.display = "block"; // we set to block in this case to show on the screen .
    console.log(warningBottomStack);
  } else if (type === "overflow") {
    warningTopStack.style.display = "block";
  }
};

const addToStack = () => {
  // console.log(`adding to stack ${stackInput.value}`);
  if (stackInput.value === "") return; // when the stackInput.value is equal to an empty string  we can not add the empty string!. This is a bug! =)

  // tenemos espacio ? or can I push?
  if (newStack.canPush()) {
    newStack.push(stackInput.value); //push the value
    renderListStack(); //actualiza// render
    clearStackInput(); //limpia//cleaning...
  } else {
    generateWarningStack("overflow"); // esta lleno ! it's OVERFLOW!.
  }
};

const removeFromStack = () => {
  if (newStack.isEmpty() === false) {
    // isEmpty() = false is not empty .
    // si newStack no esta vacio ! por eso usamos isEmpty() que es el metodo que tiene la logica de underflow.
    newStack.pop(); // remueve el elemento!.//remove element.
    renderListStack(); //actualiza!!//Render
  } else {
    generateWarningStack("underflow"); //mensaje underflow!.
  }
};

addStackBtn.addEventListener("click", addToStack);
takeStackBtn.addEventListener("click", removeFromStack);
