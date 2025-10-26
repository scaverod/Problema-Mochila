// ===============================
// CONFIGURACIÓN Y ESTADO GLOBAL
// ===============================

const STATE = {
    selectedType: null,
    selectedDifficulty: null,
    mode: null,
    difficulty: null,
    items: [],
    knapsack: [],
    capacity: 0,
    timeLimit: 0,
    timeRemaining: 0,
    timerInterval: null,
    sortType: 'benefit',
    sortDirection: 'desc', // 'asc' o 'desc'
    displayedItems: []
};

// Items temáticos con emojis que coinciden
const TECH_ITEMS = [
    { name: 'Laptop', emoji: '💻' },
    { name: 'Teléfono', emoji: '📱' },
    { name: 'Tablet', emoji: '📱' },
    { name: 'Auriculares', emoji: '🎧' },
    { name: 'Reloj Inteligente', emoji: '⌚' },
    { name: 'Cámara', emoji: '📷' },
    { name: 'Monitor', emoji: '🖥️' },
    { name: 'Teclado', emoji: '⌨️' },
    { name: 'Ratón', emoji: '🖱️' },
    { name: 'Consola', emoji: '🎮' }
];

const FOOD_ITEMS = [
    { name: 'Manzana', emoji: '🍎' },
    { name: 'Naranja', emoji: '🍊' },
    { name: 'Plátano', emoji: '🍌' },
    { name: 'Fresa', emoji: '🍓' },
    { name: 'Sandía', emoji: '🍉' },
    { name: 'Piña', emoji: '🍍' },
    { name: 'Limón', emoji: '🍋' },
    { name: 'Mango', emoji: '🥭' },
    { name: 'Cereza', emoji: '🍒' },
    { name: 'Uva', emoji: '🍇' }
];

const GAMING_ITEMS = [
    { name: 'PS5', emoji: '🎮' },
    { name: 'Xbox', emoji: '🎮' },
    { name: 'Nintendo Switch', emoji: '🎮' },
    { name: 'VR Headset', emoji: '🥽' },
    { name: 'Game Pass', emoji: '🎟️' },
    { name: 'Controller', emoji: '🎮' },
    { name: 'Headset Gaming', emoji: '🎧' },
    { name: 'Monitor 144Hz', emoji: '🖥️' },
    { name: 'GPU RTX', emoji: '💻' },
    { name: 'Mousepad', emoji: '🖱️' }
];

const CLOTHING_ITEMS = [
    { name: 'Camiseta', emoji: '👕' },
    { name: 'Pantalón', emoji: '👖' },
    { name: 'Chaqueta', emoji: '🧥' },
    { name: 'Zapatos', emoji: '👟' },
    { name: 'Calcetines', emoji: '🧦' },
    { name: 'Gorro', emoji: '🧢' },
    { name: 'Bufanda', emoji: '🧣' },
    { name: 'Guantes', emoji: '🧤' },
    { name: 'Suéter', emoji: '🧶' },
    { name: 'Cinturón', emoji: '⌛' }
];

const CAMPING_ITEMS = [
    { name: 'Tienda', emoji: '⛺' },
    { name: 'Bolsa Dormir', emoji: '🛏️' },
    { name: 'Linterna', emoji: '🔦' },
    { name: 'Brújula', emoji: '🧭' },
    { name: 'Mapa', emoji: '🗺️' },
    { name: 'Cuerda', emoji: '🪢' },
    { name: 'Navaja Suiza', emoji: '🔪' },
    { name: 'Botella Agua', emoji: '🧉' },
    { name: 'Mochila', emoji: '🎒' },
    { name: 'Binoculares', emoji: '🔭' }
];

const SPORTS_ITEMS = [
    { name: 'Pelota Fútbol', emoji: '⚽' },
    { name: 'Raqueta Tenis', emoji: '🎾' },
    { name: 'Baloncesto', emoji: '🏀' },
    { name: 'Patineta', emoji: '🛹' },
    { name: 'Bicicleta', emoji: '🚴' },
    { name: 'Casco', emoji: '🏍️' },
    { name: 'Guantes Boxeo', emoji: '🥊' },
    { name: 'Zapatillas Deporte', emoji: '👟' },
    { name: 'Malla Deporte', emoji: '⛹️' },
    { name: 'Bote Proteína', emoji: '🥤' }
];

