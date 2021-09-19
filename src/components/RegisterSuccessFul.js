import React, { memo } from 'react';

const RegisterSuccessFul = () => {

    return (
        <section className="col-8">
            <section className="h-100 d-flex w-75 mx-auto">
                <article className="d-flex align-items-center">
                    <div className="thanks border-top border-secondary pt-4">
                        <h2 className="fs-1" ><span className="text-secondary">¡Gracias por </span><span className="text-primary">confiar en<br/>nosotros!</span></h2>
                        <p className="fs-5 text-secondary">Queremos conocer mejor la salud de los asegurados. Un asesor <span className="fw-bolder">se<br/>pondrá en contacto</span> contigo en las siguientes <span className="fw-bolder">48 horas</span></p>
                        <div className="d-flex justify-content-end my-5">
                            <a href="!#" className="btn btn-primary btn-lg px-5">IR A SALUD</a>
                        </div>  
                    </div>                       
                </article>                           
            </section>            
        </section>
    )
}

export default memo(RegisterSuccessFul);
