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


//creacion de funcion para comparar la distancia mas cercana
function determinarEnemigoCercano3 (enemigoA, enemigoB) {
    if (enemigoA.dist < enemigoB.dist) {
        console.log(`El enemigo mas cercano es: ${enemigoA.enemy}`);
    } else {
        console.log(`El enemigo mas cercano es: ${enemigoB.enemy}`);
    }
};

//ejecutar primera ronda
//creacion de objetos enemigoA y enemigoB, 1a ronda
let enemigoA = {
    enemy: prompt('Ingrese nombre de enemigo 1 (ronda1):'),
    dist: prompt('Ingrese distancia del enemigo 1 (ronda1):')
};
let enemigoB = {
    enemy: prompt('Ingrese nombre de enemigo 2 (ronda1):'),
    dist: prompt('Ingrese distancia del enemigo 2 (ronda1):')
};

console.log("********** Problema III **********");
console.log('Ronda 1');
determinarEnemigoCercano3 (enemigoA, enemigoB);
console.log(" ");


//ejecutar segunda ronda
//creacion de objetos enemigoA y enemigoB, 1a ronda
enemigoA = {
    enemy: prompt('Ingrese nombre de enemigo 1 (ronda2):'),
    dist: prompt('Ingrese distancia del enemigo 1 (ronda2):')
};
enemigoB = {
    enemy: prompt('Ingrese nombre de enemigo 2 (ronda2):'),
    dist: prompt('Ingrese distancia del enemigo 2 (ronda2):')
};

console.log('Ronda 2');
determinarEnemigoCercano3 (enemigoA, enemigoB);
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
        switch (true) {//usando el metodo switch
            case priority1 === priority2: //como proceder si en caso la prioridad es igual
                if(dist1 < dist2) {//si la prioridad es igual comparara las distancias
                    console.log(`El enemigo con mayor prioridad y menor distancia es: ${enemy1}`);
                } else {
                    console.log(`El enemigo con mayor prioridad y menor distancia es: ${enemy2}`);
                }
                break;
            case priority1 < priority2: //el de mayor prioridad sera el primero
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
/**
 * Problema V (30 puntos)
Desarrolla un programa de simulación de radar que lea
continuamente el nombre, la distancia, la velocidad y la prioridad de
ataque de dos enemigos. El programa debe seleccionar el enemigo con
mayor prioridad para atacar. Si ambos tienen la misma prioridad,
selecciona el más cercano. Si las distancias son iguales, selecciona el
enemigo con mayor velocidad.

    Entrada: 
    enemy1: "Enemy1" 
    dist1: 30
    priority1: 2
    speed1: 10
    ----
    enemy2: "Enemy2"
    dist2: 30
    priority2: 2
    speed2: 20

    Salida:
    Enemy2
 */

    //en este ejercicio crearemos 2 objetos enemigo con sus atributos
const enemigo1 = {
    enemy: "Enemy1",
    dist: 30,
    priority: 2,
    speed: 10
};

const enemigo2 = {
    enemy: "Enemy2",
    dist: 30,
    priority: 2,
    speed: 20 
}

// creacion de la funcion que hara las comparaciones de los atributos para determinar a quien se dispara primero
function determinarEnemigoPrioridad (enemigo1, enemigo2) {
    if (enemigo1.priority > enemigo2.priority) { //if para determinar prioridad
        console.log(`El enemigo a atacar primero es: ${enemigo1.enemy}`);
    } else if (enemigo1.priority < enemigo2.priority) {
        console.log(`El enemigo a atacar primero es: ${enemigo2.enemy}`);
    } else {
        if (enemigo1.dist < enemigo2.dist) { // if para determinar distancia mas corta
            console.log(`El enemigo a atacar primero es: ${enemigo1.enemy}`);
        } else if (enemigo1.dist > enemigo2.dist) {
            console.log(`El enemigo a atacar primero es: ${enemigo2.enemy}`);
        } else {
            if (enemigo1.speed > enemigo2.speed) {  // if para determinar velocidad
                console.log(`El enemigo a atacar primero es: ${enemigo1.enemy}`);
            } else {
                console.log(`El enemigo a atacar primero es: ${enemigo2.enemy}`);
            }
        }
    }
};

console.log("********** Problema V **********");
determinarEnemigoPrioridad (enemigo1, enemigo2);
console.log(" ");
console.log("========================================================");