const MUSIC_ITEMS = [
    { name: 'Guitarra', emoji: '🎸' },
    { name: 'Teclado', emoji: '🎹' },
    { name: 'Micrófono', emoji: '🎤' },
    { name: 'Auriculares Pro', emoji: '🎧' },
    { name: 'Amplificador', emoji: '🔊' },
    { name: 'Batería', emoji: '🥁' },
    { name: 'Bajo', emoji: '🎸' },
    { name: 'Violín', emoji: '🎻' },
    { name: 'Flauta', emoji: '🪈' },
    { name: 'Pedal Efectos', emoji: '🎚️' }
];

const TRAVEL_ITEMS = [
    { name: 'Pasaporte', emoji: '🛂' },
    { name: 'Maleta', emoji: '🧳' },
    { name: 'Cámara Viaje', emoji: '📷' },
    { name: 'Mapa Mundo', emoji: '🗺️' },
    { name: 'Gafas Sol', emoji: '😎' },
    { name: 'Bloqueador Solar', emoji: '🧴' },
    { name: 'Botella Térmica', emoji: '🧊' },
    { name: 'Adaptador Viaje', emoji: '🔌' },
    { name: 'Almohada Cuello', emoji: '🛏️' },
    { name: 'Pulsera Viaje', emoji: '⌚' }
];

const OFFICE_ITEMS = [
    { name: 'Laptop', emoji: '💻' },
    { name: 'Monitor', emoji: '🖥️' },
    { name: 'Escritorio', emoji: '🪑' },
    { name: 'Impresora', emoji: '🖨️' },
    { name: 'Archivador', emoji: '🗄️' },
    { name: 'Bolígrafos Set', emoji: '✏️' },
    { name: 'Cuaderno', emoji: '📓' },
    { name: 'Lámpara Escritorio', emoji: '💡' },
    { name: 'Teléfono Oficina', emoji: '☎️' },
    { name: 'Planta Oficina', emoji: '🌱' }
];

const ICONS = ['🎁', '📱', '💻', '📚', '⌚', '🎧', '🎮', '📷', '💎', '🔧', '🎨', '⚽', '🧸', '🏀', '📺'];

const DIFFICULTY_CONFIG = {
    easy: { time: 60, name: 'Fácil' },
    medium: { time: 60, name: 'Medio' },
    hard: { time: 60, name: 'Difícil' }
};

const ITEM_NAMES = [
    'Laptop', 'Teléfono', 'Tablet', 'Auriculares', 'Reloj Inteligente',
    'Cámara', 'Libro', 'Botella', 'Linterna', 'Mapa',
    'Navaja Suiza', 'Mochila Extra', 'Brújula', 'Cuerda', 'Tienda'
];

// ===============================
// INICIALIZACIÓN
// ===============================

document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
});

function setupEventListeners() {
    // Menú
    document.querySelectorAll('.type-btn').forEach(btn => {
        btn.addEventListener('click', selectType);
    });

    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.addEventListener('click', selectDifficulty);
    });

    document.getElementById('start-btn').addEventListener('click', startGame);
    document.getElementById('help-button').addEventListener('click', showInfo);
    
    // Back buttons
    const backButtons = document.querySelectorAll('#back-btn, #back-btn-info');
    backButtons.forEach(btn => {
        if (btn) btn.addEventListener('click', backToMenu);
    });

    // Inicializar estado del botón de inicio
    updateStartButton();

    // Juego
    const quitButtons = document.querySelectorAll('#quit-btn, #quit-btn-header');
    quitButtons.forEach(btn => {
        if (btn) btn.addEventListener('click', showQuitModal);
    });
    document.getElementById('stop-btn').addEventListener('click', endGame);
    document.getElementById('confirm-quit-btn').addEventListener('click', confirmQuit);
    document.getElementById('cancel-quit-btn').addEventListener('click', closeQuitModal);

    // Resultados
    document.getElementById('replay-btn').addEventListener('click', startGame);
    document.getElementById('menu-btn').addEventListener('click', backToMenu);
}

// ===============================
// PANTALLA DE MENÚ
// ===============================

function selectType(e) {
    document.querySelectorAll('.type-btn').forEach(btn => btn.classList.remove('active'));
    e.target.closest('.type-btn').classList.add('active');
    STATE.selectedType = e.target.closest('.type-btn').dataset.type;
    updateStartButton();
}

function selectDifficulty(e) {
    document.querySelectorAll('.difficulty-btn').forEach(btn => btn.classList.remove('active'));
    e.target.closest('.difficulty-btn').classList.add('active');
    STATE.selectedDifficulty = e.target.closest('.difficulty-btn').dataset.difficulty;
    updateStartButton();
}

function updateStartButton() {
    const startBtn = document.getElementById('start-btn');
    
    if (STATE.selectedType && STATE.selectedDifficulty) {
        startBtn.disabled = false;
    } else {
        startBtn.disabled = true;
    }
}

