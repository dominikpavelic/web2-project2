import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Admin, Home, XSSDemo } from 'pages'
import { NavBar, SecurityStatus } from 'components';
import { SecurityProvider } from "contexts";
import { AuthProvider } from "contexts";

function App() {

    return (
        <BrowserRouter>
            <AuthProvider>
                <SecurityProvider>
                    <NavBar/>
                    <SecurityStatus/>
                    <main className="container mx-auto py-8">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/xss-demo" element={<XSSDemo/>}/>
                            <Route path="/admin" element={<Admin/>}/>
                        </Routes>
                    </main>
                </SecurityProvider>
            </AuthProvider>
        </BrowserRouter>

    )
}

export default App
