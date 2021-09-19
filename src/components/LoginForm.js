import React from 'react';
import { useForm } from 'react-hook-form';
import { Dropdown } from "bootstrap/dist/js/bootstrap.esm.min";
import PropTypes from 'prop-types';
import moment from 'moment';

//components
import Headline from './Headline';

const LoginForm = props => {

    const adultMinAge = 18;
    const { register, handleSubmit, formState: { errors } } = useForm();    
    const maxAllowedDate = moment(new Date()).subtract(adultMinAge, "years").format("YYYY-MM-DD");

    const onSubmit = async (data, e) => {
        e.preventDefault();
        
        if(errors){
            props.onSubmit(data);
        }
    }

    return (
        <section className="col-4 text-secondary p-5">
                <section className="mx-auto p-right-80">
                    <Headline title1="Obtén tu " title2="seguro ahora" subtitle="Ingresa los datos para comenzar" />      
                    <article className="my-4 form">
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                            <div className="form-floating mb-3">
                                <input                     
                                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`} 
                                    id="phone" 
                                    name="phone"
                                    type="tel" 
                                    {...register("phone", { 
                                            required: 'Debe ingresar un celular',
                                            pattern: {
                                                value: /^[0-9]*$/,
                                                message: 'El nro. de celular sólo debe tener números'
                                            },
                                            validate: value => value.length === 9 || 'El nro. de celular debe tener 9 dígitos'                       
                                        })}                    
                                />
                                <label htmlFor="phone">Celular</label>
                            </div>
                            <div className="mb-3">
                                <span className="invalid-feedback text-small d-block">
                                    {errors?.phone?.message}
                                </span>
                            </div>
                            <div className="form-check mb-3">
                                <input 
                                    className={`form-check-input ${errors.acceptPersonalData ? 'is-invalid' : ''}`}                                    
                                    id="acceptPersonalData" 
                                    name="acceptPersonalData"
                                    type="checkbox" 
                                    value="1" 
                                    {...register("acceptPersonalData", { 
                                        required:{
                                            value: true,
                                            message: 'Debe aceptar esta opción' 
                                        }
                                    })} 
                                />                                    
                                <label className="form-check-label" htmlFor="acceptPersonalData">
                                    Acepto la <a href="!#" className="text-secondary is-invalid">Política de Protección de Datos Personales</a> y los <a href="!#" className="text-secondary">Términos y Condiciones</a>
                                </label>
                            </div>
                            <div className="mb-3">
                                <span className="invalid-feedback text-small d-block">
                                    {errors?.acceptPersonalData?.message}
                                </span>
                            </div>
                            <div className="form-check mb-3">
                                <input 
                                    className={`form-check-input ${errors.acceptPersonalData ? 'is-invalid' : ''}`}                                    
                                    id="acceptCommercialCommunication" 
                                    name="acceptCommercialCommunication"
                                    type="checkbox" 
                                    value="1" 
                                    {...register("acceptCommercialCommunication", { 
                                        required:{
                                            value: true,
                                            message: 'Debe aceptar esta opción' 
                                        }
                                    })} 
                                /> 
                                <label className="form-check-label" htmlFor="acceptCommercialCommunication">
                                    Acepto la <a href="!#" className="text-secondary">Política de Envío de Comunicaciones Comerciales</a>
                                </label>
                            </div>
                            <div className="mb-3">
                                <span className="invalid-feedback text-small d-block">
                                    {errors?.acceptCommercialCommunication?.message}
                                </span>
                            </div>
                            <div className="mt-5">
                                <button type="submit" className="btn btn-primary btn-lg text-white-50">COMENCEMOS</button>
                            </div>
                        </form>
                    </article>
                </section>                
            </section>
    )
}

export default LoginForm

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}
