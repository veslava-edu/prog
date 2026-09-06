// js/examples/strings.js
examples = [
    {
        id: 'string-length',
        title: '1. Longitud de un String',
        description: 'El método .length() devuelve el número de caracteres de una cadena.',
        code: `public class LongitudString {
    public static void main(String[] args) {
        String saludo = "Hola, mundo!";
        int longitud = saludo.length();
        System.out.println("La longitud es: " + longitud);
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { saludo: '"Hola, mundo!"' } }], heap: {}, description: 'Se crea un objeto String.' },
            { line: 4, stack: [{ scope: 'main', vars: { saludo: '"Hola, mundo!"' } }], heap: {}, description: 'Se llama al método .length().' },
            { line: 4, stack: [{ scope: 'main', vars: { saludo: '"Hola, mundo!"', longitud: 12 } }], heap: {}, description: 'Se asigna el resultado (12) a la variable longitud.' },
            { line: 5, stack: [{ scope: 'main', vars: { saludo: '"Hola, mundo!"', longitud: 12 } }], heap: {}, description: 'Se imprime el resultado.', output: 'La longitud es: 12' }
        ]
    },
    {
        id: 'string-charat',
        title: '2. Acceder a un Carácter (charAt)',
        description: 'El método .charAt(indice) devuelve el carácter en la posición especificada.',
        code: `public class CharAtString {
    public static void main(String[] args) {
        String palabra = "Java";
        char primerCaracter = palabra.charAt(0); // Índices empiezan en 0
        char tercerCaracter = palabra.charAt(2);
        System.out.println("Primer carácter: " + primerCaracter);
        System.out.println("Tercer carácter: " + tercerCaracter);
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { palabra: '"Java"' } }], heap: {}, description: 'Se crea el String.' },
            { line: 4, stack: [{ scope: 'main', vars: { palabra: '"Java"' } }], heap: {}, description: 'Se obtiene el carácter en el índice 0.' },
            { line: 4, stack: [{ scope: 'main', vars: { palabra: '"Java"', primerCaracter: "'J'" } }], heap: {}, description: 'Se asigna el carácter a la variable.' },
            { line: 5, stack: [{ scope: 'main', vars: { palabra: '"Java"', primerCaracter: "'J'" } }], heap: {}, description: 'Se obtiene el carácter en el índice 2.' },
            { line: 5, stack: [{ scope: 'main', vars: { palabra: '"Java"', primerCaracter: "'J'", tercerCaracter: "'v'" } }], heap: {}, description: 'Se asigna el carácter a la variable.' },
            { line: 6, stack: [{ scope: 'main', vars: { palabra: '"Java"', primerCaracter: "'J'", tercerCaracter: "'v'" } }], heap: {}, description: 'Imprimiendo.', output: "Primer carácter: J" },
            { line: 7, stack: [{ scope: 'main', vars: { palabra: '"Java"', primerCaracter: "'J'", tercerCaracter: "'v'" } }], heap: {}, description: 'Imprimiendo.', output: "Tercer carácter: v" }
        ]
    },
    {
        id: 'string-substring',
        title: '3. Extraer Subcadena (substring)',
        description: 'El método .substring(inicio, fin) extrae una porción de la cadena.',
        code: `public class SubstringEjemplo {
    public static void main(String[] args) {
        String frase = "Programación en Java";
        String palabra1 = frase.substring(0, 12); // De índice 0 a 11
        String palabra2 = frase.substring(16);    // De índice 16 hasta el final
        System.out.println(palabra1);
        System.out.println(palabra2);
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { frase: '"Programación en Java"' } }], heap: {}, description: 'Se crea el String base.' },
            { line: 4, stack: [{ scope: 'main', vars: { frase: '"Programación en Java"' } }], heap: {}, description: 'Extrayendo subcadena de 0 a 12.' },
            { line: 4, stack: [{ scope: 'main', vars: { frase: '"Programación en Java"', palabra1: '"Programación"' } }], heap: {}, description: 'Se crea un nuevo String "Programación".' },
            { line: 5, stack: [{ scope: 'main', vars: { frase: '"Programación en Java"', palabra1: '"Programación"' } }], heap: {}, description: 'Extrayendo subcadena desde el índice 16.' },
            { line: 5, stack: [{ scope: 'main', vars: { frase: '"Programación en Java"', palabra1: '"Programación"', palabra2: '"Java"' } }], heap: {}, description: 'Se crea un nuevo String "Java".' },
            { line: 6, stack: [{ scope: 'main', vars: { frase: '"Programación en Java"', palabra1: '"Programación"', palabra2: '"Java"' } }], heap: {}, description: 'Imprimiendo palabra1.', output: 'Programación' },
            { line: 7, stack: [{ scope: 'main', vars: { frase: '"Programación en Java"', palabra1: '"Programación"', palabra2: '"Java"' } }], heap: {}, description: 'Imprimiendo palabra2.', output: 'Java' }
        ]
    },
    {
        id: 'string-equals',
        title: '4. Comparar Strings (equals)',
        description: 'Para comparar el contenido de dos Strings se debe usar .equals(), no "==".',
        code: `public class CompararStrings {
    public static void main(String[] args) {
        String s1 = "Hola";
        String s2 = new String("Hola");
        
        boolean comparacion1 = (s1 == s2); // Compara referencias (falso)
        boolean comparacion2 = s1.equals(s2); // Compara contenido (verdadero)
        
        System.out.println("Con '==': " + comparacion1);
        System.out.println("Con '.equals()': " + comparacion2);
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { s1: '"Hola"' } }], heap: {}, description: 's1 apunta a un String literal.' },
            { line: 4, stack: [{ scope: 'main', vars: { s1: '"Hola"', s2: '→ref1' } }], heap: { ref1: { type: 'String', value: '"Hola"' } }, description: 's2 apunta a un nuevo objeto String en el Heap.' },
            { line: 6, stack: [{ scope: 'main', vars: { s1: '"Hola"', s2: '→ref1' } }], heap: { ref1: { type: 'String', value: '"Hola"' } }, description: 'Se comparan las referencias. No son el mismo objeto.' },
            { line: 6, stack: [{ scope: 'main', vars: { s1: '"Hola"', s2: '→ref1', comparacion1: 'false' } }], heap: { ref1: { type: 'String', value: '"Hola"' } }, description: 'El resultado de (s1 == s2) es falso.' },
            { line: 7, stack: [{ scope: 'main', vars: { s1: '"Hola"', s2: '→ref1', comparacion1: 'false' } }], heap: { ref1: { type: 'String', value: '"Hola"' } }, description: 'Se compara el contenido de los Strings.' },
            { line: 7, stack: [{ scope: 'main', vars: { s1: '"Hola"', s2: '→ref1', comparacion1: 'false', comparacion2: 'true' } }], heap: { ref1: { type: 'String', value: '"Hola"' } }, description: 'El resultado de s1.equals(s2) es verdadero.' },
            { line: 9, stack: [{ scope: 'main', vars: { s1: '"Hola"', s2: '→ref1', comparacion1: 'false', comparacion2: 'true' } }], heap: { ref1: { type: 'String', value: '"Hola"' } }, description: 'Imprimiendo comparación 1.', output: "Con '==': false" },
            { line: 10, stack: [{ scope: 'main', vars: { s1: '"Hola"', s2: '→ref1', comparacion1: 'false', comparacion2: 'true' } }], heap: { ref1: { type: 'String', value: '"Hola"' } }, description: 'Imprimiendo comparación 2.', output: "Con '.equals()': true" }
        ]
    },
    {
        id: 'string-builder',
        title: '5. StringBuilder para Concatenar',
        description: 'StringBuilder es más eficiente que el operador "+" para concatenar muchos Strings en un bucle.',
        code: `public class StringBuilderTest {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        
        for (int i = 0; i < 4; i++) {
            sb.append(i);
            sb.append(" ");
        }
        
        String resultado = sb.toString();
        System.out.println(resultado);
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { sb: '→sb1' } }], heap: { sb1: { type: 'StringBuilder', value: '""' } }, description: 'Se crea un StringBuilder vacío.' },
            { line: 5, stack: [{ scope: 'main', vars: { sb: '→sb1', i: 0 } }], heap: { sb1: { type: 'StringBuilder', value: '""' } }, description: 'Bucle, i = 0.' },
            { line: 6, stack: [{ scope: 'main', vars: { sb: '→sb1', i: 0 } }], heap: { sb1: { type: 'StringBuilder', value: '"0"' } }, description: 'sb.append(0)' },
            { line: 7, stack: [{ scope: 'main', vars: { sb: '→sb1', i: 0 } }], heap: { sb1: { type: 'StringBuilder', value: '"0 "' } }, description: 'sb.append(" ")' },
            { line: 5, stack: [{ scope: 'main', vars: { sb: '→sb1', i: 1 } }], heap: { sb1: { type: 'StringBuilder', value: '"0 "' } }, description: 'Bucle, i = 1.' },
            { line: 6, stack: [{ scope: 'main', vars: { sb: '→sb1', i: 1 } }], heap: { sb1: { type: 'StringBuilder', value: '"0 1"' } }, description: 'sb.append(1)' },
            { line: 7, stack: [{ scope: 'main', vars: { sb: '→sb1', i: 1 } }], heap: { sb1: { type: 'StringBuilder', value: '"0 1 "' } }, description: 'sb.append(" ")' },
            { line: 5, stack: [{ scope: 'main', vars: { sb: '→sb1', i: 2 } }], heap: { sb1: { type: 'StringBuilder', value: '"0 1 "' } }, description: 'Bucle, i = 2.' },
            { line: 6, stack: [{ scope: 'main', vars: { sb: '→sb1', i: 2 } }], heap: { sb1: { type: 'StringBuilder', value: '"0 1 2"' } }, description: 'sb.append(2)' },
            { line: 7, stack: [{ scope: 'main', vars: { sb: '→sb1', i: 2 } }], heap: { sb1: { type: 'StringBuilder', value: '"0 1 2 "' } }, description: 'sb.append(" ")' },
            { line: 5, stack: [{ scope: 'main', vars: { sb: '→sb1', i: 3 } }], heap: { sb1: { type: 'StringBuilder', value: '"0 1 2 "' } }, description: 'Bucle, i = 3.' },
            { line: 6, stack: [{ scope: 'main', vars: { sb: '→sb1', i: 3 } }], heap: { sb1: { type: 'StringBuilder', value: '"0 1 2 3"' } }, description: 'sb.append(3)' },
            { line: 7, stack: [{ scope: 'main', vars: { sb: '→sb1', i: 3 } }], heap: { sb1: { type: 'StringBuilder', value: '"0 1 2 3 "' } }, description: 'sb.append(" ")' },
            { line: 5, stack: [{ scope: 'main', vars: { sb: '→sb1', i: 4 } }], heap: { sb1: { type: 'StringBuilder', value: '"0 1 2 3 "' } }, description: 'Bucle termina.' },
            { line: 10, stack: [{ scope: 'main', vars: { sb: '→sb1', resultado: '"0 1 2 3 "' } }], heap: { sb1: { type: 'StringBuilder', value: '"0 1 2 3 "' } }, description: 'Se convierte el StringBuilder a String.' },
            { line: 11, stack: [{ scope: 'main', vars: { sb: '→sb1', resultado: '"0 1 2 3 "' } }], heap: { sb1: { type: 'StringBuilder', value: '"0 1 2 3 "' } }, description: 'Se imprime el resultado.', output: '0 1 2 3 ' }
        ]
    },
    {
        id: 'string-split',
        title: '6. Dividir un String (split)',
        description: 'El método .split() divide una cadena en un array de subcadenas basado en un delimitador.',
        code: `public class SplitString {
    public static void main(String[] args) {
        String csv = "java,python,javascript";
        String[] lenguajes = csv.split(",");
        
        // El bucle for-each se verá en la temática de Vectores
        for (String lenguaje : lenguajes) {
            System.out.println("Lenguaje: " + lenguaje);
        }
    }
}`,
        snapshots: [
            { line: 3, stack: [{ scope: 'main', vars: { csv: '"java,python,javascript"' } }], heap: {}, description: 'Se crea el String CSV.' },
            { line: 4, stack: [{ scope: 'main', vars: { csv: '"java,python,javascript"' } }], heap: {}, description: 'Se divide el String por la coma.' },
            { line: 4, stack: [{ scope: 'main', vars: { csv: '"java,python,javascript"', lenguajes: '→arr1' } }], heap: { arr1: { type: 'String[]', value: ['"java"', '"python"', '"javascript"'] } }, description: 'El resultado es un array de Strings en el Heap.' },
            { line: 7, stack: [{ scope: 'main', vars: { csv: '"java,python,javascript"', lenguajes: '→arr1', lenguaje: '"java"' } }], heap: { arr1: { type: 'String[]', value: ['"java"', '"python"', '"javascript"'] } }, description: 'Inicia el bucle for-each. lenguaje = "java".' },
            { line: 8, stack: [{ scope: 'main', vars: { csv: '"java,python,javascript"', lenguajes: '→arr1', lenguaje: '"java"' } }], heap: { arr1: { type: 'String[]', value: ['"java"', '"python"', '"javascript"'] } }, description: 'Imprimiendo.', output: 'Lenguaje: java' },
            { line: 7, stack: [{ scope: 'main', vars: { csv: '"java,python,javascript"', lenguajes: '→arr1', lenguaje: '"python"' } }], heap: { arr1: { type: 'String[]', value: ['"java"', '"python"', '"javascript"'] } }, description: 'Siguiente iteración. lenguaje = "python".' },
            { line: 8, stack: [{ scope: 'main', vars: { csv: '"java,python,javascript"', lenguajes: '→arr1', lenguaje: '"python"' } }], heap: { arr1: { type: 'String[]', value: ['"java"', '"python"', '"javascript"'] } }, description: 'Imprimiendo.', output: 'Lenguaje: python' },
            { line: 7, stack: [{ scope: 'main', vars: { csv: '"java,python,javascript"', lenguajes: '→arr1', lenguaje: '"javascript"' } }], heap: { arr1: { type: 'String[]', value: ['"java"', '"python"', '"javascript"'] } }, description: 'Siguiente iteración. lenguaje = "javascript".' },
            { line: 8, stack: [{ scope: 'main', vars: { csv: '"java,python,javascript"', lenguajes: '→arr1', lenguaje: '"javascript"' } }], heap: { arr1: { type: 'String[]', value: ['"java"', '"python"', '"javascript"'] } }, description: 'Imprimiendo.', output: 'Lenguaje: javascript' },
            { line: 7, stack: [{ scope: 'main', vars: { csv: '"java,python,javascript"', lenguajes: '→arr1' } }], heap: { arr1: { type: 'String[]', value: ['"java"', '"python"', '"javascript"'] } }, description: 'Fin del bucle.' }
        ]
    }
];