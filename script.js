console.log('Si inspeccionas sos un pelotudo, Racing vos no existis');   //texto que se impprime en la consola al inspecccionar, mas q nada para probar q estan bien relacionados los archivos


window.addEventListener('load', () => {                              //agregas un evento al cargar la ventana que haa lo siguiente:
    const submitButton = document.querySelector('#submit');          //busca en el document asociado la el id submit y lo asocia a la const declarada
    submitButton?.addEventListener('click', (event)=>{               //agrega un evento q al hacer click en el boton asociado lanze una alerta que diga click en enviar                  el signo de pregunta es el equivalente a un if q lo difiere de null, es p cuando en socio el  script detecta q no existe el boton submit y tira error, p q no lo haga
        event.preventDefault();                                      //evento q hace q no salgan en el url los nombres de los componentes de las cosas de la pagina, por el ejemplo nombre o email en la pagina de contacto
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        if(name !==''  && email!==''  && message!==''){             //if q dice q se cargo algo en cada casilla al momento de apretar enviar
            document.querySelector('#user-name').innerHTML= name;   //buscamos la var user-name y le asignamos el valor de lo q toma name a traves del comando innerHTML
            document.querySelector('#user-email').innerHTML= email;
            document.querySelector('#user-message').innerHTML= message;

        } else {
            document.querySelector('#error').classList.add('show-error');      //en caso de q una este vacia: classList devuelve las clases asociadas a la variable encontrada cn el query y a esta lista de clases añadimos la de show-error que es la q muestra el span a traves de display: block en css
        }

    });



    document.querySelector('#get-user').addEventListener('click', getUser);     //para cuando en socio pulsan el boton de obtenr socio, el addevent asigna la funcion de getUser q se va a crear mas abajo

})


function getUser(){
    fetch('https://randomuser.me/api')    //fetch hace una llamada a ese url, q es una api q devuelve usuarios al azar
        .then((data) => {
            return data.json();
        })
        .then((response) =>{
            const userData = response.results[0].name;
            document.querySelector('#user-name').innerHTML=`${userData.title} ${userData.first} ${userData.last}`;
        })
}

