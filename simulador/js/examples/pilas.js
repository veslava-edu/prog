// js/examples/pilas.js
examples = [
    {
        id: 'stack-basico',
        title: '1. Pila Básica (push, pop)',
        description: 'Se añaden elementos con push() y se sacan con pop(). El último en entrar es siempre el primero en salir.',
        visualType: 'stack',
        code: `import java.util.Stack;

public class PilaBasica {
    public static void main(String[] args) {
        Stack<Integer> pila = new Stack<>();
        pila.push(10);
        pila.push(20);
        int ultimo = pila.pop(); // Saca el 20
        System.out.println("Elemento sacado: " + ultimo);
    }
}`,
        snapshots: [
            { line: 5, stack: [{ scope: 'main', vars: { pila: '→p1' } }], heap: { p1: { type: 'Stack', value: [] } }, description: 'Se crea una Pila vacía.' },
            { line: 6, stack: [{ scope: 'main', vars: { pila: '→p1' } }], heap: { p1: { type: 'Stack', value: [10] } }, description: 'push(10): Se apila el número 10.' },
            { line: 7, stack: [{ scope: 'main', vars: { pila: '→p1' } }], heap: { p1: { type: 'Stack', value: [10, 20] } }, description: 'push(20): Se apila el 20 encima del 10.' },
            { line: 8, stack: [{ scope: 'main', vars: { pila: '→p1', ultimo: 20 } }], heap: { p1: { type: 'Stack', value: [10] } }, description: 'pop(): Se desapila el último elemento (20) y se asigna.' },
            { line: 9, stack: [{ scope: 'main', vars: { pila: '→p1', ultimo: 20 } }], heap: { p1: { type: 'Stack', value: [10] } }, description: 'Se imprime el elemento desapilado.', output: 'Elemento sacado: 20' }
        ]
    },
    {
        id: 'stack-peek',
        title: '2. Consultar Cima (peek)',
        description: 'El método peek() permite ver el elemento en la cima de la pila sin sacarlo.',
        visualType: 'stack',
        code: `import java.util.Stack;

public class PilaPeek {
    public static void main(String[] args) {
        Stack<String> tareas = new Stack<>();
        tareas.push("Lavar ropa");
        tareas.push("Hacer compra");
        String proximaTarea = tareas.peek();
        System.out.println("Próxima tarea (sin sacar): " + proximaTarea);
        System.out.println("Elementos en la pila: " + tareas.size());
    }
}`,
        snapshots: [
            { line: 5, stack: [{ scope: 'main', vars: { tareas: '→p1' } }], heap: { p1: { type: 'Stack', value: [] } }, description: 'Se crea la pila de tareas.' },
            { line: 6, stack: [{ scope: 'main', vars: { tareas: '→p1' } }], heap: { p1: { type: 'Stack', value: ['"Lavar ropa"'] } }, description: 'Se apila la primera tarea.' },
            { line: 7, stack: [{ scope: 'main', vars: { tareas: '→p1' } }], heap: { p1: { type: 'Stack', value: ['"Lavar ropa"', '"Hacer compra"'] } }, description: 'Se apila la segunda tarea.' },
            { line: 8, stack: [{ scope: 'main', vars: { tareas: '→p1', proximaTarea: '"Hacer compra"' } }], heap: { p1: { type: 'Stack', value: ['"Lavar ropa"', '"Hacer compra"'] } }, description: 'peek(): Se consulta la cima ("Hacer compra") sin modificar la pila.' },
            { line: 9, stack: [{ scope: 'main', vars: { tareas: '→p1', proximaTarea: '"Hacer compra"' } }], heap: { p1: { type: 'Stack', value: ['"Lavar ropa"', '"Hacer compra"'] } }, description: 'Se imprime la tarea consultada.', output: 'Próxima tarea (sin sacar): Hacer compra' },
            { line: 10, stack: [{ scope: 'main', vars: { tareas: '→p1', proximaTarea: '"Hacer compra"' } }], heap: { p1: { type: 'Stack', value: ['"Lavar ropa"', '"Hacer compra"'] } }, description: 'El método .size() confirma que la pila aún tiene 2 elementos.', output: 'Elementos en la pila: 2' }
        ]
    },
    {
        id: 'stack-empty',
        title: '3. Pila Vacía (empty)',
        description: 'El método empty() (o isEmpty()) comprueba si la pila no tiene elementos. Es crucial para evitar errores al hacer pop().',
        visualType: 'stack',
        code: `import java.util.Stack;

public class PilaVacia {
    public static void main(String[] args) {
        Stack<Integer> pila = new Stack<>();
        System.out.println("¿Pila vacía al inicio? " + pila.empty());
        pila.push(5);
        pila.pop();
        System.out.println("¿Pila vacía al final? " + pila.empty());
    }
}`,
        snapshots: [
            { line: 5, stack: [{ scope: 'main', vars: { pila: '→p1' } }], heap: { p1: { type: 'Stack', value: [] } }, description: 'Se crea la pila vacía.' },
            { line: 6, stack: [{ scope: 'main', vars: { pila: '→p1' } }], heap: { p1: { type: 'Stack', value: [] } }, description: 'pila.empty() devuelve true.', output: '¿Pila vacía al inicio? true' },
            { line: 7, stack: [{ scope: 'main', vars: { pila: '→p1' } }], heap: { p1: { type: 'Stack', value: [5] } }, description: 'Se apila el número 5.' },
            { line: 8, stack: [{ scope: 'main', vars: { pila: '→p1' } }], heap: { p1: { type: 'Stack', value: [] } }, description: 'Se desapila el número 5. La pila vuelve a estar vacía.' },
            { line: 9, stack: [{ scope: 'main', vars: { pila: '→p1' } }], heap: { p1: { type: 'Stack', value: [] } }, description: 'pila.empty() ahora devuelve true de nuevo.', output: '¿Pila vacía al final? true' }
        ]
    },
    {
        id: 'stack-procesar',
        title: '4. Procesar elementos con While',
        description: 'Un patrón común es usar un bucle `while (!pila.empty())` para procesar y vaciar todos los elementos de una pila.',
        visualType: 'stack',
        code: `import java.util.Stack;

public class ProcesarPila {
    public static void main(String[] args) {
        Stack<Integer> numeros = new Stack<>();
        numeros.push(1);
        numeros.push(2);
        numeros.push(3);
        
        while (!numeros.empty()) {
            System.out.println("Procesando: " + numeros.pop());
        }
    }
}`,
        snapshots: [
            { line: 5, stack: [{ scope: 'main', vars: { numeros: '→p1' } }], heap: { p1: { type: 'Stack', value: [] } }, description: 'Se crea la pila.' },
            { line: 6, stack: [{ scope: 'main', vars: { numeros: '→p1' } }], heap: { p1: { type: 'Stack', value: [1] } }, description: 'Se apila el 1.' },
            { line: 7, stack: [{ scope: 'main', vars: { numeros: '→p1' } }], heap: { p1: { type: 'Stack', value: [1, 2] } }, description: 'Se apila el 2.' },
            { line: 8, stack: [{ scope: 'main', vars: { numeros: '→p1' } }], heap: { p1: { type: 'Stack', value: [1, 2, 3] } }, description: 'Se apila el 3.' },
            { line: 10, stack: [{ scope: 'main', vars: { numeros: '→p1' } }], heap: { p1: { type: 'Stack', value: [1, 2, 3] } }, description: 'Inicia el bucle. La pila no está vacía.' },
            { line: 11, stack: [{ scope: 'main', vars: { numeros: '→p1' } }], heap: { p1: { type: 'Stack', value: [1, 2] } }, description: 'Se desapila y procesa el 3.', output: 'Procesando: 3' },
            { line: 10, stack: [{ scope: 'main', vars: { numeros: '→p1' } }], heap: { p1: { type: 'Stack', value: [1, 2] } }, description: 'La pila no está vacía.' },
            { line: 11, stack: [{ scope: 'main', vars: { numeros: '→p1' } }], heap: { p1: { type: 'Stack', value: [1] } }, description: 'Se desapila y procesa el 2.', output: 'Procesando: 2' },
            { line: 10, stack: [{ scope: 'main', vars: { numeros: '→p1' } }], heap: { p1: { type: 'Stack', value: [1] } }, description: 'La pila no está vacía.' },
            { line: 11, stack: [{ scope: 'main', vars: { numeros: '→p1' } }], heap: { p1: { type: 'Stack', value: [] } }, description: 'Se desapila y procesa el 1.', output: 'Procesando: 1' },
            { line: 10, stack: [{ scope: 'main', vars: { numeros: '→p1' } }], heap: { p1: { type: 'Stack', value: [] } }, description: 'La pila ahora está vacía. El bucle termina.' },
        ]
    },
    {
        id: 'stack-invertir',
        title: '5. Invertir un Array',
        description: 'Una aplicación práctica de la Pila es invertir el orden de los elementos de otra estructura.',
        visualType: 'stack',
        code: `import java.util.Stack;

public class InvertirConPila {
    public static void main(String[] args) {
        char[] original = {'A', 'B', 'C'};
        Stack<Character> pila = new Stack<>();
        
        for (char c : original) {
            pila.push(c);
        }
        
        for (int i = 0; i < original.length; i++) {
            original[i] = pila.pop();
        }
        System.out.println(java.util.Arrays.toString(original));
    }
}`,
        snapshots: [
            { line: 5, stack: [{ scope: 'main', vars: { original: '→arr1' } }], heap: { arr1: { type: 'char[]', value: ['A', 'B', 'C'] } } , description: 'Se crea el array original.'},
            { line: 6, stack: [{ scope: 'main', vars: { original: '→arr1', pila: '→p1' } }], heap: { arr1: { type: 'char[]', value: ['A', 'B', 'C'] }, p1: { type: 'Stack', value: [] } } , description: 'Se crea la pila.'},
            { line: 8, stack: [{ scope: 'main', vars: { original: '→arr1', pila: '→p1', c: "'A'" } }], heap: { arr1: { type: 'char[]', value: ['A', 'B', 'C'] }, p1: { type: 'Stack', value: ['A'] } } , description: 'Se apila "A".'},
            { line: 8, stack: [{ scope: 'main', vars: { original: '→arr1', pila: '→p1', c: "'B'" } }], heap: { arr1: { type: 'char[]', value: ['A', 'B', 'C'] }, p1: { type: 'Stack', value: ['A', 'B'] } } , description: 'Se apila "B".'},
            { line: 8, stack: [{ scope: 'main', vars: { original: '→arr1', pila: '→p1', c: "'C'" } }], heap: { arr1: { type: 'char[]', value: ['A', 'B', 'C'] }, p1: { type: 'Stack', value: ['A', 'B', 'C'] } } , description: 'Se apila "C".'},
            { line: 12, stack: [{ scope: 'main', vars: { original: '→arr1', pila: '→p1', i: 0 } }], heap: { arr1: { type: 'char[]', value: ['C', 'B', 'C'] }, p1: { type: 'Stack', value: ['A', 'B'] } }, description: 'Se desapila "C" y se asigna a original[0].' },
            { line: 12, stack: [{ scope: 'main', vars: { original: '→arr1', pila: '→p1', i: 1 } }], heap: { arr1: { type: 'char[]', value: ['C', 'B', 'C'] }, p1: { type: 'Stack', value: ['A'] } }, description: 'Se desapila "B" y se asigna a original[1].' },
            { line: 12, stack: [{ scope: 'main', vars: { original: '→arr1', pila: '→p1', i: 2 } }], heap: { arr1: { type: 'char[]', value: ['C', 'B', 'A'] }, p1: { type: 'Stack', value: [] } }, description: 'Se desapila "A" y se asigna a original[2].' },
            { line: 14, stack: [{ scope: 'main', vars: { original: '→arr1', pila: '→p1' } }], heap: { arr1: { type: 'char[]', value: ['C', 'B', 'A'] }, p1: { type: 'Stack', value: [] } }, description: 'Se imprime el array invertido.', output: '[C, B, A]' },
        ]
    },
    {
        id: 'stack-balanceo',
        title: '6. Balanceo de Paréntesis',
        description: 'Un uso avanzado de las pilas es verificar si una expresión matemática tiene los paréntesis, llaves y corchetes balanceados.',
        visualType: 'stack',
        code: `import java.util.Stack;

public class Balanceo {
    public static void main(String[] args) {
        String expr = "{[()]}"; // Expresión balanceada
        Stack<Character> pila = new Stack<>();
        boolean balanceado = true;
        
        for (char c : expr.toCharArray()) {
            if (c == '{' || c == '[' || c == '(') {
                pila.push(c);
            } else if (c == '}' && pila.pop() != '{') {
                balanceado = false; break;
            } else if (c == ']' && pila.pop() != '[') {
                balanceado = false; break;
            } else if (c == ')' && pila.pop() != '(') {
                balanceado = false; break;
            }
        }
        System.out.println("¿Está balanceado? " + balanceado);
    }
}`,
        snapshots: [
            { line: 5, stack: [{ scope: 'main', vars: { expr: '"{[()]}"', pila: '→p1', balanceado: 'true' } }], heap: { p1: { type: 'Stack', value: [] } } , description: 'Se inicializan las variables.'},
            { line: 9, stack: [{ scope: 'main', vars: { expr: '"{[()]}"', pila: '→p1', balanceado: 'true' } }], heap: { p1: { type: 'Stack', value: ['{'] } } , description: 'Se apila el carácter de apertura "{".'},
            { line: 9, stack: [{ scope: 'main', vars: { expr: '"{[()]}"', pila: '→p1', balanceado: 'true' } }], heap: { p1: { type: 'Stack', value: ['{', '['] } } , description: 'Se apila el carácter de apertura "[".'},
            { line: 9, stack: [{ scope: 'main', vars: { expr: '"{[()]}"', pila: '→p1', balanceado: 'true' } }], heap: { p1: { type: 'Stack', value: ['{', '[', '('] } } , description: 'Se apila el carácter de apertura "(".'},
            { line: 15, stack: [{ scope: 'main', vars: { expr: '"{[()]}"', pila: '→p1', balanceado: 'true' } }], heap: { p1: { type: 'Stack', value: ['{', '['] } } , description: 'Se encuentra ")". Se desapila "(" y coincide.'},
            { line: 13, stack: [{ scope: 'main', vars: { expr: '"{[()]}"', pila: '→p1', balanceado: 'true' } }], heap: { p1: { type: 'Stack', value: ['{'] } } , description: 'Se encuentra "]". Se desapila "[" y coincide.'},
            { line: 11, stack: [{ scope: 'main', vars: { expr: '"{[()]}"', pila: '→p1', balanceado: 'true' } }], heap: { p1: { type: 'Stack', value: [] } } , description: 'Se encuentra "}". Se desapila "{" y coincide.'},
            { line: 18, stack: [{ scope: 'main', vars: { expr: '"{[()]}"', pila: '→p1', balanceado: 'true' } }], heap: { p1: { type: 'Stack', value: [] } } , description: 'Fin del bucle. La pila está vacía y balanceado es true.'},
            { line: 19, stack: [{ scope: 'main', vars: { expr: '"{[()]}"', pila: '→p1', balanceado: 'true' } }], heap: { p1: { type: 'Stack', value: [] } } , description: 'Se imprime el resultado final.', output: '¿Está balanceado? true'},
        ]
    }
];