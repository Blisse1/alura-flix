import "../Category.css"

function Category({children}){
   return(
       <section className="front-end">
       <ul className="cardList">
       {children}
       </ul>
       </section>
   );
}

export default Category;
