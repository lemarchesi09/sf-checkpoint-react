import { useState } from "react";
import "./form.css"

const Form = () => {
    // Crear estado para informacion de los inputs
    const [dataForm, setDataForm] = useState(
      {
        name: "",
        email: "",
        coment: ""
      }
      )
      // Controlar los inputs para escuchar los cambios y cambiar el estado de dataForm
      const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        const newValues = {
          ...dataForm,
          [name]: value,
        };

        setDataForm(newValues)
      }
      // Controlador del Submit. Todavia no le agrego más programa
      const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log('Data Form dentro de HandleSubmit', dataForm);
      }
    
      console.log('Data Form fuera de HandleSubmit', dataForm);

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
        <form id="form" className="formulario" onSubmit={handleSubmit} >
            <h2 className="primary">Queremos saber mas de vos</h2>
            <input id="name" name="name" type="name" value={dataForm.name} onChange={handleChange} placeholder="Nombre de usuario"/>
            <input type="email" id="email" name="email" value={dataForm.email} onChange={handleChange} placeholder="Email"/>
            <textarea name="coment" maxLength="140" rows="5" cols="50" value={dataForm.coment} onChange={handleChange} placeholder="Escribe aquí tu comentario:"></textarea>
            <input id="btn-submit" className="boton btn" type="submit" value="Enviar" />
        </form>
      </div>
    );
  }
  
  export default Form;