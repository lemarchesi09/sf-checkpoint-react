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
      // Controlar los inputs para escuchar los cambios y cambiar el estado de dataForm. Se modificó el controlador con una funcion en el evento onChange, porque el controlador fue copiado y no se terminaba de comprender.

      // const handleChange = (event) => {
      //   const name = event.target.name;
      //   const value = event.target.value;
        
      //   const newValues = {
      //     ...dataForm,
      //     [name]: value,
      //   };

      //   setDataForm(newValues)
      // }

      // Controlador del Submit. Todavia no le agrego más programa
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Mensaje enviado', dataForm);
      }
    
      console.log('Data Form fuera de HandleSubmit', dataForm);


    return (
      <div className="contenedor">
        <h2>Formulario</h2>
        <form id="form" className="formulario" onSubmit={handleSubmit} >
            <h2 className="primary">Queremos saber mas de vos</h2>
            <input id="name" name="name" type="name" value={dataForm.name} onChange={(e) => setDataForm({...dataForm, name: e.target.value})} placeholder="Nombre de usuario"/>
            <input type="email" id="email" name="email" value={dataForm.email} onChange={(e) => setDataForm({...dataForm, email: e.target.value})} placeholder="Email"/>
            <textarea name="coment" maxLength="140" rows="5" cols="50" value={dataForm.coment} onChange={(e) => setDataForm({...dataForm, coment: e.target.value})} placeholder="Escribe aquí tu comentario:"></textarea>
            <input id="btn-submit" className="boton btn" type="submit" value="Enviar" />
        </form>
      </div>
    );
  }
  
  export default Form;