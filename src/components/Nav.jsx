import Button from "./Button";
import "../Nav.css"

function Nav(){
   return(
       <nav>
       <img height="100px" width="100px" src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Vimlogo.svg" alt="" />
       <ul>
       <Button name="Home"/>
       <Button name="Nuevo Video"/>
       </ul>
       </nav>
   );
}

export default Nav;
