/**
 * EJEMPLOS DE PROBLEMAS DE MOCHILA
 * Estos son problemas de ejemplo que puedes resolver manualmente
 * para entender mejor el juego
 */

// ============================================
// EJEMPLO 1: MOCHILA BINARIA - NIVEL FÁCIL
// ============================================

const EJEMPLO_1 = {
  tipo: "Binaria",
  emoji: "💻",
  nombre: "Tecnología",
  capacidadMaxima: 15,
  items: [
    { nombre: "Laptop", peso: 3, beneficio: 20, ratio: "6.67", emoji: "💻" },
    { nombre: "Auriculares", peso: 1, beneficio: 5, ratio: "5.00", emoji: "🎧" },
    { nombre: "Libro", peso: 2, beneficio: 9, ratio: "4.50", emoji: "📚" },
    { nombre: "Reloj", peso: 1, beneficio: 6, ratio: "6.00", emoji: "⌚" },
    { nombre: "Cámara", peso: 4, beneficio: 15, ratio: "3.75", emoji: "📷" },
    { nombre: "Botella", peso: 2, beneficio: 7, ratio: "3.50", emoji: "🧴" }
  ],
  solucionVoraz: {
    items: ["Laptop", "Reloj", "Auriculares", "Libro", "Botella"],
    pesoTotal: 9,
    beneficioTotal: 47,
    explicacion: "El algoritmo toma items ordenados por ratio: Laptop (6.67) → Reloj (6.00) → Auriculares (5.00) → Libro (4.50) → Botella (3.50)"
  },
  consejo: "Fíjate en el ratio beneficio/peso, que es la estrategia del algoritmo voraz."
};

// ============================================
// EJEMPLO 2: MOCHILA MÚLTIPLE - NIVEL FÁCIL
// ============================================

const EJEMPLO_2 = {
  tipo: "Múltiple",
  emoji: "🍎",
  nombre: "Frutas",
  capacidadMaxima: 10,
  items: [
    { nombre: "Manzana", peso: 1, beneficio: 3, maxUnidades: 5, ratio: "3.00", emoji: "🍎" },
    { nombre: "Naranja", peso: 2, beneficio: 5, maxUnidades: 3, ratio: "2.50", emoji: "🍊" },
    { nombre: "Sandía", peso: 4, beneficio: 8, maxUnidades: 2, ratio: "2.00", emoji: "🍉" }
  ],
  solucionVoraz: {
    items: [
      { nombre: "Manzana", cantidad: 5, peso: 5, beneficio: 15 },
      { nombre: "Naranja", cantidad: 2, peso: 4, beneficio: 10 }
    ],
    pesoTotal: 9,
    beneficioTotal: 25,
    explicacion: "Toma 5 manzanas (ratio 3.00) = 5kg, luego 2 naranjas (ratio 2.50) = 4kg. No cabe la tercera naranja."
  },
  consejo: "En la versión múltiple puedes repetir items, lo que a veces permite usar mejor el espacio."
};

// ============================================
// EJEMPLO 3: MOCHILA BINARIA - NIVEL MEDIO
// ============================================