function showInfo() {
    switchScreen('info-screen');
    
    // Setup scroll indicator
    setTimeout(() => {
        const infoContainer = document.querySelector('.info-container');
        const scrollIndicator = document.getElementById('scroll-indicator');
        
        if (infoContainer && scrollIndicator) {
            // Hide on any scroll
            const hideOnScroll = () => {
                scrollIndicator.classList.add('hidden');
                infoContainer.removeEventListener('scroll', hideOnScroll);
            };
            
            infoContainer.addEventListener('scroll', hideOnScroll);
        }
    }, 100);
}

function backToMenu() {
    switchScreen('menu-screen');
}

// ===============================
// LÓGICA DEL JUEGO
// ===============================

function startGame() {
    // Generar problema aleatorio
    STATE.currentProblem = generateProblem(STATE.selectedType);
    STATE.knapsackItems = [];
    STATE.gameActive = true;
    STATE.timeRemaining = DIFFICULTY_CONFIG[STATE.selectedDifficulty].time;
    STATE.gameStartTime = Date.now();

    // Mostrar pantalla de juego
    switchScreen('game-screen');

    // Actualizar información del problema
    document.getElementById('problem-name').textContent = STATE.currentProblem.name;

    // Renderizar items PRIMERO
    renderItems();

    // Inicializar botones de ordenar DESPUÉS de renderizar
    initSortButtons();

    // Actualizar apariencia de botones
    updateSortButtons();

    // Configurar mochila
    setupKnapsack();

    // Mostrar información del problema
    showProblemInfo();

    // Iniciar temporizador
    startTimer();

    // Setup drag and drop
    setupDragAndDrop();
}

function generateProblem(type) {
    const numItems = Math.floor(Math.random() * 5) + 8; // 8-12 items
    const maxWeight = Math.floor(Math.random() * 15) + 20; // 20-35 peso máximo

    // Definir temáticas por nombre de problema
    const themesByName = {
        'Tecnología': TECH_ITEMS,
        'Gaming': GAMING_ITEMS,
        'Ropa': CLOTHING_ITEMS,
        'Camping': CAMPING_ITEMS,
        'Deportes': SPORTS_ITEMS,
        'Música': MUSIC_ITEMS,
        'Viaje': TRAVEL_ITEMS,
        'Oficina': OFFICE_ITEMS,
        'Frutas': FOOD_ITEMS,
        'Comida Rápida': FOOD_ITEMS,
        'Postre': FOOD_ITEMS,
        'Bebidas': FOOD_ITEMS,
        'Snacks': FOOD_ITEMS,
        'Dulces': FOOD_ITEMS
    };

    // Nombres de problemas según tipo
    const binaryNames = ['Tecnología', 'Gaming', 'Ropa', 'Camping', 'Deportes', 'Música', 'Viaje', 'Oficina'];
    const multipleNames = ['Frutas', 'Comida Rápida', 'Postre', 'Bebidas', 'Snacks', 'Dulces'];
    
    const namesArray = type === 'binary' ? binaryNames : multipleNames;
    const problemName = namesArray[Math.floor(Math.random() * namesArray.length)];
    
    // Obtener la temática correcta según el nombre
    const itemsTheme = themesByName[problemName];
    
    // Barajar los items de la temática
    const shuffledItems = [...itemsTheme].sort(() => Math.random() - 0.5);
    
    // Tomar solo los items necesarios
    const selectedItems = shuffledItems.slice(0, numItems);

    const items = [];
    selectedItems.forEach((item, i) => {
        const weight = Math.floor(Math.random() * 8) + 2; // 2-10 peso
        const benefit = Math.floor(Math.random() * 15) + 5; // 5-20 beneficio
        const maxUnits = type === 'binary' ? 1 : Math.floor(Math.random() * 5) + 1; // 1 para binaria, 1-5 para múltiple

        items.push({
            id: i,
            name: item.name,
            icon: item.emoji,
            weight,
            benefit,
            maxUnits,
            ratio: (benefit / weight).toFixed(2)
        });
    });

    return {
        type,
        items,
        maxWeight,
        numItems,
        name: problemName
    };
}

function renderItems() {
    const itemsList = document.getElementById('items-list');
    itemsList.innerHTML = '';

    // Obtener items y ordenarlos (igual para ambos modos)
    let itemsToDisplay = [...STATE.currentProblem.items];
    itemsToDisplay = sortItems(itemsToDisplay, STATE.sortType, STATE.sortDirection);
    STATE.displayedItems = itemsToDisplay;

    itemsToDisplay.forEach(item => {
        const itemElement = createItemElement(item);
        // Marcar como deshabilitado en modo binario si ya está en la mochila
        if (STATE.selectedType === 'binary' && STATE.knapsackItems.some(ki => ki.id === item.id)) {
            itemElement.classList.add('disabled');
            itemElement.draggable = false;
        }
        itemsList.appendChild(itemElement);
    });
}

