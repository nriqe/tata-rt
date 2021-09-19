import React from 'react';
import PropTypes from 'prop-types';

const Step = props => {

    const { step } = props;

    return (
        <article className="ms-5 ps-5 my-2 w-100">
            <p><span className="text-primary">{step}</span><span className="text-secondary"> DE 3</span></p>
        </article>
    )
}

export default Step;

Step.propTypes = {
    step: PropTypes.string.isRequired,
}