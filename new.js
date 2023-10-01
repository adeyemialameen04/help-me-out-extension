let controlsContainer = document.createElement("div");
controlsContainer.style.display = "flex";
controlsContainer.style.gap = "1rem";
controlsContainer.style.alignItems = "center";
controlsContainer.style.minWidth = "400px";
controlsContainer.style.backgroundColor = "var(--clr-fair-black)";
controlsContainer.style.borderRadius = "100vh";
controlsContainer.style.paddingBlock = "0.5rem";
controlsContainer.style.justifyContent = "space-evenly";
controlsContainer.style.position = "fixed";
controlsContainer.style.bottom = "10%";
controlsContainer.style.left = "5%";

let time = document.createElement("div");
let timeP = document.createElement("p");
let timeSpan = document.createElement("span");

time.style.display = "flex";
time.style.alignItems = "center";
time.style.gap = "1rem";

timeP.style.fontWeight = "500";
timeP.style.fontSize = "1.25rem";
timeP.style.fontFamily = "Inter, sans-serif";
timeP.style.color = "var(--clr-white)";
timeP.textContent = "00:03:35";

timeSpan.style.height = "8px";
timeSpan.style.width = "8px";
timeSpan.style.backgroundColor = "red";
timeSpan.style.borderRadius = "50%";

time.appendChild(timeP);
time.appendChild(timeSpan);
controlsContainer.appendChild(time);

let controlItemsContainer = document.createElement("div");
controlItemsContainer.style.display = "flex";
controlItemsContainer.style.alignItems = "center";
controlItemsContainer.style.gap = "1rem";
controlItemsContainer.style.borderLeft = "1px solid var(--clr-border)";
controlItemsContainer.style.paddingLeft = "1rem";

document.body.appendChild(controlsContainer);

const controlItem1 = createControlItem("Pause");
const controlItem2 = createControlItem("Stop");
const controlItem3 = createControlItem("Camera");

controlItemsContainer.appendChild(controlItem1);
controlItemsContainer.appendChild(controlItem2);
controlItemsContainer.appendChild(controlItem3);
controlItemsContainer.style.borderLeft = "1px solid #E8E8E8";
controlItemsContainer.style.paddingLeft = "1rem";

function createControlItem(labelText) {
  const controlItem = document.createElement("div");
  //   controlItem.className = "controlItem";
  controlItem.style.display = "flex";
  controlItem.style.alignItems = "center";
  controlItem.style.gap = ".3rem";
  //   controlItem.style.paddingLeft = "1rem";
  controlItem.style.flexDirection = "column";

  const button = document.createElement("button");
  button.style.borderRadius = "50%";
  button.style.display = "grid";
  button.style.placeContent = "center";
  button.style.backgroundColor = "var(--clr-white)";
  button.style.border = "none";
  button.style.height = "30px";
  button.style.width = "30px";
  const img = document.createElement("img");
  img.style.height = "15px";
  img.style.objectFit = "contain";
  img.src = "/icons/" + labelText.toLowerCase() + ".png";
  button.appendChild(img);

  const label = document.createElement("small");
  label.style.fontFamily = "Work Sans";
  label.style.fontWeight = "500";
  label.style.fontSize = "0.75rem";
  label.style.color = "var(--clr-white)";
  label.textContent = labelText;

  controlItem.appendChild(button);
  controlItem.appendChild(label);

  return controlItem;
}

controlsContainer.appendChild(controlItemsContainer);