function updateSortButtons() {
    document.querySelectorAll('.sort-btn').forEach(btn => {
        const isActive = btn.dataset.sort === STATE.sortType;
        btn.classList.toggle('active', isActive);
        
        if (isActive) {
            const arrow = STATE.sortDirection === 'asc' ? '↑' : '↓';
            const label = STATE.sortType === 'benefit' ? 'Beneficio' : 'Peso';
            btn.textContent = `${label} ${arrow}`;
        } else {
            // Reset to default text for inactive buttons
            const label = btn.dataset.sort === 'benefit' ? 'Beneficio' : 'Peso';
            const defaultDirection = btn.dataset.direction;
            const arrow = defaultDirection === 'asc' ? '↑' : '↓';
            btn.textContent = `${label} ${arrow}`;
        }
    });
}

function initSortButtons() {
    // Remover listeners anteriores clonando cada botón
    document.querySelectorAll('.sort-btn').forEach(btn => {
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
    });
    
    // Añadir nuevos listeners
    document.querySelectorAll('.sort-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const clickedSort = btn.dataset.sort;
            
            // Si es el mismo botón, cambiar dirección
            if (STATE.sortType === clickedSort) {
                STATE.sortDirection = STATE.sortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                // Si es otro botón, cambiar al tipo y usar su dirección por defecto
                STATE.sortType = clickedSort;
                STATE.sortDirection = btn.dataset.direction;
            }
            
            // Actualizar botones visualmente
            updateSortButtons();
            
            // Re-renderizar items
            renderItems();
        });
    });
}

function sortItems(items, sortType, direction) {
    const sorted = [...items];
    
    switch(sortType) {
        case 'weight':
            return direction === 'asc' 
                ? sorted.sort((a, b) => a.weight - b.weight)
                : sorted.sort((a, b) => b.weight - a.weight);
        case 'benefit':
            return direction === 'asc'
                ? sorted.sort((a, b) => a.benefit - b.benefit)
                : sorted.sort((a, b) => b.benefit - a.benefit);
        default:
            return sorted;
    }
}

function createItemElement(item) {
    const div = document.createElement('div');
    div.className = 'item';
    div.draggable = true;
    div.dataset.itemId = item.id;

    // En modo múltiple, mostrar cantidad disponible
    let availableQuantity = item.maxUnits;
    if (STATE.selectedType === 'multiple') {
        // Restar las unidades que ya están en la mochila
        const usedQuantity = STATE.knapsackItems.find(ki => ki.id === item.id)?.quantity || 0;
        availableQuantity = item.maxUnits - usedQuantity;
    }

    const quantityHtml = STATE.selectedType === 'multiple' 
        ? `<span class="item-quantity ${availableQuantity === 0 ? 'disabled' : ''}">×${availableQuantity}</span>` 
        : '';

    // Desabilitar si no hay unidades disponibles
    const isDisabled = STATE.selectedType === 'multiple' && availableQuantity === 0;
    if (isDisabled) {
        div.classList.add('disabled');
        div.draggable = false;
    }

    div.innerHTML = `
        <div class="item-icon">${item.icon}</div>
        <div class="item-details">
            <div class="item-name">${item.name}</div>
            <div class="item-stats">
                <div class="item-stat">
                    <span>⚖️</span>
                    <span>${item.weight}kg</span>
                </div>
                <div class="item-stat">
                    <span>💰</span>
                    <span>${item.benefit}</span>
                </div>
                <div class="item-stat">
                    <span>📊</span>
                    <span>${item.ratio}</span>
                </div>
            </div>
        </div>
        ${quantityHtml}
    `;

    return div;
}

function setupKnapsack() {
    const knapsack = document.getElementById('knapsack');
    knapsack.dataset.maxWeight = STATE.currentProblem.maxWeight;
    knapsack.innerHTML = '';
    updateKnapsackDisplay();
}

function setupDragAndDrop() {
    const itemsList = document.getElementById('items-list');
    const knapsack = document.getElementById('knapsack');

    itemsList.addEventListener('dragstart', handleDragStart);
    itemsList.addEventListener('dragend', handleDragEnd);

    knapsack.addEventListener('dragover', handleDragOver);
    knapsack.addEventListener('drop', handleDrop);
}

