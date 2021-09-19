import React, { Fragment, useContext, useState } from 'react';
//import axios from 'axios';

//context
import UserContext from '../context/UserContext';

//components
import InfoInsurance from './InfoInsurance';
import ChooseProtectionForm from './ChooseProtectionForm';
import RegisterSuccessFul from './RegisterSuccessFul';

const ChooseProtection = () => {

    /*const apiUrl = '';
    const successfulResponse = 200;*/
    const servicesAndExclusions = [
        {
            id: 1,
            collapsed: '',
            descServiceItem: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            expanded:'true',
            numberItem:'One',
            titleItem:'Servicios brindados'
        },
        {
            id: 2,
            collapsed: 'collapsed',
            descServiceItem: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
            expanded:'true',
            numberItem:'Two',
            titleItem:'Exclusiones'
        } 
    ]

    const { insureds } = useContext(UserContext);    
    const [ isRegistered, setIsRegistered ] = useState(false);

    const onSubmit = async data => {
        data.client = [...insureds].shift();        
        data.insuredPeople = insureds;

        /*
        //To submit to API:
        try {
            const response = await axios.post(apiUrl, {});
            
            if(response.status === successfulResponse){                
                setIsRegistered(true);
            } 
        } catch (error) {
            console.log(`Error: ${error}`);
        }*/   
        
        setIsRegistered(true); 
    }

    return (
        !isRegistered 
            ? <Fragment>
                    <InfoInsurance showInfo={false} width="col-4" />
                    <ChooseProtectionForm onSubmit={onSubmit} servicesAndExclusions={servicesAndExclusions}/> 
            </Fragment> 
            : <Fragment>
                    <InfoInsurance showInfo={false} width="col-4" />
                    <RegisterSuccessFul />
            </Fragment>
    )
}

export default ChooseProtection
