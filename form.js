let sendBtn = document.getElementById('button');

sendBtn.addEventListener("click", ()=> {
    swal({
        title: "formulario enviado",
        text: "Gracias por contactarnos",
        icon: "success",
        button: "Aceptar",
      })})

    form.addEventListener('submit', (e) => {
    e.preventDefault()});

sendBtn.addEventListener('click', (e) => {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let pais = document.getElementById('pais');
    let phone = document.getElementById('phone');
    let message = document.getElementById('message');

    
    name = name.value;
    localStorage.setItem('name', name);

    email = email.value;
    localStorage.setItem('email', email);

    pais = pais.value;
    localStorage.setItem('pais', pais);

    phone = phone.value;
    localStorage.setItem('phone', phone);

    message = message.value;
    localStorage.setItem('message', message);
 });

