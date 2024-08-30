const cuentas = [
    { nombre: 'Luffy', saldo: 200 , contraseña: 123},
    { nombre: 'Zoro', saldo: 290  , contraseña: 321},
    { nombre: 'Namy', saldo: 67  ,  contraseña: 789}
];

console.log(cuentas);
let btnSecion = document.querySelector("#btn-secion");

btnSecion.addEventListener("click",()=>InicioSecion())

const InicioSecion = ()=> {
    console.log("hola");
    
}
let miElemento = document.createElement ("")