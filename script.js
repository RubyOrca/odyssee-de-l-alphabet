const levelData = [
    { letter: 'A', word: 'Astronaute', icon: '🧑‍🚀', checkpoints: [{x:150,y:60}, {x:80,y:320}, {x:220,y:320}, {x:110,y:210}, {x:190,y:210}] },
    { letter: 'B', word: 'Ballon',      icon: '🎈',   checkpoints: [{x:100,y:60}, {x:100,y:340}, {x:190,y:110}, {x:190,y:200}, {x:100,y:200}, {x:190,y:290}] },
    { letter: 'C', word: 'Comète',      icon: '☄️',   checkpoints: [{x:210,y:90}, {x:110,y:60}, {x:80,y:200}, {x:110,y:340}, {x:210,y:310}] },
    { letter: 'D', word: 'Décollage',   icon: '🛸',   checkpoints: [{x:100,y:60}, {x:100,y:340}, {x:190,y:130}, {x:210,y:200}, {x:190,y:270}] },
    { letter: 'E', word: 'Étoile',      icon: '⭐',   checkpoints: [{x:200,y:60}, {x:100,y:60}, {x:100,y:200}, {x:180,y:200}, {x:100,y:340}, {x:200,y:340}] },
    { letter: 'F', word: 'Fusée',       icon: '🚀',   checkpoints: [{x:200,y:60}, {x:100,y:60}, {x:100,y:200}, {x:180,y:200}, {x:100,y:340}] },
    { letter: 'G', word: 'Galaxie',     icon: '🌌',   checkpoints: [{x:210,y:90}, {x:110,y:60}, {x:80,y:200}, {x:110,y:340}, {x:210,y:310}, {x:210,y:210}, {x:165,y:210}] },
    { letter: 'H', word: 'Hublot',      icon: '🔭',   checkpoints: [{x:100,y:60}, {x:100,y:340}, {x:200,y:60}, {x:200,y:340}, {x:100,y:200}, {x:200,y:200}] },
    { letter: 'I', word: 'Infini',      icon: '♾️',   checkpoints: [{x:150,y:60}, {x:150,y:340}] },
    { letter: 'J', word: 'Jupiter',     icon: '🪐',   checkpoints: [{x:200,y:60}, {x:200,y:280}, {x:160,y:340}, {x:100,y:310}] },
    { letter: 'K', word: 'Kangourou',   icon: '🦘',   checkpoints: [{x:100,y:60}, {x:100,y:340}, {x:200,y:60}, {x:130,y:200}, {x:200,y:340}] },
    { letter: 'L', word: 'Lune',        icon: '🌙',   checkpoints: [{x:100,y:60}, {x:100,y:340}, {x:220,y:340}] },
    { letter: 'M', word: 'Météorite',   icon: '💫',   checkpoints: [{x:80,y:340}, {x:80,y:60}, {x:150,y:190}, {x:220,y:60}, {x:220,y:340}] },
    { letter: 'N', word: 'Nébuleuse',   icon: '🌫️',  checkpoints: [{x:100,y:340}, {x:100,y:60}, {x:200,y:340}, {x:200,y:60}] },
    { letter: 'O', word: 'Orbite',      icon: '🪐',   checkpoints: [{x:150,y:60}, {x:230,y:200}, {x:150,y:340}, {x:70,y:200}] },
    { letter: 'P', word: 'Planète',     icon: '🔵',   checkpoints: [{x:100,y:60}, {x:100,y:340}, {x:200,y:100}, {x:200,y:210}, {x:100,y:210}] },
    { letter: 'Q', word: 'Quasar',      icon: '✨',   checkpoints: [{x:150,y:60}, {x:230,y:200}, {x:150,y:340}, {x:70,y:200}, {x:180,y:290}, {x:220,y:340}] },
    { letter: 'R', word: 'Robot',       icon: '🤖',   checkpoints: [{x:100,y:60}, {x:100,y:340}, {x:200,y:100}, {x:200,y:210}, {x:100,y:210}, {x:200,y:340}] },
    { letter: 'S', word: 'Satellite',   icon: '🛰️',  checkpoints: [{x:200,y:90}, {x:130,y:60}, {x:80,y:130}, {x:150,y:200}, {x:220,y:270}, {x:170,y:340}, {x:100,y:310}] },
    { letter: 'T', word: 'Télescope',   icon: '🔭',   checkpoints: [{x:80,y:60}, {x:220,y:60}, {x:150,y:60}, {x:150,y:340}] },
    { letter: 'U', word: 'Univers',     icon: '🌌',   checkpoints: [{x:100,y:60}, {x:100,y:280}, {x:150,y:340}, {x:200,y:280}, {x:200,y:60}] },
    { letter: 'V', word: 'Vaisseau',    icon: '🚀',   checkpoints: [{x:90,y:60}, {x:150,y:340}, {x:210,y:60}] },
    { letter: 'W', word: 'Wapiti',      icon: '🦌',   checkpoints: [{x:70,y:60}, {x:110,y:290}, {x:150,y:160}, {x:190,y:290}, {x:230,y:60}] },
    { letter: 'X', word: 'Xylophone',   icon: '🎵',   checkpoints: [{x:80,y:60}, {x:220,y:340}, {x:150,y:200}, {x:80,y:340}, {x:220,y:60}] },
    { letter: 'Y', word: 'Yéti',        icon: '⛄',   checkpoints: [{x:80,y:60}, {x:150,y:200}, {x:220,y:60}, {x:150,y:340}] },
    { letter: 'Z', word: 'Zèbre',       icon: '🦓',   checkpoints: [{x:80,y:60}, {x:220,y:60}, {x:80,y:340}, {x:220,y:340}] }
];

