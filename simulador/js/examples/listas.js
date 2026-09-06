// js/examples/listas.js
examples = [
    {
        id: 'arraylist-basico',
        title: '1. ArrayList Básico',
        description: 'Creación de un ArrayList, añadir elementos con .add() y acceder con .get()',
        visualType: 'list',
        code: `import java.util.ArrayList;

public class ArrayListBasico {
    public static void main(String[] args) {
        ArrayList<String> nombres = new ArrayList<>();
        nombres.add("Ana");
        nombres.add("Luis");
        nombres.add("Juan");
        String primerNombre = nombres.get(0);
        System.out.println("El primer nombre es: " + primerNombre);
    }
}`,
        snapshots: [
            { line: 5, stack: [{ scope: 'main', vars: { nombres: '→list1' } }], heap: { list1: { type: 'ArrayList', value: [] } }, description: 'Se crea un objeto ArrayList vacío en el Heap.' },
            { line: 6, stack: [{ scope: 'main', vars: { nombres: '→list1' } }], heap: { list1: { type: 'ArrayList', value: ['"Ana"'] } }, description: 'Se añade "Ana" a la lista.' },
            { line: 7, stack: [{ scope: 'main', vars: { nombres: '→list1' } }], heap: { list1: { type: 'ArrayList', value: ['"Ana"', '"Luis"'] } }, description: 'Se añade "Luis" al final de la lista.' },
            { line: 8, stack: [{ scope: 'main', vars: { nombres: '→list1' } }], heap: { list1: { type: 'ArrayList', value: ['"Ana"', '"Luis"', '"Juan"'] } }, description: 'Se añade "Juan" al final de la lista.' },
            { line: 9, stack: [{ scope: 'main', vars: { nombres: '→list1', primerNombre: '"Ana"' } }], heap: { list1: { type: 'ArrayList', value: ['"Ana"', '"Luis"', '"Juan"'] } }, description: 'Se obtiene el elemento en el índice 0.' },
            { line: 10, stack: [{ scope: 'main', vars: { nombres: '→list1', primerNombre: '"Ana"' } }], heap: { list1: { type: 'ArrayList', value: ['"Ana"', '"Luis"', '"Juan"'] } }, description: 'Se imprime el valor obtenido.', output: 'El primer nombre es: Ana' }
        ]
    },
    {
        id: 'linkedlist-basico',
        title: '2. LinkedList Básico',
        description: 'Funciona similar a un ArrayList para añadir y obtener, pero internamente usa nodos enlazados.',
        visualType: 'list',
        code: `import java.util.LinkedList;

public class LinkedListBasico {
    public static void main(String[] args) {
        LinkedList<Integer> edades = new LinkedList<>();
        edades.add(25);
        edades.add(30);
        edades.addFirst(20); // Método específico de LinkedList
        System.out.println("La primera edad es: " + edades.get(0));
    }
}`,
        snapshots: [
            { line: 5, stack: [{ scope: 'main', vars: { edades: '→list1' } }], heap: { list1: { type: 'LinkedList', value: [] } }, description: 'Se crea una LinkedList vacía.' },
            { line: 6, stack: [{ scope: 'main', vars: { edades: '→list1' } }], heap: { list1: { type: 'LinkedList', value: [25] } }, description: 'Se añade el 25 al final.' },
            { line: 7, stack: [{ scope: 'main', vars: { edades: '→list1' } }], heap: { list1: { type: 'LinkedList', value: [25, 30] } }, description: 'Se añade el 30 al final.' },
            { line: 8, stack: [{ scope: 'main', vars: { edades: '→list1' } }], heap: { list1: { type: 'LinkedList', value: [20, 25, 30] } }, description: 'Se añade el 20 al PRINCIPIO de la lista.' },
            { line: 9, stack: [{ scope: 'main', vars: { edades: '→list1' } }], heap: { list1: { type: 'LinkedList', value: [20, 25, 30] } }, description: 'Se obtiene e imprime el elemento en el índice 0.', output: 'La primera edad es: 20' }
        ]
    },
    {
        id: 'stack-lifo',
        title: '3. Pila (Stack) - LIFO',
        description: 'Una Pila sigue el principio LIFO (Last-In, First-Out). El último en entrar es el primero en salir.',
        visualType: 'stack',
        code: `import java.util.Stack;

public class PilaEjemplo {
    public static void main(String[] args) {
        Stack<String> libros = new Stack<>();
        libros.push("El Quijote");
        libros.push("La Odisea");
        String ultimoLibro = libros.pop(); // Saca "La Odisea"
        System.out.println("Libro sacado: " + ultimoLibro);
        System.out.println("Libro en la cima ahora: " + libros.peek());
    }
}`,
        snapshots: [
            { line: 5, stack: [{ scope: 'main', vars: { libros: '→stack1' } }], heap: { stack1: { type: 'Stack', value: [] } }, description: 'Se crea una Pila vacía.' },
            { line: 6, stack: [{ scope: 'main', vars: { libros: '→stack1' } }], heap: { stack1: { type: 'Stack', value: ['"El Quijote"'] } }, description: 'push("El Quijote"): se apila el libro.' },
            { line: 7, stack: [{ scope: 'main', vars: { libros: '→stack1' } }], heap: { stack1: { type: 'Stack', value: ['"El Quijote"', '"La Odisea"'] } }, description: 'push("La Odisea"): se apila encima del anterior.' },
            { line: 8, stack: [{ scope: 'main', vars: { libros: '→stack1', ultimoLibro: '"La Odisea"' } }], heap: { stack1: { type: 'Stack', value: ['"El Quijote"'] } }, description: 'pop(): se saca el último elemento ("La Odisea") y se asigna.' },
            { line: 9, stack: [{ scope: 'main', vars: { libros: '→stack1', ultimoLibro: '"La Odisea"' } }], heap: { stack1: { type: 'Stack', value: ['"El Quijote"'] } }, description: 'Se imprime el libro que se sacó.', output: 'Libro sacado: La Odisea' },
            { line: 10, stack: [{ scope: 'main', vars: { libros: '→stack1', ultimoLibro: '"La Odisea"' } }], heap: { stack1: { type: 'Stack', value: ['"El Quijote"'] } }, description: 'peek(): se mira el nuevo elemento en la cima sin sacarlo.', output: 'Libro en la cima ahora: El Quijote' }
        ]
    },
    {
        id: 'queue-fifo',
        title: '4. Cola (Queue) - FIFO',
        description: 'Una Cola sigue el principio FIFO (First-In, First-Out). El primero en entrar es el primero en salir.',
        visualType: 'queue',
        code: `import java.util.LinkedList;
import java.util.Queue;

public class ColaEjemplo {
    public static void main(String[] args) {
        Queue<String> fila = new LinkedList<>();
        fila.offer("Persona A");
        fila.offer("Persona B");
        String primeraPersona = fila.poll(); // Saca a "Persona A"
        System.out.println("Atendiendo a: " + primeraPersona);
        System.out.println("Siguiente en la fila: " + fila.peek());
    }
}`,
        snapshots: [
            { line: 6, stack: [{ scope: 'main', vars: { fila: '→q1' } }], heap: { q1: { type: 'Queue', value: [] } }, description: 'Se crea una Cola (implementada con LinkedList).' },
            { line: 7, stack: [{ scope: 'main', vars: { fila: '→q1' } }], heap: { q1: { type: 'Queue', value: ['"Persona A"'] } }, description: 'offer("Persona A"): se añade al final de la cola.' },
            { line: 8, stack: [{ scope: 'main', vars: { fila: '→q1' } }], heap: { q1: { type: 'Queue', value: ['"Persona A"', '"Persona B"'] } }, description: 'offer("Persona B"): se añade al final de la cola.' },
            { line: 9, stack: [{ scope: 'main', vars: { fila: '→q1', primeraPersona: '"Persona A"' } }], heap: { q1: { type: 'Queue', value: ['"Persona B"'] } }, description: 'poll(): se saca el primer elemento ("Persona A") y se asigna.' },
            { line: 10, stack: [{ scope: 'main', vars: { fila: '→q1', primeraPersona: '"Persona A"' } }], heap: { q1: { type: 'Queue', value: ['"Persona B"'] } }, description: 'Se imprime la persona atendida.', output: 'Atendiendo a: Persona A' },
            { line: 11, stack: [{ scope: 'main', vars: { fila: '→q1', primeraPersona: '"Persona A"' } }], heap: { q1: { type: 'Queue', value: ['"Persona B"'] } }, description: 'peek(): se mira quién es el siguiente sin sacarlo.', output: 'Siguiente en la fila: Persona B' }
        ]
    },
    {
        id: 'list-iterator',
        title: '5. Iterar sobre una Lista',
        description: 'Se puede recorrer una lista con un bucle for-each, que es la forma más común y legible.',
        visualType: 'list',
        code: `import java.util.ArrayList;

public class IterarLista {
    public static void main(String[] args) {
        ArrayList<Integer> numeros = new ArrayList<>();
        numeros.add(100);
        numeros.add(200);
        numeros.add(300);
        
        for (Integer numero : numeros) {
            System.out.println("Número: " + numero);
        }
    }
}`,
        snapshots: [
            { line: 5, stack: [{ scope: 'main', vars: { numeros: '→list1' } }], heap: { list1: { type: 'ArrayList', value: [] } }, description: 'Se crea la lista.' },
            { line: 6, stack: [{ scope: 'main', vars: { numeros: '→list1' } }], heap: { list1: { type: 'ArrayList', value: [100] } }, description: 'Añadiendo 100.' },
            { line: 7, stack: [{ scope: 'main', vars: { numeros: '→list1' } }], heap: { list1: { type: 'ArrayList', value: [100, 200] } }, description: 'Añadiendo 200.' },
            { line: 8, stack: [{ scope: 'main', vars: { numeros: '→list1' } }], heap: { list1: { type: 'ArrayList', value: [100, 200, 300] } }, description: 'Añadiendo 300.' },
            { line: 10, stack: [{ scope: 'main', vars: { numeros: '→list1', numero: 100 } }], heap: { list1: { type: 'ArrayList', value: [100, 200, 300] } }, description: 'Inicia el bucle for-each. numero = 100.' },
            { line: 11, stack: [{ scope: 'main', vars: { numeros: '→list1', numero: 100 } }], heap: { list1: { type: 'ArrayList', value: [100, 200, 300] } }, description: 'Imprimiendo el primer número.', output: 'Número: 100' },
            { line: 10, stack: [{ scope: 'main', vars: { numeros: '→list1', numero: 200 } }], heap: { list1: { type: 'ArrayList', value: [100, 200, 300] } }, description: 'Siguiente iteración. numero = 200.' },
            { line: 11, stack: [{ scope: 'main', vars: { numeros: '→list1', numero: 200 } }], heap: { list1: { type: 'ArrayList', value: [100, 200, 300] } }, description: 'Imprimiendo el segundo número.', output: 'Número: 200' },
            { line: 10, stack: [{ scope: 'main', vars: { numeros: '→list1', numero: 300 } }], heap: { list1: { type: 'ArrayList', value: [100, 200, 300] } }, description: 'Siguiente iteración. numero = 300.' },
            { line: 11, stack: [{ scope: 'main', vars: { numeros: '→list1', numero: 300 } }], heap: { list1: { type: 'ArrayList', value: [100, 200, 300] } }, description: 'Imprimiendo el tercer número.', output: 'Número: 300' },
            { line: 10, stack: [{ scope: 'main', vars: { numeros: '→list1' } }], heap: { list1: { type: 'ArrayList', value: [100, 200, 300] } }, description: 'Fin del bucle.' }
        ]
    },
    {
        id: 'list-remove',
        title: '6. Eliminar Elementos',
        description: 'Se pueden eliminar elementos de una lista por su índice o por su valor.',
        visualType: 'list',
        code: `import java.util.ArrayList;

public class EliminarElementos {
    public static void main(String[] args) {
        ArrayList<String> planetas = new ArrayList<>();
        planetas.add("Mercurio");
        planetas.add("Venus");
        planetas.add("Tierra");
        
        planetas.remove(1); // Elimina "Venus" por su índice
        planetas.remove("Tierra"); // Elimina "Tierra" por su valor
        
        System.out.println("Planeta restante: " + planetas.get(0));
    }
}`,
        snapshots: [
            { line: 5, stack: [{ scope: 'main', vars: { planetas: '→list1' } }], heap: { list1: { type: 'ArrayList', value: [] } }, description: 'Se crea la lista.' },
            { line: 6, stack: [{ scope: 'main', vars: { planetas: '→list1' } }], heap: { list1: { type: 'ArrayList', value: ['"Mercurio"'] } }, description: 'Añadiendo "Mercurio".' },
            { line: 7, stack: [{ scope: 'main', vars: { planetas: '→list1' } }], heap: { list1: { type: 'ArrayList', value: ['"Mercurio"', '"Venus"'] } }, description: 'Añadiendo "Venus".' },
            { line: 8, stack: [{ scope: 'main', vars: { planetas: '→list1' } }], heap: { list1: { type: 'ArrayList', value: ['"Mercurio"', '"Venus"', '"Tierra"'] } }, description: 'Añadiendo "Tierra".' },
            { line: 10, stack: [{ scope: 'main', vars: { planetas: '→list1' } }], heap: { list1: { type: 'ArrayList', value: ['"Mercurio"', '"Tierra"'] } }, description: 'Se elimina el elemento en el índice 1 ("Venus"). "Tierra" se desplaza.' },
            { line: 11, stack: [{ scope: 'main', vars: { planetas: '→list1' } }], heap: { list1: { type: 'ArrayList', value: ['"Mercurio"'] } }, description: 'Se busca y elimina el elemento con el valor "Tierra".' },
            { line: 13, stack: [{ scope: 'main', vars: { planetas: '→list1' } }], heap: { list1: { type: 'ArrayList', value: ['"Mercurio"'] } }, description: 'Se imprime el único elemento que queda en la lista.', output: 'Planeta restante: Mercurio' }
        ]
    }
];