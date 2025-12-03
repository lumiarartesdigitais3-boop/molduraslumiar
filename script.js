let currentFacingMode = "user";

async function startCamera() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { facingMode: currentFacingMode },
    audio: false
  });
  const video = document.getElementById("camera");
  video.srcObject = stream;
}

document.getElementById("flip").addEventListener("click", () => {
  currentFacingMode = (currentFacingMode === "user") ? "environment" : "user";
  startCamera();
});

document.getElementById("capture").addEventListener("click", () => {
  const video = document.getElementById("camera");
  const frame = document.getElementById("frame");
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);

  const img = canvas.toDataURL("image/png");
  const a = document.createElement("a");
  a.href = img;
  a.download = "foto.png";
  a.click();
});

startCamera();
