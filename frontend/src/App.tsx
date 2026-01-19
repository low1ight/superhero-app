import './App.css'
import Header from "./shared/Header.tsx";
import {Navigate, Route, Routes} from "react-router-dom";
import HeroesListPage from "./features/superheroes/ui/pages/HeroesListPage.tsx";
import HeroesInfoPage from "./features/superheroes/ui/pages/HeroInfoPage.tsx";
import HeroCreatePage from "./features/superheroes/ui/pages/HeroCreatePage.tsx";
import HeroEditPage from "./features/superheroes/ui/pages/HeroEditPage.tsx";

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
                        <Route path="/heroes/create" element={<HeroCreatePage/>} />
                        <Route path="/heroes/:id/edit" element={<HeroEditPage/>} />

                    </Routes>
                </main>


            </div>
        </>
    )
}

export default App