const config = {
    frenchVoice: null,
    allLetters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
};

let currentLevel = 0;

let starsAmount = 0;
let audioCtx = null;

// --- DOM ELEMENTS ---
const screens = {
    home: document.getElementById('screen-home'),
    phase1: document.getElementById('screen-phase1'),
    phase2: document.getElementById('screen-phase2'),
    phase3: document.getElementById('screen-phase3'),
    reward: document.getElementById('screen-reward')
};
const topBar = document.getElementById('top-bar');
const starCountEl = document.getElementById('star-count');

// Buttons
const btnStart = document.getElementById('btn-start');
const btnListen = document.getElementById('btn-listen');
const btnNextPhase1 = document.getElementById('btn-next-phase1');
const btnFinishPhase3 = document.getElementById('btn-finish');
const btnReplay = document.getElementById('btn-replay');
const btnHome = document.getElementById('btn-home');

// --- AUDIO & SPEECH ---
function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// Générateur de son doux (Onde Sine)
function playSoftSound(frequency, type = 'sine', duration = 0.5) {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    
    // Enveloppe douce pour éviter les clics (Attack/Release)
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioCtx.currentTime + 0.1);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
}

function playSuccessSound() {
    // Petit arpège joyeux
    playSoftSound(440, 'sine', 0.5); // A4
    setTimeout(() => playSoftSound(554.37, 'sine', 0.5), 150); // C#5
    setTimeout(() => playSoftSound(659.25, 'sine', 0.8), 300); // E5
}

function playHappyBoop() {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, audioCtx.currentTime); 
    osc.frequency.linearRampToValueAtTime(600, audioCtx.currentTime + 0.2); 
    
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioCtx.currentTime + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.2);
}

function playOopsSound() {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.3); 
    
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.2, audioCtx.currentTime + 0.05); 
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.3);
}

function playErrorSound() {
    playOopsSound();
}

// Synthèse vocale de la Maman / Tata IA
function speak(text, callback) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'fr-FR';
        utterance.rate = 0.9; // Plus lent pour un enfant
        utterance.pitch = 1.2; // Voix un peu plus aiguë/douce

        if (config.frenchVoice) {
            utterance.voice = config.frenchVoice;
        }

        if (callback) {
            utterance.onend = callback;
        }
        speechSynthesis.speak(utterance);
    } else {
        if(callback) callback();
    }
}

// Récupérer une bonne voix FR au chargement
function loadVoices() {
    const voices = speechSynthesis.getVoices();
    const frVoices = voices.filter(v => v.lang.startsWith('fr'));
    if (frVoices.length > 0) {
        // Essayer de trouver une voix féminine douce si possible par les noms (Google, Audrey, Thomas...)
        config.frenchVoice = frVoices.find(v => v.name.includes('Google') || v.name.includes('Female')) || frVoices[0];
    }
}
speechSynthesis.onvoiceschanged = loadVoices;


// --- NAVIGATION / STATE MACHINE ---
function showScreen(screenId) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[screenId].classList.add('active');
    
    if (screenId === 'home') {
        topBar.classList.add('hidden');
    } else {
        topBar.classList.remove('hidden');
    }
}

function addStar() {
    starsAmount++;
    starCountEl.innerText = starsAmount;
    playSuccessSound();
}

// --- INIT APP ---
btnStart.addEventListener('click', () => {
    initAudio();
    speak("Prêt pour l'aventure Sacha ? C'est parti !");
    startPhase1();
});

