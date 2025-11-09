import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, XSSDemo } from 'pages'
import { NavBar, SecurityStatus } from 'components';
import { SecurityProvider } from "contexts";

function App() {

    return (
        <BrowserRouter>
            <SecurityProvider>
                <NavBar/>
                <SecurityStatus/>
                <main className="container mx-auto py-8">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/xss-demo" element={<XSSDemo/>}/>

                    </Routes>
                </main>
            </SecurityProvider>
        </BrowserRouter>

    )
}

export default App
