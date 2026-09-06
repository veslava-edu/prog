// js/app.js
let currentExample = null;
let currentStep = 0;
let isPlaying = false;
let playInterval = null;
let executionSnapshots = [];
let eventLog = [];

// Definición de las temáticas
const themes = [
    { id: 'condicionales', name: 'Condicionales' },
    { id: 'bucles', name: 'Bucles' },
    { id: 'recursividad', name: 'Recursividad' },
    { id: 'strings', name: 'Strings' },
    { id: 'vectores', name: 'Vectores (Arrays)' },
    { id: 'matrices', name: 'Matrices (Arrays 2D)' },
    { id: 'listas', name: 'Listas' }, 
    { id: 'pilas', name: 'Pilas' }, 
    { id: 'colas', name: 'Colas' }, 
    { id: 'POO', name: 'POO' },
    { id: 'POO_Avanzada', name: 'POO Avanzada' },
];

// Variable global que será REASIGNADA por cada fichero de ejemplos.
// Es importante no usar const aquí.
let examples = []; 

document.addEventListener('DOMContentLoaded', init);

function init() {
    populateThemeSelector();
    loadTheme(themes[0].id); // Cargar la primera temática por defecto
    setupEventListeners();
    initializeResizers();
}

function populateThemeSelector() {
    const selector = document.getElementById('theme-selector');
    themes.forEach(theme => {
        const option = document.createElement('option');
        option.value = theme.id;
        option.textContent = theme.name;
        selector.appendChild(option);
    });
    selector.onchange = (e) => loadTheme(e.target.value);
}

// Función para cargar dinámicamente el script de la temática
function loadTheme(themeId) {
    const existingScript = document.getElementById('examples-script-loader');
    if (existingScript) {
        existingScript.remove();
    }
    const script = document.createElement('script');
    script.id = 'examples-script-loader';
    script.src = `js/examples/${themeId}.js`;
    script.charset = 'UTF-8';
    
    // Cuando el nuevo script se carga, ejecuta esto:
    script.onload = () => {
        renderExamplesList(examples); // "examples" ha sido reasignado por el script cargado
        if (examples && examples.length > 0) {
            loadExample(examples[0]);
        }
    };
    
    document.body.appendChild(script);
}

// El resto de app.js (resizers, event handlers, simulation logic, etc.)
// ... (código sin cambios) ...
function initializeResizers() {
    const container = document.getElementById('app-container');
    const resizerV1 = document.getElementById('resizer-v1');
    const resizerV2 = document.getElementById('resizer-v2');
    const sidebar = container.querySelector('.sidebar');
    const tracePanel = container.querySelector('.trace-panel');
    
    const minWidth = 200;
    const maxWidth = 500;

    const onMouseMoveV1 = (e) => {
        let newSidebarWidth = Math.max(minWidth, e.clientX);
        newSidebarWidth = Math.min(newSidebarWidth, maxWidth);
        const currentTraceWidth = tracePanel.offsetWidth;
        container.style.gridTemplateColumns = `${newSidebarWidth}px var(--resizer-width) 1fr var(--resizer-width) ${currentTraceWidth}px`;
    };

    const onMouseMoveV2 = (e) => {
        const resizerWidth = parseFloat(getComputedStyle(resizerV2).width);
        let newTraceWidth = Math.max(minWidth, container.offsetWidth - e.clientX - resizerWidth);
        newTraceWidth = Math.min(newTraceWidth, maxWidth);
        const currentSidebarWidth = sidebar.offsetWidth;
        container.style.gridTemplateColumns = `${currentSidebarWidth}px var(--resizer-width) 1fr var(--resizer-width) ${newTraceWidth}px`;
    };
    
    const onMouseUp = () => {
        document.body.classList.remove('resizing');
        document.removeEventListener('mousemove', onMouseMoveV1);
        document.removeEventListener('mousemove', onMouseMoveV2);
        document.removeEventListener('mouseup', onMouseUp);
    };

    resizerV1.addEventListener('mousedown', (e) => {
        e.preventDefault();
        document.body.classList.add('resizing');
        document.addEventListener('mousemove', onMouseMoveV1);
        document.addEventListener('mouseup', onMouseUp, { once: true });
    });

    resizerV2.addEventListener('mousedown', (e) => {
        e.preventDefault();
        document.body.classList.add('resizing');
        document.addEventListener('mousemove', onMouseMoveV2);
        document.addEventListener('mouseup', onMouseUp, { once: true });
    });
}

