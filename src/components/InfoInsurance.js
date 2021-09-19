import React from 'react';
import PropTypes from 'prop-types';

const InfoInsurance = props => {

    const { showInfo, width } = props;

    return (
        <section className={width}>
            <section className="">
                <article className="position-relative text-left">
                    <img className="w-75" src="/img/Base.png" alt="Base" />
                   </article>
                { showInfo && 
                    <article className="position-absolute top-0 m-5 p-left-80 text-white">
                        <h1 className="my-1 pt-3">Seguro de</h1>
                        <h1 className="my-1 fw-bold">Salud</h1>
                        <ul className="fs-5">
                            <li className="my-2">Cómpralo de manera fácil y rápida</li>
                            <li className="my-2">Cotiza y compra tu seguro 100% digital</li>
                            <li className="my-2">Hasta S/.12 millones de cobertura anual</li>
                            <li className="my-2">Más de 300 clínicas en todo el Perú</li>
                        </ul>
                        <span className="text-white-50">&#169; 2020 Seguros y reaseguros</span>
                    </article>   
                }
            </section>          
        </section>
    )
}

export default InfoInsurance

InfoInsurance.propTypes = {
    showInfo: PropTypes.bool.isRequired,
    width: PropTypes.string.isRequired
}