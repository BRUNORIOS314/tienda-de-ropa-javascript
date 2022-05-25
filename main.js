
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
/*    const li = document.createElement("li");
    li.innerHTML = `
              <h4>${producto.nombre}</h4>
              <p>${producto.precio}</p>
              <p>Código: ${producto.id}</p>
              img src=${producto.imagen}
              <hr/>
          `;

    lista.append(li);*/
  });
}).catch((error) => {
  console.log(error);
}); 

    



    




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