function setupEventListeners() {
    const speedSlider = document.getElementById('speed-slider');
    speedSlider.oninput = () => {
        if (isPlaying) {
            togglePlayPause();
            togglePlayPause();
        }
    };
}

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    if (body.dataset.theme === 'dark') {
        body.dataset.theme = 'light';
        themeIcon.textContent = '🌙';
    } else {
        body.dataset.theme = 'dark';
        themeIcon.textContent = '☀️';
    }
}

function switchTab(tabName) {
    const codeTab = document.getElementById('code-tab');
    const diagramTab = document.getElementById('diagram-tab');
    const consoleContainer = document.querySelector('.console-container');
    const codeTabButton = document.getElementById('tab-btn-code');
    const diagramTabButton = document.getElementById('tab-btn-diagram');

    codeTab.style.display = 'none';
    diagramTab.style.display = 'none';
    consoleContainer.style.display = 'none';
    codeTabButton.classList.remove('active');
    diagramTabButton.classList.remove('active');

    if (tabName === 'code') {
        codeTab.style.display = 'block';
        consoleContainer.style.display = 'flex';
        codeTabButton.classList.add('active');
    } else if (tabName === 'diagram') {
        diagramTab.style.display = 'flex';
        diagramTabButton.classList.add('active');
    }
}


function loadExample(example) {
    document.getElementById('console-output').innerHTML = '';
    currentExample = example;
    executionSnapshots = example.snapshots;
    resetSimulation();
}

function resetSimulation() {
    if (isPlaying) togglePlayPause();
    currentStep = 0;
    eventLog = [];
    logEvent(`Ejemplo cargado: ${currentExample.title}`);
    updateUI();
}

function stepForward() {
    if (currentStep < executionSnapshots.length - 1) {
        currentStep++;
        logEvent(executionSnapshots[currentStep].description);
        updateUI();
    } else {
        if (isPlaying) togglePlayPause();
        logEvent("Fin de la simulación.");
    }
}

function stepBackward() {
    if (isPlaying) togglePlayPause();
    if (currentStep > 0) {
        currentStep--;
        eventLog = [];
        for(let i=0; i <= currentStep; i++){
            logEvent(executionSnapshots[i].description, false);
        }
        updateUI();
    }
}

function togglePlayPause() {
    const btn = document.getElementById('play-pause-btn');
    isPlaying = !isPlaying;
    if (isPlaying) {
        btn.innerHTML = '\u23F8\uFE0F Pausar';
        btn.classList.remove('success');
        if (currentStep >= executionSnapshots.length - 1) {
            currentStep = 0;
            eventLog = [];
            logEvent(`Reiniciando simulación: ${currentExample.title}`);
        }
        const speed = document.getElementById('speed-slider').max - document.getElementById('speed-slider').value + 200;
        playInterval = setInterval(stepForward, speed);
    } else {
        btn.innerHTML = '\u25B6\uFE0F Reproducir';
        btn.classList.add('success');
        clearInterval(playInterval);
    }
}

function updateUI() {
    renderCode();
    renderVisualization();
    updateMemoryTrace();
    updateEventLog();
    renderConsoleOutput(); 
    updateControls();
}

function updateControls() {
    document.querySelector('.control-btn[onclick="stepBackward()"]').disabled = currentStep === 0;
    document.querySelector('.control-btn[onclick="stepForward()"]').disabled = currentStep === executionSnapshots.length - 1;
}

