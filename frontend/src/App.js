import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeProvider from './components/ThemeProvider';
import AuthRoutes from './components/AuthRoutes';
import UnauthRoutes from './components/UnauthRoutes';
import { AuthProvider } from './components/AuthContext';
import Layout from './components/Layout'

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AccountSettings from './pages/AccountSettings';

function App() {


    return (
        <AuthProvider>
            <ThemeProvider>
                <Router>
                    <Layout>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            
                            <Route element={<UnauthRoutes/>}>
                                <Route path='/login' element={<Login />} />
                                <Route path='/register' element={<Register />} />
                            </Route>
                            <Route element={<AuthRoutes />}>
                                <Route
                                    element={<AccountSettings />}
                                    path='/account-settings'
                                />
                            </Route>
                        </Routes>
                    </Layout>
                </Router>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;
