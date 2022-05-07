
 let productos = [
   
  {id: 1, nombre:"remeraNegra", precio: 1200, talle:"s, m, l, xl"},

  {id: 2, nombre:"remeraVioleta", precio: 1200, talle:"s, m, l, xl"},       

  {id: 3, nombre:"remeraAzul", precio: 1200, talle:"s, m, l, xl"},

  {id: 4, nombre:"remeraRoja", precio: 1200, talle:"s, m, l, xl"},

  {id: 5, nombre:"remeraBlanca", precio: 1200, talle:"s, m, l, xl"},

  {id: 6, nombre:"zapatillaGris", precio: 1200, talle:"s, m, l, xl"},

  {id: 7, nombre:"zapatillaAzul", precio: 1200, talle:"s, m, l, xl"},

  {id: 8, nombre:"zapatillaBlanca", precio: 1200, talle:"s, m, l, xl"},

  {id: 9, nombre:"zapatillaNegra", precio: 1200, talle:"s, m, l, xl"},

  {id: 10, nombre:"zapatillaCeleste", precio: 1200, talle:"s, m, l, xl"},

   ];


   productos.map(function(productos) {
     
     console.log(productos.nombre+" => "+productos.precio);
    })

    const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}

guardarLocal("listaProductos", JSON.stringify(productos));


const contenedorProductos = document.getElementById(`lista`);

fetch ("/productos.Json")
.then(response => response.json())
.then(data => {
  data.forEach((producto) => {
    const li = document.createElement("li");
    li.innerHTML = `
              <h4>${producto.nombre}</h4>
              <p>${producto.precio}</p>
              <p>Código: ${producto.id}</p>
              img src=${producto.imagen}
              <hr/>
          `;

    lista.append(li);
  });
}).catch((error) => {
  console.log(error);
}); 

    
    // formulario//
       
  const mensajeRecibido = [];
    
  const form = document.getElementById("form").addEventListener("submit", (e)=> {
  e.preventDefault()

  swal({
      title: "formulario enviado",
      text: "Gracias por contactarnos",
      icon: "success",
      button: "Aceptar",
    });
    
  const name = document.getElementById("name");
    
  const email =document.getElementById("email");
    
  const phone = document.getElementById("phone");
    
  const pais = document.getElementById("pais");
    
  const message = document.getElementById("message");
    
 
  const mensajeEnviado = {
      nombre: name,
      emailDirection: email,
      country: pais,
      mensaje: message
      };
  
    mensajeRecibido.push(mensajeEnviado)
      onsole.log(mensajeRecibido);
    
    document.getElementById("form").reset();

    localStorage.setItem("mensaje recibido" , JSON.stringify(mensajeEnviado))
    });

    //aca esto funciona pero el array que me crea al enviar el mensaje no dice lo escrito sino lo que esta en la constante mensajeEnviado

    //modificar dom//


   let remeras = document.getElementById("remeras");

   let zapatillas = document.getElementById("Zapatillas");

   console.log(remeras.innerText);

   console.log(zapatillas.innerText);


  localStorage.setItem(`arreglos`, JSON.stringify(productos.nombre))
    




   //carrito//

  let carrito = []

  const agregarAlcarrito = (nombre)=> {

  const item = productos.find ((prod) => prod.id === prodid)

  
 


 

//dom//


let remeras = document.getElementById("remeras");
let zapatillas = document.getElementById("zapatillas");

console.log(remeras.innerText);
console.log(zapatillas.innerText);


const comprar = document.getElementById(`button`);
comprar.foreach(comprar => {
  comprar.addeventlistener(`click`,)
})}














