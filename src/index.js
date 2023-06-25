import ReactDOM from "react-dom/client"
import { HashRouter, Routes, Route } from "react-router-dom"
import "./data/i18n"
import "./assets/style.css"


import Home from "./pages/Home"
import Cv from "./pages/Cv"
import ReactjsTest from "./pages/ReactjsTest"
import Duan from "./pages/Duan"
import AdministratorZ from "./pages/AdministratorZ"
import NoPage from "./pages/NoPage"






export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>                
                <Route path="/duan" element={<Duan/>}/>
                <Route path="/cv" element={<Cv/>}/>
                <Route path="/reactjstest" element={<ReactjsTest/>}/>
                <Route path="/administratorz" element={<AdministratorZ/>}/>
                <Route path="*" element={<NoPage/>}/>
            </Routes>
        </HashRouter> 
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)