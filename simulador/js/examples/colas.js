// js/examples/colas.js
examples = [
    {
        id: 'queue-basico',
        title: '1. Cola Básica (offer, poll)',
        description: 'Se añaden elementos con offer() y se sacan con poll(). El primero en entrar es siempre el primero en salir.',
        visualType: 'queue',
        code: `import java.util.LinkedList;
import java.util.Queue;

public class ColaBasica {
    public static void main(String[] args) {
        Queue<String> fila = new LinkedList<>();
        fila.offer("Cliente 1");
        fila.offer("Cliente 2");
        String atendido = fila.poll(); // Saca a "Cliente 1"
        System.out.println("Atendiendo a: " + atendido);
    }
}`,
        snapshots: [
            { line: 6, stack: [{ scope: 'main', vars: { fila: '→q1' } }], heap: { q1: { type: 'Queue', value: [] } }, description: 'Se crea una Cola vacía.' },
            { line: 7, stack: [{ scope: 'main', vars: { fila: '→q1' } }], heap: { q1: { type: 'Queue', value: ['"Cliente 1"'] } }, description: 'offer("Cliente 1"): Se añade al final de la cola.' },
            { line: 8, stack: [{ scope: 'main', vars: { fila: '→q1' } }], heap: { q1: { type: 'Queue', value: ['"Cliente 1"', '"Cliente 2"'] } }, description: 'offer("Cliente 2"): Se añade al final de la cola.' },
            { line: 9, stack: [{ scope: 'main', vars: { fila: '→q1', atendido: '"Cliente 1"' } }], heap: { q1: { type: 'Queue', value: ['"Cliente 2"'] } }, description: 'poll(): Se saca el primer elemento ("Cliente 1") y se asigna.' },
            { line: 10, stack: [{ scope: 'main', vars: { fila: '→q1', atendido: '"Cliente 1"' } }], heap: { q1: { type: 'Queue', value: ['"Cliente 2"'] } }, description: 'Se imprime el cliente atendido.', output: 'Atendiendo a: Cliente 1' }
        ]
    },
    {
        id: 'queue-peek',
        title: '2. Consultar Frente (peek)',
        description: 'El método peek() permite ver el elemento al frente de la cola sin sacarlo.',
        visualType: 'queue',
        code: `import java.util.LinkedList;
import java.util.Queue;

public class ColaPeek {
    public static void main(String[] args) {
        Queue<Integer> turnos = new LinkedList<>();
        turnos.offer(101);
        turnos.offer(102);
        Integer proximoTurno = turnos.peek();
        System.out.println("Próximo turno (sin sacar): " + proximoTurno);
        System.out.println("Personas en la cola: " + turnos.size());
    }
}`,
        snapshots: [
            { line: 6, stack: [{ scope: 'main', vars: { turnos: '→q1' } }], heap: { q1: { type: 'Queue', value: [] } }, description: 'Se crea la cola de turnos.' },
            { line: 7, stack: [{ scope: 'main', vars: { turnos: '→q1' } }], heap: { q1: { type: 'Queue', value: [101] } }, description: 'Se encola el turno 101.' },
            { line: 8, stack: [{ scope: 'main', vars: { turnos: '→q1' } }], heap: { q1: { type: 'Queue', value: [101, 102] } }, description: 'Se encola el turno 102.' },
            { line: 9, stack: [{ scope: 'main', vars: { turnos: '→q1', proximoTurno: 101 } }], heap: { q1: { type: 'Queue', value: [101, 102] } }, description: 'peek(): Se consulta el frente (101) sin modificar la cola.' },
            { line: 10, stack: [{ scope: 'main', vars: { turnos: '→q1', proximoTurno: 101 } }], heap: { q1: { type: 'Queue', value: [101, 102] } }, description: 'Se imprime el turno consultado.', output: 'Próximo turno (sin sacar): 101' },
            { line: 11, stack: [{ scope: 'main', vars: { turnos: '→q1', proximoTurno: 101 } }], heap: { q1: { type: 'Queue', value: [101, 102] } }, description: 'El método .size() confirma que la cola aún tiene 2 elementos.', output: 'Personas en la cola: 2' }
        ]
    },
    {
        id: 'queue-is-empty',
        title: '3. Cola Vacía (isEmpty)',
        description: 'El método isEmpty() comprueba si la cola no tiene elementos. Es crucial para evitar errores al hacer poll().',
        visualType: 'queue',
        code: `import java.util.LinkedList;
import java.util.Queue;

public class ColaVacia {
    public static void main(String[] args) {
        Queue<String> cola = new LinkedList<>();
        System.out.println("¿Cola vacía al inicio? " + cola.isEmpty());
        cola.offer("A");
        cola.poll();
        System.out.println("¿Cola vacía al final? " + cola.isEmpty());
    }
}`,
        snapshots: [
            { line: 6, stack: [{ scope: 'main', vars: { cola: '→q1' } }], heap: { q1: { type: 'Queue', value: [] } }, description: 'Se crea la cola vacía.' },
            { line: 7, stack: [{ scope: 'main', vars: { cola: '→q1' } }], heap: { q1: { type: 'Queue', value: [] } }, description: 'cola.isEmpty() devuelve true.', output: '¿Cola vacía al inicio? true' },
            { line: 8, stack: [{ scope: 'main', vars: { cola: '→q1' } }], heap: { q1: { type: 'Queue', value: ['"A"'] } }, description: 'Se encola el elemento "A".' },
            { line: 9, stack: [{ scope: 'main', vars: { cola: '→q1' } }], heap: { q1: { type: 'Queue', value: [] } }, description: 'Se desencola "A". La cola vuelve a estar vacía.' },
            { line: 10, stack: [{ scope: 'main', vars: { cola: '→q1' } }], heap: { q1: { type: 'Queue', value: [] } }, description: 'cola.isEmpty() ahora devuelve true de nuevo.', output: '¿Cola vacía al final? true' }
        ]
    },
    {
        id: 'queue-procesar',
        title: '4. Procesar elementos con While',
        description: 'Un patrón común es usar un bucle `while (!cola.isEmpty())` para procesar y vaciar todos los elementos de una cola en orden.',
        visualType: 'queue',
        code: `import java.util.LinkedList;
import java.util.Queue;

public class ProcesarCola {
    public static void main(String[] args) {
        Queue<String> pedidos = new LinkedList<>();
        pedidos.offer("Pizza");
        pedidos.offer("Hamburguesa");
        
        while (!pedidos.isEmpty()) {
            System.out.println("Procesando pedido: " + pedidos.poll());
        }
    }
}`,
        snapshots: [
            { line: 6, stack: [{ scope: 'main', vars: { pedidos: '→q1' } }], heap: { q1: { type: 'Queue', value: [] } }, description: 'Se crea la cola de pedidos.' },
            { line: 7, stack: [{ scope: 'main', vars: { pedidos: '→q1' } }], heap: { q1: { type: 'Queue', value: ['"Pizza"'] } }, description: 'Se encola el pedido de "Pizza".' },
            { line: 8, stack: [{ scope: 'main', vars: { pedidos: '→q1' } }], heap: { q1: { type: 'Queue', value: ['"Pizza"', '"Hamburguesa"'] } }, description: 'Se encola el pedido de "Hamburguesa".' },
            { line: 10, stack: [{ scope: 'main', vars: { pedidos: '→q1' } }], heap: { q1: { type: 'Queue', value: ['"Pizza"', '"Hamburguesa"'] } }, description: 'Inicia el bucle. La cola no está vacía.' },
            { line: 11, stack: [{ scope: 'main', vars: { pedidos: '→q1' } }], heap: { q1: { type: 'Queue', value: ['"Hamburguesa"'] } }, description: 'Se desencola y procesa "Pizza".', output: 'Procesando pedido: Pizza' },
            { line: 10, stack: [{ scope: 'main', vars: { pedidos: '→q1' } }], heap: { q1: { type: 'Queue', value: ['"Hamburguesa"'] } }, description: 'La cola no está vacía.' },
            { line: 11, stack: [{ scope: 'main', vars: { pedidos: '→q1' } }], heap: { q1: { type: 'Queue', value: [] } }, description: 'Se desencola y procesa "Hamburguesa".', output: 'Procesando pedido: Hamburguesa' },
            { line: 10, stack: [{ scope: 'main', vars: { pedidos: '→q1' } }], heap: { q1: { type: 'Queue', value: [] } }, description: 'La cola ahora está vacía. El bucle termina.' },
        ]
    },
    {
        id: 'queue-size-for',
        title: '5. Recorrer Cola con For',
        description: '¡Cuidado! Recorrer una cola con un `for` y `poll()` al mismo tiempo puede dar resultados inesperados si no se maneja bien el tamaño cambiante.',
        visualType: 'queue',
        code: `import java.util.LinkedList;
import java.util.Queue;

public class RecorrerColaFor {
    public static void main(String[] args) {
        Queue<Integer> cola = new LinkedList<>();
        cola.offer(1); cola.offer(2); cola.offer(3);
        
        int tamanoInicial = cola.size();
        for (int i = 0; i < tamanoInicial; i++) {
            System.out.println("Elemento: " + cola.poll());
        }
    }
}`,
        snapshots: [
            { line: 7, stack: [{ scope: 'main', vars: { cola: '→q1' } }], heap: { q1: { type: 'Queue', value: [1,2,3] } }, description: 'Se encolan 3 números.'},
            { line: 9, stack: [{ scope: 'main', vars: { cola: '→q1', tamanoInicial: 3 } }], heap: { q1: { type: 'Queue', value: [1,2,3] } }, description: 'Se guarda el tamaño inicial (3) para controlar el bucle.'},
            { line: 10, stack: [{ scope: 'main', vars: { cola: '→q1', tamanoInicial: 3, i:0 } }], heap: { q1: { type: 'Queue', value: [2,3] } }, description: 'Iteración 1: Se desencola y se imprime el 1.', output: 'Elemento: 1'},
            { line: 10, stack: [{ scope: 'main', vars: { cola: '→q1', tamanoInicial: 3, i:1 } }], heap: { q1: { type: 'Queue', value: [3] } }, description: 'Iteración 2: Se desencola y se imprime el 2.', output: 'Elemento: 2'},
            { line: 10, stack: [{ scope: 'main', vars: { cola: '→q1', tamanoInicial: 3, i:2 } }], heap: { q1: { type: 'Queue', value: [] } }, description: 'Iteración 3: Se desencola y se imprime el 3.', output: 'Elemento: 3'},
            { line: 10, stack: [{ scope: 'main', vars: { cola: '→q1', tamanoInicial: 3, i:3 } }], heap: { q1: { type: 'Queue', value: [] } }, description: 'Fin del bucle.'},
        ]
    },
    {
        id: 'deque-as-stack',
        title: '6. Deque (Cola Doble)',
        description: 'Una Deque (Double-Ended Queue) permite añadir y quitar elementos de ambos extremos. Se puede usar como Pila (LIFO).',
        visualType: 'stack',
        code: `import java.util.ArrayDeque;
import java.util.Deque;

public class DequeComoPila {
    public static void main(String[] args) {
        Deque<Integer> pila = new ArrayDeque<>();
        pila.push(10); // Equivalente a addFirst()
        pila.push(20);
        int ultimo = pila.pop(); // Equivalente a removeFirst()
        System.out.println("Elemento sacado: " + ultimo);
    }
}`,
        snapshots: [
            { line: 6, stack: [{ scope: 'main', vars: { pila: '→d1' } }], heap: { d1: { type: 'Deque', value: [] } }, description: 'Se crea una Deque vacía.' },
            { line: 7, stack: [{ scope: 'main', vars: { pila: '→d1' } }], heap: { d1: { type: 'Deque', value: [10] } }, description: 'push(10): Se añade 10 al FRENTE.' },
            { line: 8, stack: [{ scope: 'main', vars: { pila: '→d1' } }], heap: { d1: { type: 'Deque', value: [20, 10] } }, description: 'push(20): Se añade 20 al FRENTE.' },
            { line: 9, stack: [{ scope: 'main', vars: { pila: '→d1', ultimo: 20 } }], heap: { d1: { type: 'Deque', value: [10] } }, description: 'pop(): Se saca el elemento del FRENTE (20).' },
            { line: 10, stack: [{ scope: 'main', vars: { pila: '→d1', ultimo: 20 } }], heap: { d1: { type: 'Deque', value: [10] } }, description: 'Se imprime el resultado.', output: 'Elemento sacado: 20' }
        ]
    }
];