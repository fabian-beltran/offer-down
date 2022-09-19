import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { register, login, logout, getMe } from '../services/auth';
import { AuthContext } from '../components/AuthContext';

const useAuth = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(AuthContext);

    // if (!user) {
    //     (async () => {
    //         try {
    //             const res = await getMe();
    //             if (res.status === 200) setUser(res.data.user);
    //             return res.data.user;
    //         } catch (err) {
    //             console.log(err.response);
    //         }
    //     })();
    // }

    return {
        register: async (data) => {
            try {
                const res = await register(data);
                if (res.status === 201) navigate('/login'); // If user is successfully created, go to /login.
            } catch (err) {
                if (err.response.status === 400) return { errors: err.response.data.errors };
                return err;
            }
        },
        login: async (data) => {
            try {
                const res = await login(data);
                if (res.status === 200) navigate('/'); // If user is successfully logged in, go to main page.
                setUser(res.data.user);
                return res.data.user;
            } catch (err) {
                if (err.response.status === 400) return { errors: err.response.data.errors };
                return err;
            }
        },
        logout: async () => {
            try {
                const res = await logout();
                if (res.status === 200) {
                    setUser(null);
                    navigate('/');
                }
            } catch (err) {
                console.log(err.response);
            }
        },
        loadUser: async () => {
            try {
                const res = await getMe(); console.log(res)
                if (res.status === 200) setUser(res.data.user);
                return res.data.user;
            } catch (err) {
                console.log(err.response)
            }
        },
        user,
        //setUser
    };
};

export default useAuth;
