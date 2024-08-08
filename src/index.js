import { useEffect } from "react"
import ReactDOM from "react-dom/client"
import { HashRouter, Routes, Route } from "react-router-dom"
import "./data/i18n"
import "./assets/style.css"


import Home from "./pages/Home"
import Duan from "./pages/Duan"
import Cv from "./pages/Cv"
import Blog from "./pages/Blog"
import Post from "./pages/Post"
import ReactjsTest from "./pages/ReactjsTest"
import NoPage from "./pages/NoPage"



const MetaTitle = ({ title, children }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return children;
};


export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MetaTitle title="Trang chủ"> <Home /> </MetaTitle> } /> 
                <Route path="/duan" element={<MetaTitle title="Dự án"> <Duan /> </MetaTitle> } /> 
                <Route path="/cv" element={<MetaTitle title="Lê Văn Quý - Wordpress Dev CV"> <Cv /> </MetaTitle> } />
                <Route path="/blog/" element={<MetaTitle title="Blog"><Blog/></MetaTitle>}/> 
                <Route path="/post/:postName" element={<MetaTitle title=""><Post/></MetaTitle>}/> 
                <Route path="/blog/:categoryParam" element={<MetaTitle title="Blog"><Blog/></MetaTitle>}/> 
                <Route path="/reactjstest" element={<MetaTitle title="ReactJS Test"> <ReactjsTest /> </MetaTitle> } /> 
                <Route path="*" element={<MetaTitle title="Không tìm thấy trang"> <NoPage /> </MetaTitle> } /> 
            </Routes>
        </HashRouter> 
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)