const EJEMPLO_3 = {
  tipo: "Binaria",
  emoji: "🎮",
  nombre: "Gaming",
  capacidadMaxima: 25,
  items: [
    { nombre: "Videoconsola", peso: 3, beneficio: 25, ratio: "8.33", emoji: "🎮" },
    { nombre: "Monitor", peso: 5, beneficio: 30, ratio: "6.00", emoji: "🖥️" },
    { nombre: "Teclado", peso: 2, beneficio: 10, ratio: "5.00", emoji: "⌨️" },
    { nombre: "Ratón", peso: 1, beneficio: 5, ratio: "5.00", emoji: "🖱️" },
    { nombre: "Micrófono", peso: 2, beneficio: 12, ratio: "6.00", emoji: "🎤" },
    { nombre: "Webcam", peso: 2, beneficio: 10, ratio: "5.00", emoji: "📹" },
    { nombre: "Cable HDMI", peso: 1, beneficio: 3, ratio: "3.00", emoji: "🔌" },
    { nombre: "Ventilador", peso: 3, beneficio: 8, ratio: "2.67", emoji: "💨" }
  ],
  solucionVoraz: {
    items: ["Videoconsola", "Monitor", "Micrófono", "Teclado", "Ratón", "Webcam"],
    pesoTotal: 15,
    beneficioTotal: 92,
    explicacion: "Ordena por ratio y va tomando: Videoconsola (8.33) → Monitor (6.00) → Micrófono (6.00) → Teclado (5.00) → Ratón (5.00) → Webcam (5.00)"
  },
  consejo: "Cuando hay empates en ratio, el orden también importa. Nota que el Cable HDMI no cabe."
};

// ============================================
// EJEMPLO 4: CASO DONDE VORAZ FALLA
// ============================================

const EJEMPLO_4_VORAZ_FALLA = {
  tipo: "Binaria",
  emoji: "⚠️",
  nombre: "Caso Especial",
  capacidadMaxima: 10,
  items: [
    { nombre: "A", peso: 6, beneficio: 30, ratio: "5.00", emoji: "🔴" },
    { nombre: "B", peso: 4, beneficio: 15, ratio: "3.75", emoji: "🟠" },
    { nombre: "C", peso: 3, beneficio: 10, ratio: "3.33", emoji: "🟡" },
    { nombre: "D", peso: 3, beneficio: 10, ratio: "3.33", emoji: "🟢" }
  ],
  solucionVoraz: {
    items: ["A"],
    pesoTotal: 6,
    beneficioTotal: 30,
    explicacion: "Voraz toma A (peso 6, beneficio 30), luego no cabe B (peso 4 + 6 = 10 exacto)"
  },
  solucionOptima: {
    items: ["B", "C", "D"],
    pesoTotal: 10,
    beneficioTotal: 35,
    explicacion: "La solución óptima es B+C+D (peso 10, beneficio 35) que es mejor que A (beneficio 30)"
  },
  advertencia: "⚠️ El algoritmo voraz NO siempre encuentra la solución óptima. ¡Aquí te sale mejor!"
};

// ============================================
// SOLUCIONES PASO A PASO
// ============================================

console.log("🎒 EJEMPLOS DE PROBLEMAS DE MOCHILA");
console.log("====================================\n");

console.log("EJEMPLO 1: Mochila Binaria Fácil");
console.log("Capacidad: " + EJEMPLO_1.capacidadMaxima + " kg");
console.log("Items:");
EJEMPLO_1.items.forEach(item => {
  console.log(`  ${item.nombre}: P=${item.peso}kg B=${item.beneficio} (Ratio=${item.ratio})`);
});
console.log("\nSolución Voraz: " + EJEMPLO_1.solucionVoraz.items.join(" + "));
console.log("Peso: " + EJEMPLO_1.solucionVoraz.pesoTotal + " kg");
console.log("Beneficio: " + EJEMPLO_1.solucionVoraz.beneficioTotal);
console.log("---\n");

console.log("EJEMPLO 4: CASO DONDE VORAZ FALLA");
console.log("Capacidad: " + EJEMPLO_4_VORAZ_FALLA.capacidadMaxima + " kg");
console.log("Items:");
EJEMPLO_4_VORAZ_FALLA.items.forEach(item => {
  console.log(`  ${item.nombre}: P=${item.peso}kg B=${item.beneficio} (Ratio=${item.ratio})`);
});
console.log("\nSolución Voraz: " + EJEMPLO_4_VORAZ_FALLA.solucionVoraz.items.join(" + "));
console.log("Peso: " + EJEMPLO_4_VORAZ_FALLA.solucionVoraz.pesoTotal + " kg");
console.log("Beneficio: " + EJEMPLO_4_VORAZ_FALLA.solucionVoraz.beneficioTotal);
console.log("\nSolución Óptima: " + EJEMPLO_4_VORAZ_FALLA.solucionOptima.items.join(" + "));
console.log("Peso: " + EJEMPLO_4_VORAZ_FALLA.solucionOptima.pesoTotal + " kg");
console.log("Beneficio: " + EJEMPLO_4_VORAZ_FALLA.solucionOptima.beneficioTotal);
console.log("\n⚠️ " + EJEMPLO_4_VORAZ_FALLA.advertencia);

