import "../Card.css"
import Form from "../components/Form";

function Card({children}){

   return(
       <li>
       <div className="card">
       <img src="" alt="" />
       {children}
       </div>
       </li>
   );
}

export default Card;
