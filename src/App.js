
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import RegisterForm from './pages/RegisterForm';
import LoginForm from './pages/LoginForm';
import PasswordRecoveryForm from './pages/PasswordRecoveryForm';
import LandingPage from './pages/LandingPage';
import SubscriptionPage from "./pages/SubscriptionPage";
import Dashboard from "./pages/Dashboard";
import AddPage from "./pages/AddPage";
import Editepage from "./pages/Editepage";
import Learners from "./pages/Learners";
import Formers from "./pages/Formers";
import Packs from "./pages/Packs";

export default function App(){
    return(
            <BrowserRouter>
            <Routes >
                <Route path='/register-from' element={<RegisterForm/>}/>
                <Route path='/' element={<LoginForm/>}/>
                <Route path='/password-recovery-from' element={<PasswordRecoveryForm/>}/>
                <Route path='/landing-Page' element={<LandingPage/>}/>
                <Route path='/subcription-Page' element={<SubscriptionPage/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/addpage' element={<AddPage/>}/>
                <Route path='/editepage' element={<Editepage/>}/>
                <Route path='/learners' element={<Learners/>}/>
                <Route path='/formers' element={<Formers/>}/>
                <Route path='/packs' element={<Packs/>}/>
            </Routes>
            </BrowserRouter>
    );
}