// ============================================
// MÁS EJEMPLOS VARIADOS CON MÁS ELEMENTOS
// ============================================

// Ejemplos Binarios con muchos elementos
const EJEMPLO_5 = {
  tipo: "Binaria",
  emoji: "👕",
  nombre: "Ropa Variada",
  capacidadMaxima: 25,
  items: [
    { nombre: "Camiseta", peso: 1, beneficio: 4, ratio: "4.00", emoji: "👕" },
    { nombre: "Pantalón", peso: 2, beneficio: 8, ratio: "4.00", emoji: "👖" },
    { nombre: "Zapatos", peso: 2, beneficio: 7, ratio: "3.50", emoji: "👟" },
    { nombre: "Chaqueta", peso: 3, beneficio: 12, ratio: "4.00", emoji: "🧥" },
    { nombre: "Gorro", peso: 1, beneficio: 3, ratio: "3.00", emoji: "🧢" },
    { nombre: "Calcetines", peso: 1, beneficio: 2, ratio: "2.00", emoji: "🧦" },
    { nombre: "Bufanda", peso: 1, beneficio: 5, ratio: "5.00", emoji: "🧣" },
    { nombre: "Cinturón", peso: 1, beneficio: 3, ratio: "3.00", emoji: "⛓️" },
    { nombre: "Medias", peso: 1, beneficio: 2, ratio: "2.00", emoji: "🧦" },
    { nombre: "Guantes", peso: 1, beneficio: 4, ratio: "4.00", emoji: "🧤" }
  ]
};

const EJEMPLO_6 = {
  tipo: "Binaria",
  emoji: "🏕️",
  nombre: "Camping Aventura",
  capacidadMaxima: 30,
  items: [
    { nombre: "Tienda", peso: 4, beneficio: 18, ratio: "4.50", emoji: "⛺" },
    { nombre: "Linterna", peso: 1, beneficio: 6, ratio: "6.00", emoji: "🔦" },
    { nombre: "Brújula", peso: 1, beneficio: 5, ratio: "5.00", emoji: "🧭" },
    { nombre: "Cuerda", peso: 2, beneficio: 7, ratio: "3.50", emoji: "🪢" },
    { nombre: "Navaja Suiza", peso: 1, beneficio: 9, ratio: "9.00", emoji: "🔪" },
    { nombre: "Mapa", peso: 1, beneficio: 5, ratio: "5.00", emoji: "🗺️" },
    { nombre: "Mochila", peso: 2, beneficio: 10, ratio: "5.00", emoji: "🎒" },
    { nombre: "Bolsa Dormir", peso: 3, beneficio: 12, ratio: "4.00", emoji: "🛏️" },
    { nombre: "Cantimplora", peso: 1, beneficio: 4, ratio: "4.00", emoji: "🧃" },
    { nombre: "Botiquín", peso: 1, beneficio: 8, ratio: "8.00", emoji: "🏥" }
  ]
};

