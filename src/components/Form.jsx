import "../Form.css"

function Form(){
   return(
       <form action="">
       <h2>Edit Card</h2>
       <label htmlFor="title">Title: </label>
       <input type="text" id="title"/>
       <label htmlFor="category">Category: </label>
       <input type="text" id="category"/>
       <label htmlFor="imagen">Imagen: </label>
       <input type="text" id="imagen"/>
       <label htmlFor="video">Video: </label>
       <input type="text" id="video"/>
       <label htmlFor="description">Description: </label>
       <textarea name="description" id="description" cols="30" rows="5"></textarea>
       <button type="submit">Guardar</button>
       <button>Limpiar</button>
       </form>
   );
}

export default Form;
