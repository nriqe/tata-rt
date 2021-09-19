import React from 'react';

import PropTypes from 'prop-types';

const AccordionServiceItem = props => {

    const { collapsed, descServiceItem, expanded, idAccordion, numberItem, titleItem } = props;

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={`heading${numberItem}`}>
                <button className="accordion-button ps-0 py-4" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${numberItem}`} aria-expanded={expanded} aria-controls={`collapse${numberItem}`}>
                    {titleItem}
                </button>
            </h2>
            <div id={`collapse${numberItem}`} className={`accordion-collapse ${collapsed}`} aria-labelledby={`heading${numberItem}`} data-bs-parent={idAccordion}>
                <div className="accordion-body">
                    <p>{descServiceItem}</p>
                </div>
            </div>
        </div>
    )
}

export default AccordionServiceItem;

AccordionServiceItem.propTypes = {    
    collapsed: PropTypes.string.isRequired,
    descServiceItem: PropTypes.string.isRequired,
    expanded: PropTypes.string.isRequired,
    idAccordion: PropTypes.string.isRequired,
    numberItem: PropTypes.string.isRequired,
    titleItem: PropTypes.string.isRequired    
}
