const servicios = [
    {
        id: 1, 
        nombre:'Catering', 
        precio: 7000
    },
    {
        id: 2, 
        nombre: 'Decoración', 
        precio: 1000
    },
    {
        id: 3, 
        nombre: 'Musicalización', 
        precio: 800
    },
    {
        id: 4,
        nombre: 'Animación',
        precio: 700
    },
    {
        id: 5, 
        nombre: 'Mesa Dulce', 
        precio: 1800
    },
    {
        id: 6,
        nombre: 'Cotillón',
        precio: 1500
    },
    {
        id: 7, 
        nombre: 'Decoración + Cotillón + Animación', 
        precio: 2600
    },
    {
        id: 8, 
        nombre: 'Decoración + Musicalización', 
        precio: 1500
    },
    {
        id: 9, 
        nombre: 'Todos nuestros servicios', 
        precio:'$11.200'
    }
]

let carritoDeServicios = []


const invitados = document.getElementById('inputInvitados')
invitados.addEventListener('input',()=>{
    console.log(invitados.value)
})

const click1 = document.getElementById('btn1')
click1.addEventListener('click', ()=>{
    carritoDeServicios.push('Servicio de Catering')
    }
)

const click2 = document.getElementById('btn2')
click2.addEventListener('click', ()=>{
    carritoDeServicios.push('Servicio de Decoración')
    }
)

const click3 = document.getElementById('btn3')
click3.addEventListener('click', ()=>{
    carritoDeServicios.push('Servicio de Musicalización')
    }
)

const click4 = document.getElementById('btn4')
click4.addEventListener('click', ()=>{
    carritoDeServicios.push('Servicio de Animación')
    }
)

const click5 = document.getElementById('btn5')
click5.addEventListener('click', ()=>{
    carritoDeServicios.push('Mesa Dulce')
    }
)

const click6 = document.getElementById('btn6')
click6.addEventListener('click', ()=>{
    carritoDeServicios.push('Cotillón')
    }
)

const click7 = document.getElementById('btn7')
click7.addEventListener('click', ()=>{
    carritoDeServicios.push('Combo N° 1: Decoración + Cotillón + Animación')
    }
)

const click8 = document.getElementById('btn8')
click8.addEventListener('click', ()=>{
    carritoDeServicios.push('Combo N° 2: Decoración + Musicalización')
    }
)

const click9 = document.getElementById('btn9')
click9.addEventListener('click', ()=>{
    carritoDeServicios.push('Combo N° 3: Todos nuestros servicios')
    
    }
)

console.log(carritoDeServicios)


let carrito = document.getElementById('carrito')
carrito.innerHTML=`
    <div class=""> Servicio: ${servicios.nombre}</div>
    <div class=""> Precio por persona: ${servicios.precio}</div>
    <div class=""> Cantidad de Invitados: ${invitados.value} </div>
    <div class=""> Subtotal: $ ${servicios.precio}*${invitados.value} </div>
`

