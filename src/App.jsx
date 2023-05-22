import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './styles/App.scss'
import './styles/header.scss'
import "./styles/home.scss"
import "./styles/contact.scss"
import './styles/footer.scss'
import "./styles/mediaquery.scss"



import Header from './components/Header';
import Home from './components/Home';

import Footer from "./components/footer";
import Contact from './components/Contact';
import Services from './components/Services';

function App(){
    return(
    <Router>
         <Header></Header>  
       <Routes>
        <Route path= "/" element={<Home />}/>
        {/* <Route path= "/services" element={<Services />}/> */}

        {/* <Route path="/contact" element={<Contact />}/> */}
       </Routes>
       <Contact></Contact> 
       <Services></Services>
         <Footer></Footer>
    </Router>
    )
}
export default App;