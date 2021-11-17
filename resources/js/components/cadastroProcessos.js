import { sortedIndex } from 'lodash';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// import {InformacoesIniciais} from './InformacoesIniciais';
// import {InformacoesProcessuais} from './InformacoesProcessuais';
// import {CadastroPartes} from './CadastroPartes';
// import {CadastroAdvogados} from './CadastroAdvogados';
// import {InformacoesAdicionais} from './InformacoesAdicionais';
// import {JuntadaDocumentos} from './JuntadaDocumentos';
// import {CaracteristicasProcesso} from './CaracteristcasProcesso';


// const CadastroRepresentantes = (props) => {
//     return (<>
//         <div className="lead">Cadastro de Representantes</div>
//         <div className="p-1 mt-2 bg-dark mb-5"></div>
//         <div>
//             <div className="row justify-content-start">
//                 <label className='mr-2'><span className="text-danger">*</span> Representantes do processo: </label>


//             </div>
//         </div>
//     </>)
// }

function CadastroProcessos() {
    const [progress, setProgress] = useState(0)
    const [index, setIndex] = useState(0)
    const [cadastro, setCadastro] = useState({})

    const handleChange = e => {
        let newObj = {...cadastro}
        newObj[e.target.name] = e.target.value
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
                                style={{ width: `${progress}%`}}>
                                {progress}%
                            </div>
                        </div>
                            {index == 0 && <InformacoesIniciais handleChangeObject={handleChange} />}
                            {/* {index == 1 && <InformacoesProcessuais handleChangeObject={handleChange} />}
                            {index == 2 && <CadastroPartes />} */}
                            {/* {index == 3 && <CadastroRepresentantes />} */}
                            {/* {index == 3 && <CadastroAdvogados handleChangeObject={handleChange} />}
                            {index == 4 && <InformacoesAdicionais handleChangeObject={handleChange} />}
                            {index == 5 && <JuntadaDocumentos handleChangeObject={handleChange} />}
                            {index == 6 && <CaracteristicasProcesso handleChangeObject={handleChange} />} */}
                        <div className="row justify-content-end mt-3 mr-2">
                            {/* {f (index != 0) => { */}
                            <input className="btn btn-secondary col-md-2 mr-3" type="button" value="Voltar" onClick={() => {
                                setProgress(progress - 25)
                                setIndex(index - 1)
                            }} />
                            {/* }} */}
                            <input className="btn btn-success col-md-2" type="button" value="Próximo" onClick={() => {
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

export default CadastroProcessos;

if (document.getElementById('cadastro-processo')) {
    ReactDOM.render(<CadastroProcessos />, document.getElementById('cadastro-processo'));
}