const EJEMPLO_7 = {
  tipo: "Binaria",
  emoji: "🎵",
  nombre: "Equipo Musical",
  capacidadMaxima: 22,
  items: [
    { nombre: "Guitarra", peso: 3, beneficio: 20, ratio: "6.67", emoji: "🎸" },
    { nombre: "Micrófono", peso: 1, beneficio: 8, ratio: "8.00", emoji: "🎤" },
    { nombre: "Auriculares", peso: 1, beneficio: 6, ratio: "6.00", emoji: "🎧" },
    { nombre: "Pedal", peso: 2, beneficio: 10, ratio: "5.00", emoji: "🎹" },
    { nombre: "Plectro", peso: 0, beneficio: 1, ratio: "Infinito", emoji: "🎼" },
    { nombre: "Cable", peso: 1, beneficio: 3, ratio: "3.00", emoji: "🔌" },
    { nombre: "Soporte", peso: 1, beneficio: 5, ratio: "5.00", emoji: "🎪" },
    { nombre: "Sintetizador", peso: 4, beneficio: 22, ratio: "5.50", emoji: "⌨️" },
    { nombre: "Amplificador", peso: 3, beneficio: 15, ratio: "5.00", emoji: "📢" }
  ]
};

const EJEMPLO_8 = {
  tipo: "Binaria",
  emoji: "🍕",
  nombre: "Comida Rápida",
  capacidadMaxima: 20,
  items: [
    { nombre: "Pizza", peso: 3, beneficio: 12, ratio: "4.00", emoji: "🍕" },
    { nombre: "Hamburguesa", peso: 2, beneficio: 10, ratio: "5.00", emoji: "🍔" },
    { nombre: "Hot Dog", peso: 1, beneficio: 5, ratio: "5.00", emoji: "🌭" },
    { nombre: "Papas Fritas", peso: 1, beneficio: 4, ratio: "4.00", emoji: "🍟" },
    { nombre: "Refresco", peso: 1, beneficio: 3, ratio: "3.00", emoji: "🥤" },
    { nombre: "Sándwich", peso: 1, beneficio: 4, ratio: "4.00", emoji: "🥪" },
    { nombre: "Pollo Frito", peso: 2, beneficio: 9, ratio: "4.50", emoji: "🍗" },
    { nombre: "Taco", peso: 1, beneficio: 4, ratio: "4.00", emoji: "🌮" },
    { nombre: "Alitas", peso: 1, beneficio: 5, ratio: "5.00", emoji: "🍖" }
  ]
};

const EJEMPLO_9 = {
  tipo: "Binaria",
  emoji: "📚",
  nombre: "Biblioteca Portátil",
  capacidadMaxima: 26,
  items: [
    { nombre: "Diccionario", peso: 3, beneficio: 14, ratio: "4.67", emoji: "📚" },
    { nombre: "Novela", peso: 2, beneficio: 8, ratio: "4.00", emoji: "📖" },
    { nombre: "Cuaderno", peso: 1, beneficio: 4, ratio: "4.00", emoji: "📓" },
    { nombre: "Bolígrafo", peso: 0, beneficio: 1, ratio: "Infinito", emoji: "✒️" },
    { nombre: "Marcador", peso: 0, beneficio: 1, ratio: "Infinito", emoji: "🖍️" },
    { nombre: "Revista", peso: 1, beneficio: 3, ratio: "3.00", emoji: "📰" },
    { nombre: "Atlas", peso: 3, beneficio: 12, ratio: "4.00", emoji: "🗺️" },
    { nombre: "Enciclopedia", peso: 4, beneficio: 16, ratio: "4.00", emoji: "📕" },
    { nombre: "Comic", peso: 1, beneficio: 5, ratio: "5.00", emoji: "💭" }
  ]
};

