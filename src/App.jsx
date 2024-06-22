import './App.css'
import './reset.css'
import Header from './components/Header';
import Nav from './components/Nav';
import Category from './components/Category';


function App() {
    return(
        <main>
            <div className="container">
                <Nav />
                <Header />
                <Category>
                    <span>Title</span>
                    <ul className="cardList">
                    </ul>
                </Category>
            </div>
        </main>
    );
}

export default App
