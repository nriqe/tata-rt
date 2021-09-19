import React from 'react';
import PropTypes from 'prop-types';

const Headline = props => {

    const { title1, title2, subtitle } = props;

    return (
        <article className="my-2 headline-form">
            <h2 className="my-2">{title1} <span className="text-primary">{title2}</span></h2>
            <p className="mt-4 mb-2">{subtitle}</p>
        </article> 
    )
};

export default Headline;

Headline.propTypes = {
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}