function handleDragStart(e) {
    if (e.target.classList.contains('item')) {
        e.target.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'copy';
        e.dataTransfer.setData('itemId', e.target.dataset.itemId);
    }
}

function handleDragEnd(e) {
    if (e.target.classList.contains('item')) {
        e.target.classList.remove('dragging');
    }
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
}

function handleDrop(e) {
    e.preventDefault();

    if (!STATE.gameActive) return;

    const itemId = parseInt(e.dataTransfer.getData('itemId'));
    const item = STATE.currentProblem.items[itemId];
    const knapsack = document.getElementById('knapsack');

    // Calcular peso actual
    const currentWeight = calculateKnapsackWeight();
    const remainingWeight = STATE.currentProblem.maxWeight - currentWeight;

    // Verificar si cabe
    if (item.weight > remainingWeight) {
        showWeightWarning();
        return;
    }

    // Agregar item
    if (STATE.selectedType === 'binary') {
        // Verificar si ya existe
        if (STATE.knapsackItems.some(ki => ki.id === itemId)) {
            return;
        }
        STATE.knapsackItems.push({ ...item, quantity: 1 });
        // En modo binario, actualizar renderItems para deshabilitarlo
        renderItems();
        updateSortButtons();
    } else {
        // Múltiple: agregar 1 unidad más
        const existingItem = STATE.knapsackItems.find(ki => ki.id === itemId);
        if (existingItem) {
            if (existingItem.quantity < item.maxUnits) {
                existingItem.quantity++;
            }
        } else {
            STATE.knapsackItems.push({ ...item, quantity: 1 });
        }
        // En modo múltiple, actualizar renderItems para actualizar cantidad disponible
        renderItems();
        updateSortButtons();
    }

    updateKnapsackDisplay();
}

function updateKnapsackDisplay() {
    const knapsack = document.getElementById('knapsack');
    knapsack.innerHTML = '';

    if (STATE.knapsackItems.length === 0) {
        knapsack.innerHTML = '<p style="color: var(--text-light); text-align: center; width: 100%; padding: 50px 0;">Arrastra items aquí</p>';
    } else {
        STATE.knapsackItems.forEach(item => {
            const div = document.createElement('div');
            div.className = 'knapsack-item';
            div.innerHTML = `
                <span class="knapsack-item-icon">${item.icon}</span>
                <span>${item.name}</span>
                ${STATE.selectedType === 'multiple' ? `<span style="margin-left: auto; margin-right: 10px;">×${item.quantity}</span>` : ''}
                <span class="knapsack-item-remove" onclick="removeFromKnapsack(${item.id})">✕</span>
            `;
            knapsack.appendChild(div);
        });
    }

    // Actualizar estadísticas
    const weight = calculateKnapsackWeight();
    const benefit = calculateKnapsackBenefit();
    const maxWeight = STATE.currentProblem.maxWeight;

    document.getElementById('current-weight').textContent = weight;
    document.getElementById('max-weight').textContent = maxWeight;
    document.getElementById('current-benefit').textContent = benefit;

    // Mostrar/ocultar advertencia
    if (weight >= maxWeight) {
        knapsack.classList.add('full');
        document.getElementById('weight-warning').classList.remove('hidden');
    } else {
        knapsack.classList.remove('full');
        document.getElementById('weight-warning').classList.add('hidden');
    }
}

function removeFromKnapsack(itemId) {
    const index = STATE.knapsackItems.findIndex(item => item.id === itemId);
    if (index > -1) {
        if (STATE.selectedType === 'multiple' && STATE.knapsackItems[index].quantity > 1) {
            STATE.knapsackItems[index].quantity--;
        } else {
            STATE.knapsackItems.splice(index, 1);
        }
        // En ambos modos, actualizar renderItems para reflejar cambios
        renderItems();
        updateSortButtons();
        updateKnapsackDisplay();
    }
}

function calculateKnapsackWeight() {
    return STATE.knapsackItems.reduce((total, item) => {
        return total + (item.weight * (item.quantity || 1));
    }, 0);
}

function calculateKnapsackBenefit() {
    return STATE.knapsackItems.reduce((total, item) => {
        return total + (item.benefit * (item.quantity || 1));
    }, 0);
}

function showWeightWarning() {
    const warning = document.getElementById('weight-warning');
    warning.classList.remove('hidden');
    setTimeout(() => {
        warning.classList.add('hidden');
    }, 2000);
}

