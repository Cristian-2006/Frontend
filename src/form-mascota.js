import { LitElement, html } from "lit-element";
import styleScss from "./form-mascotaStyle"; 

export class Formulario extends LitElement {
    static get styles(){
        return[
            styleScss
        ];
    }


    render() {
      return html`

        <form @submit=${this._handleSubmit} name="formulario" method="get">
          <input type="text" name="nombre" id="nombre" maxlength="30" placeholder="Nombres:">
          <br>
  
          <input type="text" name="apellido" id="apellido" maxlength="30" placeholder="Apellidos:">
          <br>
  
          <select name="tipo_documento">
            <option value="Cedula">Cedula de ciudadania</option>
            <option value="Extranjero">Cedula de extranjeria</option>
            <option value="Tarjeta">Tarjeta de identidad</option>
          </select>
          <br>
  
          <input type="number" name="documento" id="documento" placeholder="Numero documento:">
          <br>
  
          <input type="number" name="telefono" id="telefono" placeholder="Numero telefono:">
          <br>
  
          <input type="submit" id="btn" name="btn" value="Enviar":">
        </form>
      `;
    }
  
    _handleSubmit(event) {
      event.preventDefault(); // evita el comportamiento de envío de formulario predeterminado
      const formData = new FormData(event.target); // obtiene los datos del formulario
      const nombre = formData.get('nombre');
      const apellido = formData.get('apellido');
      const tipo_documento = formData.get('tipo_documento');
      const documento = formData.get('documento');
      const telefono = formData.get('telefono');
      this._registrar(nombre, apellido, tipo_documento, documento, telefono); // llama a la función _registrar() para manejar los datos del formulario
    }
  
    _registrar(nombre, apellido, tipo_documento, documento, telefono) {
      console.log(nombre, apellido, tipo_documento, documento, telefono);
      // hacer algo con los datos del formulario
    }
  }
  
  customElements.define('form-mascota', Formulario);