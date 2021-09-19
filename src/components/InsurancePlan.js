import React from 'react';
import PropTypes from 'prop-types';

const InsurancePlan = props => {

    const { planName, price } = props;

    return (
        <div className="mx-2 mb-3">
            <div className="label-cont">
                <label className="form-check-label fs-5 text-uppercase" htmlFor="family">{planName}</label>                                           
            </div>
            <div className="d-flex justify-content-start">
                <div className="pt-3">
                    <sup>S/.</sup>
                </div>
                <div>
                    <p className="mb-0 fs-3">{price}</p>    
                </div>                                                                
            </div>       
            <small>mensual</small>
        </div>          
    )
}

export default InsurancePlan;

InsurancePlan.propTypes = {    
    planName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
