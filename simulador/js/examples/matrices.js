// js/examples/matrices.js
examples = [
    {
        id: 'matriz-declaracion',
        title: '1. Declaración e Inicialización',
        description: 'Creación de un array de dos dimensiones (array de arrays) y asignación de valores a sus celdas.',
        visualType: 'array',
        code: `public class DeclararMatriz {
    public static void main(String[] args) {
        // Matriz de 2 filas y 3 columnas
        int[][] matriz = new int[2][3];
        matriz[0][0] = 1;
        matriz[0][1] = 2;
        matriz[1][2] = 9;
        System.out.println("Valor en (1, 2): " + matriz[1][2]);
    }
}`,
        snapshots: [
            { line: 4, stack: [{ scope: 'main', vars: { matriz: '→mat1' } }], heap: { mat1: { type: 'int[][]', value: ['→f0', '→f1'] }, f0: { type: 'int[]', value: [0,0,0] }, f1: { type: 'int[]', value: [0,0,0] } }, description: 'Se crea la matriz en el Heap. Cada fila es un array independiente.' },
            { line: 5, stack: [{ scope: 'main', vars: { matriz: '→mat1' } }], heap: { mat1: { type: 'int[][]', value: ['→f0', '→f1'] }, f0: { type: 'int[]', value: [1,0,0] }, f1: { type: 'int[]', value: [0,0,0] } }, description: 'Asignando valor a la celda [0][0].' },
            { line: 6, stack: [{ scope: 'main', vars: { matriz: '→mat1' } }], heap: { mat1: { type: 'int[][]', value: ['→f0', '→f1'] }, f0: { type: 'int[]', value: [1,2,0] }, f1: { type: 'int[]', value: [0,0,0] } }, description: 'Asignando valor a la celda [0][1].' },
            { line: 7, stack: [{ scope: 'main', vars: { matriz: '→mat1' } }], heap: { mat1: { type: 'int[][]', value: ['→f0', '→f1'] }, f0: { type: 'int[]', value: [1,2,0] }, f1: { type: 'int[]', value: [0,0,9] } }, description: 'Asignando valor a la celda [1][2].' },
            { line: 8, stack: [{ scope: 'main', vars: { matriz: '→mat1' } }], heap: { mat1: { type: 'int[][]', value: ['→f0', '→f1'] }, f0: { type: 'int[]', value: [1,2,0] }, f1: { type: 'int[]', value: [0,0,9] } }, description: 'Imprimiendo el valor de la celda.', output: 'Valor en (1, 2): 9' }
        ]
    },
    {
        id: 'matriz-literal',
        title: '2. Inicialización con Literal',
        description: 'Una forma compacta de declarar e inicializar una matriz usando llaves anidadas.',
        visualType: 'array',
        code: `public class LiteralMatriz {
    public static void main(String[] args) {
        int[][] tablero = {
            {1, 2, 3},
            {4, 5, 6}
        };
        System.out.println("Valor central: " + tablero[1][1]);
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { tablero: '→mat1' } }], heap: { mat1: { type: 'int[][]', value: ['→f0', '→f1'] }, f0: { type: 'int[]', value: [1,2,3] }, f1: { type: 'int[]', value: [4,5,6] } }, description: 'Se crea e inicializa la matriz y sus filas en el Heap.' },
            { line: 7, stack: [{ scope: 'main', vars: { tablero: '→mat1' } }], heap: { mat1: { type: 'int[][]', value: ['→f0', '→f1'] }, f0: { type: 'int[]', value: [1,2,3] }, f1: { type: 'int[]', value: [4,5,6] } }, description: 'Se accede al valor de la celda [1][1].', output: 'Valor central: 5' }
        ]
    },
    {
        id: 'matriz-recorrido',
        title: '3. Recorrido con Bucles Anidados',
        description: 'Para recorrer una matriz se necesitan dos bucles anidados: uno para las filas (externo) y otro para las columnas (interno).',
        visualType: 'array',
        code: `public class RecorrerMatriz {
    public static void main(String[] args) {
        char[][] sopa = {{'A', 'B'}, {'C', 'D'}};
        for (int i = 0; i < sopa.length; i++) { // Recorre filas
            for (int j = 0; j < sopa[i].length; j++) { // Recorre columnas
                System.out.print(sopa[i][j] + " ");
            }
        }
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { sopa: '→mat1' } }], heap: { mat1: {type:'char[][]', value:['→f0','→f1']}, f0:{type:'char[]', value:['A','B']}, f1:{type:'char[]', value:['C','D']} }, description: 'Se crea la matriz de caracteres.' },
            { line: 4, stack: [{ scope: 'main', vars: { sopa: '→mat1', i: 0 } }], heap: { mat1: {type:'char[][]', value:['→f0','→f1']}, f0:{type:'char[]', value:['A','B']}, f1:{type:'char[]', value:['C','D']} }, description: 'Bucle externo (filas), i = 0.' },
            { line: 5, stack: [{ scope: 'main', vars: { sopa: '→mat1', i: 0, j: 0 } }], heap: { mat1: {type:'char[][]', value:['→f0','→f1']}, f0:{type:'char[]', value:['A','B']}, f1:{type:'char[]', value:['C','D']} }, description: 'Bucle interno (columnas), j = 0.' },
            { line: 6, stack: [{ scope: 'main', vars: { sopa: '→mat1', i: 0, j: 0 } }], heap: { mat1: {type:'char[][]', value:['→f0','→f1']}, f0:{type:'char[]', value:['A','B']}, f1:{type:'char[]', value:['C','D']} }, description: 'Imprimiendo sopa[0][0].', output: 'A ' },
            { line: 5, stack: [{ scope: 'main', vars: { sopa: '→mat1', i: 0, j: 1 } }], heap: { mat1: {type:'char[][]', value:['→f0','→f1']}, f0:{type:'char[]', value:['A','B']}, f1:{type:'char[]', value:['C','D']} }, description: 'Bucle interno, j = 1.' },
            { line: 6, stack: [{ scope: 'main', vars: { sopa: '→mat1', i: 0, j: 1 } }], heap: { mat1: {type:'char[][]', value:['→f0','→f1']}, f0:{type:'char[]', value:['A','B']}, f1:{type:'char[]', value:['C','D']} }, description: 'Imprimiendo sopa[0][1].', output: 'B ' },
            { line: 5, stack: [{ scope: 'main', vars: { sopa: '→mat1', i: 0, j: 2 } }], heap: { mat1: {type:'char[][]', value:['→f0','→f1']}, f0:{type:'char[]', value:['A','B']}, f1:{type:'char[]', value:['C','D']} }, description: 'Bucle interno termina.' },
            { line: 4, stack: [{ scope: 'main', vars: { sopa: '→mat1', i: 1 } }], heap: { mat1: {type:'char[][]', value:['→f0','→f1']}, f0:{type:'char[]', value:['A','B']}, f1:{type:'char[]', value:['C','D']} }, description: 'Bucle externo (filas), i = 1.' },
            { line: 5, stack: [{ scope: 'main', vars: { sopa: '→mat1', i: 1, j: 0 } }], heap: { mat1: {type:'char[][]', value:['→f0','→f1']}, f0:{type:'char[]', value:['A','B']}, f1:{type:'char[]', value:['C','D']} }, description: 'Bucle interno (columnas), j = 0.' },
            { line: 6, stack: [{ scope: 'main', vars: { sopa: '→mat1', i: 1, j: 0 } }], heap: { mat1: {type:'char[][]', value:['→f0','→f1']}, f0:{type:'char[]', value:['A','B']}, f1:{type:'char[]', value:['C','D']} }, description: 'Imprimiendo sopa[1][0].', output: 'C ' },
            { line: 5, stack: [{ scope: 'main', vars: { sopa: '→mat1', i: 1, j: 1 } }], heap: { mat1: {type:'char[][]', value:['→f0','→f1']}, f0:{type:'char[]', value:['A','B']}, f1:{type:'char[]', value:['C','D']} }, description: 'Bucle interno, j = 1.' },
            { line: 6, stack: [{ scope: 'main', vars: { sopa: '→mat1', i: 1, j: 1 } }], heap: { mat1: {type:'char[][]', value:['→f0','→f1']}, f0:{type:'char[]', value:['A','B']}, f1:{type:'char[]', value:['C','D']} }, description: 'Imprimiendo sopa[1][1].', output: 'D ' },
            { line: 5, stack: [{ scope: 'main', vars: { sopa: '→mat1', i: 1, j: 2 } }], heap: { mat1: {type:'char[][]', value:['→f0','→f1']}, f0:{type:'char[]', value:['A','B']}, f1:{type:'char[]', value:['C','D']} }, description: 'Bucle interno termina.' },
            { line: 4, stack: [{ scope: 'main', vars: { sopa: '→mat1', i: 2 } }], heap: { mat1: {type:'char[][]', value:['→f0','→f1']}, f0:{type:'char[]', value:['A','B']}, f1:{type:'char[]', value:['C','D']} }, description: 'Bucle externo termina.' },
        ]
    },
    {
        id: 'matriz-irregular',
        title: '4. Matriz Irregular',
        description: 'En Java, las filas de una matriz no tienen por qué tener todas la misma longitud.',
        visualType: 'array',
        code: `public class MatrizIrregular {
    public static void main(String[] args) {
        int[][] triangulo = new int[3][];
        triangulo[0] = new int[1]; // Fila 0 con 1 columna
        triangulo[1] = new int[2]; // Fila 1 con 2 columnas
        triangulo[2] = new int[3]; // Fila 2 con 3 columnas
        
        triangulo[2][1] = 5;
        System.out.println("Valor: " + triangulo[2][1]);
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { triangulo: '→mat1' } }], heap: { mat1: { type: 'int[][]', value: [null, null, null] } }, description: 'Se crea la matriz, pero sus filas son nulas.' },
            { line: 4, stack: [{ scope: 'main', vars: { triangulo: '→mat1' } }], heap: { mat1: { type: 'int[][]', value: ['→f0', null, null] }, f0: { type: 'int[]', value: [0] } }, description: 'Se crea e inicializa la primera fila con 1 elemento.' },
            { line: 5, stack: [{ scope: 'main', vars: { triangulo: '→mat1' } }], heap: { mat1: { type: 'int[][]', value: ['→f0', '→f1', null] }, f0: { type: 'int[]', value: [0] }, f1: { type: 'int[]', value: [0,0] } }, description: 'Se crea e inicializa la segunda fila con 2 elementos.' },
            { line: 6, stack: [{ scope: 'main', vars: { triangulo: '→mat1' } }], heap: { mat1: { type: 'int[][]', value: ['→f0', '→f1', '→f2'] }, f0: { type: 'int[]', value: [0] }, f1: { type: 'int[]', value: [0,0] }, f2: { type: 'int[]', value: [0,0,0] } }, description: 'Se crea e inicializa la tercera fila con 3 elementos.' },
            { line: 8, stack: [{ scope: 'main', vars: { triangulo: '→mat1' } }], heap: { mat1: { type: 'int[][]', value: ['→f0', '→f1', '→f2'] }, f0: { type: 'int[]', value: [0] }, f1: { type: 'int[]', value: [0,0] }, f2: { type: 'int[]', value: [0,5,0] } }, description: 'Se asigna un valor en la fila más larga.' },
            { line: 9, stack: [{ scope: 'main', vars: { triangulo: '→mat1' } }], heap: { mat1: { type: 'int[][]', value: ['→f0', '→f1', '→f2'] }, f0: { type: 'int[]', value: [0] }, f1: { type: 'int[]', value: [0,0] }, f2: { type: 'int[]', value: [0,5,0] } }, description: 'Imprimiendo el valor.', output: 'Valor: 5' },
        ]
    },
    {
        id: 'matriz-suma-fila',
        title: '5. Sumar los Elementos de una Fila',
        description: 'Un ejemplo práctico que combina bucles anidados con una operación de agregación.',
        visualType: 'iteration',
        code: `public class SumaFila {
    public static void main(String[] args) {
        int[][] ventas = {{10, 20}, {30, 40}, {50, 60}};
        int sumaFila1 = 0;
        
        // Sumar solo la fila 1 (índice 1)
        for (int j = 0; j < ventas[1].length; j++) {
            sumaFila1 += ventas[1][j];
        }
        System.out.println("Total ventas fila 1: " + sumaFila1);
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { ventas: '→mat1' } }], heap: { mat1:{type:'int[][]', value:['→f0','→f1','→f2']}, f0:{type:'int[]', value:[10,20]}, f1:{type:'int[]', value:[30,40]}, f2:{type:'int[]', value:[50,60]} }, description: 'Se inicializa la matriz de ventas.' },
            { line: 4, stack: [{ scope: 'main', vars: { ventas: '→mat1', sumaFila1: 0 } }], heap: { mat1:{type:'int[][]', value:['→f0','→f1','→f2']}, f0:{type:'int[]', value:[10,20]}, f1:{type:'int[]', value:[30,40]}, f2:{type:'int[]', value:[50,60]} }, description: 'Se inicializa el acumulador de la suma.' },
            { line: 7, stack: [{ scope: 'main', vars: { ventas: '→mat1', sumaFila1: 0, j: 0 } }], heap: { mat1:{type:'int[][]', value:['→f0','→f1','→f2']}, f0:{type:'int[]', value:[10,20]}, f1:{type:'int[]', value:[30,40]}, f2:{type:'int[]', value:[50,60]} }, description: 'Inicia el bucle para la fila 1. j = 0.' },
            { line: 8, stack: [{ scope: 'main', vars: { ventas: '→mat1', sumaFila1: 30, j: 0 } }], heap: { mat1:{type:'int[][]', value:['→f0','→f1','→f2']}, f0:{type:'int[]', value:[10,20]}, f1:{type:'int[]', value:[30,40]}, f2:{type:'int[]', value:[50,60]} }, description: 'sumaFila1 = 0 + ventas[1][0] (30).' },
            { line: 7, stack: [{ scope: 'main', vars: { ventas: '→mat1', sumaFila1: 30, j: 1 } }], heap: { mat1:{type:'int[][]', value:['→f0','→f1','→f2']}, f0:{type:'int[]', value:[10,20]}, f1:{type:'int[]', value:[30,40]}, f2:{type:'int[]', value:[50,60]} }, description: 'j++.' },
            { line: 8, stack: [{ scope: 'main', vars: { ventas: '→mat1', sumaFila1: 70, j: 1 } }], heap: { mat1:{type:'int[][]', value:['→f0','→f1','→f2']}, f0:{type:'int[]', value:[10,20]}, f1:{type:'int[]', value:[30,40]}, f2:{type:'int[]', value:[50,60]} }, description: 'sumaFila1 = 30 + ventas[1][1] (40).' },
            { line: 7, stack: [{ scope: 'main', vars: { ventas: '→mat1', sumaFila1: 70, j: 2 } }], heap: { mat1:{type:'int[][]', value:['→f0','→f1','→f2']}, f0:{type:'int[]', value:[10,20]}, f1:{type:'int[]', value:[30,40]}, f2:{type:'int[]', value:[50,60]} }, description: 'j++. Condición (2 < 2) es falsa. Fin del bucle.' },
            { line: 10, stack: [{ scope: 'main', vars: { ventas: '→mat1', sumaFila1: 70 } }], heap: { mat1:{type:'int[][]', value:['→f0','→f1','→f2']}, f0:{type:'int[]', value:[10,20]}, f1:{type:'int[]', value:[30,40]}, f2:{type:'int[]', value:[50,60]} }, description: 'Imprimiendo suma final.', output: 'Total ventas fila 1: 70' }
        ]
    },
    {
        id: 'matriz-diagonal',
        title: '6. Recorrer la Diagonal Principal',
        description: 'En una matriz cuadrada, la diagonal principal está formada por los elementos donde el índice de fila es igual al de columna.',
        visualType: 'array',
        code: `public class DiagonalPrincipal {
    public static void main(String[] args) {
        int[][] matrizCuadrada = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} };
        
        System.out.print("Diagonal: ");
        for (int i = 0; i < matrizCuadrada.length; i++) {
            System.out.print(matrizCuadrada[i][i] + " ");
        }
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { matrizCuadrada: '→mat1' } }], heap: { mat1:{type:'int[][]', value:['→f0','→f1','→f2']}, f0:{type:'int[]', value:[1,2,3]}, f1:{type:'int[]', value:[4,5,6]}, f2:{type:'int[]', value:[7,8,9]} }, description: 'Se inicializa la matriz cuadrada.' },
            { line: 5, stack: [{ scope: 'main', vars: { matrizCuadrada: '→mat1' } }], heap: { mat1:{type:'int[][]', value:['→f0','→f1','→f2']}, f0:{type:'int[]', value:[1,2,3]}, f1:{type:'int[]', value:[4,5,6]}, f2:{type:'int[]', value:[7,8,9]} }, description: 'Imprimiendo cabecera.', output: 'Diagonal: ' },
            { line: 6, stack: [{ scope: 'main', vars: { matrizCuadrada: '→mat1', i: 0 } }], heap: { mat1:{type:'int[][]', value:['→f0','→f1','→f2']}, f0:{type:'int[]', value:[1,2,3]}, f1:{type:'int[]', value:[4,5,6]}, f2:{type:'int[]', value:[7,8,9]} }, description: 'Bucle, i = 0.' },
            { line: 7, stack: [{ scope: 'main', vars: { matrizCuadrada: '→mat1', i: 0 } }], heap: { mat1:{type:'int[][]', value:['→f0','→f1','→f2']}, f0:{type:'int[]', value:[1,2,3]}, f1:{type:'int[]', value:[4,5,6]}, f2:{type:'int[]', value:[7,8,9]} }, description: 'Imprimiendo matrizCuadrada[0][0].', output: '1 ' },
            { line: 6, stack: [{ scope: 'main', vars: { matrizCuadrada: '→mat1', i: 1 } }], heap: { mat1:{type:'int[][]', value:['→f0','→f1','→f2']}, f0:{type:'int[]', value:[1,2,3]}, f1:{type:'int[]', value:[4,5,6]}, f2:{type:'int[]', value:[7,8,9]} }, description: 'Bucle, i = 1.' },
            { line: 7, stack: [{ scope: 'main', vars: { matrizCuadrada: '→mat1', i: 1 } }], heap: { mat1:{type:'int[][]', value:['→f0','→f1','→f2']}, f0:{type:'int[]', value:[1,2,3]}, f1:{type:'int[]', value:[4,5,6]}, f2:{type:'int[]', value:[7,8,9]} }, description: 'Imprimiendo matrizCuadrada[1][1].', output: '5 ' },
            { line: 6, stack: [{ scope: 'main', vars: { matrizCuadrada: '→mat1', i: 2 } }], heap: { mat1:{type:'int[][]', value:['→f0','→f1','→f2']}, f0:{type:'int[]', value:[1,2,3]}, f1:{type:'int[]', value:[4,5,6]}, f2:{type:'int[]', value:[7,8,9]} }, description: 'Bucle, i = 2.' },
            { line: 7, stack: [{ scope: 'main', vars: { matrizCuadrada: '→mat1', i: 2 } }], heap: { mat1:{type:'int[][]', value:['→f0','→f1','→f2']}, f0:{type:'int[]', value:[1,2,3]}, f1:{type:'int[]', value:[4,5,6]}, f2:{type:'int[]', value:[7,8,9]} }, description: 'Imprimiendo matrizCuadrada[2][2].', output: '9 ' },
            { line: 6, stack: [{ scope: 'main', vars: { matrizCuadrada: '→mat1', i: 3 } }], heap: { mat1:{type:'int[][]', value:['→f0','→f1','→f2']}, f0:{type:'int[]', value:[1,2,3]}, f1:{type:'int[]', value:[4,5,6]}, f2:{type:'int[]', value:[7,8,9]} }, description: 'Bucle termina.' }
        ]
    }
];