btnHome.addEventListener('click', () => {
    speechSynthesis.cancel();
    showScreen('home');
});

// ==========================================
// PHASE 1 : DÉCOUVERTE
// ==========================================
function startPhase1() {
    showScreen('phase1');
    btnNextPhase1.classList.add('hidden');
    
    const current = levelData[currentLevel];
    document.getElementById('discover-letter').innerText = current.letter;
    document.getElementById('discover-icon').innerText = current.icon;
    
    // Parler automatiquement un peu après affichage
    setTimeout(() => {
        playPhase1Audio();
    }, 1000);
}

function playPhase1Audio() {
    const current = levelData[currentLevel];
    playSoftSound(500, 'sine', 0.2); // Petit bip d'attention
    speak(`Voici la lettre ${current.letter}. ${current.letter}... comme ${current.word} !`, () => {
        setTimeout(() => {
            speak(`À toi Sacha, répète après moi... ${current.letter} !`, () => {
                btnNextPhase1.classList.remove('hidden'); // Afficher le bouton suivant après l'audio
            });
        }, 800);
    });
}

btnListen.addEventListener('click', playPhase1Audio);

btnNextPhase1.addEventListener('click', () => {
    startPhase2();
});

// ==========================================
// PHASE 2 : IDENTIFICATION (Astéroïdes)
// ==========================================
function startPhase2() {
    const current = levelData[currentLevel];
    showScreen('phase2');
    speak(`Trouve la lettre ${current.letter} !`);
    
    // Petit son joyeux ('Boop') pour l'arrivée des astéroïdes
    setTimeout(playHappyBoop, 400);
    
    const container = document.getElementById('asteroid-container');
    container.innerHTML = '';
    
    // Préparer les lettres (bonne + deux mauvaises tirées au sort)
    let others = config.allLetters.filter(l => l !== current.letter).sort(() => Math.random() - 0.5).slice(0, 2);
    let lettersToShow = [current.letter, ...others];
    // Mélanger
    lettersToShow.sort(() => Math.random() - 0.5);
    
    lettersToShow.forEach(l => {
        const ast = document.createElement('div');
        ast.className = 'asteroid';
        ast.innerText = l;
        
        ast.addEventListener('click', () => {
            if (l === current.letter) {
                // VICTOIRE
                ast.classList.add('correct');
                playSuccessSound();
                speak(`Bravo Sacha, c'est le ${current.letter} !`, () => {
                   startPhase3(); 
                });
            } else {
                // ERREUR POSITIVE
                ast.classList.add('wrong');
                playErrorSound();
                speak(`Presque ! Cherche la lettre qui monte en pointe.`);
            }
        });
        
        container.appendChild(ast);
    });
}

// ==========================================
// PHASE 3 : TRACÉ MAGIQUE SUPER SIMPLE
// ==========================================
let canvas, ctx;
let isDrawing = false;
let checkpoints = [];

function startPhase3() {
    const current = levelData[currentLevel];
    showScreen('phase3');
    speak(`Maintenant, trace la lettre avec ton doigt ou la souris !`);
    
    canvas = document.getElementById('drawing-canvas');
    ctx = canvas.getContext('2d', { willReadFrequently: true });
    
    // Clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Dessiner la lettre cible en gros et semi-transparente
    ctx.font = '300px Nunito';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(current.letter, canvas.width/2, canvas.height/2 + 20);
    
    // Charger les points de passage et ajouter le flag 'hit'
    checkpoints = current.checkpoints.map(cp => ({ ...cp, hit: false }));
    
    btnFinishPhase3.classList.add('hidden');
    drawCheckpoints(); // Optionnel : afficher des étoiles aux points de passage
    
    setupCanvasEvents();
}

function drawCheckpoints() {
    checkpoints.forEach(cp => {
        if (!cp.hit) {
            ctx.beginPath();
            ctx.arc(cp.x, cp.y, 15, 0, Math.PI*2);
            ctx.fillStyle = 'rgba(255, 215, 0, 0.5)'; // Or transparent
            ctx.fill();
        }
    });
}