function showProblemInfo() {
    const problemInfo = document.getElementById('problem-info');
    const { maxWeight, items } = STATE.currentProblem;

    let html = `
        <div class="info-stat">
            <div class="info-stat-label">Peso Máximo</div>
            <div class="info-stat-value">${maxWeight} kg</div>
        </div>
        <div class="info-stat">
            <div class="info-stat-label">Número de Items</div>
            <div class="info-stat-value">${items.length}</div>
        </div>
        <div class="info-stat">
            <div class="info-stat-label">Tipo de Problema</div>
            <div class="info-stat-value">${STATE.selectedType === 'binary' ? 'Binaria' : 'Múltiple'}</div>
        </div>
        <div class="items-breakdown">
            <h4>Items Disponibles:</h4>
            ${items.map(item => `
                <div class="item-break">
                    <span>${item.icon} ${item.name}</span>
                    <span>P:${item.weight} B:${item.benefit}</span>
                </div>
            `).join('')}
        </div>
    `;

    problemInfo.innerHTML = html;
}

// ===============================
// TEMPORIZADOR
// ===============================

function startTimer() {
    if (STATE.timerInterval) clearInterval(STATE.timerInterval);

    STATE.timerInterval = setInterval(() => {
        STATE.timeRemaining--;
        updateTimerDisplay();

        if (STATE.timeRemaining <= 0) {
            clearInterval(STATE.timerInterval);
            endGame();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerEl = document.getElementById('timer');
    const timerDisplay = document.querySelector('.timer-display');
    timerEl.textContent = `${STATE.timeRemaining}s`;

    // Solo activar animación de peligro cuando quedan MENOS de 10 segundos
    if (STATE.timeRemaining < 10 && STATE.timeRemaining > 0) {
        timerEl.classList.add('danger');
        timerDisplay.classList.add('danger');
    } else {
        timerEl.classList.remove('danger');
        timerDisplay.classList.remove('danger');
    }
}

function stopTimer() {
    if (STATE.timerInterval) {
        clearInterval(STATE.timerInterval);
        STATE.timerInterval = null;
    }
}

// ===============================
// FIN DEL JUEGO
// ===============================

function endGame() {
    STATE.gameActive = false;
    stopTimer();

    // Mostrar pantalla de computación con GRASP
    showGRASPComputation();
}

function showGRASPComputation() {
    // Crear pantalla de ejecución del algoritmo
    const computationScreen = document.createElement('div');
    computationScreen.id = 'grasp-computation';
    computationScreen.className = 'screen active';
    computationScreen.style.display = 'flex';
    computationScreen.style.flexDirection = 'column';
    computationScreen.style.justifyContent = 'center';
    computationScreen.style.alignItems = 'center';
    computationScreen.style.gap = '30px';
    
    computationScreen.innerHTML = `
        <div style="text-align: center;">
            <h1 style="font-size: 2.5rem; margin-bottom: 20px; color: var(--primary-color);">⚔️ COMPITIENDO CON LA MÁQUINA...</h1>
            <p style="font-size: 1.2rem; color: var(--text-light); margin-bottom: 30px;">Ejecutando algoritmo GRASP...</p>
            
            <div id="console-output" style="
                background: #000;
                color: #0f0;
                padding: 20px;
                border-radius: 10px;
                font-family: 'Courier New', monospace;
                max-width: 600px;
                min-height: 200px;
                text-align: left;
                font-size: 0.9rem;
                line-height: 1.6;
                box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
                border: 2px solid #0f0;
                margin: 0 auto;
            "></div>
        </div>
    `;
    
    // Agregar a la pantalla (reemplazar la actual)
    const screens = document.querySelectorAll('.screen');
    screens.forEach(s => s.classList.remove('active'));
    document.body.appendChild(computationScreen);
    
    // Simular ejecución de GRASP con texto en consola
    simulateGRASPExecution();
}

function simulateGRASPExecution() {
    const consoleOutput = document.getElementById('console-output');
    let iteration = 0;
    const maxIterations = 10;
    
    const printToConsole = (text) => {
        consoleOutput.innerHTML += text + '<br>';
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
    };
    
    printToConsole('$ grasp-knapsack --iterations=10');
    printToConsole('$ Inicializando algoritmo GRASP...');
    printToConsole('');
    
    const interval = setInterval(() => {
        iteration++;
        const alpha = getAlphaByDifficulty();
        printToConsole(`[Iteración ${iteration}/${maxIterations}] α=${alpha.toFixed(3)} - Buscando solución...`);
        
        if (iteration >= maxIterations) {
            clearInterval(interval);
            printToConsole('');
            printToConsole('✓ GRASP finalizado');
            printToConsole('$ Calculando solución óptima...');
            
            // Ejecutar GRASP real y mostrar resultados
            setTimeout(() => {
                const graspSolution = calculateGRASPSolution();
                const greedySolution = calculateGreedySolution();
                
                // Remover pantalla de computación
                const computationScreen = document.getElementById('grasp-computation');
                if (computationScreen) computationScreen.remove();
                
                // Mostrar resultados
                showResults(graspSolution);
            }, 1500);
        }
    }, 400);
}

function calculateGreedySolution() {
    const { items, maxWeight, type } = STATE.currentProblem;

    // Ordenar items por ratio beneficio/peso de mayor a menor
    const sortedItems = [...items].sort((a, b) => b.ratio - a.ratio);

    let knapsackWeight = 0;
    let knapsackBenefit = 0;
    const selectedItems = [];

    sortedItems.forEach(item => {
        if (type === 'binary') {
            // Versión binaria
            if (knapsackWeight + item.weight <= maxWeight) {
                selectedItems.push({ ...item, quantity: 1 });
                knapsackWeight += item.weight;
                knapsackBenefit += item.benefit;
            }
        } else {
            // Versión múltiple
            let canAdd = true;
            let quantity = 0;

            while (canAdd && quantity < item.maxUnits) {
                if (knapsackWeight + item.weight <= maxWeight) {
                    knapsackWeight += item.weight;
                    knapsackBenefit += item.benefit;
                    quantity++;
                } else {
                    canAdd = false;
                }
            }

            if (quantity > 0) {
                selectedItems.push({ ...item, quantity });
            }
        }
    });

    return {
        items: selectedItems,
        weight: knapsackWeight,
        benefit: knapsackBenefit
    };
}

// ===============================
// ALGORITMO GRASP (Greedy Randomized Adaptive Search Procedure)
// ===============================

function getAlphaByDifficulty() {
    // Alpha define qué tan aleatorio es el algoritmo
    // Fácil: 0-0.4 (más aletatorio)
    // Medio: 0.4-0.75 (medio)
    // Difícil: 0.75-1 (más determinístico, casi voraz puro)
    
    switch(STATE.selectedDifficulty) {
        case 'easy':
            return Math.random() * 0.4; // 0 a 0.4
        case 'medium':
            return 0.4 + Math.random() * 0.35; // 0.4 a 0.75
        case 'hard':
            return 0.75 + Math.random() * 0.25; // 0.75 a 1
        default:
            return 0.5;
    }
}

function calculateGRASPSolution() {
    const { items, maxWeight, type } = STATE.currentProblem;
    const iterations = 10;
    let bestSolution = {
        items: [],
        weight: 0,
        benefit: 0
    };

    // 10 iteraciones del GRASP
    for (let iter = 0; iter < iterations; iter++) {
        const alpha = getAlphaByDifficulty();
        const solution = graspIteration(items, maxWeight, type, alpha);
        
        // Mantener la mejor solución encontrada
        if (solution.benefit > bestSolution.benefit) {
            bestSolution = { ...solution };
        }
    }

    return bestSolution;
}

function graspIteration(items, maxWeight, type, alpha) {
    // Copiar items y calcular ratios
    let candidates = items.map(item => ({
        ...item,
        ratio: item.benefit / item.weight
    }));

    let knapsackWeight = 0;
    let knapsackBenefit = 0;
    const selectedItems = [];
    const usedIds = new Set();
    const usedQuantities = new Map(); // Rastrear cuántas unidades se han usado de cada item

    while (candidates.length > 0) {
        // Filtrar candidatos que aún caben
        let validCandidates = candidates.filter(item => {
            if (type === 'binary') {
                return !usedIds.has(item.id) && (knapsackWeight + item.weight <= maxWeight);
            } else {
                // En múltiple: verificar si aún quedan unidades disponibles y si cabe al menos 1
                const usedQty = usedQuantities.get(item.id) || 0;
                return usedQty < item.maxUnits && (knapsackWeight + item.weight <= maxWeight);
            }
        });

        if (validCandidates.length === 0) break;

        // Encontrar el máximo ratio en candidatos
        const maxRatio = Math.max(...validCandidates.map(c => c.ratio));
        const minRatio = Math.min(...validCandidates.map(c => c.ratio));

        // RCL (Restricted Candidate List): items cuyo ratio está en [minRatio, minRatio + alpha * (maxRatio - minRatio)]
        const threshold = minRatio + alpha * (maxRatio - minRatio);
        const rcl = validCandidates.filter(item => item.ratio >= threshold);

        if (rcl.length === 0) break;

        // Seleccionar aleatoriamente de la RCL
        const selectedItem = rcl[Math.floor(Math.random() * rcl.length)];

        if (type === 'binary') {
            selectedItems.push({ ...selectedItem, quantity: 1 });
            usedIds.add(selectedItem.id);
            knapsackWeight += selectedItem.weight;
            knapsackBenefit += selectedItem.benefit;
        } else {
            // Para múltiple: agregar UNA unidad del item seleccionado
            const usedQty = usedQuantities.get(selectedItem.id) || 0;
            
            // Verificar si cabe 1 unidad más
            if (knapsackWeight + selectedItem.weight <= maxWeight && usedQty < selectedItem.maxUnits) {
                knapsackWeight += selectedItem.weight;
                knapsackBenefit += selectedItem.benefit;
                usedQuantities.set(selectedItem.id, usedQty + 1);
                
                // Agregar o actualizar el item en selectedItems
                const existingItem = selectedItems.find(si => si.id === selectedItem.id);
                if (existingItem) {
                    existingItem.quantity++;
                } else {
                    selectedItems.push({ ...selectedItem, quantity: 1 });
                }
            }
        }
    }

    return {
        items: selectedItems,
        weight: knapsackWeight,
        benefit: knapsackBenefit
    };
}

function showResults(greedySolution) {
    switchScreen('results-screen');

    const yourWeight = calculateKnapsackWeight();
    const yourBenefit = calculateKnapsackBenefit();
    const greedyWeight = greedySolution.weight;
    const greedyBenefit = greedySolution.benefit;

    // Mostrar tu solución
    document.getElementById('your-weight').textContent = yourWeight;
    document.getElementById('your-benefit').textContent = yourBenefit;
    renderSolutionItems('your-items', STATE.knapsackItems);

    // Mostrar solución voraz
    document.getElementById('greedy-weight').textContent = greedyWeight;
    document.getElementById('greedy-benefit').textContent = greedyBenefit;
    renderSolutionItems('greedy-items', greedySolution.items);

    // Comparación
    const comparisonText = document.getElementById('comparison-text');
    let comparison = '';

    if (yourBenefit > greedyBenefit) {
        comparison = `
            <strong>¡Excelente! 🎉</strong> Tu solución es mejor que la del algoritmo voraz.<br>
            Tu beneficio: <strong>${yourBenefit}</strong> vs Voraz: <strong>${greedyBenefit}</strong><br>
            Diferencia: <strong>+${yourBenefit - greedyBenefit}</strong> puntos
        `;
        comparisonText.classList.add('success');
    } else if (yourBenefit === greedyBenefit) {
        comparison = `
            <strong>¡Perfecto! 👏</strong> Encontraste la misma solución que el algoritmo voraz.<br>
            Beneficio: <strong>${yourBenefit}</strong>
        `;
        comparisonText.classList.add('success');
    } else {
        const diff = greedyBenefit - yourBenefit;
        comparison = `
            <strong>Buena intención 💪</strong> El algoritmo voraz encontró una mejor solución.<br>
            Tu beneficio: <strong>${yourBenefit}</strong> vs Voraz: <strong>${greedyBenefit}</strong><br>
            Diferencia: <strong>-${diff}</strong> puntos<br>
            <br>
            <em>Consejo:</em> Observa cómo el algoritmo voraz selecciona items por su ratio beneficio/peso.
        `;
    }

    comparisonText.innerHTML = comparison;
}

function renderSolutionItems(elementId, items) {
    const container = document.getElementById(elementId);
    container.innerHTML = '';

    if (items.length === 0) {
        container.innerHTML = '<p style="color: var(--text-light); text-align: center;">Sin items seleccionados</p>';
        return;
    }

    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'solution-item';
        div.innerHTML = `
            <div class="solution-item-name">${item.icon} ${item.name}</div>
            <div style="display: flex; gap: 10px; align-items: center;">
                ${STATE.selectedType === 'multiple' ? `<span class="solution-item-quantity">×${item.quantity}</span>` : ''}
                <span style="color: var(--text-light); font-size: 0.9rem;">P:${item.weight} B:${item.benefit}</span>
            </div>
        `;
        container.appendChild(div);
    });
}

// ===============================
// MODAL DE CONFIRMACIÓN
// ===============================

function showQuitModal() {
    document.getElementById('quit-modal').classList.remove('hidden');
}

function closeQuitModal() {
    document.getElementById('quit-modal').classList.add('hidden');
}

function confirmQuit() {
    STATE.gameActive = false;
    stopTimer();
    closeQuitModal();
    backToMenu();
}

// ===============================
// UTILIDADES
// ===============================

function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');

    // Limpiar timer si cambio de pantalla
    if (screenId !== 'game-screen') {
        stopTimer();
    }
}
