// Coordonnées recalibrées sur canvas 300×400, lettre Nunito 300px centrée à (150, 220)
// TOP≈95  MID≈215  BOT≈335  LEFT≈85  CENTER=150  RIGHT≈215
// strokes : tableau de tracés, chaque tracé = liste de points dans l'ordre du geste
const levelData = [
    { letter: 'A', word: 'Astronaute', icon: '🧑‍🚀',
      strokes: [
        [{x:85,y:335}, {x:150,y:92}, {x:215,y:335}],
        [{x:108,y:222}, {x:192,y:222}]
      ]},
    { letter: 'B', word: 'Ballon', icon: '🎈',
      strokes: [
        [{x:88,y:95}, {x:88,y:335}],
        [{x:88,y:95}, {x:178,y:110}, {x:200,y:155}, {x:178,y:215}, {x:88,y:215}],
        [{x:88,y:215}, {x:195,y:260}, {x:195,y:310}, {x:165,y:335}, {x:88,y:335}]
      ]},
    { letter: 'C', word: 'Comète', icon: '☄️',
      strokes: [
        [{x:215,y:125}, {x:175,y:92}, {x:130,y:90}, {x:90,y:135}, {x:85,y:215}, {x:90,y:295}, {x:130,y:338}, {x:175,y:340}, {x:215,y:315}]
      ]},
    { letter: 'D', word: 'Décollage', icon: '🛸',
      strokes: [
        [{x:90,y:95}, {x:90,y:335}],
        [{x:90,y:95}, {x:155,y:95}, {x:210,y:155}, {x:215,y:215}, {x:210,y:275}, {x:155,y:335}, {x:90,y:335}]
      ]},
    { letter: 'E', word: 'Étoile', icon: '⭐',
      strokes: [
        [{x:210,y:95}, {x:88,y:95}, {x:88,y:335}, {x:210,y:335}],
        [{x:88,y:215}, {x:188,y:215}]
      ]},
    { letter: 'F', word: 'Fusée', icon: '🚀',
      strokes: [
        [{x:210,y:95}, {x:88,y:95}, {x:88,y:335}],
        [{x:88,y:215}, {x:185,y:215}]
      ]},
    { letter: 'G', word: 'Galaxie', icon: '🌌',
      strokes: [
        [{x:215,y:125}, {x:175,y:92}, {x:130,y:90}, {x:90,y:135}, {x:85,y:215}, {x:90,y:295}, {x:130,y:338}, {x:175,y:340}, {x:215,y:315}, {x:215,y:215}, {x:165,y:215}]
      ]},
    { letter: 'H', word: 'Hublot', icon: '🔭',
      strokes: [
        [{x:88,y:95}, {x:88,y:335}],
        [{x:212,y:95}, {x:212,y:335}],
        [{x:88,y:215}, {x:212,y:215}]
      ]},
    { letter: 'I', word: 'Infini', icon: '♾️',
      strokes: [
        [{x:150,y:95}, {x:150,y:335}]
      ]},
    { letter: 'J', word: 'Jupiter', icon: '🪐',
      strokes: [
        [{x:205,y:95}, {x:205,y:290}, {x:168,y:338}, {x:108,y:318}]
      ]},
    { letter: 'K', word: 'Kangourou', icon: '🦘',
      strokes: [
        [{x:88,y:95}, {x:88,y:335}],
        [{x:212,y:95}, {x:120,y:215}, {x:212,y:335}]
      ]},
    { letter: 'L', word: 'Lune', icon: '🌙',
      strokes: [
        [{x:100,y:95}, {x:100,y:335}, {x:222,y:335}]
      ]},
    { letter: 'M', word: 'Météorite', icon: '💫',
      strokes: [
        [{x:78,y:335}, {x:78,y:95}, {x:150,y:210}, {x:222,y:95}, {x:222,y:335}]
      ]},
    { letter: 'N', word: 'Nébuleuse', icon: '🌫️',
      strokes: [
        [{x:88,y:335}, {x:88,y:95}, {x:212,y:335}, {x:212,y:95}]
      ]},
    { letter: 'O', word: 'Orbite', icon: '🪐',
      strokes: [
        [{x:150,y:90}, {x:222,y:155}, {x:228,y:215}, {x:222,y:275}, {x:150,y:340}, {x:78,y:275}, {x:72,y:215}, {x:78,y:155}, {x:150,y:90}]
      ]},
    { letter: 'P', word: 'Planète', icon: '🔵',
      strokes: [
        [{x:88,y:95}, {x:88,y:335}],
        [{x:88,y:95}, {x:175,y:100}, {x:205,y:145}, {x:205,y:205}, {x:175,y:215}, {x:88,y:215}]
      ]},
    { letter: 'Q', word: 'Quasar', icon: '✨',
      strokes: [
        [{x:150,y:90}, {x:222,y:155}, {x:228,y:215}, {x:222,y:275}, {x:150,y:340}, {x:78,y:275}, {x:72,y:215}, {x:78,y:155}, {x:150,y:90}],
        [{x:185,y:298}, {x:222,y:342}]
      ]},
    { letter: 'R', word: 'Robot', icon: '🤖',
      strokes: [
        [{x:88,y:95}, {x:88,y:335}],
        [{x:88,y:95}, {x:175,y:100}, {x:205,y:145}, {x:205,y:205}, {x:175,y:215}, {x:88,y:215}],
        [{x:140,y:215}, {x:212,y:335}]
      ]},
    { letter: 'S', word: 'Satellite', icon: '🛰️',
      strokes: [
        [{x:212,y:125}, {x:170,y:92}, {x:115,y:95}, {x:85,y:140}, {x:88,y:190}, {x:150,y:215}, {x:212,y:240}, {x:215,y:290}, {x:185,y:335}, {x:130,y:338}, {x:88,y:315}]
      ]},
    { letter: 'T', word: 'Télescope', icon: '🔭',
      strokes: [
        [{x:78,y:95}, {x:222,y:95}],
        [{x:150,y:95}, {x:150,y:335}]
      ]},
    { letter: 'U', word: 'Univers', icon: '🌌',
      strokes: [
        [{x:88,y:95}, {x:88,y:288}, {x:105,y:325}, {x:150,y:342}, {x:195,y:325}, {x:212,y:288}, {x:212,y:95}]
      ]},
    { letter: 'V', word: 'Vaisseau', icon: '🚀',
      strokes: [
        [{x:85,y:95}, {x:150,y:335}, {x:215,y:95}]
      ]},
    { letter: 'W', word: 'Wapiti', icon: '🦌',
      strokes: [
        [{x:65,y:95}, {x:105,y:310}, {x:150,y:178}, {x:195,y:310}, {x:235,y:95}]
      ]},
    { letter: 'X', word: 'Xylophone', icon: '🎵',
      strokes: [
        [{x:85,y:95}, {x:215,y:335}],
        [{x:215,y:95}, {x:85,y:335}]
      ]},
    { letter: 'Y', word: 'Yéti', icon: '⛄',
      strokes: [
        [{x:85,y:95}, {x:150,y:215}],
        [{x:215,y:95}, {x:150,y:215}, {x:150,y:335}]
      ]},
    { letter: 'Z', word: 'Zèbre', icon: '🦓',
      strokes: [
        [{x:85,y:95}, {x:215,y:95}, {x:85,y:335}, {x:215,y:335}]
      ]}
];

