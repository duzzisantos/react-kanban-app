import {ChangeTheme} from './components';
import './App.css';
// reference


export const Signup = () => (
    <>
    <li><a href={paths.signup}>Sign up</a></li>
    </>
);

export const Login = () =>(
    <>
    <li><a href={paths.login}>Login</a></li>
    </>
);

export const CreateNew = () =>(
    <>
    <li><a href={paths.createnew}>Create new</a></li>
    </>
);

export const MyProjects =()=>(
    <>
    <li><a href={paths.myproject}>My projects</a></li>
    </>
);

export const NightDayMode = () =>(
    <>
    <li><ChangeTheme/></li>
    </>
)


const paths = {
    signup: 'https://www.dhl.de',
    login: 'http://www.adidas.de',
    createnew: 'https://goal.com',
    myproject: 'http://www.yahoo.com'
}
