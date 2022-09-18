import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appbar from './components/Appbar';
import ThemeProvider from './components/ThemeProvider';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Home />,
//     },
//     {
//         path: '/login',
//         element: <Login />,
//     },
//     {
//         path: '/register',
//         element: <Register />,
//     },
// ]);

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Appbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
