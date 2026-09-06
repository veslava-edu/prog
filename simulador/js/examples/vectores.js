// js/examples/vectores.js
examples = [
    {
        id: 'array-declaracion',
        title: '1. Declaración e Inicialización',
        description: 'Muestra cómo declarar un array, reservar memoria con "new" y asignar valores.',
        code: `public class DeclararArray {
    public static void main(String[] args) {
        int[] numeros = new int[3]; // Reserva espacio para 3 enteros
        numeros[0] = 10;
        numeros[1] = 20;
        numeros[2] = 30;
        System.out.println("Valor en el índice 1: " + numeros[1]);
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { numeros: '→arr1' } }], heap: { arr1: { type: 'int[]', value: [0, 0, 0] } }, description: 'Se crea un array de 3 enteros en el Heap, inicializados a 0.' },
            { line: 4, stack: [{ scope: 'main', vars: { numeros: '→arr1' } }], heap: { arr1: { type: 'int[]', value: [10, 0, 0] } }, description: 'Se asigna 10 al índice 0.' },
            { line: 5, stack: [{ scope: 'main', vars: { numeros: '→arr1' } }], heap: { arr1: { type: 'int[]', value: [10, 20, 0] } }, description: 'Se asigna 20 al índice 1.' },
            { line: 6, stack: [{ scope: 'main', vars: { numeros: '→arr1' } }], heap: { arr1: { type: 'int[]', value: [10, 20, 30] } }, description: 'Se asigna 30 al índice 2.' },
            { line: 7, stack: [{ scope: 'main', vars: { numeros: '→arr1' } }], heap: { arr1: { type: 'int[]', value: [10, 20, 30] } }, description: 'Se accede al valor del índice 1 y se imprime.', output: 'Valor en el índice 1: 20' }
        ]
    },
    {
        id: 'array-literal',
        title: '2. Inicialización con Literal',
        description: 'Una forma más corta de crear y asignar valores a un array al mismo tiempo.',
        code: `public class LiteralArray {
    public static void main(String[] args) {
        String[] dias = {"Lunes", "Martes", "Miércoles"};
        System.out.println("El primer día es: " + dias[0]);
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { dias: '→arr1' } }], heap: { arr1: { type: 'String[]', value: ['"Lunes"', '"Martes"', '"Miércoles"'] } }, description: 'Se crea e inicializa el array de Strings en el Heap.' },
            { line: 4, stack: [{ scope: 'main', vars: { dias: '→arr1' } }], heap: { arr1: { type: 'String[]', value: ['"Lunes"', '"Martes"', '"Miércoles"'] } }, description: 'Se accede al elemento en el índice 0 y se imprime.', output: 'El primer día es: Lunes' }
        ]
    },
    {
        id: 'array-recorrer-for',
        title: '3. Recorrer con Bucle For',
        description: 'La forma clásica de recorrer un array usando un índice y la propiedad .length.',
        code: `public class RecorrerFor {
    public static void main(String[] args) {
        int[] notas = {7, 9, 10, 5};
        for (int i = 0; i < notas.length; i++) {
            System.out.println("Nota en índice " + i + ": " + notas[i]);
        }
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { notas: '→arr1' } }], heap: { arr1: { type: 'int[]', value: [7, 9, 10, 5] } }, description: 'Se crea el array de notas.' },
            { line: 4, stack: [{ scope: 'main', vars: { notas: '→arr1', i: 0 } }], heap: { arr1: { type: 'int[]', value: [7, 9, 10, 5] } }, description: 'Inicia el bucle. i = 0.' },
            { line: 5, stack: [{ scope: 'main', vars: { notas: '→arr1', i: 0 } }], heap: { arr1: { type: 'int[]', value: [7, 9, 10, 5] } }, description: 'Imprimiendo notas[0].', output: 'Nota en índice 0: 7' },
            { line: 4, stack: [{ scope: 'main', vars: { notas: '→arr1', i: 1 } }], heap: { arr1: { type: 'int[]', value: [7, 9, 10, 5] } }, description: 'i++.' },
            { line: 5, stack: [{ scope: 'main', vars: { notas: '→arr1', i: 1 } }], heap: { arr1: { type: 'int[]', value: [7, 9, 10, 5] } }, description: 'Imprimiendo notas[1].', output: 'Nota en índice 1: 9' },
            { line: 4, stack: [{ scope: 'main', vars: { notas: '→arr1', i: 2 } }], heap: { arr1: { type: 'int[]', value: [7, 9, 10, 5] } }, description: 'i++.' },
            { line: 5, stack: [{ scope: 'main', vars: { notas: '→arr1', i: 2 } }], heap: { arr1: { type: 'int[]', value: [7, 9, 10, 5] } }, description: 'Imprimiendo notas[2].', output: 'Nota en índice 2: 10' },
            { line: 4, stack: [{ scope: 'main', vars: { notas: '→arr1', i: 3 } }], heap: { arr1: { type: 'int[]', value: [7, 9, 10, 5] } }, description: 'i++.' },
            { line: 5, stack: [{ scope: 'main', vars: { notas: '→arr1', i: 3 } }], heap: { arr1: { type: 'int[]', value: [7, 9, 10, 5] } }, description: 'Imprimiendo notas[3].', output: 'Nota en índice 3: 5' },
            { line: 4, stack: [{ scope: 'main', vars: { notas: '→arr1', i: 4 } }], heap: { arr1: { type: 'int[]', value: [7, 9, 10, 5] } }, description: 'i++. Condición (4 < 4) es falsa. Fin del bucle.' }
        ]
    },
    {
        id: 'array-recorrer-for-each',
        title: '4. Recorrer con For-Each',
        description: 'Una sintaxis más limpia para recorrer un array cuando no necesitas el índice.',
        code: `public class RecorrerForEach {
    public static void main(String[] args) {
        String[] frutas = {"Manzana", "Naranja", "Pera"};
        for (String fruta : frutas) {
            System.out.println("Me gusta la " + fruta);
        }
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { frutas: '→arr1' } }], heap: { arr1: { type: 'String[]', value: ['"Manzana"', '"Naranja"', '"Pera"'] } }, description: 'Se crea el array de frutas.' },
            { line: 4, stack: [{ scope: 'main', vars: { frutas: '→arr1', fruta: '"Manzana"' } }], heap: { arr1: { type: 'String[]', value: ['"Manzana"', '"Naranja"', '"Pera"'] } }, description: 'Inicia for-each. fruta = "Manzana".' },
            { line: 5, stack: [{ scope: 'main', vars: { frutas: '→arr1', fruta: '"Manzana"' } }], heap: { arr1: { type: 'String[]', value: ['"Manzana"', '"Naranja"', '"Pera"'] } }, description: 'Imprimiendo.', output: 'Me gusta la Manzana' },
            { line: 4, stack: [{ scope: 'main', vars: { frutas: '→arr1', fruta: '"Naranja"' } }], heap: { arr1: { type: 'String[]', value: ['"Manzana"', '"Naranja"', '"Pera"'] } }, description: 'Siguiente iteración. fruta = "Naranja".' },
            { line: 5, stack: [{ scope: 'main', vars: { frutas: '→arr1', fruta: '"Naranja"' } }], heap: { arr1: { type: 'String[]', value: ['"Manzana"', '"Naranja"', '"Pera"'] } }, description: 'Imprimiendo.', output: 'Me gusta la Naranja' },
            { line: 4, stack: [{ scope: 'main', vars: { frutas: '→arr1', fruta: '"Pera"' } }], heap: { arr1: { type: 'String[]', value: ['"Manzana"', '"Naranja"', '"Pera"'] } }, description: 'Siguiente iteración. fruta = "Pera".' },
            { line: 5, stack: [{ scope: 'main', vars: { frutas: '→arr1', fruta: '"Pera"' } }], heap: { arr1: { type: 'String[]', value: ['"Manzana"', '"Naranja"', '"Pera"'] } }, description: 'Imprimiendo.', output: 'Me gusta la Pera' },
            { line: 4, stack: [{ scope: 'main', vars: { frutas: '→arr1' } }], heap: { arr1: { type: 'String[]', value: ['"Manzana"', '"Naranja"', '"Pera"'] } }, description: 'Fin del bucle.' }
        ]
    },
    {
        id: 'array-copiar',
        title: '5. Copiar un Array',
        description: 'Asignar un array a otro solo copia la referencia. Para duplicarlo, hay que crear uno nuevo.',
        code: `public class CopiarArray {
    public static void main(String[] args) {
        int[] original = {1, 2, 3};
        int[] copia = original; // Copia la referencia
        
        copia[0] = 99; // Modifica ambos arrays
        
        System.out.println("Original[0]: " + original[0]);
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { original: '→arr1' } }], heap: { arr1: { type: 'int[]', value: [1, 2, 3] } }, description: 'Se crea el array original.' },
            { line: 4, stack: [{ scope: 'main', vars: { original: '→arr1', copia: '→arr1' } }], heap: { arr1: { type: 'int[]', value: [1, 2, 3] } }, description: 'La variable "copia" ahora apunta a la misma dirección de memoria que "original".' },
            { line: 6, stack: [{ scope: 'main', vars: { original: '→arr1', copia: '→arr1' } }], heap: { arr1: { type: 'int[]', value: [99, 2, 3] } }, description: 'Modificar "copia[0]" cambia el objeto original en el Heap.' },
            { line: 8, stack: [{ scope: 'main', vars: { original: '→arr1', copia: '→arr1' } }], heap: { arr1: { type: 'int[]', value: [99, 2, 3] } }, description: 'Al imprimir original[0], vemos el valor modificado.', output: 'Original[0]: 99' }
        ]
    },
    {
        id: 'array-metodo',
        title: '6. Pasar Array a un Método',
        description: 'Cuando se pasa un array a un método, se pasa la referencia. Los cambios dentro del método afectan al array original.',
        code: `public class ArrayMetodo {
    public static void main(String[] args) {
        int[] datos = {10, 20, 30};
        modificarArray(datos);
        System.out.println("Dato modificado: " + datos[0]);
    }
    
    public static void modificarArray(int[] array) {
        array[0] = 100; // Este cambio es permanente
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { datos: '→arr1' } }], heap: { arr1: { type: 'int[]', value: [10, 20, 30] } }, description: 'Se crea el array en main.' },
            { line: 4, stack: [{ scope: 'main', vars: { datos: '→arr1' } }], heap: { arr1: { type: 'int[]', value: [10, 20, 30] } }, description: 'Se llama al método modificarArray, pasando la referencia.' },
            { line: 8, stack: [{ scope: 'main', vars: { datos: '→arr1' } }, { scope: 'modificarArray', vars: { array: '→arr1' } }], heap: { arr1: { type: 'int[]', value: [10, 20, 30] } }, description: 'Dentro del método, el parámetro "array" apunta al mismo objeto.' },
            { line: 9, stack: [{ scope: 'main', vars: { datos: '→arr1' } }, { scope: 'modificarArray', vars: { array: '→arr1' } }], heap: { arr1: { type: 'int[]', value: [100, 20, 30] } }, description: 'Se modifica el objeto en el Heap a través de la referencia.' },
            { line: 10, stack: [{ scope: 'main', vars: { datos: '→arr1' } }], heap: { arr1: { type: 'int[]', value: [100, 20, 30] } }, description: 'El método termina y su marco desaparece de la pila.' },
            { line: 5, stack: [{ scope: 'main', vars: { datos: '→arr1' } }], heap: { arr1: { type: 'int[]', value: [100, 20, 30] } }, description: 'De vuelta en main, el array original ha sido modificado.', output: 'Dato modificado: 100' }
        ]
    }
];