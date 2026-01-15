import './App.css'
import Header from "./components/Header.tsx";
import {Navigate, Route, Routes} from "react-router-dom";
import HeroesListPage from "./pages/HeroesListPage.tsx";
import HeroesInfoPage from "./pages/HeroInfoPage.tsx";

function App() {

    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <Header/>
                <main className="mx-auto max-w-4xl px-4 py-6">
                    <Routes>
                        <Route path="/" element={<Navigate to="/heroes" replace />} />
                        <Route path="/heroes" element={<HeroesListPage/>} />
                        <Route path="/heroes/:id" element={<HeroesInfoPage/>} />

                    </Routes>
                </main>


            </div>
        </>
    )
}

export default App
