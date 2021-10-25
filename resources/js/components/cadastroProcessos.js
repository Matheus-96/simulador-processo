import { sortedIndex } from 'lodash';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const InformacoesIniciais = () => {
    const [dependent, setDependent] = useState(0);
    return (<>
        <div className="lead">Informações Iniciais</div>
        <div className="p-1 mt-2 bg-dark mb-5"></div>

        <div className="row justify-content-start">
            <div className="col-md-12 my-auto">
                <label className='mr-2'><span className="text-danger">*</span> Processo Dependente: </label>
                <label className='ml-2' htmlFor="dependentYes">Sim</label>
                <input className='ml-1' onChange={() => { setDependent(true) }} type="radio" value='false' name="dependentProcess" id="dependentYes" />
                <label className='ml-2' htmlFor="dependentNo">Não</label>
                <input className='ml-1' onChange={() => { setDependent(false) }} type="radio" value='false' name="dependentProcess" id="dependentNo" />
                {!dependent || <input type="number" className="form-control bg-light" id="exampleFormControlInput1" placeholder="Número do processo" />}
            </div>
            <div className="col-md-6 mt-2">
                <label htmlFor="selectTribunal" className='mr-2'><span className="text-danger">*</span> Tribunal: </label>
                <select className="form-control" name="tribunal" id="selectTribunal">
                    <option value="1">Tribunal de Justiça do Estado do Paraná</option>
                    <option value="2">Tribunal de Justiça do Estado de Santa Catarina</option>
                    <option value="3">Tribunal de Justiça do Estado do Rio Grande do Sul</option>
                </select>
            </div>
            <div className="col-md-6 mt-2">
                <label htmlFor="selectLocalidade" className='mr-2'><span className="text-danger">*</span> Localidade: </label>
                <select className="form-control" name="localidade" id="selectLocalidade">
                    <option value="1">Curitiba</option>
                    <option value="1">Rio Negro</option>
                    <option value="1">Campo do Tenente</option>
                </select>
            </div>
            <div className="col-md-12 mt-2">
                <label htmlFor="selectCompetencia" className='mr-2'><span className="text-danger">*</span> Competência: </label>
                <select className="form-control" name="competencia" id="selectCompetencia">
                    <option value="1">Curitiba</option>
                    <option value="1">Rio Negro</option>
                    <option value="1">Campo do Tenente</option>
                </select>
            </div>
        </div>
    </>)
}

const InformacoesProcessuais = () => {
    return (<>
        <div className="lead">Informações Iniciais</div>
        <div className="p-1 mt-2 bg-dark mb-5"></div>

        <div className="row justify-content-start">
            <div className="col-md-12 my-auto">
                <label className='mr-2'><span className="text-danger">*</span> Processo Dependente: </label>
                <label className='ml-2' htmlFor="dependentYes">Sim</label>
                <input className='ml-1' onChange={() => { setDependent(true) }} type="radio" value='false' name="dependentProcess" id="dependentYes" />
                <label className='ml-2' htmlFor="dependentNo">Não</label>
                <input className='ml-1' onChange={() => { setDependent(false) }} type="radio" value='false' name="dependentProcess" id="dependentNo" />
            </div>
        </div>
    </>)
}

const InformacoesProcessuais2 = () => {
    return (<>
        <div className="lead">Informações Iniciais</div>
        <div className="p-1 mt-2 bg-dark mb-5"></div>

        <div className="row justify-content-start">
            <div className="col-md-12 my-auto">
                <label className='mr-2'><span className="text-danger">*</span> Processo Dependente: </label>
                <label className='ml-2' htmlFor="dependentYes">Sim</label>
                <input className='ml-1' onChange={() => { setDependent(true) }} type="radio" value='false' name="dependentProcess" id="dependentYes" />
                <label className='ml-2' htmlFor="dependentNo">Não</label>
                <input className='ml-1' onChange={() => { setDependent(false) }} type="radio" value='false' name="dependentProcess" id="dependentNo" />
            </div>
        </div>
    </>)
}

function cadastroProcessos() {
    const [progress, setProgress] = useState(0)
    const [index, setIndex] = useState(0)

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card colorPrimary p-5">
                        <div className="progress my-5">
                            <div
                                className="progress-bar progress-bar-striped progress-bar-animated"
                                role="progressbar"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: `${progress}%` }}>
                                {progress}%
                            </div>
                        </div>
                        <h2>Cadastro de processo</h2>
                        {index == 0 && <InformacoesIniciais />}
                        {index == 1 && <InformacoesProcessuais />}
                        {index == 2 && <InformacoesProcessuais2 />}
                        {index == 3 && <InformacoesProcessuais2 />}

                        <div className="row justify-content-end mt-3 mr-2">
                            <input className="btn btn-primary" type="button" value="Próximo" onClick={() => {
                                setProgress(progress + 15)
                                setIndex(index + 1)
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default cadastroProcessos;

if (document.getElementById('cadastro-processo')) {
    ReactDOM.render(<cadastroProcessos />, document.getElementById('cadastro-processo'));
}
