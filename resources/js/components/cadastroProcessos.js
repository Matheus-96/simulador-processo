import { sortedIndex } from 'lodash';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import {InformacoesIniciais} from './InformacoesIniciais';
import {InformacoesProcessuais} from './InformacoesProcessuais';
import {CadastroPartes} from './CadastroPartes';
import {CadastroAdvogados} from './CadastroAdvogados';
import {InformacoesAdicionais} from './InformacoesAdicionais';
import {JuntadaDocumentos} from './JuntadaDocumentos';
import {CaracteristicasProcesso} from './CaracteristcasProcesso';

const InformacoesIniciais = ({ handleChangeObject, cadastro }) => {
    const [dependent, setDependent] = useState((!!cadastro.processoDependente ? true : false));
    <div className="row justify-content-start">
        <div className="col-md-12 my-auto">
            <label className='mr-5'><span className="text-danger">*</span> Processo Dependente</label>
            <label className='mx-2' htmlFor="dependentYes">Sim</label>
            <input className='mx-1' onChange={() => { setDependent(true) }} type="radio" checked={(dependent ? true : "")} name="dependentProcess" id="dependentYes" />
            <label className='mx-2' htmlFor="dependentNo">Não</label>
            <input className='mx-1' onChange={() => { setDependent(false); cadastro.processoDependente = "" }} type="radio" value='false' name="dependentProcess" id="dependentNo" />
            {!dependent || <input type="number" value={(cadastro.processoDependente > 0 ? cadastro.processoDependente : "")} className="form-control bg-light" onChange={objectChanged} name="processoDependente" id="exampleFormControlInput1" placeholder="Número do processo" onChange={objectChanged} />}
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
                <option value="2">Rio Negro</option>
                <option value="3">Campo do Tenente</option>
            </select>
        </div>
        <div className="col-md-12 mt-2">
            <label htmlFor="selectCompetencia" className='mr-2'><span className="text-danger">*</span> Competência</label>
            <select className="form-control" onChange={objectChanged} name="competencia" id="selectCompetencia">
                <option value="1">Curitiba</option>
                <option value="2">Rio Negro</option>
                <option value="3">Campo do Tenente</option>
            </select>
        </div>
    </div>
}

