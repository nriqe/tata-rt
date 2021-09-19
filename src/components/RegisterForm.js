import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from "react-router-dom";

//components
import Headline from './Headline';
import InsuredPeopleTable from './InsuredPeopleTable';
import Step from './Step';

const RegisterForm = props => {
    
    console.log('RegisterForm');
    const adultMinAge = 18;
    const dateFormat = 'YYYY-MM-DD';
    const limitDate = moment(new Date()).subtract(adultMinAge, "years").format(dateFormat);

    const [ maxAllowedDate, setMaxAllowedDate ] = useState(limitDate);
    const [ showInsuredsTable, setShowInsuredsTable ] = useState(false);

    const { addInsured, insureds, removeInsured, userData } = props;

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const { apellidoMaterno, apellidoPaterno, fecNacimiento, nombres, numDocumento, sexo } = userData;
    const formattedFNac = fecNacimiento.split('/');
    const formattedDateOfBirth = `${formattedFNac[2]}-${formattedFNac[1]}-${formattedFNac[0]}`;

    useEffect(() => {
        setValue('nDoc', numDocumento, { shouldValidate: true });
        setValue('name', nombres, { shouldValidate: true });
        setValue('lastNamePat', apellidoPaterno, { shouldValidate: true });
        setValue('lastNameMat', apellidoMaterno, { shouldValidate: true });
        setValue('dateOfBirth', formattedDateOfBirth, { shouldValidate: true });
        setValue('genre', sexo, { shouldValidate: true });
    }, [])

    const onSubmit = (data, e) => {
        e.preventDefault();
        
        if(errors){
            addInsured(data);
            e.target.reset();
            setValue('insurance', 'family', { shouldValidate: true });
        }
    }

    const showInsuredPeopleTable = () => {
        setMaxAllowedDate(moment(new Date()).format(dateFormat));
        setShowInsuredsTable(true);
        resetInputs();        
    }

    const hideInsuredPeopleTable = () => {
        setMaxAllowedDate(limitDate);
        setShowInsuredsTable(false);
    }

    const resetInputs = () => {
        setValue('nDoc', '');
        setValue('name', '');
        setValue('lastNamePat', '');
        setValue('lastNameMat', '');
        setValue('dateOfBirth', '');
        setValue('genre', '');
        setValue('insurance', 'family', { shouldValidate: true });
    }

    return (
        <section className="col-8 text-secondary p-right-40">
            <Step step="PASO 1" />
            <section className="w-75 mx-auto">
                <Headline title1="Hola, " title2={nombres} subtitle="Valida que los datos sean correctos" />     
                <form onSubmit={handleSubmit(onSubmit)}>
                    <article className="mt-4">
                        <p className="fs-4">Datos personales del titular</p>
                    </article>                    
                    <div className="form-floating input-group mb-3">
                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">DNI</button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="!#">DNI</a></li>
                            <li><a className="dropdown-item" href="!#">CE</a></li>
                        </ul>
                        <input 
                            aria-label="Tipo doc."
                            className={`form-control ${errors.nDoc ? 'is-invalid' : ''}`}
                            id="nDoc" 
                            name="nDoc" 
                            type="num" 
                            {...register("nDoc", { 
                                required:{
                                    value: true,
                                    message: 'Debe ingresar un documento de identidad' 
                                },
                                pattern: {
                                    value: /^[0-9]*$/,
                                    message: 'El nro. de doc. sólo debe tener números'
                                },
                                validate: value => value.length === 8 || 'El nro. de doc. debe tener 8 dígitos' 
                            })}
                        />
                        <label className="ms-5 ps-4" htmlFor="nDoc">Nro. de documento</label>
                    </div>
                    <div className="mb-3">
                        <span className="invalid-feedback text-small d-block">
                            {errors?.nDoc?.message}
                        </span>
                    </div>              
                    <div className="form-floating mb-3">
                        <input                     
                            className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
                            id="name" 
                            name="name"
                            type="text" 
                            {...register("name", { 
                                required:{
                                    value: true,
                                    message: 'Debe ingresar su nombre' 
                                }
                            })}
                        />
                        <label htmlFor="floatingInput">Nombres</label>
                    </div>        
                    <div className="mb-3">
                        <span className="invalid-feedback text-small d-block">
                            {errors?.name?.message}
                        </span>
                    </div>  
                    <div className="form-floating mb-3">
                        <input                     
                            className={`form-control ${errors.lastNamePat ? 'is-invalid' : ''}`} 
                            id="lastNamePat" 
                            name="lastNamePat"
                            type="text" 
                            {...register("lastNamePat", { 
                                required:{
                                    value: true,
                                    message: 'Debe ingresar su apellido paterno' 
                                }
                            })}
                        />
                        <label htmlFor="floatingInput">Apellido Paterno</label>
                    </div>        
                    <div className="mb-3">
                        <span className="invalid-feedback text-small d-block">
                            {errors?.lastNamePat?.message}
                        </span>
                    </div>  
                    <div className="form-floating mb-3">
                        <input                     
                            className={`form-control ${errors.lastNameMat ? 'is-invalid' : ''}`} 
                            id="lastNameMat" 
                            name="lastNameMat"
                            type="text" 
                            {...register("lastNameMat", { 
                                required:{
                                    value: true,
                                    message: 'Debe ingresar su apellido materno' 
                                }
                            })}
                        />
                        <label htmlFor="floatingInput">Apellido Materno</label>
                    </div>        
                    <div className="mb-3">
                        <span className="invalid-feedback text-small d-block">
                            {errors?.lastNameMat?.message}
                        </span>
                    </div>          
                    <div className="form-floating mb-3">
                        <input 
                            className={`form-control ${errors.dateOfBirth ? 'is-invalid' : ''}`}                                    
                            id="dateOfBirth" 
                            name="dateOfBirth"
                            type="date"
                            max={maxAllowedDate}
                            {...register("dateOfBirth", { 
                                required:{
                                    value: true,
                                    message: 'Debe ingresar una fecha' 
                                }                                        
                            })}
                        />
                        <label htmlFor="dateOfBirth">Fecha de nacimiento</label>
                    </div>
                    <div className="mb-3">
                        <span className="invalid-feedback text-small d-block">
                            {errors?.dateOfBirth?.message}
                        </span>
                    </div>
                    <div className="form-group mb-3">
                        <div className="mb-1">
                            <label className="form-label mb-0">Género:</label>
                        </div>
                        <div className="my-2 form-check">
                            <input 
                                className={`form-check-input ${errors.genre ? 'is-invalid' : ''}`} 
                                type="radio" name="genre" id="M" value="M" 
                                {...register("genre", { 
                                    required:{
                                        value: true,
                                        message: 'Debe ingresar su género' 
                                    }
                                })}
                            />
                            <label className="form-check-label" htmlFor="M">Masculino</label>       
                        </div>
                        <div className="my-2 form-check">
                            <input 
                                className={`form-check-input ${errors.genre ? 'is-invalid' : ''}`} 
                                type="radio" name="genre" id="F" value="F" 
                                {...register("genre", { 
                                    required:{
                                        value: true,
                                        message: 'Debe ingresar su género' 
                                    }
                                })}
                            />
                            <label className="form-check-label" htmlFor="F">Femenino</label>                
                        </div>                                           
                    </div> 
                    <div className="mb-3">
                        <span className="invalid-feedback text-small d-block">
                            {errors?.genre?.message}
                        </span>
                    </div>     
                    <div className="form-group my-3">
                        <div className="my-1">
                            <label className="form-label mb-0">¿A quién vamos a asegurar?</label>
                        </div>
                        <div className="my-2 form-check">
                            <input 
                                className={`form-check-input ${errors.insurance ? 'is-invalid' : ''}`} 
                                id="personal"
                                name="insurance"  
                                type="radio" 
                                value="personal" 
                                onClick={() => hideInsuredPeopleTable()}
                                {...register("insurance", { 
                                    required:{
                                        value: true,
                                        message: 'Debe ingresar a quién/quiénes va a asegurar' 
                                    }
                                })}
                            />
                            <label className="form-check-label" htmlFor="personal">Sólo a mí</label>       
                        </div>
                        <div className="my-2 form-check">
                            <input 
                                className={`form-check-input ${errors.insurance ? 'is-invalid' : ''}`} 
                                id="family"
                                name="insurance"  
                                type="radio" 
                                value="family" 
                                onClick={() => {showInsuredPeopleTable()}}
                                {...register("insurance", { 
                                    required:{
                                        value: true,
                                        message: 'Debe ingresar a quién/quiénes va a asegurar' 
                                    }
                                })}
                            />
                            <label className="form-check-label" htmlFor="family">A mí y a mi familia</label>                
                        </div>
                        <div className="mb-3">
                            <span className="invalid-feedback text-small d-block">
                                {errors?.insurance?.message}
                            </span>
                        </div>                        
                    </div> 
                    { showInsuredsTable 
                        ? <Fragment>
                            <div className="mt-5 d-flex justify-content-end">
                                <button type="submit" className="btn btn-primary btn-lg text-white-50 fs-6">Agregar asegurado</button>
                            </div>
                            <InsuredPeopleTable insureds={insureds} removeInsured={removeInsured} /> 
                        </Fragment>                      
                        : ''
                    }
                    <div className="mt-5 d-flex justify-content-end">
                        <Link to="/elige-tu-proteccion" className="btn btn-primary btn-lg text-white-50 fs-6">{`CONTINUAR >`}</Link>
                    </div>
                </form> 
            </section>
        </section>
    )
}

export default RegisterForm;

RegisterForm.propTypes = {    
    addInsured: PropTypes.func.isRequired,
    insureds: PropTypes.array.isRequired,
    removeInsured: PropTypes.func.isRequired
}