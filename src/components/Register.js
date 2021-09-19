import React, { Fragment, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; 

//components
import InfoInsurance from './InfoInsurance';
import RegisterForm from './RegisterForm';

//context
import UserContext from '../context/UserContext';

const Register = () => {

    const { userData, insureds, setInsureds } = useContext(UserContext);          
    const { apellidoMaterno, apellidoPaterno, fecNacimiento, nombres, numDocumento, sexo } = userData;

    const insuredPeople = [{
        id: uuidv4(),
        nDoc: numDocumento,
        name: nombres,
        lastNamePat: apellidoPaterno,
        lastNameMat: apellidoMaterno,
        dateOfBirth: fecNacimiento,
        genre: sexo
    }];

    useEffect(() => {
        setInsureds(insuredPeople);
    }, [])

    const addInsured = insured => {
        insured.id = uuidv4();
        setInsureds([...insureds, insured]);
    }

    const removeInsured = id => {
        setInsureds(insureds.filter(insured => insured.id !== id));
    }

    return (
        <Fragment>
            <InfoInsurance showInfo={false} width="col-4" />
            <RegisterForm addInsured={addInsured} insureds={insureds} removeInsured={removeInsured} userData={userData}/> 
        </Fragment>
        
    )
}

export default Register
