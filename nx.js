const videoModal = document.getElementById('videoModal');
const imageModal = document.getElementById('imageModal');

const player = new Plyr('#player', {
  quality: {
    default: 1080,
    options: [1080, 720],
    forced: true
  },
  controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen']
});

function openModal() {
  videoModal.classList.add('active');
  player.play();
}

function closeModal() {
  player.pause();
  videoModal.classList.remove('active');
}

function openImageModal() {
  imageModal.classList.add('active');
}

function closeImageModal() {
  imageModal.classList.remove('active');
}

function copyToClipboard(t) {
  navigator.clipboard.writeText(t).then(
    () => alert("Berhasil Disalin : " + t),
    () => alert("Gagal Menyalin")
  );
}

player.on('enterfullscreen', () => {
  screen.orientation && screen.orientation.lock && screen.orientation.lock('landscape').catch(() => {});
});

player.on('exitfullscreen', () => {
  screen.orientation && screen.orientation.lock && screen.orientation.lock('portrait').catch(() => {});
});
