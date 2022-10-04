import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeProvider from './components/ThemeProvider';
import AuthRoutes from './components/AuthRoutes';
import UnauthRoutes from './components/UnauthRoutes';
import { AuthProvider } from './components/AuthContext';
import { DarkModeProvider } from './components/DarkModeContext';
import Layout from './components/Layout'

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AccountSettings from './pages/authenticated/AccountSettings';
import CreateItem from './pages/authenticated/CreateItem';
import Item from './pages/authenticated/Item';

function App() {

    return (
        <AuthProvider>
            <DarkModeProvider>
                <ThemeProvider>
                    <Router>
                        <Layout>
                            <Routes>
                                <Route path='/' element={<Home />} />
                                <Route path='/item/:id' element={<Item/>}/>
                                
                                <Route element={<UnauthRoutes/>}>
                                    <Route path='/login' element={<Login />} />
                                    <Route path='/register' element={<Register />} />
                                </Route>
                                <Route element={<AuthRoutes />}>
                                    <Route element={<AccountSettings />} path='/account' />
                                    <Route element={<CreateItem />} path='/create' />

                                </Route>
                            </Routes>
                        </Layout>
                    </Router>
                </ThemeProvider>
            </DarkModeProvider>
        </AuthProvider>
    );
}

export default App;
