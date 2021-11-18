import { sortedIndex } from 'lodash';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import {InformacoesIniciais} from './components/InformacoesIniciais';
import {InformacoesProcessuais} from './components/InformacoesProcessuais';
import {CadastroPartes} from './components/CadastroPartes';
import {CadastroAdvogados} from './components/CadastroAdvogados';
import {InformacoesAdicionais} from './components/InformacoesAdicionais';
import {JuntadaDocumentos} from './components/JuntadaDocumentos';
import {CaracteristicasProcesso} from './components/CaracteristcasProcesso';

function CadastroProcessos() {
    const [progress, setProgress] = useState(0)
    const [index, setIndex] = useState(0)
    const [cadastro, setCadastro] = useState({})

    const handleChange = e => {
        let newObj = { ...cadastro }
        newObj[e.target.name] = e.target.value
        setCadastro(newObj)
    }
    
    //Essa função funciona quase como um overload do metodo handleChange, porém o handleChange necessita que seja disparado um evento onChange
    //de algum input, nem sempre isso é possivel, então esse problema será resolvido preenchendo manualmente um objeto com os atributos name e value
    // ex: {name: 'aluno', value: 'victor'}
    const handleManualChange = e => {
        let newObj = { ...cadastro }
        newObj[e.name] = e.value
        setCadastro(newObj)
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card colorPrimary px-5 py-3">
                        <h2 className="mb-1">Cadastro de processo</h2>
                        {JSON.stringify(cadastro)}
                        <div className="progress mb-1 my-0">
                            <div
                                className="progress-bar progress-bar-striped progress-bar-animated"
                                role="progressbar"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: `${Math.round(progress)}%` }}>
                                {Math.round(progress)}%
                            </div>
                        </div>
                        {index == 0 && <InformacoesIniciais handleChangeObject={handleChange} cadastro={cadastro} />}
                        {index == 1 && <InformacoesProcessuais handleChangeObject={handleChange} handleManualChange={handleManualChange} />}
                        {index == 2 && <CadastroPartes />}
                        {index == 3 && <CadastroRepresentantes />}

                        <div className="d-flex justify-content-end mt-3">
                            {
                                index > 0 ?

                                    <input className="btn btn-secondary me-2" type="button" value="Voltar" onClick={() => {
                                        if (index > 0) {
                                            setProgress(progress - 14.28)
                                            setIndex(index - 1)
                                        }
                                    }} />
                                    : ""

                            }
                            {
                                //se index for menor do que 7 renderiza o componente abaixo
                                index < 7 ?
                                    < input className="btn btn-success" type="button" value="Próximo" onClick={() => {
                                        if (index < 7) {
                                            setProgress(progress + 14.28)
                                            setIndex(index + 1)
                                        }

                                    }} />
                                    : // se não for, ou seja, é igual a 7... mostra o componente abaixo
                                    < input className="btn btn-success" type="button" value="Cadastrar" onClick={() => {
                                        alert("Rotina de cadastro aqui dentro dessa arrow")
                                    }} />
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
    
}

export default CadastroProcessos;

if (document.getElementById('cadastro-processo')) {
    ReactDOM.render(<CadastroProcessos />, document.getElementById('cadastro-processo'));
}
