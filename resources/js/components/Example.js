import { Button } from 'bootstrap';
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
        <div className="lead">Informações Processuais</div>
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

function Example() {
    const [progress, setProgress] = useState(0)
    const [index, setIndex] = useState(0)

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card colorPrimary p-5">
                        <h2>Cadastro de processo</h2>
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
                        {index == 0 && <InformacoesIniciais />}
                        {index == 1 && <InformacoesProcessuais />}
                        {index == 2 && <CadastroPartes />}
                        {index == 3 && <CadastroPartes />}

                        <div className="row justify-content-end mt-3 mr-2">
                            <input className="btn btn-primary col-md-3" type="button" value="Voltar" onClick={() => {
                                setProgress(progress - 15)
                                setIndex(index - 1)
                            }} />
                            <input className="btn btn-primary col-md-3" type="button" value="Próximo" onClick={() => {
                                setProgress(progress + 25)
                                setIndex(index + 1)

                            }} />
                        
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}

const CadastroPartes = () =>{
    return (<>
        <div className="lead">Cadastro de Partes</div>
        <div className="p-1 mt-2 bg-dark mb-5"></div>
        <div>

        

            <div className="row justify-content-start">
                <div className="col-md-12 my-auto">
                    
                    <label className='mr-2'><span className="text-danger">*</span> Partes do processo: </label>
                    
                    <br/>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Modal_adicionar_partes"> Adicionar </button>
                    <br/>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Modal_alterar_partes"> Alterar   </button>                 
                    <br/>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Modal_remover_partes"> Remover </button>
                    <br/>

                    <div id="Modal_partes" class="modal-dialog modal-dialog-centered modal-dialog-scrollable">

                            <div class="modal-content ">
                                <span class="close">&times;</span>
                                <p>Partes :</p>
                            </div>

                        </div>

                                               
                    

                        
                        
                        <div class="modal fade" id="Modal_adicionar_partes" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Understood</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="Modal_alterar_partes" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Understood</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="Modal_remover_partes" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Understood</button>
                                </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>                
        </div>

            


                
    </>)
}

export default Example;

if (document.getElementById('arvore-assuntos')) {
    ReactDOM.render(<Example />, document.getElementById('arvore-assuntos'));
}