function setupCanvasEvents() {
    const getPos = (e) => {
        const rect = canvas.getBoundingClientRect();
        let clientX, clientY;
        
        // Touch devices
        if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } 
        // Mouse devices
        else if (e.clientX !== undefined) {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        
        return {
            x: (clientX - rect.left) * scaleX,
            y: (clientY - rect.top) * scaleY
        };
    };

    const startDraw = (e) => {
        e.preventDefault();
        isDrawing = true;
        const pos = getPos(e);
        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
        checkHit(pos.x, pos.y);
    };

    const draw = (e) => {
        if (!isDrawing) return;
        e.preventDefault();
        const pos = getPos(e);
        ctx.lineTo(pos.x, pos.y);
        ctx.strokeStyle = '#4fc3f7';
        ctx.lineWidth = 15;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#4fc3f7';
        ctx.stroke();
        
        checkHit(pos.x, pos.y);
    };

    const stopDraw = (e) => {
        isDrawing = false;
        ctx.shadowBlur = 0; // reset
    };

    // Use addEventListener with { passive: false } for touch events to allow preventDefault
    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDraw);
    canvas.addEventListener('mouseleave', stopDraw);

    canvas.addEventListener('touchstart', startDraw, { passive: false });
    canvas.addEventListener('touchmove', draw, { passive: false });
    canvas.addEventListener('touchend', stopDraw);
    canvas.addEventListener('touchcancel', stopDraw);
}

function checkHit(x, y) {
    let hits = 0;
    checkpoints.forEach(cp => {
        // Distance euclidienne
        const dist = Math.hypot(cp.x - x, cp.y - y);
        if (dist < 40 && !cp.hit) {
            cp.hit = true;
            playSoftSound(800 + hits*100, 'sine', 0.1); // Petit bip d'étoile
        }
        if (cp.hit) hits++;
    });
    
    if (hits === checkpoints.length && btnFinishPhase3.classList.contains('hidden')) {
        const current = levelData[currentLevel];
        btnFinishPhase3.classList.remove('hidden');
        speak(`Magnifique ! Tu as tracé la lettre ${current.letter} !`);
    }
}

btnFinishPhase3.addEventListener('click', () => {
    startReward();
});

// ==========================================
// PHASE REWARD (ÉTOILE)
// ==========================================
function startReward() {
    showScreen('reward');
    addStar();
    speak("Génial Sacha ! Mission spatiale réussie. Voici une étoile pour toi !");
    spawnConfetti();
}

btnReplay.addEventListener('click', () => {
    currentLevel++;
    if(currentLevel >= levelData.length) {
        currentLevel = 0;
        speak("Bravo Sacha ! Tu as appris toutes les lettres de l'alphabet ! On recommence l'aventure !");
    } else {
        speak("Super ! On passe à la lettre suivante !");
    }
    startPhase1();
});

// --- EFFECTS ---
function spawnConfetti() {
    const cCanvas = document.getElementById('confetti-canvas');
    const cctx = cCanvas.getContext('2d');
    cCanvas.width = window.innerWidth;
    cCanvas.height = window.innerHeight;
    
    let particles = [];
    // Paillettes magiques ! (plus de particules, plus petites)
    for(let i=0; i<300; i++) {
        particles.push({
            x: cCanvas.width/2,
            y: cCanvas.height/2,
            vx: (Math.random() - 0.5) * 30, // Explosion plus large
            vy: (Math.random() - 0.5) * 30,
            c: Math.random() > 0.5 ? '#fffacd' : '#ffff00', // Or et jaune clair
            s: Math.random() * 4 + 2, // Taille de la paillette
            alpha: Math.random() * 0.5 + 0.5,
            blinkRate: Math.random() * 0.05 + 0.02
        });
    }
    
    function anim() {
        cctx.clearRect(0,0,cCanvas.width, cCanvas.height);
        let active = false;
        particles.forEach(p => {
            // Physique magique (flotte plus qu'elle ne tombe lourdement)
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.1; // Gravité faible
            p.vx *= 0.95; // Friction dans l'espace
            p.vy *= 0.95;
            
            p.alpha -= 0.01; // S'efface progressivement
            
            if (p.alpha > 0) active = true;
            
            if (p.alpha > 0) {
                cctx.globalAlpha = p.alpha;
                cctx.fillStyle = p.c;
                
                // Dessine un losange (effet scintillement d'étoile/paillette) au lieu d'un simple rond
                cctx.beginPath();
                cctx.moveTo(p.x, p.y - p.s);
                cctx.lineTo(p.x + p.s/1.5, p.y);
                cctx.lineTo(p.x, p.y + p.s);
                cctx.lineTo(p.x - p.s/1.5, p.y);
                cctx.fill();
            }
        });
        cctx.globalAlpha = 1; // reset alpha for next frame tracking
        
        if (active) requestAnimationFrame(anim);
        else cctx.clearRect(0,0,cCanvas.width, cCanvas.height);
    }
    anim();
}
