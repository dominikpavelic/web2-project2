import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, XSSDemo } from 'pages'
import { NavBar } from "./components/NavBar.tsx";

function App() {

    return (
        <BrowserRouter>
            <NavBar/>
            <main className="container mx-auto py-8">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/xss-demo" element={<XSSDemo/>}/>

                </Routes>
            </main>
        </BrowserRouter>

    )
}

export default App
