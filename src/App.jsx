import "./App.css"
import "./reset.css"
import Header from "./components/Header";
import Nav from "./components/Nav";
import Category from "./components/Category";
import Card from "./components/Card";
import Form from "./components/Form";
import { useState } from "react";


function App() {

    const [toggle, setToggle] = useState(false);
    let bd = document.querySelector("body");
    let btns = document.querySelectorAll("#hide");
    if(toggle){
        bd.setAttribute("style", "background-color: grey;");
        for (const btn of btns ){
            btn.setAttribute("disabled", true);
        }
    }else {
        bd.removeAttribute("style")
        for (const btn of btns ){
            btn.setAttribute("disabled", false);
        }
    }

    return(
<main>
  <div className="container">
    <Nav />
    <Header />
    <Category>
        <span>Title</span>
        {toggle ? <Form /> : <></>}
        <Card>
            <button id="hide" onClick={() => setToggle(!toggle)}>Edit</button>
            <button id="hide">asd</button>
        </Card>
        <Card>
            <button id="hide" onClick={() => setToggle(!toggle)}>Edit</button>
            <button id="hide">asd</button>
        </Card>
    </Category>
  </div>
</main>
    );
}

export default App