const InformacoesProcessuais = ({ handleChangeObject, handleManualChange }) => {

    var classList = ""
    var liClass = ""
    const [classJson, setClassJson] = useState('')
    const [subjectJson, setSubjectJson] = useState('')

    const objectChanged = e => handleChangeObject(e)

    useEffect(() => {
        fetch('/api/classesProcessuais').then(
            (response) => {
                response.json().then(
                    (json) => {
                        setClassJson(JSON.stringify(json))
                    }
                )
            }
        )
        fetch('/api/assuntosProcessuais').then(
            (response) => {
                response.json().then(
                    (json) => {
                        setSubjectJson(JSON.stringify(json))
                    }
                )
            }
        )
    }, [])

    useEffect(async () => {
        if (classJson != '') {
            createListRoot(JSON.parse(classJson))
            document.getElementById('classList').innerHTML = classList
        }
    }, [classJson])

    useEffect(async () => {
        if (subjectJson != '') {
            createListRoot(JSON.parse(subjectJson))
            document.getElementById('subjectList').innerHTML = classList
        }
    }, [subjectJson])

    const createUl = (nested) => {
        classList +=
            `
        <ul class=' ${(nested ? "nested" : "")}'>
        `
    }
    const closeUl = () => {
        classList +=
            `
        </ul>
        `
    }
    const closeLi = () => {
        classList +=
            `
        </li>
        `
    }
    const createLi = (args) => {

        let liClass = ''

        if(args.tipo_item == "C") liClass = 'classe';
        else if(args.tipo_item == "A") liClass = 'assunto';
        else if(args.tipo_item == "M") liClass = 'movimento';
        
        classList += (
            args.isRadio ?
                `<li class='selectable'><input type='radio' id='${args.cod_item}' name='${liClass}'><label for='${args.cod_item}'>${args.nome}</label></input></li>`
                :
                `<li class="list-group-item-action"><span class="caret">${args.nome}</span>`
        )

    }

    const createListRoot = (rootList) => {

        rootList.map((item, i) => {

            if (i == 0) createUl()
            recursiveItem(item, i, item.child.length)
            if (i == rootList.length - 1) closeUl()
        })
    }

    const createList = (rootList) => {

        rootList.map((item, i) => {
            if (i == 0) createUl(true)

            recursiveItem(item, i, item.child.length)
        })
        closeLi()
        closeUl()
    }

    const recursiveItem = (item, i, length) => {

        if (item.child.length > 0) {
            createLi({ nome: item.nome, cod_item: item.cod_item})
            createList(item.child)
        } else {
            createLi({ nome: item.nome, isRadio: true, cod_item: item.cod_item, tipo_item: item.tipo_item  })
        }
    }

    const activateUlNested = (element) => {
        let parent = element.parentNode.parentNode
        element.classList.add('active')
        if (parent.classList.contains('nested')) {
            activateUlNested(parent)
        }
    }

    const onChangeSearchBox = (evt) => {
        if (evt.target.value == "") {
            let nestedElements = Array.from(document.querySelectorAll('.active'))
            nestedElements.map(element => element.classList.remove('active'))
        } else {

            let elementos = document.getElementsByClassName('selectable')
            for (let i = 0; i < elementos.length; i++) {
                if (!elementos[i].textContent.toLocaleLowerCase().includes(evt.target.value.toLocaleLowerCase())) elementos[i].classList.add('d-none')
                else {
                    elementos[i].classList.remove('d-none')
                    activateUlNested(elementos[i].parentNode)
                }
            }
        }
    }
    

    return (<>
        <div className="lead">Informações Processuais</div>
        <div className="p-1 mt-2 bg-dark mb-5"></div>

        <div className="row justify-content-start mt-2">
            <div className="col-md-3 my-auto text-right">
                <label className='mr-2'><span className="text-danger">*</span> Processo de Execução</label>
            </div>
            <div className="col-md-9 my-auto">
                <label className='ml-2' htmlFor="executionYes">Sim</label>
                <input className='ml-1' type="radio" value='true' name="executionProcess" onChange={objectChanged} id="executionYes" />
                <label className='ml-2' htmlFor="executionNo">Não</label>
                <input className='ml-1' type="radio" value='false' name="executionProcess" onChange={objectChanged} id="executionNo" />
            </div>
        </div>

        <div className="row justify-content-start mt-2">
            <div className="col-md-3 my-auto text-right">
                <label htmlFor="selectMateria" className='mr-2'><span className="text-danger">*</span> Competência</label>
            </div>
            <div className="col-md-9 my-auto">
                <select className="form-control" name="materia" onChange={objectChanged} id="selectMateria">
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
                <input className='flex-grow-1 form-control' data-value='' onChange={objectChanged} readOnly type="text" name="classeProcessual" id="" />
                <button className='btn btn-primary ml-2' type="button" name="classeProcessual" data-bs-toggle="modal" data-bs-target="#modalClassesProcessuais"><i className="fas fa-search"></i></button>
            </div>
        </div>

        <div className="row justify-content-start mt-2">
            <div className="col-md-3 my-auto text-right">
                <label className='mr-2 my-auto'><span className="text-danger">*</span> Assunto principal</label>
            </div>
            <div className="col-md-9 my-auto d-flex">
                <input className='flex-grow-1 form-control' readOnly type="text" name="assuntoProcessual" id="" />
                <button className='btn btn-primary ml-2' type="button" name="classeProcessual" data-bs-toggle="modal" data-bs-target="#modalAssuntoPrincipal"><i className="fas fa-search"></i></button>
            </div>
        </div>

        {/* modal classes processuais */}
        <div className="modal fade" id="modalClassesProcessuais" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" style={{ maxWidth: '90%' }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Pesquisa de classes processuais</h5>
                        <button type="button" className="btn exampleModalLabelclose" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group mb-3">
                            <label htmlFor="classSearch">Buscar Classes</label>
                            <input type="text" onChange={onChangeSearchBox} name="classSearch" id="classSearch" className="form-control" id="" />
                        </div>
                        <div id='classList'>

                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Sair</button>
                        <button type="button" id="salvarClasse" data-bs-dismiss="modal" className="btn btn-primary" onClick={() => {
                            if(document.querySelector('input[name="classe"]:checked') != null)
                                handleManualChange({name: 'classe', value: document.querySelector('input[name="classe"]:checked').id})
                        }}>Selecionar</button>
                    </div>
                </div>
            </div>
        </div>

        {/* modal assunto principal */}
        <div className="modal fade" id="modalAssuntoPrincipal" tabndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" style={{ maxWidth: '90%' }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Pesquisa de Assuntos principais</h5>
                        <button type="button" className="btn close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group mb-3">
                            <label htmlFor="subjectSearch">Buscar Assuntos</label>
                            <input type="text" onChange={onChangeSearchBox} name="subjectSearch" id="subjectSearch" className="form-control" id="" />
                        </div>
                        <div id='subjectList'>

                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Sair</button>
                        <button type="button" id="salvarAssunto" data-bs-dismiss="modal" className="btn btn-primary" onClick={() => {
                            if(document.querySelector('input[name="assunto"]:checked') != null)
                                handleManualChange({name: 'assunto', value: document.querySelector('input[name="assunto"]:checked').id})
                        }}>Selecionar</button>
                    </div>
                </div>
            </div>
        </div>

    </>)
}

