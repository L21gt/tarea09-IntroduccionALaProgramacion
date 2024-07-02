/**
 * Problema I (15 puntos)
Escribe un programa que lea continuamente el nombre y la distancia
de dos enemigos y determine cuál de ellos está más cerca. Imprime el
nombre del enemigo más cercano.

Entrada: 
    enemy1: "EnemyA"
    dist1: 10
    enemy2: "EnemyB"
    dist2: 20

Salida:
    EnemyA
 */

function determinarEnemigoCercano1(enemy1, dist1, enemy2, dist2) {
    if (dist1 < dist2) {  //quien tenga la distancia mas corta sera el primero a disparar
        console.log(`El enemigo mas cercano es: ${enemy1}`);
    } else {
        console.log(`El enemigo mas cercano es: ${enemy2}`);
    }
};

console.log("********** Problema I **********");
determinarEnemigoCercano1("EnemyA", 10, "EnemyB", 20);
console.log(" ");
console.log("========================================================");

//------------------------------------------------------------------------------------------
/**
 * Problema II (15 puntos)
En un juego de disparos, tu objetivo es atacar siempre al enemigo
más cercano. Escribe un programa que lea continuamente el nombre y
la distancia de dos enemigos y seleccione el objetivo más cercano para
atacar. Si ambos enemigos están a la misma distancia, selecciona el
que aparece primero.

Entrada: 
enemy1: "EnemyX" 
dist1: 15
enemy2: "EnemyY"
dist2: 15

Salida:
EnemyX
 */

function determinarEnemigoCercano2 (enemy1, dist1, time1, enemy2, dist2, time2) {
    if (dist1 < dist2) {//quien tenga la distancia mas corta sera el primero a disparar
        console.log(`El enemigo mas cercano a disparar primero es: ${enemy1}`);
    } else if (dist1 > dist2) {
        console.log(`El enemigo mas cercano a disparar primero es: ${enemy2}`);
    } else {//si ambos estan a la misma distancia comparara quien tiene mas tiempo de haber aparecido para disparar primero
        if (time1 > time2) {
            console.log(`El enemigo mas cercano a disparar primero es: ${enemy1}`);
        } else {
            console.log(`El enemigo mas cercano a disparar primero es: ${enemy2}`);
        }
    }
};

console.log("********** Problema II **********");
determinarEnemigoCercano2 ('EnemyX', 15, 100, 'EnemyY', 15, 60);
console.log(" ");
console.log("========================================================");

//------------------------------------------------------------------------------------------
/**
 * Problema III ( 20 Puntos)
En una simulación de radar, los datos de enemigos y sus
distancias cambian dinámicamente. Escribe un programa que lea
continuamente el nombre y la distancia de dos enemigos y determine
cuál de ellos está más cerca. Asegúrate de que el programa maneje
correctamente entradas donde las distancias pueden cambiar
rápidamente. Utiliza prompt para ingresar los datos.

    Entrada: 
    enemy1: "Enemy1" 
    dist1: 50
    enemy2: "Enemy2"
    dist2: 30

    Salida:
    Enemy2

    --

    enemy1: "Enemy1"
    dist1: 25
    enemy2: "Enemy2"
    dist2: 45

    Salida:
    Enemy1
 */




console.log("********** Problema III **********");
console.log(" ");
console.log("========================================================");

//------------------------------------------------------------------------------------------
/**
 * Problema IV ( 20 Puntos)
En una situación de combate, además de la distancia, se te
proporciona la prioridad de ataque de cada enemigo. Escribe un
programa que lea continuamente el nombre, la distancia y la prioridad
de dos enemigos y seleccione el enemigo con mayor prioridad para
atacar. Si ambos enemigos tienen la misma prioridad, selecciona el más
cercano.

    Entrada: 
    enemy1: "EnemyA" 
    dist1: 20
    priority1: 2
    ---
    enemy2: "EnemyB"
    dist2: 15
    priority2: 3

    Salida:
    EnemyB
 */

    function determinarEnemigoCercano4 (enemy1, dist1, priority1, enemy2, dist2, priority2){
        switch (true) {
            case priority1 === priority2:
                if(dist1 < dist2) {
                    console.log(`El enemigo con mayor prioridad y menor distancia es: ${enemy1}`);
                } else {
                    console.log(`El enemigo con mayor prioridad y menor distancia es: ${enemy2}`);
                }
                break;
            case priority1 < priority2:
                console.log(`El enemigo con mayor prioridad y menor distancia es: ${enemy2}`);
                break;
            default:
                console.log(`El enemigo con mayor prioridad y menor distancia es: ${enemy1}`);
        }

    };


console.log("********** Problema IV **********");
determinarEnemigoCercano4 ('EnemyA', 20, 2, 'EnemyB', 15, 3);
console.log(" ");
console.log("========================================================");

//------------------------------------------------------------------------------------------


console.log("********** Problema V **********");
console.log(" ");
console.log("========================================================");