import "./App.css"
import Genre from "./pages/genre"
import HomePage from "./pages/home/index.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function Home() {
    return <HomePage />
}

function NotFound() {
    return <h1>404 Not Found</h1>
}
function App() {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/genre' element={<Genre />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
