const video = document.getElementById('video');

async function startCamera(){
  try{
    const stream = await navigator.mediaDevices.getUserMedia({ video:{ facingMode:'user' } });
    video.srcObject = stream;
  }catch(e){
    alert("Não foi possível abrir a câmera.");
  }
}

startCamera();