const EJEMPLO_10 = {
  tipo: "Binaria",
  emoji: "⚽",
  nombre: "Deportes Variados",
  capacidadMaxima: 28,
  items: [
    { nombre: "Balón Fútbol", peso: 1, beneficio: 7, ratio: "7.00", emoji: "⚽" },
    { nombre: "Raqueta Tenis", peso: 2, beneficio: 10, ratio: "5.00", emoji: "🎾" },
    { nombre: "Baloncesto", peso: 1, beneficio: 6, ratio: "6.00", emoji: "🏀" },
    { nombre: "Guantes Boxeo", peso: 2, beneficio: 8, ratio: "4.00", emoji: "🥊" },
    { nombre: "Casco", peso: 1, beneficio: 5, ratio: "5.00", emoji: "🪖" },
    { nombre: "Pelota Béisbol", peso: 1, beneficio: 4, ratio: "4.00", emoji: "⚾" },
    { nombre: "Bate", peso: 2, beneficio: 9, ratio: "4.50", emoji: "🏏" },
    { nombre: "Patines", peso: 2, beneficio: 8, ratio: "4.00", emoji: "⛸️" },
    { nombre: "Patineta", peso: 2, beneficio: 11, ratio: "5.50", emoji: "🛹" }
  ]
};

// Ejemplos Múltiples con muchos elementos
const EJEMPLO_11 = {
  tipo: "Múltiple",
  emoji: "🍕",
  nombre: "Pizzería Completa",
  capacidadMaxima: 15,
  items: [
    { nombre: "Pizza", peso: 3, beneficio: 12, maxUnidades: 3, ratio: "4.00", emoji: "🍕" },
    { nombre: "Refresco", peso: 1, beneficio: 3, maxUnidades: 4, ratio: "3.00", emoji: "🥤" },
    { nombre: "Helado", peso: 1, beneficio: 4, maxUnidades: 3, ratio: "4.00", emoji: "🍦" },
    { nombre: "Postre", peso: 1, beneficio: 3, maxUnidades: 4, ratio: "3.00", emoji: "🍰" },
    { nombre: "Ensalada", peso: 2, beneficio: 5, maxUnidades: 2, ratio: "2.50", emoji: "🥗" }
  ]
};

const EJEMPLO_12 = {
  tipo: "Múltiple",
  emoji: "📚",
  nombre: "Biblioteca Múltiple",
  capacidadMaxima: 18,
  items: [
    { nombre: "Libro Grande", peso: 2, beneficio: 8, maxUnidades: 3, ratio: "4.00", emoji: "📕" },
    { nombre: "Libro Pequeño", peso: 1, beneficio: 4, maxUnidades: 5, ratio: "4.00", emoji: "📗" },
    { nombre: "Revista", peso: 1, beneficio: 3, maxUnidades: 6, ratio: "3.00", emoji: "📰" },
    { nombre: "Periódico", peso: 1, beneficio: 2, maxUnidades: 6, ratio: "2.00", emoji: "📄" },
    { nombre: "Cuaderno", peso: 1, beneficio: 3, maxUnidades: 5, ratio: "3.00", emoji: "📓" }
  ]
};

const EJEMPLO_13 = {
  tipo: "Múltiple",
  emoji: "🧩",
  nombre: "Tienda Juguetes",
  capacidadMaxima: 16,
  items: [
    { nombre: "Peluche", peso: 1, beneficio: 5, maxUnidades: 4, ratio: "5.00", emoji: "🧸" },
    { nombre: "Lego", peso: 1, beneficio: 4, maxUnidades: 5, ratio: "4.00", emoji: "🧱" },
    { nombre: "Balero", peso: 1, beneficio: 3, maxUnidades: 5, ratio: "3.00", emoji: "⚪" },
    { nombre: "Muñeca", peso: 2, beneficio: 7, maxUnidades: 2, ratio: "3.50", emoji: "🪆" },
    { nombre: "Ajedrez", peso: 1, beneficio: 6, maxUnidades: 3, ratio: "6.00", emoji: "♟️" }
  ]
};

