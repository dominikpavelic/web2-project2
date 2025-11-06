import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Home, XSSDemo } from 'pages'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/xss-demo" element={<XSSDemo/>}/>

            </Routes>

        </BrowserRouter>

    )
}

export default App
