import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import "bootstrap/dist/js/bootstrap.esm.min";

//components
import Headline from './Headline';
import Step from './Step';
import InsurancePlan from './InsurancePlan';
import PlanBenefits from './PlanBenefits';
import AccordionServiceItem from './AccordionServiceItem';

const ChooseProtectionForm = props => {

    const idAccordion = 'accordionServices';
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ maxCoverage, setMaxCoverage ] = useState('1MM');
    const [ planCoverageName, setPlanCoverageName ] = useState('básico');
    const [ listOfBenefits, setListOfBenefits ] = useState({ benef1: false, benef2: false, benef3: false, benef4: false })

    const { servicesAndExclusions } = props;
    const onSubmit = (data, e) => {
        
        e.preventDefault();
        
        if(errors){
            props.onSubmit(data);
        } 
    }

    const changePlanData = (coverage, planCovName, listBenefits) => {
        if(coverage !== maxCoverage){
            setMaxCoverage(coverage);
        }
        if(planCovName !== planCoverageName){
            setPlanCoverageName(planCovName);
        }  
        
        setListOfBenefits(listBenefits)
    }

    return (
        <section className="col-8 text-secondary p-right-40">
            <Step step="PASO 2" />
            <section className="d-table w-75 mx-auto">
                <Headline title1="Elige " title2="tu protección" subtitle="Selecciona tu plan de salud ideal" />   
                <form onSubmit={handleSubmit(onSubmit)}>
                    <section className="row mx-0 my-5">                    
                        <article className="col border border-gray rounded m-1 p-0">
                            <div className="d-flex justify-content-end m-1">
                                <input 
                                    className={`form-check-input ${errors.plan ? 'is-invalid' : ''}`} 
                                    defaultChecked
                                    id="family"
                                    name="plan"  
                                    type="radio" 
                                    value="basic" 
                                    onClick={() => changePlanData('1MM', 'básico', { benef1: false, benef2: false, benef3: false, benef4: false })}
                                    {...register("plan", { 
                                        required:{
                                            value: true,
                                            message: 'Debe elegir un plan' 
                                        }
                                    })}
                                />
                            </div>
                            <InsurancePlan planName="Básico" price={160} />
                        </article>
                        <article className="col border border-gray rounded m-1 p-0">
                            <div className="d-flex justify-content-end m-1">
                                <input 
                                    className={`form-check-input ${errors.plan ? 'is-invalid' : ''}`} 
                                    id="family"
                                    name="plan"  
                                    type="radio" 
                                    value="advanced" 
                                    onClick={() => changePlanData('5MM', 'avanzado', { benef1: true, benef2: true, benef3: false, benef4: false })}
                                    {...register("plan", { 
                                        required:{
                                            value: true,
                                            message: 'Debe elegir un plan' 
                                        }
                                    })}
                                />
                            </div>
                            <InsurancePlan planName="Avanzado" price={200} />
                        </article>
                        <article className="col border border-gray rounded m-1 p-0">
                            <div className="d-flex justify-content-end m-1">
                                <input 
                                    className={`form-check-input ${errors.plan ? 'is-invalid' : ''}`} 
                                    id="family"
                                    name="plan"  
                                    type="radio" 
                                    value="premium" 
                                    onClick={() => changePlanData('10MM', 'premium', { benef1: true, benef2: true, benef3: true, benef4: false })}
                                    {...register("plan", { 
                                        required:{
                                            value: true,
                                            message: 'Debe elegir un plan' 
                                        }
                                    })}
                                />
                            </div>
                            <InsurancePlan planName="Premium" price={250} />
                        </article>
                        <article className="col border border-gray rounded m-1 p-0">
                            <div className="d-flex justify-content-end m-1">
                                <input 
                                    className={`form-check-input ${errors.plan ? 'is-invalid' : ''}`} 
                                    id="family"
                                    name="plan"  
                                    type="radio" 
                                    value="full" 
                                    onClick={() => changePlanData('20MM', 'full', { benef1: true, benef2: true, benef3: true, benef4: true })}
                                    {...register("plan", { 
                                        required:{
                                            value: true,
                                            message: 'Debe elegir un plan' 
                                        }
                                    })}
                                />
                            </div>
                            <InsurancePlan planName="Full" price={500} />
                        </article>
                    </section>  
                    <PlanBenefits planName={planCoverageName} planPrice={maxCoverage} benefits={listOfBenefits} />
                    <section className="my-4">
                        <p className="mb-0 text-primary fs-4">Revisa nuestros</p>
                        <p className="mb-2 fs-4">servicios y exclusiones</p>
                    </section>     
                    <section className="accordion-container">
                        <div className="accordion" id={idAccordion}>
                            {
                                servicesAndExclusions.map(servAndExcl => (
                                    <AccordionServiceItem 
                                        key={servAndExcl.id}
                                        collapsed={servAndExcl.collapsed}
                                        descServiceItem={servAndExcl.descServiceItem}
                                        expanded={servAndExcl.expanded}
                                        idAccordion={`#${idAccordion}`}
                                        numberItem={servAndExcl.numberItem}
                                        titleItem={servAndExcl.titleItem}
                                    />
                                ))
                            }
                        </div>
                    </section>
                    <section className="d-flex justify-content-between mt-5">
                        <div>
                            <a href="!#" className="ms-4 text-purple">ENVIAR COTIZACIÓN POR CORREO</a>
                        </div>                            
                        <button type="submit" className="btn btn-primary">COMPRAR PLAN</button>
                    </section>
                </form>      
            </section>
        </section>
    )
}

export default ChooseProtectionForm

ChooseProtectionForm.propTypes = {    
    servicesAndExclusions: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired
}