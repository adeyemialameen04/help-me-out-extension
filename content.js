console.log("Hi, I have been injected whoopie!!!");

var recorder = null;
let recordedChunks = [];

function onAccessApproved(stream) {
  recorder = new MediaRecorder(stream);

  recorder.start();

  recorder.onstop = function () {
    stream.getTracks().forEach(function (track) {
      if (track.readyState === "live") {
        track.stop();
      }
    });
  };

  let controlsContainer = document.createElement("div");
  controlsContainer.style.display = "flex";
  controlsContainer.style.gap = "1rem";
  controlsContainer.style.alignItems = "center";
  controlsContainer.style.minWidth = "400px";
  controlsContainer.style.backgroundColor = "#141414";
  controlsContainer.style.borderRadius = "100vh";
  controlsContainer.style.padding = "0.5rem";
  controlsContainer.style.justifyContent = "space-evenly";
  controlsContainer.style.position = "fixed";
  controlsContainer.style.bottom = "5%";
  controlsContainer.style.left = "5%";

  let time = document.createElement("div");
  let timeP = document.createElement("p");
  let timeSpan = document.createElement("span");

  time.style.display = "flex";
  time.style.alignItems = "center";
  time.style.gap = "1rem";

  timeP.style.fontWeight = "500";
  timeP.style.fontSize = "1.25rem";
  timeP.style.fontFamily = "Inter";
  timeP.style.color = "#fff";
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
  controlItemsContainer.style.borderLeft = "1px solid #E8E8E8";
  controlItemsContainer.style.paddingLeft = "1rem";

  document.body.appendChild(controlsContainer);

  const pauseItem = document.createElement("div");
  pauseItem.style.display = "flex";
  pauseItem.style.alignItems = "center";
  pauseItem.style.gap = ".3rem";
  pauseItem.style.flexDirection = "column";
  const pauseBtn = document.createElement("button");
  pauseBtn.style.borderRadius = "50%";
  pauseBtn.style.display = "grid";
  pauseBtn.style.placeContent = "center";
  pauseBtn.style.backgroundColor = "#fff";
  pauseBtn.style.border = "none";
  pauseBtn.style.height = "30px";
  pauseBtn.style.width = "30px";
  const pauseImg = document.createElement("img");
  pauseImg.style.height = "15px";
  pauseImg.style.objectFit = "contain";
  pauseImg.src =
    "https://res.cloudinary.com/dzsomaq4z/image/upload/v1696166602/Icons/ae3ufl4s59dy7tvh0tsb.png";
  pauseBtn.appendChild(pauseImg);
  const pauseLabel = document.createElement("small");
  pauseLabel.style.fontFamily = "Work Sans";
  pauseLabel.style.fontWeight = "500";
  pauseLabel.style.fontSize = "0.75rem";
  pauseLabel.style.color = "#fff";
  pauseLabel.textContent = "Pause";

  pauseItem.appendChild(pauseBtn);
  pauseItem.appendChild(pauseLabel);
  const stopItem = document.createElement("div");
  stopItem.style.display = "flex";
  stopItem.style.alignItems = "center";
  stopItem.style.gap = ".3rem";
  stopItem.style.flexDirection = "column";
  const stopBtn = document.createElement("button");
  stopBtn.style.borderRadius = "50%";
  stopBtn.style.display = "grid";
  stopBtn.style.placeContent = "center";
  stopBtn.style.backgroundColor = "#fff";
  stopBtn.style.border = "none";
  stopBtn.style.height = "30px";
  stopBtn.style.width = "30px";
  const stopImg = document.createElement("img");
  stopImg.style.height = "15px";
  stopImg.style.objectFit = "contain";
  stopImg.src =
    "https://res.cloudinary.com/dzsomaq4z/image/upload/v1696166664/Icons/gj2gn1upqjimsgv2j8cz.png";
  stopBtn.appendChild(stopImg);
  const stopLabel = document.createElement("small");
  stopLabel.style.fontFamily = "Work Sans";
  stopLabel.style.fontWeight = "500";
  stopLabel.style.fontSize = "0.75rem";
  stopLabel.style.color = "#fff";
  stopLabel.textContent = "Stop";

  stopItem.appendChild(stopBtn);
  stopItem.appendChild(stopLabel);
  const cameraItem = document.createElement("div");
  cameraItem.style.display = "flex";
  cameraItem.style.alignItems = "center";
  cameraItem.style.gap = ".3rem";
  cameraItem.style.flexDirection = "column";
  const cameraBtn = document.createElement("button");
  cameraBtn.style.borderRadius = "50%";
  cameraBtn.style.display = "grid";
  cameraBtn.style.placeContent = "center";
  cameraBtn.style.backgroundColor = "#fff";
  cameraBtn.style.border = "none";
  cameraBtn.style.height = "30px";
  cameraBtn.style.width = "30px";
  const cameraImg = document.createElement("img");
  cameraImg.style.height = "15px";
  cameraImg.style.objectFit = "contain";
  cameraImg.src =
    "https://res.cloudinary.com/dzsomaq4z/image/upload/v1696166781/Icons/cawunk9gdd9yfnnvlnei.png";
  cameraBtn.appendChild(cameraImg);
  const cameraLabel = document.createElement("small");
  cameraLabel.style.fontFamily = "Work Sans";
  cameraLabel.style.fontWeight = "500";
  cameraLabel.style.fontSize = "0.75rem";
  cameraLabel.style.color = "#fff";
  cameraLabel.textContent = "Camera";

  cameraItem.appendChild(cameraBtn);
  cameraItem.appendChild(cameraLabel);

  controlItemsContainer.appendChild(pauseItem);
  controlItemsContainer.appendChild(stopItem);
  controlItemsContainer.appendChild(cameraItem);

  controlsContainer.appendChild(controlItemsContainer);

  stopBtn.addEventListener("click", () => {
    if (!recorder) return console.log("No recorder");
    recorder.stop();
    let a = document.createElement("a");
    a.href = "http://localhost:5173/";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });

  recorder.ondataavailable = async function (event) {
    // const endpoint = "https://hngx-chrome-extension-api.onrender.com/api";
    let recordedBlob = event.data;
    const formData = new FormData();
    const date = new Date().getMilliseconds();
    const randomLetters = "vwedvwhjwgdcewgjvyihf";
    const videoId = `${date}${randomLetters}`;
    console.log(result);
  };
}

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.action === "request_recording") {
    console.log("requesting recording");

    sendResponse(`processed: ${message.action}`);
    let captureStream;

    try {
      captureStream = await navigator.mediaDevices.getDisplayMedia({
        audio: true,
        video: true,
      });
      onAccessApproved(captureStream);
    } catch (error) {
      console.error(error);
    }
  }
});
