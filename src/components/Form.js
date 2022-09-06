import { useState } from "react";
import "./form.css"

const Form = () => {
    // const [dataForm, setDataForm] = useState(
    //   {
    //     name: "",
    //     email: "",
    //     coment: ""
    //   }
    //   )
    //   console.log(dataForm);
    // let inputName = document.querySelector('#name');
    // let email = document.querySelector('#email');
    // let coment = document.querySelector('textarea');
    // let buttonSubmit = document.getElementById('btn-submit');
    // let body = document.querySelector('body');


    // buttonSubmit.addEventListener('click', () =>{

    //     let contenedor = document.getElementById('contenedor')
    //     let divResults = document.createElement('div')
    //     divResults.id = "results"

    //     let h4 = document.createElement('h4');
    //     h4.innerHTML = `Nombre: ${inputName.value}`;
    //     divResults.appendChild(h4);

    //     let h5 = document.createElement('h5');
    //     h5.innerHTML = `Email: ${email.value}`;
    //     divResults.appendChild(h5);

    //     let p = document.createElement('p');
    //     p.innerHTML = `Comentario: ${coment.value}`;
    //     divResults.appendChild(p);
    //     contenedor.appendChild(divResults)



    //     console.log('Nombre guardado:', inputName.value);
    //     console.log("Email guardado:", email.value);
    //     console.log("Comentario guardado:", coment.value);
    // });

    return (
      <div className="contenedor">
        <h2>Formulario</h2>
        <form id="form" className="formulario">
            <h2 className="primary">Queremos saber mas de vos</h2>
            <input id="name" type="name" placeholder="Nombre de usuario"/>
            <input type="email" id="email" placeholder="Email"/>
            <textarea name="comentario" maxLength="140" rows="5" cols="50" placeholder="Escribe aquí tu comentario:"></textarea>
            <input id="btn-submit" className="boton btn" type="button" value="Enviar"/>
        </form>
      </div>
    );
  }
  
  export default Form;