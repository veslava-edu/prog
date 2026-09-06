// js/examples/POO.js
examples = [
    {
        id: 'clase-objeto',
        title: '1. Clase y Objeto',
        description: 'Una clase es un molde. Un objeto es una instancia de ese molde, creada con "new".',
        code: `class Persona {
    String nombre = "Sin nombre";
    int edad = 0;
}
public class CrearObjeto {
    public static void main(String[] args) {
        Persona persona1 = new Persona();
        persona1.nombre = "Ana";
        System.out.println(persona1.nombre);
    }
}`,
        snapshots: [
            { line: 7, stack: [{ scope: 'main', vars: { persona1: '→p1' } }], heap: { p1: { type: 'Persona', value: { nombre: '"Sin nombre"', edad: 0 } } }, description: 'Se crea un objeto (instancia) de la clase Persona en el Heap.' },
            { line: 8, stack: [{ scope: 'main', vars: { persona1: '→p1' } }], heap: { p1: { type: 'Persona', value: { nombre: '"Ana"', edad: 0 } } }, description: 'Se accede y modifica el atributo "nombre" del objeto.' },
            { line: 9, stack: [{ scope: 'main', vars: { persona1: '→p1' } }], heap: { p1: { type: 'Persona', value: { nombre: '"Ana"', edad: 0 } } }, description: 'Se imprime el valor del atributo.', output: 'Ana' }
        ]
    },
    {
        id: 'constructor',
        title: '2. Constructor',
        description: 'Un método especial que se llama automáticamente al crear un objeto. Sirve para inicializar sus atributos.',
        code: `class Producto {
    String nombre;
    double precio;
    // Constructor
    Producto(String n, double p) {
        nombre = n;
        precio = p;
    }
}
public class UsarConstructor {
    public static void main(String[] args) {
        Producto lapiz = new Producto("Lápiz HB", 0.50);
        System.out.println(lapiz.nombre);
    }
}`,
        snapshots: [
            { line: 12, stack: [{ scope: 'main', vars: {} }], heap: {}, description: 'Llamando al constructor de Producto.' },
            { line: 5, stack: [{ scope: 'main', vars: {} }, { scope: 'Producto()', vars: { n: '"Lápiz HB"', p: 0.50, this: '→prod1' } }], heap: { prod1: { type: 'Producto', value: { nombre: 'null', precio: 0.0 } } }, description: 'Entrando al constructor.' },
            { line: 6, stack: [{ scope: 'main', vars: {} }, { scope: 'Producto()', vars: { n: '"Lápiz HB"', p: 0.50, this: '→prod1' } }], heap: { prod1: { type: 'Producto', value: { nombre: '"Lápiz HB"', precio: 0.0 } } }, description: 'Se asigna el parámetro "n" al atributo "nombre".' },
            { line: 7, stack: [{ scope: 'main', vars: {} }, { scope: 'Producto()', vars: { n: '"Lápiz HB"', p: 0.50, this: '→prod1' } }], heap: { prod1: { type: 'Producto', value: { nombre: '"Lápiz HB"', precio: 0.50 } } }, description: 'Se asigna el parámetro "p" al atributo "precio".' },
            { line: 8, stack: [{ scope: 'main', vars: { lapiz: '→prod1' } }], heap: { prod1: { type: 'Producto', value: { nombre: '"Lápiz HB"', precio: 0.50 } } }, description: 'El constructor termina. El objeto se asigna a "lapiz".' },
            { line: 13, stack: [{ scope: 'main', vars: { lapiz: '→prod1' } }], heap: { prod1: { type: 'Producto', value: { nombre: '"Lápiz HB"', precio: 0.50 } } }, description: 'Se imprime el atributo nombre.', output: 'Lápiz HB' }
        ]
    },
    {
        id: 'metodos',
        title: '3. Métodos de Instancia',
        description: 'Los métodos son funciones que pertenecen a una clase y operan sobre los datos (atributos) de un objeto.',
        code: `class Rectangulo {
    double base;
    double altura;
    
    double calcularArea() {
        return base * altura;
    }
}
public class Metodos {
    public static void main(String[] args) {
        Rectangulo r1 = new Rectangulo();
        r1.base = 10;
        r1.altura = 5;
        double area = r1.calcularArea();
        System.out.println("Área: " + area);
    }
}`,
        snapshots: [
            { line: 11, stack: [{ scope: 'main', vars: { r1: '→rec1' } }], heap: { rec1: { type: 'Rectangulo', value: { base: 0.0, altura: 0.0 } } }, description: 'Se crea un objeto Rectangulo.' },
            { line: 12, stack: [{ scope: 'main', vars: { r1: '→rec1' } }], heap: { rec1: { type: 'Rectangulo', value: { base: 10.0, altura: 0.0 } } }, description: 'Se asigna la base.' },
            { line: 13, stack: [{ scope: 'main', vars: { r1: '→rec1' } }], heap: { rec1: { type: 'Rectangulo', value: { base: 10.0, altura: 5.0 } } }, description: 'Se asigna la altura.' },
            { line: 14, stack: [{ scope: 'main', vars: { r1: '→rec1' } }], heap: { rec1: { type: 'Rectangulo', value: { base: 10.0, altura: 5.0 } } }, description: 'Se llama al método calcularArea().' },
            { line: 5, stack: [{ scope: 'main', vars: { r1: '→rec1' } }, { scope: 'calcularArea()', vars: { this: '→rec1' } }], heap: { rec1: { type: 'Rectangulo', value: { base: 10.0, altura: 5.0 } } }, description: 'Dentro del método, "this" se refiere a r1.' },
            { line: 6, stack: [{ scope: 'main', vars: { r1: '→rec1' } }], heap: { rec1: { type: 'Rectangulo', value: { base: 10.0, altura: 5.0 } } }, description: 'El método retorna el resultado de 10.0 * 5.0 = 50.0' },
            { line: 14, stack: [{ scope: 'main', vars: { r1: '→rec1', area: 50.0 } }], heap: { rec1: { type: 'Rectangulo', value: { base: 10.0, altura: 5.0 } } }, description: 'Se asigna el valor retornado a la variable "area".' },
            { line: 15, stack: [{ scope: 'main', vars: { r1: '→rec1', area: 50.0 } }], heap: { rec1: { type: 'Rectangulo', value: { base: 10.0, altura: 5.0 } } }, description: 'Se imprime el área.', output: 'Área: 50.0' }
        ]
    },
    {
        id: 'palabra-this',
        title: '4. La Palabra Clave "this"',
        description: '"this" se usa dentro de un método para referirse al objeto actual sobre el que se ha llamado el método.',
        code: `class Caja {
    double volumen;
    // El nombre del parámetro es igual al del atributo
    Caja(double volumen) {
        // "this.volumen" es el atributo, "volumen" es el parámetro
        this.volumen = volumen;
    }
}
public class UsoDeThis {
    public static void main(String[] args) {
        Caja caja = new Caja(150.5);
        System.out.println(caja.volumen);
    }
}`,
        snapshots: [
            { line: 11, stack: [{ scope: 'main', vars: {} }], heap: {}, description: 'Llamando al constructor de Caja.' },
            { line: 4, stack: [{ scope: 'main', vars: {} }, { scope: 'Caja()', vars: { volumen: 150.5, this: '→c1' } }], heap: { c1: { type: 'Caja', value: { volumen: 0.0 } } }, description: 'Entrando al constructor.' },
            { line: 6, stack: [{ scope: 'main', vars: {} }, { scope: 'Caja()', vars: { volumen: 150.5, this: '→c1' } }], heap: { c1: { type: 'Caja', value: { volumen: 150.5 } } }, description: '"this" diferencia el atributo del parámetro y asigna el valor.' },
            { line: 7, stack: [{ scope: 'main', vars: { caja: '→c1' } }], heap: { c1: { type: 'Caja', value: { volumen: 150.5 } } }, description: 'Constructor termina.' },
            { line: 12, stack: [{ scope: 'main', vars: { caja: '→c1' } }], heap: { c1: { type: 'Caja', value: { volumen: 150.5 } } }, description: 'Se imprime el atributo.', output: '150.5' }
        ]
    },
    {
        id: 'encapsulacion',
        title: '5. Encapsulación (Getters y Setters)',
        description: 'Ocultar los atributos como "private" y proveer métodos públicos ("getters" y "setters") para acceder y modificarlos de forma controlada.',
        code: `class Alumno {
    private String nombre;
    // Getter para obtener el nombre
    public String getNombre() {
        return nombre;
    }
    // Setter para cambiar el nombre
    public void setNombre(String nuevoNombre) {
        this.nombre = nuevoNombre;
    }
}
public class Encapsulacion {
    public static void main(String[] args) {
        Alumno alu = new Alumno();
        alu.setNombre("Carlos");
        System.out.println("Nombre: " + alu.getNombre());
    }
}`,
        snapshots: [
            { line: 14, stack: [{ scope: 'main', vars: { alu: '→a1' } }], heap: { a1: { type: 'Alumno', value: { nombre: 'null' } } }, description: 'Se crea un objeto Alumno.' },
            { line: 15, stack: [{ scope: 'main', vars: { alu: '→a1' } }], heap: { a1: { type: 'Alumno', value: { nombre: 'null' } } }, description: 'Se llama al método "setter" para cambiar el nombre.' },
            { line: 8, stack: [{ scope: 'main', vars: { alu: '→a1' } }, { scope: 'setNombre()', vars: { nuevoNombre: '"Carlos"', this: '→a1' } }], heap: { a1: { type: 'Alumno', value: { nombre: 'null' } } }, description: 'Entrando a setNombre().' },
            { line: 9, stack: [{ scope: 'main', vars: { alu: '→a1' } }, { scope: 'setNombre()', vars: { nuevoNombre: '"Carlos"', this: '→a1' } }], heap: { a1: { type: 'Alumno', value: { nombre: '"Carlos"' } } }, description: 'El atributo privado "nombre" se actualiza.' },
            { line: 10, stack: [{ scope: 'main', vars: { alu: '→a1' } }], heap: { a1: { type: 'Alumno', value: { nombre: '"Carlos"' } } }, description: 'Retornando de setNombre().' },
            { line: 16, stack: [{ scope: 'main', vars: { alu: '→a1' } }], heap: { a1: { type: 'Alumno', value: { nombre: '"Carlos"' } } }, description: 'Se llama al método "getter" para leer el nombre.' },
            { line: 4, stack: [{ scope: 'main', vars: { alu: '→a1' } }, { scope: 'getNombre()', vars: { this: '→a1' } }], heap: { a1: { type: 'Alumno', value: { nombre: '"Carlos"' } } }, description: 'Entrando a getNombre().' },
            { line: 5, stack: [{ scope: 'main', vars: { alu: '→a1' } }], heap: { a1: { type: 'Alumno', value: { nombre: '"Carlos"' } } }, description: 'El método retorna el valor del atributo "nombre".' },
            { line: 16, stack: [{ scope: 'main', vars: { alu: '→a1' } }], heap: { a1: { type: 'Alumno', value: { nombre: '"Carlos"' } } }, description: 'Se imprime el valor retornado.', output: 'Nombre: Carlos' }
        ]
    },
    {
        id: 'metodos-estaticos',
        title: '6. Métodos Estáticos',
        description: 'Un método estático pertenece a la clase, no a un objeto. Se puede llamar sin crear una instancia.',
        code: `class Matematicas {
    static final double PI = 3.14159;
    
    static int sumar(int a, int b) {
        return a + b;
    }
}
public class MetodosEstaticos {
    public static void main(String[] args) {
        int suma = Matematicas.sumar(5, 3);
        System.out.println("Suma: " + suma);
        System.out.println("Valor de PI: " + Matematicas.PI);
    }
}`,
        snapshots: [
            { line: 10, stack: [{ scope: 'main', vars: {} }], heap: {}, description: 'Se llama al método estático "sumar" directamente desde la clase.' },
            { line: 4, stack: [{ scope: 'main', vars: {} }, { scope: 'sumar()', vars: { a: 5, b: 3 } }], heap: {}, description: 'Entrando al método estático. No hay "this".' },
            { line: 5, stack: [{ scope: 'main', vars: {} }], heap: {}, description: 'El método retorna 5 + 3 = 8.' },
            { line: 10, stack: [{ scope: 'main', vars: { suma: 8 } }], heap: {}, description: 'Se asigna el resultado a la variable "suma".' },
            { line: 11, stack: [{ scope: 'main', vars: { suma: 8 } }], heap: {}, description: 'Se imprime la suma.', output: 'Suma: 8' },
            { line: 12, stack: [{ scope: 'main', vars: { suma: 8 } }], heap: {}, description: 'Se accede al atributo estático PI.', output: 'Valor de PI: 3.14159' }
        ]
    }
];