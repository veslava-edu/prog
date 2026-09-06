// js/examples/POO_Avanzada.js
examples = [
    {
        id: 'herencia',
        title: '1. Herencia',
        description: 'Una clase (subclase) puede heredar atributos y métodos de otra (superclase).',
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
        ]
    },
    {
        id: 'polimorfismo',
        title: '2. Polimorfismo',
        description: 'Una variable de tipo superclase puede apuntar a un objeto de una subclase. La llamada a un método ejecutará la versión de la subclase.',
        code: `class Figura {
    void dibujar() { System.out.println("Figura"); }
}
class Circulo extends Figura {
    void dibujar() { System.out.println("Círculo"); }
}
class Cuadrado extends Figura {
    void dibujar() { System.out.println("Cuadrado"); }
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
            { line: 12, stack: [{ scope: 'main', vars: {} }], heap: {}, description: "Inicio del método main." },
            { line: 12, stack: [{ scope: 'main', vars: { miFigura: "→circ1" } }], heap: { circ1: { type: 'Circulo', value: {} } }, description: "Variable 'Figura' apunta a un objeto 'Circulo'." },
            { line: 13, stack: [{ scope: 'main', vars: { miFigura: "→circ1" } }], heap: { circ1: { type: 'Circulo', value: {} } }, description: "Invocando miFigura.dibujar()." },
            { line: 5, stack: [{ scope: 'main', vars: { miFigura: "→circ1" } }, { scope: 'dibujar (Circulo)', vars: { this: '→circ1' } }], heap: { circ1: { type: 'Circulo', value: {} } }, description: "Se ejecuta la versión de Círculo (polimorfismo)." },
            { line: 5, stack: [{ scope: 'main', vars: { miFigura: "→circ1" } }, { scope: 'dibujar (Circulo)', vars: { this: '→circ1' } }], heap: { circ1: { type: 'Circulo', value: {} } }, description: "Imprimiendo.", output: "Círculo" },
            { line: 6, stack: [{ scope: 'main', vars: { miFigura: "→circ1" } }], heap: { circ1: { type: 'Circulo', value: {} } }, description: "Retornando de dibujar()." },
            { line: 15, stack: [{ scope: 'main', vars: { miFigura: "→cuad1" } }], heap: { circ1: { type: 'Circulo', value: {} }, cuad1: { type: 'Cuadrado', value: {} } }, description: "La misma variable ahora apunta a un nuevo objeto 'Cuadrado'." },
            { line: 16, stack: [{ scope: 'main', vars: { miFigura: "→cuad1" } }], heap: { circ1: { type: 'Circulo', value: {} }, cuad1: { type: 'Cuadrado', value: {} } }, description: "Invocando miFigura.dibujar() de nuevo." },
            { line: 8, stack: [{ scope: 'main', vars: { miFigura: "→cuad1" } }, { scope: 'dibujar (Cuadrado)', vars: { this: '→cuad1' } }], heap: { circ1: { type: 'Circulo', value: {} }, cuad1: { type: 'Cuadrado', value: {} } }, description: "Ahora se ejecuta la versión de Cuadrado." },
            { line: 8, stack: [{ scope: 'main', vars: { miFigura: "→cuad1" } }, { scope: 'dibujar (Cuadrado)', vars: { this: '→cuad1' } }], heap: { circ1: { type: 'Circulo', value: {} }, cuad1: { type: 'Cuadrado', value: {} } }, description: "Imprimiendo.", output: "Cuadrado" },
            { line: 9, stack: [{ scope: 'main', vars: { miFigura: "→cuad1" } }], heap: { circ1: { type: 'Circulo', value: {} }, cuad1: { type: 'Cuadrado', value: {} } }, description: "Retornando de dibujar()." },
            { line: 17, stack: [{ scope: 'main', vars: { miFigura: "→cuad1" } }], heap: { circ1: { type: 'Circulo', value: {} }, cuad1: { type: 'Cuadrado', value: {} } }, description: "Fin del programa." },
        ]
    },
    {
        id: 'sobrecarga',
        title: '3. Sobrecarga de Métodos',
        description: 'Permite definir varios métodos con el mismo nombre pero con diferentes parámetros (en número o tipo).',
        code: `public class Sobrecarga {
    public static void main(String[] args) {
        sumar(5, 10);
        sumar(5.5, 10.5);
    }
    
    public static void sumar(int a, int b) {
        System.out.println("Suma de enteros: " + (a + b));
    }
    
    public static void sumar(double a, double b) {
        System.out.println("Suma de dobles: " + (a + b));
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: {} }], heap: {}, description: 'Llamando a sumar con dos enteros.' },
            { line: 7, stack: [{ scope: 'main', vars: {} }, { scope: 'sumar(int)', vars: { a: 5, b: 10 } }], heap: {}, description: 'Java elige la versión del método con parámetros enteros.' },
            { line: 8, stack: [{ scope: 'main', vars: {} }, { scope: 'sumar(int)', vars: { a: 5, b: 10 } }], heap: {}, description: 'Imprimiendo la suma de enteros.', output: 'Suma de enteros: 15' },
            { line: 9, stack: [{ scope: 'main', vars: {} }], heap: {}, description: 'Retornando a main.' },
            { line: 4, stack: [{ scope: 'main', vars: {} }], heap: {}, description: 'Llamando a sumar con dos dobles.' },
            { line: 11, stack: [{ scope: 'main', vars: {} }, { scope: 'sumar(double)', vars: { a: 5.5, b: 10.5 } }], heap: {}, description: 'Java elige la versión del método con parámetros dobles.' },
            { line: 12, stack: [{ scope: 'main', vars: {} }, { scope: 'sumar(double)', vars: { a: 5.5, b: 10.5 } }], heap: {}, description: 'Imprimiendo la suma de dobles.', output: 'Suma de dobles: 16.0' },
            { line: 13, stack: [{ scope: 'main', vars: {} }], heap: {}, description: 'Retornando a main.' }
        ]
    },
    {
        id: 'sobrescritura',
        title: '4. Sobrescritura de Métodos',
        description: 'Una subclase puede proporcionar una implementación específica de un método que ya está definido en su superclase.',
        code: `class Vehiculo {
    void acelerar() {
        System.out.println("Acelerando genéricamente");
    }
}
class Coche extends Vehiculo {
    @Override
    void acelerar() { // Sobrescribe el método de Vehiculo
        System.out.println("Acelerando el coche a 100km/h");
    }
}
public class Sobrescritura {
    public static void main(String[] args) {
        Vehiculo miCoche = new Coche();
        miCoche.acelerar(); // Llama a la versión de Coche
    }
}`,
        snapshots: [
            { line: 14, stack: [{ scope: 'main', vars: { miCoche: '→coche1' } }], heap: { coche1: { type: 'Coche', value: {} } }, description: 'Se crea un Coche, pero se guarda en una variable de tipo Vehiculo.' },
            { line: 15, stack: [{ scope: 'main', vars: { miCoche: '→coche1' } }], heap: { coche1: { type: 'Coche', value: {} } }, description: 'Se llama al método acelerar().' },
            { line: 8, stack: [{ scope: 'main', vars: { miCoche: '→coche1' } }, { scope: 'acelerar()', vars: { this: '→coche1' } }], heap: { coche1: { type: 'Coche', value: {} } }, description: 'Gracias al polimorfismo, se ejecuta la versión sobrescrita del método en la clase Coche.' },
            { line: 9, stack: [{ scope: 'main', vars: { miCoche: '→coche1' } }, { scope: 'acelerar()', vars: { this: '→coche1' } }], heap: { coche1: { type: 'Coche', value: {} } }, description: 'Imprimiendo el mensaje del coche.', output: 'Acelerando el coche a 100km/h' },
            { line: 10, stack: [{ scope: 'main', vars: { miCoche: '→coche1' } }], heap: { coche1: { type: 'Coche', value: {} } }, description: 'Retornando del método.' }
        ]
    },
    {
        id: 'clase-abstracta',
        title: '5. Clases Abstractas',
        description: 'Una clase que no se puede instanciar. Sirve como un "contrato" que obliga a las subclases a implementar sus métodos abstractos.',
        code: `abstract class Sonido {
    abstract void hacerSonido(); // Método sin implementación
}
class Gato extends Sonido {
    void hacerSonido() { // Implementación obligatoria
        System.out.println("Miau");
    }
}
public class Abstraccion {
    public static void main(String[] args) {
        Sonido miGato = new Gato();
        miGato.hacerSonido();
    }
}`,
        snapshots: [
            { line: 11, stack: [{ scope: 'main', vars: { miGato: '→gato1' } }], heap: { gato1: { type: 'Gato', value: {} } }, description: 'No se puede crear un `new Sonido()`, pero sí un `new Gato()`.' },
            { line: 12, stack: [{ scope: 'main', vars: { miGato: '→gato1' } }], heap: { gato1: { type: 'Gato', value: {} } }, description: 'Se llama al método hacerSonido().' },
            { line: 5, stack: [{ scope: 'main', vars: { miGato: '→gato1' } }, { scope: 'hacerSonido()', vars: { this: '→gato1' } }], heap: { gato1: { type: 'Gato', value: {} } }, description: 'Se ejecuta la implementación obligatoria de la clase Gato.' },
            { line: 6, stack: [{ scope: 'main', vars: { miGato: '→gato1' } }, { scope: 'hacerSonido()', vars: { this: '→gato1' } }], heap: { gato1: { type: 'Gato', value: {} } }, description: 'Imprimiendo el sonido.', output: 'Miau' },
            { line: 7, stack: [{ scope: 'main', vars: { miGato: '→gato1' } }], heap: { gato1: { type: 'Gato', value: {} } }, description: 'Retornando del método.' }
        ]
    },
    {
        id: 'interfaces',
        title: '6. Interfaces',
        description: 'Una especificación de métodos que una clase debe implementar. Permite la "herencia múltiple" de comportamiento.',
        code: `interface Volador {
    void volar();
}
class Pajaro implements Volador {
    public void volar() {
        System.out.println("Volando con alas");
    }
}
class Avion implements Volador {
    public void volar() {
        System.out.println("Volando con turbinas");
    }
}
public class Interfaces {
    public static void main(String[] args) {
        Volador v1 = new Pajaro();
        Volador v2 = new Avion();
        v1.volar();
        v2.volar();
    }
}`,
        snapshots: [
            { line: 16, stack: [{ scope: 'main', vars: { v1: '→pajaro1' } }], heap: { pajaro1: { type: 'Pajaro', value: {} } }, description: 'Se crea un Pajaro y se guarda en una variable de tipo Volador.' },
            { line: 17, stack: [{ scope: 'main', vars: { v1: '→pajaro1', v2: '→avion1' } }], heap: { pajaro1: { type: 'Pajaro', value: {} }, avion1: { type: 'Avion', value: {} } }, description: 'Se crea un Avion y se guarda en otra variable Volador.' },
            { line: 18, stack: [{ scope: 'main', vars: { v1: '→pajaro1', v2: '→avion1' } }], heap: { pajaro1: { type: 'Pajaro', value: {} }, avion1: { type: 'Avion', value: {} } }, description: 'Llamando a volar() sobre el objeto Pajaro.' },
            { line: 5, stack: [{ scope: 'main', vars: { v1: '→pajaro1', v2: '→avion1' } }], heap: { pajaro1: { type: 'Pajaro', value: {} }, avion1: { type: 'Avion', value: {} } }, description: 'Se ejecuta la implementación de Pajaro.', output: 'Volando con alas' },
            { line: 19, stack: [{ scope: 'main', vars: { v1: '→pajaro1', v2: '→avion1' } }], heap: { pajaro1: { type: 'Pajaro', value: {} }, avion1: { type: 'Avion', value: {} } }, description: 'Llamando a volar() sobre el objeto Avion.' },
            { line: 10, stack: [{ scope: 'main', vars: { v1: '→pajaro1', v2: '→avion1' } }], heap: { pajaro1: { type: 'Pajaro', value: {} }, avion1: { type: 'Avion', value: {} } }, description: 'Se ejecuta la implementación de Avion.', output: 'Volando con turbinas' },
        ]
    }
];