const CadastroPartes = (props) => {
    return (<>
        <div className="lead">Cadastro de Partes</div>
        <div className="p-1 mt-2 bg-dark mb-5"></div>
        <div>
            <div className="row justify-content-start">
                <label className='mr-2'><span className="text-danger">*</span> Partes do processo: </label>
                <div className="">
                    <table class="table table-striped caption-top">
                        <caption>List of users</caption>
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <table class="table">
                    <thead class="table-dark">
                        ...
                    </thead>
                    <tbody>
                        ...
                    </tbody>
                </table>
                <div className="col-md-12 my-auto">
                    
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal_adicionar_partes">Adicionar</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal_alterar_partes">Alterar</button>
                            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#Modal_remover_partes">Remover</button>
                        </div>

                    <div class="modal fade" id="Modal_adicionar_partes" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Cadastro de Partes</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    
                                    <label>Tipo de Parte: </label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected></option>
                                        <option value="1">Polo Ativo</option>
                                        <option value="2">Polo Passivo</option>
                                        <option value="3">Vítima</option>
                                        <option value="4">Testemunha</option>
                                        <option value="5">Terceiro</option>
                                        <option value="6">Outro</option>
                                    </select>
                                    <br/>

                                    <p>
                                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#selecao_parte" aria-expanded="false" aria-controls="collapseExample">
                                            Seleção de Parte
                                        </button>
                                    </p>
                                    <div class="collapse" id="selecao_parte">
                                        <div class="col-sm-6">
                                            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked></input>
                                                <label class="btn btn-outline-primary" for="btnradio1">Pessoa Física/Jurídica</label>

                                                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"></input>
                                                <label class="btn btn-outline-primary" for="btnradio2">Órgão/Entidade Pública</label>

                                                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"></input>
                                                <label class="btn btn-outline-primary" for="btnradio3">Cargo/Autoridade</label>
                                            </div>
                                        </div>
                                        <br/>
                                        <label>CPF/CNPJ: </label><input type="text" class="form-control" id="CPF_PARTE"></input>
                                        <br/>
                                        <label>RG: </label><input type="text" class="form-control" id="RG_PARTE"></input>
                                    </div>                                    
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>    
                        </div>
                    </div>

                    <div class="modal fade" id="Modal_alterar_partes" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                    <div class="modal-body">
                                        ...
                                    </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="Modal_remover_partes" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                    <div class="modal-body">
                                        ...
                                    </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>)
}

const CadastroRepresentantes = (props) => {
    return (<>
        <div className="lead">Cadastro de Representantes</div>
        <div className="p-1 mt-2 bg-dark mb-5"></div>
        <div>
            <div className="row justify-content-start">
                <label className='mr-2'><span className="text-danger">*</span> Representantes do processo: </label>


            </div>
        </div>
    </>)
}

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
