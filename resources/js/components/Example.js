import { sortedIndex } from 'lodash';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const InformacoesIniciais = ({ handleChangeObject }) => {
    const [dependent, setDependent] = useState(0);

    const objectChanged = e => handleChangeObject(e)

    return (<>


        <div className="lead">Informações Iniciais</div>
        <div className="p-1 mt-2 bg-dark mb-5"></div>

        <div className="row justify-content-start">
            <div className="col-md-12 my-auto">
                <label className='mr-2'><span className="text-danger">*</span> Processo Dependente</label>
                <label className='ml-2' htmlFor="dependentYes">Sim</label>
                <input className='ml-1' onChange={() => { setDependent(true) }} type="radio" value='false' name="dependentProcess" id="dependentYes" />
                <label className='ml-2' htmlFor="dependentNo">Não</label>
                <input className='ml-1' onChange={() => { setDependent(false) }} type="radio" value='false' name="dependentProcess" id="dependentNo" />
                {!dependent || <input type="number" className="form-control bg-light" onChange={objectChanged} name="processoDependente" id="exampleFormControlInput1" placeholder="Número do processo" onChange={objectChanged} />}
            </div>
            <div className="col-md-6 mt-2">
                <label htmlFor="selectTribunal" className='mr-2'><span className="text-danger">*</span> Tribunal</label>
                <select className="form-control" name="tribunal" id="selectTribunal" onChange={objectChanged}>
                    <option value="1">Tribunal de Justiça do Estado do Paraná</option>
                    <option value="2">Tribunal de Justiça do Estado de Santa Catarina</option>
                    <option value="3">Tribunal de Justiça do Estado do Rio Grande do Sul</option>
                </select>
            </div>
            <div className="col-md-6 mt-2">
                <label htmlFor="selectLocalidade" className='mr-2'><span className="text-danger">*</span> Localidade</label>
                <select className="form-control" name="localidade" id="selectLocalidade" onChange={objectChanged}>
                    <option value="1">Curitiba</option>
                    <option value="1">Rio Negro</option>
                    <option value="1">Campo do Tenente</option>
                </select>
            </div>
            <div className="col-md-12 mt-2">
                <label htmlFor="selectCompetencia" className='mr-2'><span className="text-danger">*</span> Competência</label>
                <select className="form-control" onChange={objectChanged} name="competencia" id="selectCompetencia">
                    <option value="1">Curitiba</option>
                    <option value="1">Rio Negro</option>
                    <option value="1">Campo do Tenente</option>
                </select>
            </div>
        </div>


    </>)
}

const InformacoesProcessuais = (props) => {

    const [json, setJson] = useState()
    useEffect(() => {
        alert('teste')
        fetch('/api/getClasses').then(
            (response) => {
                response.json().then(
                    (json) => {
                        setJson(JSON.stringify(json))
                    }
                )
            }
        )
    },[])

    return (<>
        <div className="lead">Informações Processuais</div>
        <div className="p-1 mt-2 bg-dark mb-5"></div>

        <div className="row justify-content-start mt-2">
            <div className="col-md-3 my-auto text-right">
                <label className='mr-2'><span className="text-danger">*</span> Processo de Execução</label>
            </div>
            <div className="col-md-9 my-auto">
                <label className='ml-2' htmlFor="dependentYes">Sim</label>
                <input className='ml-1' onChange={() => { setDependent(true) }} type="radio" value='false' name="dependentProcess" id="dependentYes" />
                <label className='ml-2' htmlFor="dependentNo">Não</label>
                <input className='ml-1' onChange={() => { setDependent(false) }} type="radio" value='false' name="dependentProcess" id="dependentNo" />
            </div>
        </div>

        <div className="row justify-content-start mt-2">
            <div className="col-md-3 my-auto text-right">
                <label htmlFor="selectMateria" className='mr-2'><span className="text-danger">*</span> Competência</label>
            </div>
            <div className="col-md-9 my-auto">
                <select className="form-control" name="materia" id="selectMateria">
                    <option value="0" defaultChecked={'true'}  >asd</option>
                    <option value="1">BANCÁRIA</option>
                    <option value="2">ACIDENTES DE VEÍCULOS (NÃO INCLUI DPVAT)</option>
                    <option value="3">TELEFONIA</option>
                    <option value="4">PROJETO SUPERENDIVIDAMENTO</option>
                    <option value="5">PORTADOR DE NECESSIDADES ESPECIAIS</option>
                    <option value="6">Outros</option>
                </select>
            </div>
        </div>

        <div className="row justify-content-start mt-2">
            <div className="col-md-3 my-auto text-right">
                <label className='mr-2 my-auto'><span className="text-danger">*</span> Classe Processual</label>
            </div>
            <div className="col-md-9 my-auto d-flex">
                <input className='flex-grow-1 form-control' type="text" name="classeProcessual" id="" />
                <button className='btn btn-primary ml-2' type="button" name="classeProcessual" data-toggle="modal" data-target="#modalClassesProcessuais"><i className="fas fa-search"></i></button>
            </div>
        </div>

        <div className="row justify-content-start mt-2">
            <div className="col-md-3 my-auto text-right">
                <label className='mr-2 my-auto'><span className="text-danger">*</span> Assunto principal</label>
            </div>
            <div className="col-md-9 my-auto d-flex">
                <input className='flex-grow-1 form-control' type="text" name="classeProcessual" id="" />
                <button className='btn btn-primary ml-2' type="button" name="classeProcessual" data-toggle="modal" data-target="#modalAssuntoPrincipal"><i className="fas fa-search"></i></button>
            </div>
        </div>

        {/* modal classes processuais */}
        <div className="modal fade" id="modalClassesProcessuais" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Pesquisa de classes processuais</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {
                            json
                        }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

        {/* modal assunto principal */}
        <div className="modal fade" id="modalAssuntoPrincipal" tabndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Pesquisa de Assuntos principais</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

    </>)
}

function Example() {
    const [progress, setProgress] = useState(0)
    const [index, setIndex] = useState(0)
    const [cadastro, setCadastro] = useState({})

    const handleChange = e => {
        let newObj = cadastro
        cadastro[e.target.name] = e.target.value
        setCadastro(newObj)
    }



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
                        {index == 0 && <InformacoesIniciais handleChangeObject={handleChange} />}
                        {index == 1 && <InformacoesProcessuais cad={cadastro} />}

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

export default Example;

if (document.getElementById('cadastro-processo')) {
    ReactDOM.render(<Example />, document.getElementById('cadastro-processo'));
}