function renderExamplesList(examplesToRender) {
    const container = document.getElementById('examples-list');
    container.innerHTML = '';
    examplesToRender.forEach((example, index) => {
        const card = document.createElement('div');
        card.className = 'example-card' + (index === 0 ? ' active' : '');
        card.onclick = () => {
            document.querySelectorAll('.example-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            loadExample(example);
        };
        card.innerHTML = `<h3>${example.title}</h3><p>${example.description}</p>`;
        container.appendChild(card);
    });
}

function renderCode() {
    const codeContainer = document.getElementById('code-tab');
    const lines = currentExample.code.split('\n');
    const activeLine = executionSnapshots[currentStep]?.line;
    codeContainer.innerHTML = lines.map((line, index) => {
        const lineNumber = index + 1;
        const isActive = activeLine === lineNumber;
        return `<div class="code-line ${isActive ? 'active' : ''}" data-line="${lineNumber}"><span class="line-number">${lineNumber}</span><span class="code-text">${highlightJava(line)}</span></div>`;
    }).join('');
    const activeElement = codeContainer.querySelector('.code-line.active');
    if(activeElement) activeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function renderConsoleOutput() {
    const consoleContainer = document.getElementById('console-output');
    consoleContainer.innerHTML = ''; 
    for (let i = 0; i <= currentStep; i++) {
        const snapshot = executionSnapshots[i];
        if (snapshot.output) {
            const outputLine = document.createElement('div');
            outputLine.className = 'console-line';
            outputLine.textContent = snapshot.output;
            consoleContainer.appendChild(outputLine);
        }
    }
    consoleContainer.scrollTop = consoleContainer.scrollHeight;
}

function updateMemoryTrace() {
    const snapshot = executionSnapshots[currentStep];
    if (!snapshot) return;

    const stackContainer = document.getElementById('stack-memory');
    const heapContainer = document.getElementById('heap-memory');
    const prevSnapshot = currentStep > 0 ? executionSnapshots[currentStep - 1] : { stack: [], heap: {} };
    
    const prevStackFrames = new Map();
    if (prevSnapshot.stack) {
        prevSnapshot.stack.forEach(frame => prevStackFrames.set(frame.scope, frame));
    }

    stackContainer.innerHTML = (snapshot.stack || []).slice().reverse().map(frame => {
        const prevFrame = prevStackFrames.get(frame.scope);
        const varsHtml = Object.entries(frame.vars || {}).map(([key, value]) => {
            const prevValue = prevFrame?.vars?.[key];
            const changed = !prevFrame || JSON.stringify(prevValue) !== JSON.stringify(value) ? 'changed' : '';
            return `<div class="variable-item ${changed}">
                        <span class="variable-name">${key}</span>
                        <span class="variable-value">${value === null ? 'null' : String(value)}</span>
                    </div>`;
        }).join('');
        return `<div class="stack-frame">
                    <h4>${frame.scope}</h4>
                    <div class="stack-frame-vars">${varsHtml || '<span style="padding: 8px; color: var(--text-secondary); font-style: italic;">Sin variables</span>'}</div>
                </div>`;
    }).join('');
    
    heapContainer.innerHTML = Object.entries(snapshot.heap).map(([ref, obj]) => {
        const prevObj = prevSnapshot.heap[ref];
        const changed = JSON.stringify(prevObj) !== JSON.stringify(obj) ? 'changed' : '';
        const valueStr = JSON.stringify(obj.value || {});
        const displayValue = valueStr === '{}' ? '{}' : valueStr.substring(0, 30) + (valueStr.length > 30 ? '...' : '');
        return `<div class="variable-item ${changed}">
            <span class="variable-name">${ref} [${obj.type}]</span>
            <span class="variable-value">${displayValue}</span>
        </div>`;
    }).join('');
}

function logEvent(message, addToLog = true) {
    if(addToLog) eventLog.push(message);
    updateEventLog();
}

function updateEventLog() {
    const logContainer = document.getElementById('event-log');
    logContainer.innerHTML = eventLog.map(msg => `<div class="log-entry">${msg}</div>`).join('');
    logContainer.scrollTop = logContainer.scrollHeight;
}

function renderVisualization() {
    const container = document.getElementById('visualization');
    container.innerHTML = ''; 
    const renderers = { 'flow': renderFlowDiagram, 'iteration': renderIterationDiagram, 'array': renderArrayVisualization, 'stack': renderDataStructureVisualization, 'queue': renderDataStructureVisualization, 'object': renderObjectVisualization, 'inheritance': renderClassDiagram, 'polymorphism': renderClassDiagram, };
    const renderer = renderers[currentExample.visualType];
    if(renderer) { renderer(container, executionSnapshots[currentStep]); }
}

function renderFlowDiagram(container, snapshot) { container.innerHTML = `<div style="font-family: monospace; font-size: 1.1rem; color: var(--text-secondary);">Flujo de control evaluando línea <strong>${snapshot.line}</strong>...</div>`; }

function renderIterationDiagram(container, snapshot) {
    const topFrame = snapshot.stack[snapshot.stack.length-1];
    const iValue = topFrame.vars.i ?? topFrame.vars.contador ?? topFrame.vars.numero ?? 0;
    container.innerHTML = `<div style="text-align: center;"><p style="font-size: 1.2rem; margin-bottom: 10px;">Variable de control:</p><div class="data-element" style="width: 80px; height: 80px; font-size: 2rem;">${iValue}</div></div>`;
}

function renderArrayVisualization(container, snapshot) {
    const topFrame = snapshot.stack[snapshot.stack.length-1];
    const arrayRef = topFrame.vars.numeros;
    if (!arrayRef || !snapshot.heap[arrayRef]) return;
    const arrayData = snapshot.heap[arrayRef].value;
    const activeIndex = topFrame.vars.i;
    container.innerHTML = `<div class="data-structure">${arrayData.map((val, index) => `<div class="data-element ${index === activeIndex ? 'inserting' : ''}" style="flex-direction: column; width: 70px; height: 70px;"><span style="font-size: 1.2rem;">${val}</span><span style="font-size: 0.8rem; opacity: 0.7;">[${index}]</span></div>`).join('')}</div>`;
}

function renderDataStructureVisualization(container, snapshot) {
    const ref = Object.keys(snapshot.heap)[0]; if (!ref) return;
    const ds = snapshot.heap[ref];
    container.innerHTML = `<div class="data-structure ${ds.type.toLowerCase()}-viz">${ds.value.map(val => `<div class="data-element">${String(val).replace(/"/g, '')}</div>`).join('')}</div>`;
}

function renderObjectVisualization(container, snapshot) {
    const heapHtml = Object.entries(snapshot.heap).map(([ref, obj]) => {
        const propsHtml = obj.value ? Object.entries(obj.value).map(([key, val]) => `<div class="variable-item"><span class="variable-name">${key}</span><span class="variable-value">${val}</span></div>`).join('') : '';
        return `<div class="memory-section" style="width: 250px;"><h3>${ref} [${obj.type}]</h3>${propsHtml}</div>`;
    }).join('<div style="margin: 0 20px; font-size: 2rem; color: var(--text-secondary);">→</div>');
    container.innerHTML = `<div style="display: flex; align-items: center;">${heapHtml || 'Sin objetos en el Heap.'}</div>`;
}

function renderClassDiagram(container, snapshot) {
    let boxes = '';
    if (currentExample.visualType === 'inheritance') {
        boxes = `<div class="class-box"><div class="class-name">Animal</div><div class="class-methods">+ comer()</div></div><div class="inheritance-arrow"></div><div class="class-box"><div class="class-name">Perro</div><div class="class-methods">+ ladrar()</div></div>`;
    } else if (currentExample.visualType === 'polymorphism') {
        boxes = `<div class="class-box"><div class="class-name">Figura</div><div class="class-methods">+ dibujar()</div></div><div style="display: flex; gap: 40px; align-items: center;"><div class="inheritance-arrow"></div><div class="inheritance-arrow"></div></div><div style="display: flex; gap: 20px;"><div class="class-box"><div class="class-name">Circulo</div><div class="class-methods">+ dibujar()</div></div><div class="class-box"><div class="class-name">Cuadrado</div><div class="class-methods">+ dibujar()</div></div></div>`;
    }
    container.innerHTML = `<div class="class-diagram">${boxes}</div>`;
}

function highlightJava(line) {
    const placeholders = []; let placeholderId = 0;
    const tokenize = (token, type) => { const placeholder = `__TOKEN_${placeholderId++}__`; placeholders.push({ placeholder, token, type }); return placeholder; };
    let processedLine = line.replace(/^ +/gm, match => match.replace(/ /g, '&nbsp;'));
    processedLine = processedLine.replace(/(".*?")/g, match => tokenize(match, 'string'));
    processedLine = processedLine.replace(/(\/\/.*$)/g, match => tokenize(match, 'comment'));
    const keywords = ['public', 'class', 'static', 'void', 'int', 'if', 'else', 'for', 'while', 'do', 'return', 'new', 'import', 'extends', 'abstract', 'super', 'this'];
    const types = ['String', 'Stack', 'Queue', 'LinkedList', 'System', 'Coche', 'Animal', 'Perro', 'Figura', 'Circulo', 'Cuadrado'];
    const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
    const typeRegex = new RegExp(`\\b(${types.join('|')})\\b`, 'g');
    processedLine = processedLine.replace(keywordRegex, match => tokenize(match, 'keyword'));
    processedLine = processedLine.replace(typeRegex, match => tokenize(match, 'type'));
    processedLine = processedLine.replace(/\b(\d+)\b/g, match => tokenize(match, 'number'));
    processedLine = processedLine.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    placeholders.forEach(({ placeholder, token, type }) => {
        const escapedToken = token.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        processedLine = processedLine.replace(placeholder, `<span class="hljs-${type}">${escapedToken}</span>`);
    });
    return processedLine;
}