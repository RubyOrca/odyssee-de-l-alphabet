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
// PHASE 3 : TRACÉ MAGIQUE
// ==========================================
let canvas, ctx;
let isDrawing = false;
let checkpoints = [];
// Couche de fond (lettre fantôme + guide) — redessinée à chaque frame pour rester sous le tracé
let bgImageData = null;

function startPhase3() {
    const current = levelData[currentLevel];
    showScreen('phase3');
    speak(`Maintenant, trace la lettre avec ton doigt ou la souris !`);

    canvas = document.getElementById('drawing-canvas');
    ctx = canvas.getContext('2d', { willReadFrequently: true });

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Lettre fantôme semi-transparente
    ctx.font = '300px Nunito';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.18)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(current.letter, canvas.width / 2, canvas.height / 2 + 20);

    // 2. Guide pointillé le long des tracés
    drawGuide(current.strokes);

    // 3. Aplatir les strokes en checkpoints (tous les points de chaque tracé)
    checkpoints = current.strokes.flat().map(cp => ({ ...cp, hit: false }));

    // 4. Cercles dorés sur les points-clés
    drawCheckpoints();

    // Mémoriser le fond (lettre + guide + cercles) pour le restituer à chaque trait
    bgImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    btnFinishPhase3.classList.add('hidden');
    setupCanvasEvents();
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
    let hits = 0;
    checkpoints.forEach(cp => {
        const dist = Math.hypot(cp.x - x, cp.y - y);
        // Rayon généreux pour les petits doigts
        if (dist < 45 && !cp.hit) {
            cp.hit = true;
            playSoftSound(700 + hits * 80, 'sine', 0.12);
            // Effacer le cercle validé (remettre le fond à jour)
            bgImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
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