const EJEMPLO_14 = {
  tipo: "Múltiple",
  emoji: "🎁",
  nombre: "Centro Regalos",
  capacidadMaxima: 16,
  items: [
    { nombre: "Caja Pequeña", peso: 1, beneficio: 4, maxUnidades: 6, ratio: "4.00", emoji: "🎁" },
    { nombre: "Cinta", peso: 0, beneficio: 1, maxUnidades: 10, ratio: "Infinito", emoji: "🎀" },
    { nombre: "Globo", peso: 1, beneficio: 2, maxUnidades: 6, ratio: "2.00", emoji: "🎈" },
    { nombre: "Papel", peso: 0, beneficio: 1, maxUnidades: 10, ratio: "Infinito", emoji: "📄" },
    { nombre: "Tarjeta", peso: 0, beneficio: 1, maxUnidades: 8, ratio: "Infinito", emoji: "💳" }
  ]
};

const EJEMPLO_15 = {
  tipo: "Múltiple",
  emoji: "💄",
  nombre: "Salón Belleza",
  capacidadMaxima: 13,
  items: [
    { nombre: "Pintura Labios", peso: 1, beneficio: 5, maxUnidades: 3, ratio: "5.00", emoji: "💄" },
    { nombre: "Espejo", peso: 1, beneficio: 3, maxUnidades: 3, ratio: "3.00", emoji: "🪞" },
    { nombre: "Peine", peso: 1, beneficio: 4, maxUnidades: 3, ratio: "4.00", emoji: "🪮" },
    { nombre: "Cepillo", peso: 1, beneficio: 4, maxUnidades: 3, ratio: "4.00", emoji: "🪥" },
    { nombre: "Perfume", peso: 1, beneficio: 6, maxUnidades: 2, ratio: "6.00", emoji: "💐" }
  ]
};

const EJEMPLO_16 = {
  tipo: "Binaria",
  emoji: "💻",
  nombre: "Oficina Moderna",
  capacidadMaxima: 32,
  items: [
    { nombre: "Computadora", peso: 4, beneficio: 25, ratio: "6.25", emoji: "💻" },
    { nombre: "Monitor", peso: 3, beneficio: 15, ratio: "5.00", emoji: "🖥️" },
    { nombre: "Teclado", peso: 1, beneficio: 6, ratio: "6.00", emoji: "⌨️" },
    { nombre: "Ratón", peso: 1, beneficio: 4, ratio: "4.00", emoji: "🖱️" },
    { nombre: "Lámpara", peso: 2, beneficio: 8, ratio: "4.00", emoji: "💡" },
    { nombre: "Escritorio", peso: 5, beneficio: 20, ratio: "4.00", emoji: "🪑" },
    { nombre: "Silla", peso: 3, beneficio: 12, ratio: "4.00", emoji: "🪑" },
    { nombre: "Archivador", peso: 2, beneficio: 7, ratio: "3.50", emoji: "🗄️" },
    { nombre: "Teléfono", peso: 1, beneficio: 5, ratio: "5.00", emoji: "☎️" }
  ]
};

const EJEMPLO_17 = {
  tipo: "Binaria",
  emoji: "🧳",
  nombre: "Viaje Europa",
  capacidadMaxima: 35,
  items: [
    { nombre: "Maleta", peso: 3, beneficio: 12, ratio: "4.00", emoji: "🧳" },
    { nombre: "Pasaporte", peso: 0, beneficio: 10, ratio: "Infinito", emoji: "🛂" },
    { nombre: "Cámara", peso: 2, beneficio: 15, ratio: "7.50", emoji: "📷" },
    { nombre: "Mapa", peso: 1, beneficio: 5, ratio: "5.00", emoji: "🗺️" },
    { nombre: "Monedas", peso: 1, beneficio: 8, ratio: "8.00", emoji: "💰" },
    { nombre: "Guía Turística", peso: 1, beneficio: 4, ratio: "4.00", emoji: "📖" },
    { nombre: "Adaptador", peso: 1, beneficio: 6, ratio: "6.00", emoji: "🔌" },
    { nombre: "Tarjeta Crédito", peso: 0, beneficio: 9, ratio: "Infinito", emoji: "💳" },
    { nombre: "Teléfono", peso: 1, beneficio: 7, ratio: "7.00", emoji: "📱" }
  ]
};

