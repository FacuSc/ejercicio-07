let nombre = prompt ('Ingrese el nombre')
let genero = prompt ('Ingrese genero')
let hombre = 'hombre'
let mujer = 'mujer'
let nobinario ='no binario'

if(nombre != null)
{
    if(genero == hombre){
        console.warn('Hola '+ nombre, ', Bienvenido a mi pagina')
    }
    if(genero == mujer){
        console.warn('Hola '+ nombre, ', Bienvenida a mi pagina')
    }
    if(genero == nobinario){
        console.warn('Hola '+ nombre, ', Bienvenide a mi pagina')
    }
    else{
        console.error('No eres humano')
    }
}
else
{
    console.error('No eres humano')

}