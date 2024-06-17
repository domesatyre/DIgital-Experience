console.log('Script chargé');

const frameContainer = document.querySelector('.frame-container');
let frameIndex = 1;
let prevFrameIndex = 156;
let nextFrameIndex = 2;

// Chemin vers les images
const imagePath = ''; // plus besoin du dossier image/

// Précharger les images précédentes et suivantes
const prevFrameElement = new Image();
const nextFrameElement = new Image();
prevFrameElement.src = `ezgif-frame-${prevFrameIndex.toString().padStart(10, '0')}.jpg`;
nextFrameElement.src = `ezgif-frame-${nextFrameIndex.toString().padStart(10, '0')}.jpg`;

frameContainer.addEventListener('wheel', (event) => {
  event.preventDefault(); // empêcher le défilement par défaut

  // Déterminer la direction du défilement
  const delta = Math.sign(event.deltaY);

  // Mettre à jour l'index de l'image en fonction de la direction du défilement
  frameIndex += delta;
  if (frameIndex < 1) {
    frameIndex = 156;
  } else if (frameIndex > 156) {
    frameIndex = 1;
  }

  // Mettre à jour les index des images précédentes et suivantes
  if (delta < 0) {
    prevFrameIndex = frameIndex;
    nextFrameIndex = frameIndex + 1;
    if (nextFrameIndex > 156) {
      nextFrameIndex = 1;
    }
  } else {
    nextFrameIndex = frameIndex;
    prevFrameIndex = frameIndex - 1;
    if (prevFrameIndex < 1) {
      prevFrameIndex = 156;
    }
  }

  // Précharger les images précédentes et suivantes
  prevFrameElement.src = `ezgif-frame-${prevFrameIndex.toString().padStart(3, '0')}.jpg`;
  nextFrameElement.src = `ezgif-frame-${nextFrameIndex.toString().padStart(3, '0')}.jpg`;

  // Mettre à jour l'image affichée
  const frameElement = document.querySelector('.frame');
  frameElement.src = `ezgif-frame-${frameIndex.toString().padStart(3, '0')}.jpg`;

  console.log(`frameIndex: ${frameIndex}`);
  console.log(`prevFrameIndex: ${prevFrameIndex}`);
  console.log(`nextFrameIndex: ${nextFrameIndex}`);
});
