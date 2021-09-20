import React from 'react';
import PropTypes from 'prop-types';

const PlanBenefits = props => {

    const { planName, planPrice, benefits } = props;
    const { benef1, benef2, benef3, benef4 } = benefits;

    return (
        <section className="border border-gray rounded m-1 text-secondary">
            <article className="bg-gray text-center">
                <h6 className="py-2">Cuentas con estos beneficios</h6>
            </article>
            <section className="pt-4 ps-4 pb-4 pe-3">
                <div className="row ms-3 me-0 pb-3 border-bottom border-gray">
                    <div className="col-8 px-0">
                        <span className="fs-4">Cobertura máxima</span>
                        <p className="fs-1">S/. {planPrice}</p>
                        <small className="bg-green rounded-pill px-2 py-1 text-white text-uppercase">Plan {planName}</small>
                    </div>
                    <div className="col-4 border-start border-gray">
                        <div className="h-100 d-flex justify-content-end align-items-center px-3">
                            <img className="w-75" src="/tata-rt/img/Illustration.png" alt="Plan"/>
                        </div>
                    </div>
                </div>                
            </section>
            <article className="benefits">
                <ul className="all-benefits">
                    <li className="my-3"><span className="fs-4">Lima </span><small>(zona de cobertura)</small></li>
                    <li className="my-3"><span className="fs-4">+30 clínicas </span><small>(en red afiliada)</small></li>
                </ul>
                <ul className="plan-benefits">
                    <li className={`my-1 ${enableBenefit(benef1)}`}>Médico a domicilio</li>
                    <li className={`my-1 ${enableBenefit(benef2)}`}>Chequeos preventivos</li>
                    <li className={`my-1 ${enableBenefit(benef3)}`}>Reembolso nacional</li>
                    <li className={`my-1 ${enableBenefit(benef4)}`}>Reembolso internacional</li>
                </ul>
            </article>
        </section>
    )
}

export default PlanBenefits;

const enableBenefit = benef => {
    return benef ? 'text-secondary' : 'text-silver text-decoration-line-through';
}

PlanBenefits.propTypes = {    
    benefits: PropTypes.object.isRequired,
    planName: PropTypes.string.isRequired,
    planPrice: PropTypes.string.isRequired    
}