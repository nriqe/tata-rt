import { useState, useContext, Fragment } from 'react'; 
import axios from 'axios';
import UserContext from '../context/UserContext';
import { Redirect } from 'react-router'

//components
import InfoInsurance from './InfoInsurance';
import LoginForm from './LoginForm';

const Login = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isValidUser, setIsValidUser] = useState(false);
    const apiUrl = 'https://freestyle.getsandbox.com/dummy/obtenerdatospersona';

    const user = useContext(UserContext);

    const onSubmit = async data => {
        setIsSubmitted(true);
        const successfulResponse = 'success';
        const { nDoc, dateOfBirth, phone } = data;
        
        try {
            const response = await axios.post(apiUrl, {});
            
            if(response.data.tipo === successfulResponse){                
                user.setUserData(response.data.data.tercero);
                setIsValidUser(true);
            } 
        } catch (error) {
            console.log(`Error: ${error}`);
        }   

        return isSubmitted;
    }

    return (
        !isSubmitted 
        ?   <Fragment>
                <InfoInsurance showInfo={true} width="col-8" />
                <LoginForm onSubmit={onSubmit} /> 
            </Fragment>
        :  
            !isValidUser ? <p className="text-center">Enviando...</p> : <Redirect to="/registro" />
    )
}

export default Login;

