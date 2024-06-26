function Button(props){
   return(
       <a href={props.href}>
        <button id="hide">{props.name}</button>
       </a>
   );
}

export default Button;
