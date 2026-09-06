examples = [
    {
        id: 'if-simple',
        title: '1. If Simple',
        description: 'La estructura más básica. El código en el bloque solo se ejecuta si la condición es verdadera.',
        code: `public class IfSimple {
    public static void main(String[] args) {
        int numero = 10;
        if (numero > 5) {
            System.out.println("El número es mayor que 5.");
        }
        System.out.println("Fin del programa.");
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { numero: 10 } }], heap: {}, description: 'Se inicializa la variable numero.' },
            { line: 4, stack: [{ scope: 'main', vars: { numero: 10 } }], heap: {}, description: 'Se evalúa la condición (10 > 5), que es verdadera.' },
            { line: 5, stack: [{ scope: 'main', vars: { numero: 10 } }], heap: {}, description: 'Se ejecuta el bloque del if.', output: 'El número es mayor que 5.' },
            { line: 7, stack: [{ scope: 'main', vars: { numero: 10 } }], heap: {}, description: 'El programa continúa.', output: 'Fin del programa.' }
        ]
    },
    {
        id: 'if-else',
        title: '2. If-Else',
        description: 'Introduce un camino alternativo que se ejecuta solo si la condición del "if" es falsa.',
        code: `public class IfElse {
    public static void main(String[] args) {
        int temperatura = 15;
        if (temperatura > 25) {
            System.out.println("Hace calor.");
        } else {
            System.out.println("No hace calor.");
        }
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { temperatura: 15 } }], heap: {}, description: 'Se inicializa la temperatura.' },
            { line: 4, stack: [{ scope: 'main', vars: { temperatura: 15 } }], heap: {}, description: 'Se evalúa la condición (15 > 25), que es falsa.' },
            { line: 7, stack: [{ scope: 'main', vars: { temperatura: 15 } }], heap: {}, description: 'Se ejecuta el bloque del else.', output: 'No hace calor.' },
            { line: 9, stack: [{ scope: 'main', vars: { temperatura: 15 } }], heap: {}, description: 'Fin de la estructura.' }
        ]
    },
    {
        id: 'if-else-if',
        title: '3. If-Else If-Else',
        description: 'Permite encadenar múltiples condiciones. Solo se ejecutará el primer bloque cuya condición sea verdadera.',
        code: `public class IfElseIf {
    public static void main(String[] args) {
        int nota = 75;
        if (nota >= 90) {
            System.out.println("Sobresaliente");
        } else if (nota >= 70) {
            System.out.println("Notable");
        } else {
            System.out.println("Aprobado o suspenso");
        }
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { nota: 75 } }], heap: {}, description: 'Se inicializa la nota.' },
            { line: 4, stack: [{ scope: 'main', vars: { nota: 75 } }], heap: {}, description: 'Se evalúa (75 >= 90), resultado: falso.' },
            { line: 6, stack: [{ scope: 'main', vars: { nota: 75 } }], heap: {}, description: 'Se evalúa (75 >= 70), resultado: verdadero.' },
            { line: 7, stack: [{ scope: 'main', vars: { nota: 75 } }], heap: {}, description: 'Se ejecuta el bloque del "else if".', output: 'Notable' },
            { line: 11, stack: [{ scope: 'main', vars: { nota: 75 } }], heap: {}, description: 'Se salta el resto de la estructura.' }
        ]
    },
    {
        id: 'operador-ternario',
        title: '4. Operador Ternario',
        description: 'Una forma compacta de escribir una sentencia if-else que asigna un valor a una variable.',
        code: `public class OperadorTernario {
    public static void main(String[] args) {
        int edad = 20;
        String tipoPersona;
        tipoPersona = (edad >= 18) ? "Adulto" : "Menor";
        System.out.println("La persona es: " + tipoPersona);
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { edad: 20, tipoPersona: 'undefined' } }], heap: {}, description: 'Se declaran las variables.' },
            { line: 5, stack: [{ scope: 'main', vars: { edad: 20, tipoPersona: 'undefined' } }], heap: {}, description: 'Se evalúa la condición (20 >= 18), que es verdadera.' },
            { line: 5, stack: [{ scope: 'main', vars: { edad: 20, tipoPersona: '"Adulto"' } }], heap: {}, description: 'Se asigna el primer valor ("Adulto") a tipoPersona.' },
            { line: 6, stack: [{ scope: 'main', vars: { edad: 20, tipoPersona: '"Adulto"' } }], heap: {}, description: 'Se imprime el resultado.', output: 'La persona es: Adulto' }
        ]
    },
    {
        id: 'switch-simple',
        title: '5. Switch Simple',
        description: 'Evalúa una variable contra una serie de valores constantes (casos).',
        code: `public class SwitchSimple {
    public static void main(String[] args) {
        int dia = 3; // 1=Lunes, 2=Martes, 3=Miércoles...
        String nombreDia;
        switch (dia) {
            case 1:  nombreDia = "Lunes"; break;
            case 2:  nombreDia = "Martes"; break;
            case 3:  nombreDia = "Miércoles"; break;
            default: nombreDia = "Día no válido"; break;
        }
        System.out.println("Hoy es " + nombreDia);
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { dia: 3, nombreDia: 'undefined' } }], heap: {}, description: 'Se inicializa dia.' },
            { line: 5, stack: [{ scope: 'main', vars: { dia: 3, nombreDia: 'undefined' } }], heap: {}, description: 'Se evalúa la variable dia en el switch.' },
            { line: 6, stack: [{ scope: 'main', vars: { dia: 3, nombreDia: 'undefined' } }], heap: {}, description: '¿Es dia == 1? No.' },
            { line: 7, stack: [{ scope: 'main', vars: { dia: 3, nombreDia: 'undefined' } }], heap: {}, description: '¿Es dia == 2? No.' },
            { line: 8, stack: [{ scope: 'main', vars: { dia: 3, nombreDia: '"Miércoles"' } }], heap: {}, description: '¿Es dia == 3? Sí. Se asigna "Miércoles".' },
            { line: 8, stack: [{ scope: 'main', vars: { dia: 3, nombreDia: '"Miércoles"' } }], heap: {}, description: 'La sentencia "break" hace que se salga del switch.' },
            { line: 12, stack: [{ scope: 'main', vars: { dia: 3, nombreDia: '"Miércoles"' } }], heap: {}, description: 'Se imprime el resultado.', output: 'Hoy es Miércoles' }
        ]
    },
    {
        id: 'switch-fall-through',
        title: '6. Switch con "Fall-through"',
        description: 'Si un "case" no tiene "break", la ejecución continúa ("cae") en el siguiente caso.',
        code: `public class SwitchFallthrough {
    public static void main(String[] args) {
        int nivelAcceso = 2;
        System.out.print("Permisos: ");
        switch (nivelAcceso) {
            case 3: System.out.print("Administrador, "); // Sin break
            case 2: System.out.print("Editor, ");      // Sin break
            case 1: System.out.print("Lector.");
        }
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { nivelAcceso: 2 } }], heap: {}, description: 'Se inicializa el nivel de acceso.' },
            { line: 4, stack: [{ scope: 'main', vars: { nivelAcceso: 2 } }], heap: {}, description: 'Se imprime la cabecera.', output: 'Permisos: ' },
            { line: 5, stack: [{ scope: 'main', vars: { nivelAcceso: 2 } }], heap: {}, description: 'Se evalúa nivelAcceso.' },
            { line: 6, stack: [{ scope: 'main', vars: { nivelAcceso: 2 } }], heap: {}, description: '¿Es nivelAcceso == 3? No.' },
            { line: 7, stack: [{ scope: 'main', vars: { nivelAcceso: 2 } }], heap: {}, description: '¿Es nivelAcceso == 2? Sí. Se imprime "Editor, ".', output: 'Editor, ' },
            { line: 7, stack: [{ scope: 'main', vars: { nivelAcceso: 2 } }], heap: {}, description: 'No hay "break", la ejecución continúa ("fall-through").' },
            { line: 8, stack: [{ scope: 'main', vars: { nivelAcceso: 2 } }], heap: {}, description: 'Se ejecuta el case 1. Se imprime "Lector."', output: 'Lector.' },
            { line: 10, stack: [{ scope: 'main', vars: { nivelAcceso: 2 } }], heap: {}, description: 'Fin del switch.' }
        ]
    }
];