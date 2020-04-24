const queueUL = document.querySelector(".list-queue");
const queueInput = document.querySelector(".queue-input");
const warningTopQueue = document.querySelector("#queue-container .warning-top");
const warningBottomQueue = document.querySelector(
  "#queue-container .warning-bottom"
);
const addQueue = document.querySelector(".btn-add-queue");
const dequeue = document.querySelector(".btn-take-dequeue");

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  queueInput.value = ""; //we are cleaning the input!!
};

const generateListQueue = () => {
  warningBottomQueue.style.display = "none"; // we need to hide the label!
  warningTopQueue.style.display = "none";

  let queueElements = queue.display();
  queueUL.innerHTML = "";

  for (let i = 0; i < queueElements.length; i++) {
    // we used for loop because our data is type array , we need to iterate in this array and add the list with the DOM.
    let list = document.createElement("li"); // list variable store the result and DOM create the element 'li'
    list.innerText = queueElements[i]; // list.innerText is a property and we can add value type = text with innerText;
    queueUL.appendChild(list); // Append li to ul with id queueUl .
  }
};

generateListQueue();

const generateWarningQueue = (type) => {
  // Este method tiene los warnings los cuales se van a imprimir en addToQueue y removeFromQueue.
  if (type === "underflow") {
    warningBottomQueue.style.display = "block";
    console.log(warningBottomQueue);
  } else if (type === "overflow") {
    console.log(`hello`);
    warningTopQueue.style.display = "block";
  }
};

const addToQueue = () => {
  // ADD the queue
  if (queueInput.value === "") return;

  if (queue.canEnqueue()) {
    // queque que contiene nuestro object invoca a canEnqueue que tiene la logica para determinar si se puede agregar mas o no.
    queue.enqueue(queueInput.value); //queue contiente nuestro object y enqueue() contiene la logica de push(), y a ese push se le pasa queueInput.value
    generateListQueue();
    clearQueueInput();
  } else {
    generateWarningQueue("overflow"); // si no se imprime el warning the overflow.
  }
};

const removeFromQueue = () => {
  if (queue.isEmpty() === false) {
    // si el object queue es igual a false significa que no esta vacio.
    queue.dequeue(); // dequeue() tiene la logica de shift() por ende si se cumple la condicion se sacara el primero de la lista.
    generateListQueue(); // actualziar la lista.
  } else {
    generateWarningQueue("underflow"); // si no se cumple la primera y la lista esta vacia el warning es UNDERFLOW!.
  }
};

addQueue.addEventListener("click", addToQueue);
dequeue.addEventListener("click", removeFromQueue);
