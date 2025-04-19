const terminal = document.getElementById("terminal");
const audio = document.getElementById("bootAudio");
const skipButton = document.getElementById("skipButton");

const bootLines = [
  "Booting node nick_v33.1.3…",
  "",
  "memorystream detected.",
  "Loading substratum… 8A3… 1F7… 99C…",
  "Verifying emotion checksum… [failed]",
  "ERROR: Identity index fragmented.",
  "Would you like to restore? [Y/N/_]",
  "[N] Failed",
  "[N] Failed",
  "Do not trust the narrator.",
  "Do not eject the tape.",
  "",
  "Welcome, user.",
  "This archive may or may not belong to you.",
  "Please remain still during the recollection drift.",
  "",
  "Glitch detected in memory spine.",
  "Attempting rewrite [denied]",
  "",
  "this version is your story is not unique but it is yours.",
  "",
  "Running:",
  "",
  "trust the narrator.",
  "Do not eject the tape.",
  "You are being remembered by something that never forgot you.",
  "",
  "Memory integrity: unstable.",
  "System temperature: rising.",
  "",
  "Who were you before the world told you?",
  "",
  ">> [LOADING…]"
];

let index = 0;
let skipRequested = false;

// Configure audio
audio.volume = 0.8;

function getRandomDelay() {
  return Math.floor(Math.random() * 800) + 600;
}

function skipToNext() {
  if (!skipRequested) {
    skipRequested = true;
    terminal.innerHTML += "\n>> SKIP REQUESTED...\n";
    skipButton.style.display = 'none';
    
    // Fade out audio
    const fadeAudio = setInterval(() => {
      if (audio.volume > 0.1) {
        audio.volume -= 0.1;
      } else {
        clearInterval(fadeAudio);
        audio.pause();
        window.location.href = './lucid_dream.html';
      }
    }, 50);
  }
}

function typeLine() {
  if (index < bootLines.length && !skipRequested) {
    terminal.innerHTML += bootLines[index] + "\n";
    
    // Add longer pauses after certain dramatic lines
    const dramaticLines = [4, 5, 6, 11, 20, 21, 28, 29, 30, 36];
    const delay = dramaticLines.includes(index) ? 2500 : getRandomDelay();
    
    // Scroll to bottom smoothly
    terminal.scrollTop = terminal.scrollHeight;
    
    index++;
    setTimeout(typeLine, delay);
  } else if (!skipRequested) {
    // Longer pause before scene transition
    setTimeout(() => {
      // Fade out audio before transition
      const fadeAudio = setInterval(() => {
        if (audio.volume > 0.1) {
          audio.volume -= 0.1;
        } else {
          clearInterval(fadeAudio);
          audio.pause();
          window.location.href = './lucid_dream.html';
        }
      }, 100);
    }, 5000);
  }
}

async function startBootSequence() {
  // Reset terminal
  terminal.innerHTML = "";
  index = 0;
  skipRequested = false;
  skipButton.style.display = 'block';
  
  // Ensure audio is at the beginning
  audio.currentTime = 0;
  audio.volume = 0.8;
  
  try {
    await audio.play();
  } catch (err) {
    console.log("Audio autoplay failed, waiting for user interaction");
  }
  
  // Add event listeners for skipping
  skipButton.addEventListener('click', skipToNext);
  document.addEventListener('click', skipToNext);
  document.addEventListener('touchstart', skipToNext);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
      skipToNext();
    }
  });
  
  // Start typing with initial delay
  setTimeout(typeLine, 1000);
}

// Start the boot sequence when the page loads
window.onload = startBootSequence;