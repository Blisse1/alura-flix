import "../Category.css"
import Card from "./Card";

function Category(){
   return(
       <section className="front-end">
    <ul className="cardList">
    <Card />
    <Card />
    <Card />
    <Card />
    </ul>
       </section>
   );
}

export default Category;
