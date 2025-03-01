// Reto 1: Suma de Elementos
function sumarElementos(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar la suma de todos los elementos del arreglo
    let suma=0;
    for(let i=0;i<arreglo.length;i++){
        suma=suma+arreglo[i];
    }
    return suma;
}

// Reto 2: Número Mayor
function encontrarMayor(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar el número más grande del arreglo
    let mayor=0;
    for(let i=0;i<arreglo.length;i++){
        if(mayor<arreglo[i]){
            mayor=arreglo[i];
        }
    }
    return mayor;
}

// Reto 3: Filtrar Pares
function filtrarPares(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar un nuevo arreglo solo con los números pares
    let nuevoArreglo=[];
    for(let i=0;i<arreglo.length;i++){
        if(arreglo[i]%2==0){
            nuevoArreglo.push(arreglo[i]);
        }
    }
    return nuevoArreglo;
}

// Reto 4: Contar Vocales
function contarVocales(texto) {
    // Los estudiantes implementarán esta función
    // Debe retornar el número de vocales en el texto
    let cuentaVocales=0;
    for(let i=0;i<texto.length;i++){
        if( texto[i]=='a'|| texto[i]=='A'||
            texto[i]=='e'|| texto[i]=='E'||
            texto[i]=='i'|| texto[i]=='I'||
            texto[i]=='o'|| texto[i]=='O'||
            texto[i]=='u'|| texto[i]=='U'){
                cuentaVocales=cuentaVocales+1;
        }
    }

    return cuentaVocales;
}

// Reto 5: Invertir Arreglo
function invertirArreglo(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar un nuevo arreglo con los elementos en orden inverso
    let nuevoArreglo=[];
    
    for(let i=arreglo.length;i>=1;i--){
        nuevoArreglo.push(arreglo[i-1]);
    }

    return nuevoArreglo;
}

// Reto 6: Promedio de Notas
function calcularPromedio(notas) {
    // Los estudiantes implementarán esta función
    // Debe retornar el promedio de las notas
    let suma=0;
    for(let i=0;i<notas.length;i++){
        suma+=notas[i];
    }
    return suma/(notas.length);
}

// Reto 7: Contador de Letras
function contarLetra(texto, letra) {
    // Los estudiantes implementarán esta función
    // Debe retornar cuántas veces aparece la letra en el texto
    let cuentaLetra=0;
    for(let i=0;i<texto.length;i++){
        if(texto[i]==letra){
            cuentaLetra++;
        }
    }
    return cuentaLetra;
}

// Reto 8: Elementos Únicos
function obtenerUnicos(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar un nuevo arreglo sin elementos duplicados
    let nuevoArreglo=[];
    for(let i=0;i<arreglo.length;i++){ //primer for para poder recorrer todo
        let repite=0; //este para controlar si se repiten
        for(let j=i+1;j<arreglo.length;j++){//segundo for para poder comparar con cada uno
            if(arreglo[i]==arreglo[j]){
                repite++;
            }
        }
        if(repite==0){
            nuevoArreglo.push(arreglo[i]);
        }
    }

    return nuevoArreglo;
}

// Reto 9: Palíndromo
function esPalindromo(texto) {
    // Los estudiantes implementarán esta función
    // Debe retornar true si el texto es un palíndromo, false si no

    //palindromo es cuando de izquierda a derecha se lee igual que de derecha a izquierda
    //reusare la funcion que invierte un arreglo
    let arregloInvertido= invertirArreglo(texto);
    let iguales=true; //asumo primero que son iguales
    for(let i=0;i<texto.length;i++){
        if(arregloInvertido[i]!=texto[i]){ //si hay una palabra desigual cambia a false el iguales y se rompe
            iguales=false;
            break;
        }
    }
    return iguales;
}

function logroAdicional(numeroAleatorio){
    
    let intentos=0;
    while(1){
        let opcion=parseInt(prompt("Quiere adivinar el numero?\nEscriba el numero que cree que es\nPresione el numero 0 para no seguir jugando"));
        if(opcion!=0){
            if(opcion<numeroAleatorio){
                alert("El número que ingresó es menor al número por adivinar,debe ingresar uno mayor");
            }
            else{
                if(opcion>numeroAleatorio){
                    alert("El número que ingresó es mayor al número por adivinar,debe ingresar uno menor");
                }
                else{
                    alert(`FELICIDADES ACERTÓ, EL NÚMERO ALEATORIO ERA ${numeroAleatorio}`);
                    break;
                }
            }
            intentos++;
        }
        else{
            break;
        }
    }
    
    return intentos;
}