const EJEMPLO_18 = {
  tipo: "Múltiple",
  emoji: "🍔",
  nombre: "Restaurante Buffet",
  capacidadMaxima: 20,
  items: [
    { nombre: "Carne", peso: 2, beneficio: 8, maxUnidades: 4, ratio: "4.00", emoji: "🥩" },
    { nombre: "Pescado", peso: 2, beneficio: 7, maxUnidades: 3, ratio: "3.50", emoji: "🐟" },
    { nombre: "Verdura", peso: 1, beneficio: 3, maxUnidades: 5, ratio: "3.00", emoji: "🥦" },
    { nombre: "Pan", peso: 1, beneficio: 2, maxUnidades: 6, ratio: "2.00", emoji: "🍞" },
    { nombre: "Postre", peso: 1, beneficio: 5, maxUnidades: 4, ratio: "5.00", emoji: "🍰" }
  ]
};

const EJEMPLO_19 = {
  tipo: "Binaria",
  emoji: "🏥",
  nombre: "Botiquín de Emergencia",
  capacidadMaxima: 24,
  items: [
    { nombre: "Vendas", peso: 1, beneficio: 7, ratio: "7.00", emoji: "🩹" },
    { nombre: "Alcohol", peso: 1, beneficio: 6, ratio: "6.00", emoji: "🧴" },
    { nombre: "Analgésico", peso: 0, beneficio: 8, ratio: "Infinito", emoji: "💊" },
    { nombre: "Termómetro", peso: 1, beneficio: 5, ratio: "5.00", emoji: "🌡️" },
    { nombre: "Gasa", peso: 1, beneficio: 4, ratio: "4.00", emoji: "📋" },
    { nombre: "Tijeras", peso: 1, beneficio: 5, ratio: "5.00", emoji: "✂️" },
    { nombre: "Guantes", peso: 1, beneficio: 4, ratio: "4.00", emoji: "🧤" },
    { nombre: "Suero", peso: 1, beneficio: 6, ratio: "6.00", emoji: "🧪" },
    { nombre: "Pinza", peso: 1, beneficio: 3, ratio: "3.00", emoji: "🪛" }
  ]
};

const EJEMPLO_20 = {
  tipo: "Múltiple",
  emoji: "🎮",
  nombre: "Arcade Gaming",
  capacidadMaxima: 18,
  items: [
    { nombre: "Control", peso: 1, beneficio: 5, maxUnidades: 4, ratio: "5.00", emoji: "🎮" },
    { nombre: "Juego", peso: 1, beneficio: 4, maxUnidades: 6, ratio: "4.00", emoji: "🎯" },
    { nombre: "Moneda", peso: 0, beneficio: 1, maxUnidades: 20, ratio: "Infinito", emoji: "🪙" },
    { nombre: "Headset", peso: 1, beneficio: 6, maxUnidades: 3, ratio: "6.00", emoji: "🎧" },
    { nombre: "Teclado Gaming", peso: 2, beneficio: 8, maxUnidades: 2, ratio: "4.00", emoji: "⌨️" }
  ]
};

// Array con todos los ejemplos
const TODOS_LOS_EJEMPLOS = [
  EJEMPLO_1, EJEMPLO_2, EJEMPLO_3, EJEMPLO_4_VORAZ_FALLA,
  EJEMPLO_5, EJEMPLO_6, EJEMPLO_7, EJEMPLO_8, EJEMPLO_9, EJEMPLO_10,
  EJEMPLO_11, EJEMPLO_12, EJEMPLO_13, EJEMPLO_14, EJEMPLO_15,
  EJEMPLO_16, EJEMPLO_17, EJEMPLO_18, EJEMPLO_19, EJEMPLO_20
];

// Función para obtener un ejemplo aleatorio
function obtenerEjemploAleatorio() {
  return TODOS_LOS_EJEMPLOS[Math.floor(Math.random() * TODOS_LOS_EJEMPLOS.length)];
}

