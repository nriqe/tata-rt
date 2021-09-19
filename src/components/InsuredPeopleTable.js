import React from 'react';
import PropTypes from 'prop-types';

const InsuredPeopleTable = props => {

    const { insureds, removeInsured } = props;

    return (
        <table className="my-4 table table-sm table-striped">
            <thead className="bg-primary">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nro. Doc.</th>
                    <th scope="col">Ap. Pat.</th>
                    <th scope="col">Ap. Mat.</th>
                    <th scope="col">Nombres</th>
                    <th scope="col">F. Nacim.</th>
                    <th scope="col">Gén.</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    insureds.length > 0 
                        ? insureds.map((insured, i) => (
                            <tr key={insured.id}>
                                <th scope="row">{(i+1)}</th>
                                <td>{insured.nDoc}</td>
                                <td>{insured.lastNamePat}</td>
                                <td>{insured.lastNameMat}</td>
                                <td>{insured.name}</td>
                                <td>{formatDateOfBirth(insured.dateOfBirth)}</td>
                                <td>{insured.genre}</td>
                                <td>
                                    { (i > 0) 
                                        ? <button className="btn btn-danger btn-sm" onClick={() => {removeInsured(insured.id)}}>Eliminar</button> 
                                        : ''
                                    }
                                </td>
                            </tr> ))
                        : <tr>
                            <td colSpan="3">No hay personas para asegurar</td>
                        </tr>
                }
            </tbody>
        </table>
    )
}

const formatDateOfBirth = dateOfBirth => {

    if(!dateOfBirth.includes('/')){
        const formattedFNac = dateOfBirth.split('-');
        return `${formattedFNac[2]}/${formattedFNac[1]}/${formattedFNac[0]}`;
    }
    
    return dateOfBirth;
}

export default InsuredPeopleTable;

InsuredPeopleTable.propTypes = {    
    insureds: PropTypes.array.isRequired,
    removeInsured: PropTypes.func.isRequired
}
