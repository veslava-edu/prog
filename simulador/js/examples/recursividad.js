// js/examples/recursividad.js
examples = [
    {
        id: 'factorial',
        title: '1. Factorial',
        description: 'El ejemplo clásico. Una función que se llama a sí misma con un argumento reducido hasta llegar a un caso base.',
        code: `public class Recursividad {
    public static void main(String[] args) {
        int resultado = factorial(3);
        System.out.println("Resultado: " + resultado);
    }
    
    public static int factorial(int n) {
        if (n <= 1) { // Caso Base
            return 1;
        } else { // Caso Recursivo
            return n * factorial(n - 1);
        }
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: {} }], heap: {}, description: 'Iniciando main(). Se llama a factorial(3).' },
            { line: 7, stack: [{ scope: 'main', vars: {} }, { scope: 'factorial(3)', vars: { n: 3 } }], heap: {}, description: 'Entrando a factorial(3). La condición (3 <= 1) es falsa.' },
            { line: 10, stack: [{ scope: 'main', vars: {} }, { scope: 'factorial(3)', vars: { n: 3 } }], heap: {}, description: 'factorial(3) debe llamar a factorial(2).' },
            { line: 7, stack: [{ scope: 'main', vars: {} }, { scope: 'factorial(3)', vars: { n: 3 } }, { scope: 'factorial(2)', vars: { n: 2 } }], heap: {}, description: 'Entrando a factorial(2). La condición (2 <= 1) es falsa.' },
            { line: 10, stack: [{ scope: 'main', vars: {} }, { scope: 'factorial(3)', vars: { n: 3 } }, { scope: 'factorial(2)', vars: { n: 2 } }], heap: {}, description: 'factorial(2) debe llamar a factorial(1).' },
            { line: 7, stack: [{ scope: 'main', vars: {} }, { scope: 'factorial(3)', vars: { n: 3 } }, { scope: 'factorial(2)', vars: { n: 2 } }, { scope: 'factorial(1)', vars: { n: 1 } }], heap: {}, description: 'Entrando a factorial(1). La condición (1 <= 1) es verdadera.' },
            { line: 8, stack: [{ scope: 'main', vars: {} }, { scope: 'factorial(3)', vars: { n: 3 } }, { scope: 'factorial(2)', vars: { n: 2 } }], heap: {}, description: 'Caso base alcanzado. factorial(1) retorna 1.' },
            { line: 10, stack: [{ scope: 'main', vars: {} }, { scope: 'factorial(3)', vars: { n: 3 } }], heap: {}, description: 'factorial(2) retorna 2 * 1 = 2.' },
            { line: 10, stack: [{ scope: 'main', vars: {} }], heap: {}, description: 'factorial(3) retorna 3 * 2 = 6.' },
            { line: 3, stack: [{ scope: 'main', vars: { resultado: 6 } }], heap: {}, description: 'El valor 6 se asigna a la variable resultado.' },
            { line: 4, stack: [{ scope: 'main', vars: { resultado: 6 } }], heap: {}, description: 'Se imprime el resultado final.', output: 'Resultado: 6' },
        ]
    },
    {
        id: 'suma-recursiva',
        title: '2. Suma Recursiva',
        description: 'Suma todos los números desde n hasta 1. Similar al factorial, pero usando suma en lugar de multiplicación.',
        code: `public class SumaRecursiva {
    public static void main(String[] args) {
        int suma = sumar(4);
        System.out.println("Suma: " + suma);
    }
    
    public static int sumar(int n) {
        if (n <= 0) {
            return 0;
        } else {
            return n + sumar(n - 1);
        }
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: {} }], heap: {}, description: 'Llamando a sumar(4).' },
            { line: 7, stack: [{ scope: 'main', vars: {} }, { scope: 'sumar(4)', vars: { n: 4 } }], heap: {}, description: 'Entrando a sumar(4). n > 0.' },
            { line: 10, stack: [{ scope: 'main', vars: {} }, { scope: 'sumar(4)', vars: { n: 4 } }, { scope: 'sumar(3)', vars: { n: 3 } }], heap: {}, description: 'Llamada recursiva a sumar(3).' },
            { line: 10, stack: [{ scope: 'main', vars: {} }, { scope: 'sumar(4)', vars: { n: 4 } }, { scope: 'sumar(3)', vars: { n: 3 } }, { scope: 'sumar(2)', vars: { n: 2 } }], heap: {}, description: 'Llamada recursiva a sumar(2).' },
            { line: 10, stack: [{ scope: 'main', vars: {} }, { scope: 'sumar(4)', vars: { n: 4 } }, { scope: 'sumar(3)', vars: { n: 3 } }, { scope: 'sumar(2)', vars: { n: 2 } }, { scope: 'sumar(1)', vars: { n: 1 } }], heap: {}, description: 'Llamada recursiva a sumar(1).' },
            { line: 10, stack: [{ scope: 'main', vars: {} }, { scope: 'sumar(4)', vars: { n: 4 } }, { scope: 'sumar(3)', vars: { n: 3 } }, { scope: 'sumar(2)', vars: { n: 2 } }, { scope: 'sumar(1)', vars: { n: 1 } }, { scope: 'sumar(0)', vars: { n: 0 } }], heap: {}, description: 'Llamada recursiva a sumar(0).' },
            { line: 8, stack: [{ scope: 'main', vars: {} }, { scope: 'sumar(4)', vars: { n: 4 } }, { scope: 'sumar(3)', vars: { n: 3 } }, { scope: 'sumar(2)', vars: { n: 2 } }, { scope: 'sumar(1)', vars: { n: 1 } }], heap: {}, description: 'Caso base. sumar(0) retorna 0.' },
            { line: 10, stack: [{ scope: 'main', vars: {} }, { scope: 'sumar(4)', vars: { n: 4 } }, { scope: 'sumar(3)', vars: { n: 3 } }, { scope: 'sumar(2)', vars: { n: 2 } }], heap: {}, description: 'sumar(1) retorna 1 + 0 = 1.' },
            { line: 10, stack: [{ scope: 'main', vars: {} }, { scope: 'sumar(4)', vars: { n: 4 } }, { scope: 'sumar(3)', vars: { n: 3 } }], heap: {}, description: 'sumar(2) retorna 2 + 1 = 3.' },
            { line: 10, stack: [{ scope: 'main', vars: {} }, { scope: 'sumar(4)', vars: { n: 4 } }], heap: {}, description: 'sumar(3) retorna 3 + 3 = 6.' },
            { line: 10, stack: [{ scope: 'main', vars: {} }], heap: {}, description: 'sumar(4) retorna 4 + 6 = 10.' },
            { line: 3, stack: [{ scope: 'main', vars: { suma: 10 } }], heap: {}, description: 'Se asigna el resultado a suma.' },
            { line: 4, stack: [{ scope: 'main', vars: { suma: 10 } }], heap: {}, description: 'Se imprime el resultado.', output: 'Suma: 10' }
        ]
    },
    {
        id: 'fibonacci',
        title: '3. Fibonacci',
        description: 'Un ejemplo con dos llamadas recursivas en el mismo "return", que genera un árbol de llamadas.',
        code: `public class Fibonacci {
    public static void main(String[] args) {
        int res = fib(4);
        System.out.println("Fibonacci(4) = " + res);
    }
    
    public static int fib(int n) {
        if (n <= 1) {
            return n;
        }
        return fib(n - 1) + fib(n - 2);
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: {} }], heap: {}, description: 'Llamando a fib(4).' },
            { line: 10, stack: [{ scope: 'main', vars: {} }, { scope: 'fib(4)', vars: { n: 4 } }], heap: {}, description: 'fib(4) llama a fib(3).' },
            { line: 10, stack: [{ scope: 'main', vars: {} }, { scope: 'fib(4)', vars: { n: 4 } }, { scope: 'fib(3)', vars: { n: 3 } }], heap: {}, description: 'fib(3) llama a fib(2).' },
            { line: 10, stack: [{ scope: 'main', vars: {} }, { scope: 'fib(4)', vars: { n: 4 } }, { scope: 'fib(3)', vars: { n: 3 } }, { scope: 'fib(2)', vars: { n: 2 } }], heap: {}, description: 'fib(2) llama a fib(1).' },
            { line: 8, stack: [{ scope: 'main', vars: {} }, { scope: 'fib(4)', vars: { n: 4 } }, { scope: 'fib(3)', vars: { n: 3 } }, { scope: 'fib(2)', vars: { n: 2 } }], heap: {}, description: 'fib(1) retorna 1 (caso base).' },
            { line: 10, stack: [{ scope: 'main', vars: {} }, { scope: 'fib(4)', vars: { n: 4 } }, { scope: 'fib(3)', vars: { n: 3 } }, { scope: 'fib(2)', vars: { n: 2 } }, { scope: 'fib(0)', vars: { n: 0 } }], heap: {}, description: 'fib(2) ahora llama a fib(0).' },
            { line: 8, stack: [{ scope: 'main', vars: {} }, { scope: 'fib(4)', vars: { n: 4 } }, { scope: 'fib(3)', vars: { n: 3 } }, { scope: 'fib(2)', vars: { n: 2 } }], heap: {}, description: 'fib(0) retorna 0 (caso base).' },
            { line: 10, stack: [{ scope: 'main', vars: {} }, { scope: 'fib(4)', vars: { n: 4 } }, { scope: 'fib(3)', vars: { n: 3 } }], heap: {}, description: 'fib(2) retorna 1 + 0 = 1.' },
            { line: 10, stack: [{ scope: 'main', vars: {} }, { scope: 'fib(4)', vars: { n: 4 } }, { scope: 'fib(3)', vars: { n: 3 } }, { scope: 'fib(1)', vars: { n: 1 } }], heap: {}, description: 'fib(3) ahora llama a fib(1).' },
            { line: 8, stack: [{ scope: 'main', vars: {} }, { scope: 'fib(4)', vars: { n: 4 } }, { scope: 'fib(3)', vars: { n: 3 } }], heap: {}, description: 'fib(1) retorna 1 (caso base).' },
            { line: 10, stack: [{ scope: 'main', vars: {} }, { scope: 'fib(4)', vars: { n: 4 } }], heap: {}, description: 'fib(3) retorna 1 + 1 = 2.' },
            { line: 10, stack: [{ scope: 'main', vars: {} }, { scope: 'fib(4)', vars: { n: 4 } }, { scope: 'fib(2)', vars: { n: 2 } }], heap: {}, description: 'fib(4) ahora llama a fib(2).' },
            { line: 10, stack: [{ scope: 'main', vars: {} }, { scope: 'fib(4)', vars: { n: 4 } }], heap: {}, description: '... fib(2) retorna 1 (calculado antes).' },
            { line: 10, stack: [{ scope: 'main', vars: {} }], heap: {}, description: 'fib(4) retorna 2 + 1 = 3.' },
            { line: 3, stack: [{ scope: 'main', vars: { res: 3 } }], heap: {}, description: 'Se asigna el resultado final.' },
            { line: 4, stack: [{ scope: 'main', vars: { res: 3 } }], heap: {}, description: 'Se imprime el resultado.', output: 'Fibonacci(4) = 3' }
        ]
    },
    {
        id: 'recursion-string',
        title: '4. Invertir un String',
        description: 'La recursividad no es solo para números. Aquí se usa para invertir una cadena de texto.',
        code: `public class InvertirString {
    public static void main(String[] args) {
        String invertida = invertir("hola");
        System.out.println(invertida);
    }
    
    public static String invertir(String str) {
        if (str.isEmpty()) {
            return str;
        }
        return invertir(str.substring(1)) + str.charAt(0);
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: {} }], heap: {}, description: 'Llamando a invertir("hola").' },
            { line: 10, stack: [{ scope: 'main', vars: {} }, { scope: 'invertir("hola")', vars: { str: '"hola"' } }], heap: {}, description: 'Llama a invertir("ola") y le concatena "h".' },
            { line: 10, stack: [{ scope: 'main', vars: {} }, { scope: 'invertir("hola")', vars: { str: '"hola"' } }, { scope: 'invertir("ola")', vars: { str: '"ola"' } }], heap: {}, description: 'Llama a invertir("la") y le concatena "o".' },
            { line: 10, stack: [{ scope: 'main', vars: {} }, { scope: 'invertir("hola")', vars: { str: '"hola"' } }, { scope: 'invertir("ola")', vars: { str: '"ola"' } }, { scope: 'invertir("la")', vars: { str: '"la"' } }], heap: {}, description: 'Llama a invertir("a") y le concatena "l".' },
            { line: 10, stack: [{ scope: 'main', vars: {} }, { scope: 'invertir("hola")', vars: { str: '"hola"' } }, { scope: 'invertir("ola")', vars: { str: '"ola"' } }, { scope: 'invertir("la")', vars: { str: '"la"' } }, { scope: 'invertir("a")', vars: { str: '"a"' } }], heap: {}, description: 'Llama a invertir("") y le concatena "a".' },
            { line: 8, stack: [{ scope: 'main', vars: {} }, { scope: 'invertir("hola")', vars: { str: '"hola"' } }, { scope: 'invertir("ola")', vars: { str: '"ola"' } }, { scope: 'invertir("la")', vars: { str: '"la"' } }, { scope: 'invertir("a")', vars: { str: '"a"' } } ], heap: {}, description: 'Caso base. invertir("") retorna "".' },
            { line: 10, stack: [{ scope: 'main', vars: {} }, { scope: 'invertir("hola")', vars: { str: '"hola"' } }, { scope: 'invertir("ola")', vars: { str: '"ola"' } }, { scope: 'invertir("la")', vars: { str: '"la"' } }], heap: {}, description: 'invertir("a") retorna "" + "a" = "a".' },
            { line: 10, stack: [{ scope: 'main', vars: {} }, { scope: 'invertir("hola")', vars: { str: '"hola"' } }, { scope: 'invertir("ola")', vars: { str: '"ola"' } }], heap: {}, description: 'invertir("la") retorna "a" + "l" = "al".' },
            { line: 10, stack: [{ scope: 'main', vars: {} }, { scope: 'invertir("hola")', vars: { str: '"hola"' } }], heap: {}, description: 'invertir("ola") retorna "al" + "o" = "alo".' },
            { line: 10, stack: [{ scope: 'main', vars: {} }], heap: {}, description: 'invertir("hola") retorna "alo" + "h" = "aloh".' },
            { line: 3, stack: [{ scope: 'main', vars: { invertida: '"aloh"' } }], heap: {}, description: 'Se asigna el resultado.' },
            { line: 4, stack: [{ scope: 'main', vars: { invertida: '"aloh"' } }], heap: {}, description: 'Se imprime el resultado final.', output: 'aloh' }
        ]
    },
    {
        id: 'busqueda-binaria',
        title: '5. Búsqueda Binaria',
        description: 'Un algoritmo eficiente que busca un elemento en un array ordenado, dividiendo el espacio de búsqueda por la mitad en cada paso.',
        code: `public class BusquedaBinaria {
    public static void main(String[] args) {
        int[] arr = {2, 5, 8, 12, 16};
        int indice = buscar(arr, 0, arr.length - 1, 12);
        System.out.println("Elemento encontrado en el índice: " + indice);
    }
    
    static int buscar(int[] arr, int izq, int der, int x) {
        if (der >= izq) {
            int medio = izq + (der - izq) / 2;
            if (arr[medio] == x) return medio;
            if (arr[medio] > x) return buscar(arr, izq, medio - 1, x);
            return buscar(arr, medio + 1, der, x);
        }
        return -1; // No encontrado
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { arr: '→arr1' } }], heap: { arr1: { type: 'int[]', value: [2,5,8,12,16] } }, description: 'Se crea el array ordenado.' },
            { line: 4, stack: [{ scope: 'main', vars: { arr: '→arr1' } }], heap: { arr1: { type: 'int[]', value: [2,5,8,12,16] } }, description: 'Llamada inicial a buscar(arr, 0, 4, 12).' },
            { line: 8, stack: [{ scope: 'main', vars: { arr: '→arr1' } }, { scope: 'buscar', vars: { arr: '→arr1', izq: 0, der: 4, x: 12 } }], heap: { arr1: { type: 'int[]', value: [2,5,8,12,16] } }, description: 'der >= izq (4>=0) es true. Se calcula el medio.' },
            { line: 9, stack: [{ scope: 'main', vars: { arr: '→arr1' } }, { scope: 'buscar', vars: { arr: '→arr1', izq: 0, der: 4, x: 12, medio: 2 } }], heap: { arr1: { type: 'int[]', value: [2,5,8,12,16] } }, description: 'medio = 2. arr[2] (8) no es 12.' },
            { line: 11, stack: [{ scope: 'main', vars: { arr: '→arr1' } }, { scope: 'buscar', vars: { arr: '→arr1', izq: 0, der: 4, x: 12, medio: 2 } }], heap: { arr1: { type: 'int[]', value: [2,5,8,12,16] } }, description: 'arr[2] (8) < 12. Se llama recursivamente a buscar(arr, 3, 4, 12).' },
            { line: 8, stack: [{ scope: 'main', vars: { arr: '→arr1' } }, { scope: 'buscar', vars: { arr: '→arr1', izq: 3, der: 4, x: 12 } }], heap: { arr1: { type: 'int[]', value: [2,5,8,12,16] } }, description: 'Nueva llamada. der >= izq (4>=3) es true.' },
            { line: 9, stack: [{ scope: 'main', vars: { arr: '→arr1' } }, { scope: 'buscar', vars: { arr: '→arr1', izq: 3, der: 4, x: 12, medio: 3 } }], heap: { arr1: { type: 'int[]', value: [2,5,8,12,16] } }, description: 'medio = 3. arr[3] (12) es 12. ¡Encontrado!' },
            { line: 10, stack: [{ scope: 'main', vars: { arr: '→arr1' } }], heap: { arr1: { type: 'int[]', value: [2,5,8,12,16] } }, description: 'Se retorna el índice 3.' },
            { line: 4, stack: [{ scope: 'main', vars: { arr: '→arr1', indice: 3 } }], heap: { arr1: { type: 'int[]', value: [2,5,8,12,16] } }, description: 'Se asigna el resultado a la variable indice.' },
            { line: 5, stack: [{ scope: 'main', vars: { arr: '→arr1', indice: 3 } }], heap: { arr1: { type: 'int[]', value: [2,5,8,12,16] } }, description: 'Imprimiendo resultado final.', output: 'Elemento encontrado en el índice: 3' },
        ]
    },
    {
        id: 'hanoi',
        title: '6. Torres de Hanoi',
        description: 'Un problema clásico y más abstracto que se resuelve elegantemente con recursividad.',
        code: `public class Hanoi {
    public static void main(String[] args) {
        hanoi(3, 'A', 'C', 'B'); // Mover 3 discos de A a C, usando B
    }

    static void hanoi(int n, char origen, char destino, char aux) {
        if (n == 1) {
            System.out.println("Mover disco 1 de " + origen + " a " + destino);
            return;
        }
        hanoi(n - 1, origen, aux, destino);
        System.out.println("Mover disco " + n + " de " + origen + " a " + destino);
        hanoi(n - 1, aux, destino, origen);
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: {} }], heap: {}, description: 'Llamada inicial a hanoi(3, A, C, B).' },
            { line: 11, stack: [{ scope: 'main', vars: {} }, { scope: 'hanoi(3,A,C,B)', vars: { n: 3 } }], heap: {}, description: 'Dentro de hanoi(3), se llama a hanoi(2, A, B, C).' },
            { line: 11, stack: [{ scope: 'main', vars: {} }, { scope: 'hanoi(3,A,C,B)', vars: { n: 3 } }, { scope: 'hanoi(2,A,B,C)', vars: { n: 2 } }], heap: {}, description: 'Dentro de hanoi(2), se llama a hanoi(1, A, C, B).' },
            { line: 7, stack: [{ scope: 'main', vars: {} }, { scope: 'hanoi(3,A,C,B)', vars: { n: 3 } }, { scope: 'hanoi(2,A,B,C)', vars: { n: 2 } }, { scope: 'hanoi(1,A,C,B)', vars: { n: 1 } }], heap: {}, description: 'Caso base. Mover disco 1 de A a C.', output: 'Mover disco 1 de A a C' },
            { line: 12, stack: [{ scope: 'main', vars: {} }, { scope: 'hanoi(3,A,C,B)', vars: { n: 3 } }, { scope: 'hanoi(2,A,B,C)', vars: { n: 2 } }], heap: {}, description: 'Retorna a hanoi(2). Mover disco 2 de A a B.', output: 'Mover disco 2 de A a B' },
            { line: 13, stack: [{ scope: 'main', vars: {} }, { scope: 'hanoi(3,A,C,B)', vars: { n: 3 } }, { scope: 'hanoi(2,A,B,C)', vars: { n: 2 } }], heap: {}, description: 'Dentro de hanoi(2), se llama a hanoi(1, C, B, A).' },
            { line: 7, stack: [{ scope: 'main', vars: {} }, { scope: 'hanoi(3,A,C,B)', vars: { n: 3 } }, { scope: 'hanoi(2,A,B,C)', vars: { n: 2 } }, { scope: 'hanoi(1,C,B,A)', vars: { n: 1 } }], heap: {}, description: 'Caso base. Mover disco 1 de C a B.', output: 'Mover disco 1 de C a B' },
            { line: 12, stack: [{ scope: 'main', vars: {} }, { scope: 'hanoi(3,A,C,B)', vars: { n: 3 } }], heap: {}, description: 'Retorna a hanoi(3). Mover disco 3 de A a C.', output: 'Mover disco 3 de A a C' },
            { line: 13, stack: [{ scope: 'main', vars: {} }, { scope: 'hanoi(3,A,C,B)', vars: { n: 3 } }], heap: {}, description: 'Dentro de hanoi(3), se llama a hanoi(2, B, C, A).' },
            { line: 11, stack: [{ scope: 'main', vars: {} }, { scope: 'hanoi(3,A,C,B)', vars: { n: 3 } }, { scope: 'hanoi(2,B,C,A)', vars: { n: 2 } }], heap: {}, description: 'Dentro de hanoi(2), se llama a hanoi(1, B, A, C).' },
            { line: 7, stack: [{ scope: 'main', vars: {} }, { scope: 'hanoi(3,A,C,B)', vars: { n: 3 } }, { scope: 'hanoi(2,B,C,A)', vars: { n: 2 } }, { scope: 'hanoi(1,B,A,C)', vars: { n: 1 } }], heap: {}, description: 'Caso base. Mover disco 1 de B a A.', output: 'Mover disco 1 de B a A' },
            { line: 12, stack: [{ scope: 'main', vars: {} }, { scope: 'hanoi(3,A,C,B)', vars: { n: 3 } }, { scope: 'hanoi(2,B,C,A)', vars: { n: 2 } }], heap: {}, description: 'Retorna a hanoi(2). Mover disco 2 de B a C.', output: 'Mover disco 2 de B a C' },
            { line: 13, stack: [{ scope: 'main', vars: {} }, { scope: 'hanoi(3,A,C,B)', vars: { n: 3 } }, { scope: 'hanoi(2,B,C,A)', vars: { n: 2 } }], heap: {}, description: 'Dentro de hanoi(2), se llama a hanoi(1, A, C, B).' },
            { line: 7, stack: [{ scope: 'main', vars: {} }, { scope: 'hanoi(3,A,C,B)', vars: { n: 3 } }, { scope: 'hanoi(2,B,C,A)', vars: { n: 2 } }, { scope: 'hanoi(1,A,C,B)', vars: { n: 1 } }], heap: {}, description: 'Caso base. Mover disco 1 de A a C.', output: 'Mover disco 1 de A a C' },
            { line: 14, stack: [{ scope: 'main', vars: {} }], heap: {}, description: 'Fin de todas las llamadas recursivas.' }
        ]
    }
];