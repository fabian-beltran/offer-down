import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appbar from './components/Appbar';
import ThemeProvider from './components/ThemeProvider';
import PrivateRoutes from './components/PrivateRoutes';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AccountSettings from './pages/AccountSettings';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Appbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />

                    <Route element={<PrivateRoutes/>}>
                        <Route element={<AccountSettings/>} path='/account-settings'/>
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
