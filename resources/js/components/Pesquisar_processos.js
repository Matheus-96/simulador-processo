import { sortedIndex } from 'lodash';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Pesquisar_processos = () => {
    return (<>
        <h5><a className="nav-link mb-5">Pesquisar Processo Por:</a></h5>
        <div className="row">
            <div className="col-md-auto">
                <p className="form-label">Número do Processo principal:</p>
                </div>
            <div className="col">
                <input type="email" className="form-control bg-light mb-2" id="exampleFormControlInput1"></input>
            </div>
        </div>
        <div className="row">
            <div className="col-md-auto">
                <p className="form-label">Tribunal:</p>
            </div>
            <div className="col">
                <input type="email" className="form-control bg-light mb-2" id="exampleFormControlInput1"></input>
            </div>
        </div>
        <div className="row">
            <div className="col-md-auto">
                <p className="form-label">Comarca:</p>
            </div>
            <div className="col">
                <input type="email" className="form-control bg-light mb-2" id="exampleFormControlInput1"></input>
            </div>
        </div>
        <div className="row">
            <div className="col-md-auto">
                <p className="form-label">Competencia:</p>
            </div>
            <div className="col">
                <input type="email" className="form-control bg-light mb-2" id="exampleFormControlInput1"></input>
            </div>
        </div>
        <div className="row justify-content-md-center mt-3">
            <div className="col-md-auto">
                <button type="" className="btn btn-secondary">Pesquisar</button>
            </div>
        </div>
    </>)
}

export default Pesquisar_processos;

if (document.getElementById('pesquisa-processo')) {
    ReactDOM.render(<Pesquisar_processos />, document.getElementById('pesquisa-processo'));
}
