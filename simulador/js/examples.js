// js/examples.js
const examples = [
    {
        id: 'if-else',
        title: 'Condicional Simple (if/else)',
        description: 'Visualiza la evaluación de condiciones y la ejecución de ramas.',
        code: `public class CondicionalSimple {
    public static void main(String[] args) {
        int edad = 18;
        String mensaje;
        
        if (edad >= 18) {
            mensaje = "Eres mayor de edad";
        } else {
            mensaje = "Eres menor de edad";
        }
        
        System.out.println(mensaje);
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { edad: 'undefined', mensaje: 'undefined' }}], heap: {}, description: "Declaración de variables." },
            { line: 3, stack: [{ scope: 'main', vars: { edad: 18, mensaje: 'undefined' }}], heap: {}, description: "Asignación: edad = 18." },
            { line: 6, stack: [{ scope: 'main', vars: { edad: 18, mensaje: 'undefined' }}], heap: {}, description: "Evaluando: edad >= 18. Resultado: true." },
            { line: 7, stack: [{ scope: 'main', vars: { edad: 18, mensaje: '"Eres mayor de edad"' }}], heap: {}, description: "Se ejecuta el bloque 'if'." },
            { line: 12, stack: [{ scope: 'main', vars: { edad: 18, mensaje: '"Eres mayor de edad"' }}], heap: {}, description: "Impresión del mensaje.", output: "Eres mayor de edad" }
        ],
        visualType: 'flow'
    },
    {
        id: 'for-loop',
        title: 'Bucle For',
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
        ],
        visualType: 'iteration'
    },
     {
        id: 'oop-basic',
        title: 'POO Básica',
        description: 'Instanciación de objetos y acceso a sus atributos.',
        code: `class Coche {
    String marca;
    // Constructor
    Coche(String marca) {
        this.marca = marca;
    }
    // Método
    void arrancar() {
        System.out.println(this.marca + " ha arrancado.");
    }
}
public class POOBasico {
    public static void main(String[] args) {
        Coche miCoche = new Coche("Ford");
        miCoche.arrancar();
    }
}`,
        snapshots: [
            { line: 14, stack: [{ scope: 'main', vars: { } }], heap: {}, description: "Inicio del método main." },
            { line: 14, stack: [{ scope: 'main', vars: { } }], heap: {}, description: "Invocando constructor Coche(...)." },
            { line: 4, stack: [{ scope: 'main', vars: { } }, { scope: 'Coche (constructor)', vars: { marca: '"Ford"', this: '→coche1' } }], heap: { coche1: { type: 'Coche', value: { marca: 'null' } } }, description: "Entrando al constructor." },
            { line: 5, stack: [{ scope: 'main', vars: { } }, { scope: 'Coche (constructor)', vars: { marca: '"Ford"', this: '→coche1' } }], heap: { coche1: { type: 'Coche', value: { marca: '"Ford"' } } }, description: "Asignando 'this.marca'." },
            { line: 6, stack: [{ scope: 'main', vars: { miCoche: '→coche1' } }], heap: { coche1: { type: 'Coche', value: { marca: '"Ford"' } } }, description: "Retornando del constructor." },
            { line: 15, stack: [{ scope: 'main', vars: { miCoche: '→coche1' } }], heap: { coche1: { type: 'Coche', value: { marca: '"Ford"' } } }, description: "Invocando método miCoche.arrancar()." },
            { line: 8, stack: [{ scope: 'main', vars: { miCoche: '→coche1' } }, { scope: 'arrancar', vars: { this: '→coche1' } } ], heap: { coche1: { type: 'Coche', value: { marca: '"Ford"' } } }, description: "Entrando al método arrancar()." },
            { line: 9, stack: [{ scope: 'main', vars: { miCoche: '→coche1' } }, { scope: 'arrancar', vars: { this: '→coche1' } } ], heap: { coche1: { type: 'Coche', value: { marca: '"Ford"' } } }, description: "Imprimiendo mensaje.", output: "Ford ha arrancado." },
            { line: 10, stack: [{ scope: 'main', vars: { miCoche: '→coche1' } }], heap: { coche1: { type: 'Coche', value: { marca: '"Ford"' } } }, description: "Retornando de arrancar()." },
            { line: 16, stack: [{ scope: 'main', vars: { miCoche: '→coche1' } }], heap: { coche1: { type: 'Coche', value: { marca: '"Ford"' } } }, description: "Fin del programa." },
        ],
        visualType: 'object'
    },
    {
        id: 'inheritance',
        title: 'Herencia',
        description: 'Diagrama de clases con superclase y subclase.',
        code: `class Animal {
    void comer() { 
        System.out.println("comiendo"); 
    }
}
class Perro extends Animal {
    void ladrar() { 
        System.out.println("ladrando"); 
    }
}
public class HerenciaEjemplo {
    public static void main(String[] args) {
        Perro miPerro = new Perro();
        miPerro.comer();   // Método heredado
        miPerro.ladrar();  // Método propio
    }
}`,
        snapshots: [
            { line: 13, stack: [{ scope: 'main', vars: {} }], heap: {}, description: "Inicio del método main." },
            { line: 13, stack: [{ scope: 'main', vars: { miPerro: "→perro1" } }], heap: { perro1: { type: "Perro", value: {} } }, description: "Creación de un objeto 'Perro'." },
            { line: 14, stack: [{ scope: 'main', vars: { miPerro: "→perro1" } }], heap: { perro1: { type: "Perro", value: {} } }, description: "Invocando método heredado miPerro.comer()." },
            { line: 2, stack: [{ scope: 'main', vars: { miPerro: "→perro1" } }, { scope: 'comer', vars: { this: '→perro1' } }], heap: { perro1: { type: "Perro", value: {} } }, description: "Entrando al método comer() de la superclase Animal." },
            { line: 3, stack: [{ scope: 'main', vars: { miPerro: "→perro1" } }, { scope: 'comer', vars: { this: '→perro1' } }], heap: { perro1: { type: "Perro", value: {} } }, description: "Imprimiendo mensaje.", output: "comiendo" },
            { line: 4, stack: [{ scope: 'main', vars: { miPerro: "→perro1" } }], heap: { perro1: { type: "Perro", value: {} } }, description: "Retornando de comer()." },
            { line: 15, stack: [{ scope: 'main', vars: { miPerro: "→perro1" } }], heap: { perro1: { type: "Perro", value: {} } }, description: "Invocando método propio miPerro.ladrar()." },
            { line: 7, stack: [{ scope: 'main', vars: { miPerro: "→perro1" } }, { scope: 'ladrar', vars: { this: '→perro1' } }], heap: { perro1: { type: "Perro", value: {} } }, description: "Entrando al método ladrar()." },
            { line: 8, stack: [{ scope: 'main', vars: { miPerro: "→perro1" } }, { scope: 'ladrar', vars: { this: '→perro1' } }], heap: { perro1: { type: "Perro", value: {} } }, description: "Imprimiendo mensaje.", output: "ladrando" },
            { line: 9, stack: [{ scope: 'main', vars: { miPerro: "→perro1" } }], heap: { perro1: { type: "Perro", value: {} } }, description: "Retornando de ladrar()." },
            { line: 16, stack: [{ scope: 'main', vars: { miPerro: "→perro1" } }], heap: { perro1: { type: "Perro", value: {} } }, description: "Fin del programa." },
        ],
        visualType: 'inheritance'
    },
    {
        id: 'polymorphism',
        title: 'Polimorfismo',
        description: 'Mismo método, diferentes comportamientos según el objeto.',
        code: `class Figura {
    void dibujar() { 
        System.out.println("Figura"); 
    }
}
class Circulo extends Figura {
    void dibujar() { 
        System.out.println("Círculo"); 
    }
}
class Cuadrado extends Figura {
    void dibujar() { 
        System.out.println("Cuadrado"); 
    }
}
public class PolimorfismoEjemplo {
    public static void main(String[] args) {
        Figura miFigura = new Circulo();
        miFigura.dibujar(); // Llama al de Círculo
        
        miFigura = new Cuadrado();
        miFigura.dibujar(); // Llama al de Cuadrado
    }
}`,
        snapshots: [
            { line: 18, stack: [{ scope: 'main', vars: {} }], heap: {}, description: "Inicio del método main." },
            { line: 18, stack: [{ scope: 'main', vars: { miFigura: "→circ1" } }], heap: { circ1: { type: 'Circulo', value: {} } }, description: "Variable 'Figura' apunta a un objeto 'Circulo'." },
            { line: 19, stack: [{ scope: 'main', vars: { miFigura: "→circ1" } }], heap: { circ1: { type: 'Circulo', value: {} } }, description: "Invocando miFigura.dibujar()." },
            { line: 7, stack: [{ scope: 'main', vars: { miFigura: "→circ1" } }, { scope: 'dibujar (Circulo)', vars: { this: '→circ1' } }], heap: { circ1: { type: 'Circulo', value: {} } }, description: "Se ejecuta la versión de Círculo (polimorfismo)." },
            { line: 8, stack: [{ scope: 'main', vars: { miFigura: "→circ1" } }, { scope: 'dibujar (Circulo)', vars: { this: '→circ1' } }], heap: { circ1: { type: 'Circulo', value: {} } }, description: "Imprimiendo.", output: "Círculo" },
            { line: 9, stack: [{ scope: 'main', vars: { miFigura: "→circ1" } }], heap: { circ1: { type: 'Circulo', value: {} } }, description: "Retornando de dibujar()." },
            { line: 21, stack: [{ scope: 'main', vars: { miFigura: "→cuad1" } }], heap: { circ1: { type: 'Circulo', value: {} }, cuad1: { type: 'Cuadrado', value: {} } }, description: "La misma variable ahora apunta a un nuevo objeto 'Cuadrado'." },
            { line: 22, stack: [{ scope: 'main', vars: { miFigura: "→cuad1" } }], heap: { circ1: { type: 'Circulo', value: {} }, cuad1: { type: 'Cuadrado', value: {} } }, description: "Invocando miFigura.dibujar() de nuevo." },
            { line: 12, stack: [{ scope: 'main', vars: { miFigura: "→cuad1" } }, { scope: 'dibujar (Cuadrado)', vars: { this: '→cuad1' } }], heap: { circ1: { type: 'Circulo', value: {} }, cuad1: { type: 'Cuadrado', value: {} } }, description: "Ahora se ejecuta la versión de Cuadrado." },
            { line: 13, stack: [{ scope: 'main', vars: { miFigura: "→cuad1" } }, { scope: 'dibujar (Cuadrado)', vars: { this: '→cuad1' } }], heap: { circ1: { type: 'Circulo', value: {} }, cuad1: { type: 'Cuadrado', value: {} } }, description: "Imprimiendo.", output: "Cuadrado" },
            { line: 14, stack: [{ scope: 'main', vars: { miFigura: "→cuad1" } }], heap: { circ1: { type: 'Circulo', value: {} }, cuad1: { type: 'Cuadrado', value: {} } }, description: "Retornando de dibujar()." },
            { line: 23, stack: [{ scope: 'main', vars: { miFigura: "→cuad1" } }], heap: { circ1: { type: 'Circulo', value: {} }, cuad1: { type: 'Cuadrado', value: {} } }, description: "Fin del programa." },
        ],
        visualType: 'polymorphism'
    }
];