const config = {
    frenchVoice: null,
    allLetters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
    randomOrder: false,   // false = alphabétique, true = aléatoire
    levelOrder: []        // ordre effectif des indices de levelData
};

let currentLevel = 0; // index dans config.levelOrder

function buildLevelOrder() {
    const indices = levelData.map((_, i) => i);
    if (config.randomOrder) {
        // Mélange Fisher-Yates
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
    }
    config.levelOrder = indices;
}

function currentLevelData() {
    return levelData[config.levelOrder[currentLevel]];
}

let starsAmount = 0;
let startStars = 0;
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

// --- GESTION DE LA PAROLE ---
// File d'attente interne : évite les répétitions et les chevauchements
const speechQueue = [];
let isSpeaking = false;

function speak(text, callback) {
    if (!('speechSynthesis' in window)) {
        if (callback) callback();
        return;
    }
    speechQueue.push({ text, callback });
    if (!isSpeaking) processQueue();
}

function speakNow(text, callback) {
    // Interrompt tout et parle immédiatement (pour les feedbacks urgents)
    speechQueue.length = 0;
    isSpeaking = false;
    speechSynthesis.cancel();
    setTimeout(() => {
        speechQueue.push({ text, callback });
        processQueue();
    }, 80);
}

function processQueue() {
    if (speechQueue.length === 0) { isSpeaking = false; return; }
    isSpeaking = true;
    const { text, callback } = speechQueue.shift();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    utterance.rate = 0.9;
    utterance.pitch = 1.2;
    if (config.frenchVoice) utterance.voice = config.frenchVoice;

    utterance.onend = () => {
        isSpeaking = false;
        if (callback) callback();
        // Enchaîne le suivant seulement si le callback n'a pas déjà ajouté à la queue
        if (speechQueue.length > 0) processQueue();
    };

    utterance.onerror = () => {
        isSpeaking = false;
        if (speechQueue.length > 0) processQueue();
    };

    speechSynthesis.speak(utterance);
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

// --- ÉTOILES DE DÉPART ---
const inputStartStars = document.getElementById('input-start-stars');

// --- TOGGLE ORDRE ---
const btnOrderAlpha  = document.getElementById('btn-order-alpha');
const btnOrderRandom = document.getElementById('btn-order-random');

btnOrderAlpha.addEventListener('click', () => {
    config.randomOrder = false;
    btnOrderAlpha.classList.add('active');
    btnOrderRandom.classList.remove('active');
});

btnOrderRandom.addEventListener('click', () => {
    config.randomOrder = true;
    btnOrderRandom.classList.add('active');
    btnOrderAlpha.classList.remove('active');
});

// --- INIT APP ---
btnStart.addEventListener('click', () => {
    initAudio();
    currentLevel = 0;
    buildLevelOrder();
    starsAmount = Math.max(0, parseInt(inputStartStars.value) || 0);
    starCountEl.innerText = starsAmount;
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
    
    const current = currentLevelData();
    document.getElementById('discover-letter').innerText = current.letter;
    document.getElementById('discover-icon').innerText = current.icon;
    
    // Parler automatiquement un peu après affichage
    setTimeout(() => {
        playPhase1Audio();
    }, 1000);
}

function playPhase1Audio() {
    const current = currentLevelData();
    playSoftSound(500, 'sine', 0.2);
    // speakNow interrompt tout et démarre proprement
    speakNow(`Voici la lettre ${current.letter}, comme ${current.word} !`, () => {
        setTimeout(() => {
            speak(`À toi Sacha, répète après moi... ${current.letter} !`, () => {
                btnNextPhase1.classList.remove('hidden');
            });
        }, 800);
    });
}

btnListen.addEventListener('click', playPhase1Audio);

btnNextPhase1.addEventListener('click', () => {
    startPhase2();
});

// ==========================================
// PHASE 2 : IDENTIFICATION — Astéroïdes mobiles
// ==========================================
let phase2Running = false;
const ASTEROID_SIZE = 85;
const TOTAL_ASTEROIDS = 10;
const TARGET_COUNT = 3; // nb d'occurrences de la bonne lettre

function startPhase2() {
    const current = currentLevelData();
    showScreen('phase2');

    // Instruction
    const instrEl = document.getElementById('instruction-phase2');
    if (instrEl) instrEl.innerHTML = `Trouve toutes les <span class="target-letter">${current.letter}</span> !`;

    speakNow(`Trouve toutes les lettres ${current.letter} !`);
    setTimeout(playHappyBoop, 400);

    const container = document.getElementById('asteroid-container');
    container.innerHTML = '';

    // Compteur affiché
    let remaining = TARGET_COUNT;
    const counterEl = document.createElement('div');
    counterEl.id = 'phase2-counter';
    counterEl.innerText = `⭐ ${remaining} à trouver`;
    // Insérer le compteur AVANT le container dans le screen
    const screen2 = document.getElementById('screen-phase2');
    const existingCounter = document.getElementById('phase2-counter');
    if (existingCounter) existingCounter.remove();
    screen2.insertBefore(counterEl, container);

    // Construire le tableau de lettres
    const others = config.allLetters
        .filter(l => l !== current.letter)
        .sort(() => Math.random() - 0.5)
        .slice(0, TOTAL_ASTEROIDS - TARGET_COUNT);
    const letters = [
        ...Array(TARGET_COUNT).fill(current.letter),
        ...others
    ].sort(() => Math.random() - 0.5);

    // Dimensions du conteneur (approx viewport)
    const W = window.innerWidth;
    const H = window.innerHeight * 0.55;

    // Créer les astéroïdes avec position et vitesse aléatoires
    const asteroids = letters.map(letter => {
        const el = document.createElement('div');
        el.className = 'asteroid';
        el.innerText = letter;
        el.style.width  = ASTEROID_SIZE + 'px';
        el.style.height = ASTEROID_SIZE + 'px';

        const x  = Math.random() * (W - ASTEROID_SIZE);
        const y  = Math.random() * (H - ASTEROID_SIZE);
        const speed = 1.2 + Math.random() * 1.8;
        const angle = Math.random() * Math.PI * 2;
        const state = {
            el, letter,
            x, y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            hit: false
        };

        el.style.left = x + 'px';
        el.style.top  = y + 'px';

        el.addEventListener('pointerdown', () => {
            if (state.hit) return;
            if (letter === current.letter) {
                state.hit = true;
                remaining--;
                el.classList.add('correct');
                playSuccessSound();
                // Disparition après animation
                setTimeout(() => { el.style.display = 'none'; }, 500);

                if (remaining === 0) {
                    phase2Running = false;
                    counterEl.innerText = '🎉 Toutes trouvées !';
                    speakNow(`Bravo Sacha ! Tu as trouvé toutes les ${current.letter} !`, () => {
                        startPhase3();
                    });
                } else {
                    counterEl.innerText = `⭐ ${remaining} à trouver`;
                    speak(`Bravo ! Encore ${remaining} !`);
                }
            } else {
                el.classList.add('wrong');
                playErrorSound();
                speak(`Ce n'est pas un ${current.letter}, continue !`);
                setTimeout(() => el.classList.remove('wrong'), 900);
            }
        });

        container.appendChild(el);
        return state;
    });

    // Boucle d'animation (déplacements + rebonds)
    phase2Running = true;
    function animLoop() {
        if (!phase2Running) return;
        asteroids.forEach(a => {
            if (a.hit) return;
            a.x += a.vx;
            a.y += a.vy;
            if (a.x < 0)              { a.x = 0;              a.vx =  Math.abs(a.vx); }
            if (a.x > W - ASTEROID_SIZE) { a.x = W - ASTEROID_SIZE; a.vx = -Math.abs(a.vx); }
            if (a.y < 0)              { a.y = 0;              a.vy =  Math.abs(a.vy); }
            if (a.y > H - ASTEROID_SIZE) { a.y = H - ASTEROID_SIZE; a.vy = -Math.abs(a.vy); }
            a.el.style.left = a.x + 'px';
            a.el.style.top  = a.y + 'px';
        });
        requestAnimationFrame(animLoop);
    }
    animLoop();
}

// ==========================================
// PHASE 3 : TRACÉ MAGIQUE
// ==========================================
let canvas, ctx;
let isDrawing = false;
let checkpoints = [];       // { x, y, hit, strokeIdx, pointIdx }
let totalDrawLength = 0;    // longueur cumulée du tracé de l'enfant
let bgImageData = null;

// Longueur minimale à dessiner avant qu'une victoire soit possible
// (évite qu'un seul petit gribouilli valide tout)
const MIN_DRAW_LENGTH = 120;

function startPhase3() {
    phase2Running = false; // stoppe l'animation des astéroïdes
    const current = currentLevelData();
    showScreen('phase3');
    speakNow(`Maintenant, trace la lettre avec ton doigt ou la souris !`);

    canvas = document.getElementById('drawing-canvas');
    ctx = canvas.getContext('2d', { willReadFrequently: true });

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Lettre fantôme = les strokes dessinés en épais et semi-transparent
    //    → garantit un alignement parfait avec le guide
    drawLetterGhost(current.strokes);

    // 2. Guide pointillé doré par-dessus
    drawGuide(current.strokes);

    // 3. Construire les checkpoints avec leur position dans le tracé (strokeIdx, pointIdx)
    checkpoints = [];
    current.strokes.forEach((stroke, si) => {
        stroke.forEach((pt, pi) => {
            checkpoints.push({ x: pt.x, y: pt.y, hit: false, strokeIdx: si, pointIdx: pi });
        });
    });
    totalDrawLength = 0;

    // 4. Cercles dorés sur les points-clés
    drawCheckpoints();

    // Mémoriser le fond pour le restituer à chaque trait
    bgImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    btnFinishPhase3.classList.add('hidden');
    setupCanvasEvents();
}

// Dessine les strokes en gros trait blanc semi-transparent → la "lettre fantôme"
function drawLetterGhost(strokes) {
    strokes.forEach(stroke => {
        if (stroke.length < 1) return;
        ctx.save();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = 55;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        stroke.forEach((pt, i) => {
            i === 0 ? ctx.moveTo(pt.x, pt.y) : ctx.lineTo(pt.x, pt.y);
        });
        ctx.stroke();
        // Contour intérieur légèrement plus visible
        ctx.strokeStyle = 'rgba(200, 220, 255, 0.12)';
        ctx.lineWidth = 30;
        ctx.stroke();
        ctx.restore();
    });
}

// Dessine les lignes pointillées qui montrent le chemin à suivre
function drawGuide(strokes) {
    strokes.forEach(stroke => {
        if (stroke.length < 2) return;
        ctx.save();
        ctx.setLineDash([10, 10]);
        ctx.strokeStyle = 'rgba(255, 215, 0, 0.35)';
        ctx.lineWidth = 7;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        stroke.forEach((pt, i) => {
            i === 0 ? ctx.moveTo(pt.x, pt.y) : ctx.lineTo(pt.x, pt.y);
        });
        ctx.stroke();
        ctx.restore();

        // Petite flèche de départ pour indiquer où commencer
        const a = stroke[0], b = stroke[1];
        drawArrow(a.x, a.y, b.x, b.y);
    });
}

// Dessine une flèche de direction au point de départ de chaque tracé
function drawArrow(x1, y1, x2, y2) {
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const size = 14;
    ctx.save();
    ctx.fillStyle = 'rgba(255, 200, 0, 0.75)';
    ctx.beginPath();
    ctx.translate(x1, y1);
    ctx.rotate(angle);
    ctx.moveTo(size, 0);
    ctx.lineTo(-size * 0.6, -size * 0.5);
    ctx.lineTo(-size * 0.6,  size * 0.5);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}

// Cercles dorés sur chaque point de passage
function drawCheckpoints() {
    checkpoints.forEach(cp => {
        if (cp.hit) return;
        ctx.beginPath();
        ctx.arc(cp.x, cp.y, 14, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 215, 0, 0.55)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 2;
        ctx.stroke();
    });
}

function setupCanvasEvents() {
    // Supprime les anciens écouteurs en clonant le canvas
    const newCanvas = canvas.cloneNode(true);
    canvas.parentNode.replaceChild(newCanvas, canvas);
    canvas = newCanvas;
    ctx = canvas.getContext('2d', { willReadFrequently: true });

    // Remettre le fond (lettre + guide) sur le nouveau canvas
    if (bgImageData) ctx.putImageData(bgImageData, 0, 0);

    const getPos = (e) => {
        const rect = canvas.getBoundingClientRect();
        let clientX, clientY;
        if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else if (e.clientX !== undefined) {
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

    let lastPos = null;

    const startDraw = (e) => {
        e.preventDefault();
        isDrawing = true;
        lastPos = getPos(e);
        ctx.beginPath();
        ctx.moveTo(lastPos.x, lastPos.y);
        checkHit(lastPos.x, lastPos.y);
    };

    const draw = (e) => {
        if (!isDrawing) return;
        e.preventDefault();
        const pos = getPos(e);

        // Restaurer le fond pour que la lettre fantôme et les cercles restent visibles
        if (bgImageData) ctx.putImageData(bgImageData, 0, 0);

        // Re-tracer tout le chemin depuis le début (via un path accumulé)
        // Pour éviter de tout re-tracer, on dessine juste le nouveau segment par-dessus
        ctx.putImageData(bgImageData, 0, 0);
        ctx.beginPath();
        ctx.moveTo(lastPos.x, lastPos.y);
        ctx.lineTo(pos.x, pos.y);
        ctx.strokeStyle = '#4fc3f7';
        ctx.lineWidth = 16;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.shadowBlur = 14;
        ctx.shadowColor = '#4fc3f7';
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Accumuler la longueur du tracé
        totalDrawLength += Math.hypot(pos.x - lastPos.x, pos.y - lastPos.y);

        // Mettre à jour le fond pour inclure ce trait (accumuler)
        bgImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        lastPos = pos;
        checkHit(pos.x, pos.y);
    };

    const stopDraw = () => {
        isDrawing = false;
        lastPos = null;
    };

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
    let newHit = false;

    checkpoints.forEach(cp => {
        if (cp.hit) return;

        const dist = Math.hypot(cp.x - x, cp.y - y);
        if (dist < 35) {   // rayon : 35 px
            cp.hit = true;
            newHit = true;
            const hitsCount = checkpoints.filter(c => c.hit).length;
            playSoftSound(650 + hitsCount * 60, 'sine', 0.12);
        }
    });

    // Mettre à jour le fond seulement quand un nouveau point est validé
    if (newHit) {
        bgImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    }

    const allHit = checkpoints.every(cp => cp.hit);

    // Victoire uniquement si tous les points sont validés ET que l'enfant a vraiment dessiné
    if (allHit && totalDrawLength >= MIN_DRAW_LENGTH && btnFinishPhase3.classList.contains('hidden')) {
        const current = currentLevelData();
        btnFinishPhase3.classList.remove('hidden');
        speak(`Magnifique ! Tu as tracé la lettre ${current.letter} !`);
    }
}

btnFinishPhase3.addEventListener('click', () => {
    startReward();
});

document.getElementById('btn-retry').addEventListener('click', () => {
    speak('Réessaie !');
    startPhase3();
});

// ==========================================
// PHASE REWARD (ÉTOILE)
// ==========================================
function startReward() {
    showScreen('reward');
    addStar();
    speakNow("Génial Sacha ! Mission spatiale réussie. Voici une étoile pour toi !");
    spawnConfetti();
}

btnReplay.addEventListener('click', () => {
    currentLevel++;
    if (currentLevel >= config.levelOrder.length) {
        currentLevel = 0;
        buildLevelOrder(); // Reconstruire l'ordre (re-mélanger si aléatoire)
        speakNow("Bravo Sacha ! Tu as appris toutes les lettres de l'alphabet ! On recommence l'aventure !");
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
