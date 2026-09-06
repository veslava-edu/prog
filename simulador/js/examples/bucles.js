// js/examples/bucles.js
examples = [
    {
        id: 'for-loop',
        title: '1. Bucle For',
        description: 'Iteraciones paso a paso con una variable de control.',
        code: `public class BucleFor {
    public static void main(String[] args) {
        for (int i = 0; i < 3; i++) {
            System.out.println("Iteración: " + i);
        }
        System.out.println("Fin del bucle");
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { i: 0 } }], heap: {}, description: "Inicialización del bucle: i = 0." },
            { line: 3, stack: [{ scope: 'main', vars: { i: 0 } }], heap: {}, description: "Condición: i < 3 (0 < 3) es true." },
            { line: 4, stack: [{ scope: 'main', vars: { i: 0 } }], heap: {}, description: "Imprime 'Iteración: 0'.", output: "Iteración: 0" },
            { line: 3, stack: [{ scope: 'main', vars: { i: 1 } }], heap: {}, description: "Incremento: i++." },
            { line: 3, stack: [{ scope: 'main', vars: { i: 1 } }], heap: {}, description: "Condición: i < 3 (1 < 3) es true." },
            { line: 4, stack: [{ scope: 'main', vars: { i: 1 } }], heap: {}, description: "Imprime 'Iteración: 1'.", output: "Iteración: 1" },
            { line: 3, stack: [{ scope: 'main', vars: { i: 2 } }], heap: {}, description: "Incremento: i++." },
            { line: 3, stack: [{ scope: 'main', vars: { i: 2 } }], heap: {}, description: "Condición: i < 3 (2 < 3) es true." },
            { line: 4, stack: [{ scope: 'main', vars: { i: 2 } }], heap: {}, description: "Imprime 'Iteración: 2'.", output: "Iteración: 2" },
            { line: 3, stack: [{ scope: 'main', vars: { i: 3 } }], heap: {}, description: "Incremento: i++." },
            { line: 3, stack: [{ scope: 'main', vars: { i: 3 } }], heap: {}, description: "Condición: i < 3 (3 < 3) es false." },
            { line: 6, stack: [{ scope: 'main', vars: {} }], heap: {}, description: "Fin del bucle.", output: "Fin del bucle" }
        ]
    },
    {
        id: 'while-loop',
        title: '2. Bucle While',
        description: 'Verifica la condición antes de cada iteración.',
        code: `public class BucleWhile {
    public static void main(String[] args) {
        int contador = 3;
        while (contador > 0) {
            System.out.println("Contador: " + contador);
            contador--;
        }
        System.out.println("Bucle terminado");
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { contador: 3 }}], heap: {}, description: "Inicialización: contador = 3." },
            { line: 4, stack: [{ scope: 'main', vars: { contador: 3 }}], heap: {}, description: "Condición: contador > 0 (3 > 0) es true." },
            { line: 5, stack: [{ scope: 'main', vars: { contador: 3 }}], heap: {}, description: "Imprime: 'Contador: 3'.", output: "Contador: 3" },
            { line: 6, stack: [{ scope: 'main', vars: { contador: 2 }}], heap: {}, description: "Decremento: contador--." },
            { line: 4, stack: [{ scope: 'main', vars: { contador: 2 }}], heap: {}, description: "Condición: contador > 0 (2 > 0) es true." },
            { line: 5, stack: [{ scope: 'main', vars: { contador: 2 }}], heap: {}, description: "Imprime: 'Contador: 2'.", output: "Contador: 2" },
            { line: 6, stack: [{ scope: 'main', vars: { contador: 1 }}], heap: {}, description: "Decremento: contador--." },
            { line: 4, stack: [{ scope: 'main', vars: { contador: 1 }}], heap: {}, description: "Condición: contador > 0 (1 > 0) es true." },
            { line: 5, stack: [{ scope: 'main', vars: { contador: 1 }}], heap: {}, description: "Imprime: 'Contador: 1'.", output: "Contador: 1" },
            { line: 6, stack: [{ scope: 'main', vars: { contador: 0 }}], heap: {}, description: "Decremento: contador--." },
            { line: 4, stack: [{ scope: 'main', vars: { contador: 0 }}], heap: {}, description: "Condición: contador > 0 (0 > 0) es false." },
            { line: 8, stack: [{ scope: 'main', vars: { contador: 0 }}], heap: {}, description: "Fin del bucle.", output: "Bucle terminado" }
        ]
    },
    {
        id: 'do-while',
        title: '3. Bucle Do-While',
        description: 'Ejecuta el bloque de código al menos una vez, y luego verifica la condición.',
        code: `public class BucleDoWhile {
    public static void main(String[] args) {
        int i = 5;
        do {
            System.out.println("Valor de i: " + i);
            i++;
        } while (i < 5);
        System.out.println("Valor final de i: " + i);
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { i: 5 } }], heap: {}, description: 'Inicialización i = 5.' },
            { line: 5, stack: [{ scope: 'main', vars: { i: 5 } }], heap: {}, description: 'Se ejecuta el cuerpo del bucle sin comprobar la condición.', output: 'Valor de i: 5' },
            { line: 6, stack: [{ scope: 'main', vars: { i: 6 } }], heap: {}, description: 'Se incrementa i a 6.' },
            { line: 7, stack: [{ scope: 'main', vars: { i: 6 } }], heap: {}, description: 'Se comprueba la condición (6 < 5), que es falsa.' },
            { line: 8, stack: [{ scope: 'main', vars: { i: 6 } }], heap: {}, description: 'Se sale del bucle y se imprime el valor final.', output: 'Valor final de i: 6' },
        ]
    },
    {
        id: 'for-break',
        title: '4. Bucle con Break',
        description: 'La sentencia "break" termina la ejecución del bucle prematuramente.',
        code: `public class BucleBreak {
    public static void main(String[] args) {
        for (int i = 1; i <= 10; i++) {
            if (i == 5) {
                break; // Detiene el bucle cuando i es 5
            }
            System.out.println("i = " + i);
        }
        System.out.println("Bucle roto.");
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { i: 1 } }], heap: {}, description: 'Inicia el bucle. i = 1.' },
            { line: 4, stack: [{ scope: 'main', vars: { i: 1 } }], heap: {}, description: 'Condición (1 == 5) es falsa.' },
            { line: 7, stack: [{ scope: 'main', vars: { i: 1 } }], heap: {}, description: 'Imprime i.', output: 'i = 1' },
            { line: 3, stack: [{ scope: 'main', vars: { i: 2 } }], heap: {}, description: 'i++' },
            { line: 4, stack: [{ scope: 'main', vars: { i: 2 } }], heap: {}, description: 'Condición (2 == 5) es falsa.' },
            { line: 7, stack: [{ scope: 'main', vars: { i: 2 } }], heap: {}, description: 'Imprime i.', output: 'i = 2' },
            { line: 3, stack: [{ scope: 'main', vars: { i: 3 } }], heap: {}, description: 'i++' },
            { line: 4, stack: [{ scope: 'main', vars: { i: 3 } }], heap: {}, description: 'Condición (3 == 5) es falsa.' },
            { line: 7, stack: [{ scope: 'main', vars: { i: 3 } }], heap: {}, description: 'Imprime i.', output: 'i = 3' },
            { line: 3, stack: [{ scope: 'main', vars: { i: 4 } }], heap: {}, description: 'i++' },
            { line: 4, stack: [{ scope: 'main', vars: { i: 4 } }], heap: {}, description: 'Condición (4 == 5) es falsa.' },
            { line: 7, stack: [{ scope: 'main', vars: { i: 4 } }], heap: {}, description: 'Imprime i.', output: 'i = 4' },
            { line: 3, stack: [{ scope: 'main', vars: { i: 5 } }], heap: {}, description: 'i++' },
            { line: 4, stack: [{ scope: 'main', vars: { i: 5 } }], heap: {}, description: 'Condición (5 == 5) es verdadera.' },
            { line: 5, stack: [{ scope: 'main', vars: { i: 5 } }], heap: {}, description: 'Se ejecuta "break", terminando el bucle.' },
            { line: 9, stack: [{ scope: 'main', vars: {} }], heap: {}, description: 'El programa continúa después del bucle.', output: 'Bucle roto.' },
        ]
    },
    {
        id: 'for-continue',
        title: '5. Bucle con Continue',
        description: 'La sentencia "continue" salta la iteración actual y pasa a la siguiente.',
        code: `public class BucleContinue {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            if (i == 3) {
                continue; // Salta la iteración cuando i es 3
            }
            System.out.println("i = " + i);
        }
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { i: 1 } }], heap: {}, description: 'Inicia el bucle. i = 1.' },
            { line: 4, stack: [{ scope: 'main', vars: { i: 1 } }], heap: {}, description: 'Condición (1 == 3) es falsa.' },
            { line: 7, stack: [{ scope: 'main', vars: { i: 1 } }], heap: {}, description: 'Imprime i.', output: 'i = 1' },
            { line: 3, stack: [{ scope: 'main', vars: { i: 2 } }], heap: {}, description: 'i++' },
            { line: 4, stack: [{ scope: 'main', vars: { i: 2 } }], heap: {}, description: 'Condición (2 == 3) es falsa.' },
            { line: 7, stack: [{ scope: 'main', vars: { i: 2 } }], heap: {}, description: 'Imprime i.', output: 'i = 2' },
            { line: 3, stack: [{ scope: 'main', vars: { i: 3 } }], heap: {}, description: 'i++' },
            { line: 4, stack: [{ scope: 'main', vars: { i: 3 } }], heap: {}, description: 'Condición (3 == 3) es verdadera.' },
            { line: 5, stack: [{ scope: 'main', vars: { i: 3 } }], heap: {}, description: 'Se ejecuta "continue", saltando el resto de la iteración.' },
            { line: 3, stack: [{ scope: 'main', vars: { i: 4 } }], heap: {}, description: 'i++' },
            { line: 4, stack: [{ scope: 'main', vars: { i: 4 } }], heap: {}, description: 'Condición (4 == 3) es falsa.' },
            { line: 7, stack: [{ scope: 'main', vars: { i: 4 } }], heap: {}, description: 'Imprime i.', output: 'i = 4' },
            { line: 3, stack: [{ scope: 'main', vars: { i: 5 } }], heap: {}, description: 'i++' },
            { line: 4, stack: [{ scope: 'main', vars: { i: 5 } }], heap: {}, description: 'Condición (5 == 3) es falsa.' },
            { line: 7, stack: [{ scope: 'main', vars: { i: 5 } }], heap: {}, description: 'Imprime i.', output: 'i = 5' },
            { line: 3, stack: [{ scope: 'main', vars: { i: 6 } }], heap: {}, description: 'i++. La condición (6 <= 5) es falsa. Termina el bucle.' },
        ]
    },
    {
        id: 'nested-loops',
        title: '6. Bucles Anidados',
        description: 'Un bucle dentro de otro. El bucle interno se ejecuta completamente por cada iteración del bucle externo.',
        code: `public class BuclesAnidados {
    public static void main(String[] args) {
        for (int i = 1; i <= 2; i++) {
            System.out.println("Iteración externa: " + i);
            for (int j = 1; j <= 3; j++) {
                System.out.println("  Iteración interna: " + j);
            }
        }
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { i: 1 } }], heap: {}, description: 'Bucle externo: i = 1.' },
            { line: 4, stack: [{ scope: 'main', vars: { i: 1 } }], heap: {}, description: 'Imprimiendo.', output: 'Iteración externa: 1' },
            { line: 5, stack: [{ scope: 'main', vars: { i: 1, j: 1 } }], heap: {}, description: 'Bucle interno: j = 1.' },
            { line: 6, stack: [{ scope: 'main', vars: { i: 1, j: 1 } }], heap: {}, description: 'Imprimiendo.', output: '  Iteración interna: 1' },
            { line: 5, stack: [{ scope: 'main', vars: { i: 1, j: 2 } }], heap: {}, description: 'Bucle interno: j = 2.' },
            { line: 6, stack: [{ scope: 'main', vars: { i: 1, j: 2 } }], heap: {}, description: 'Imprimiendo.', output: '  Iteración interna: 2' },
            { line: 5, stack: [{ scope: 'main', vars: { i: 1, j: 3 } }], heap: {}, description: 'Bucle interno: j = 3.' },
            { line: 6, stack: [{ scope: 'main', vars: { i: 1, j: 3 } }], heap: {}, description: 'Imprimiendo.', output: '  Iteración interna: 3' },
            { line: 5, stack: [{ scope: 'main', vars: { i: 1, j: 4 } }], heap: {}, description: 'Bucle interno termina.' },
            { line: 3, stack: [{ scope: 'main', vars: { i: 2 } }], heap: {}, description: 'Bucle externo: i = 2.' },
            { line: 4, stack: [{ scope: 'main', vars: { i: 2 } }], heap: {}, description: 'Imprimiendo.', output: 'Iteración externa: 2' },
            { line: 5, stack: [{ scope: 'main', vars: { i: 2, j: 1 } }], heap: {}, description: 'Bucle interno: j = 1.' },
            { line: 6, stack: [{ scope: 'main', vars: { i: 2, j: 1 } }], heap: {}, description: 'Imprimiendo.', output: '  Iteración interna: 1' },
            { line: 5, stack: [{ scope: 'main', vars: { i: 2, j: 2 } }], heap: {}, description: 'Bucle interno: j = 2.' },
            { line: 6, stack: [{ scope: 'main', vars: { i: 2, j: 2 } }], heap: {}, description: 'Imprimiendo.', output: '  Iteración interna: 2' },
            { line: 5, stack: [{ scope: 'main', vars: { i: 2, j: 3 } }], heap: {}, description: 'Bucle interno: j = 3.' },
            { line: 6, stack: [{ scope: 'main', vars: { i: 2, j: 3 } }], heap: {}, description: 'Imprimiendo.', output: '  Iteración interna: 3' },
            { line: 5, stack: [{ scope: 'main', vars: { i: 2, j: 4 } }], heap: {}, description: 'Bucle interno termina.' },
            { line: 3, stack: [{ scope: 'main', vars: { i: 3 } }], heap: {}, description: 'Bucle externo termina.' },
        ]
    }
];