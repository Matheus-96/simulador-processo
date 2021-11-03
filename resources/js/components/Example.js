import { Button } from 'bootstrap';
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

    var classList = ""
    const [isRoot, setIsRoot] = useState(false)
    const [json, setJson] = useState('')


    useEffect(() => {
        fetch('/api/getClasses').then(
            (response) => {
                response.json().then(
                    (json) => {
                        setJson(JSON.stringify(json))
                    }
                )
            }
        )
    }, [])

    useEffect(async () => {
        if (json != '') {
            createListRoot(JSON.parse(json))
            document.getElementById('classList').innerHTML = classList
        }
    }, [json])

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
        classList += (
            args.isRadio ?
                `<li class='selectable'><input type='radio' name='classe' id='${args.cod_item}' value='${args.cod_item}'><label for='${args.cod_item}'>${args.nome}</label></input></li>`
                :
                `<li class="list-group-item-action" ><span class="caret">${args.nome}</span>`
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
            createLi({ nome: item.nome, cod_item: item.cod_item })
            createList(item.child)
        } else {
            createLi({ nome: item.nome, isRadio: true, cod_item: item.cod_item })
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
    const onClickSave = (args) => {
        let el = document.querySelector(`input[type='radio']:checked`)
        console.log()
        document.querySelector(`input[name='${args.inputName}']`).value = el.parentElement.textContent
        props.setNewAttribute({ name: el.name, value: el.value })
    }

    return (<>
        <div className="lead">Informações Processuais</div>
        <div className="p-1 mt-2 bg-dark mb-5"></div>

        <div className="row justify-content-start mt-2">
            <div className="col-md-3 my-auto text-right">
                <label className='mr-2'><span className="text-danger">*</span> Processo de Execução</label>
            </div>
            <div className="col-md-9 my-auto">
                <label className='ml-2' htmlFor="dependentYes">Sim</label>
                <input className='ml-1' type="radio" value='false' name="dependentProcess" id="dependentYes" />
                <label className='ml-2' htmlFor="dependentNo">Não</label>
                <input className='ml-1' type="radio" value='false' name="dependentProcess" id="dependentNo" />
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
                <input className='flex-grow-1 form-control' type="text" name="classeProcessual" id="" readOnly/>
                <button className='btn btn-primary ml-2' type="button" data-bs-toggle="modal" data-bs-target="#modalClassesProcessuais"><i className="fas fa-search"></i></button>
            </div>
        </div>

        <div className="row justify-content-start mt-2">
            <div className="col-md-3 my-auto text-right">
                <label className='mr-2 my-auto'><span className="text-danger">*</span> Assunto principal</label>
            </div>
            <div className="col-md-9 my-auto d-flex">
                <input className='flex-grow-1 form-control' type="text" name="assuntoPrincipal" id="" />
                <button className='btn btn-primary ml-2' type="button" data-bs-toggle="modal" data-bs-target="#modalAssuntoPrincipal"><i className="fas fa-search"></i></button>
            </div>
        </div>

        {/* modal classes processuais */}
        <div className="modal fade" id="modalClassesProcessuais" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" style={{ maxWidth: '90%' }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Pesquisa de classes processuais</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
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
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" name='classes' data-bs-dismiss="modal" onClick={() => onClickSave({ name: 'classes', inputName: 'classeProcessual' })} className="btn btn-primary">Save changes</button>
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
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
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
        let newObj = { ...cadastro }
        newObj[e.target.name] = e.target.value
        setCadastro(newObj)
    }

    const setNewAttribute = e => {
        let newObj = { ...cadastro }
        newObj[e.name] = e.value
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
                                ari
                                
                                style={{ width: `${progress}%` }}>
                                {progress}%
                            </div>
                        </div>
                        <h2>Cadastro de processo</h2>
                        {JSON.stringify(cadastro)}
                        {index == 0 && <InformacoesIniciais handleChangeObject={handleChange} />}
                        {index == 1 && <InformacoesProcessuais cad={cadastro} handleChangeObject={handleChange} setNewAttribute={setNewAttribute} />}
                        {index == 2 && <CadastroPartes />}

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

const CadastroPartes = () =>{
    return (<>
        <div className="lead">Cadastro de Partes</div>
        <div className="p-1 mt-2 bg-dark mb-5"></div>
        <div>

        

            <div className="row justify-content-start">
                <div className="col-md-12 my-auto">
                    
                    <label className='mr-2'><span className="text-danger">*</span> Partes do processo: </label>
                    <br/>    
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Modal_partes"> Mostrar Partes Existentes </button>
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

                        <div id="Modal_adicionar_partes" class="modal">

                            <div class="modal-content">
                                <span class="close">&times;</span>
                                <p>Adicionar de partes</p>
                            </div>

                        </div>

                        <div id="Modal_alterar_partes" class="modal">

                            <div class="modal-content">
                                <span class="close">&times;</span>
                                <p>Alterar de partes</p>
                            </div>

                        </div>

                        <div id="Modal_remover_partes" class="modal">

                            <div class="modal-content">
                                <span class="close">&times;</span>
                                <p>Remover de partes</p>
                            </div>

                        
                    </div>
                </div>
            </div>                
        </div>

            


                
    </>)
}

export default Example;

if (document.getElementById('cadastro-processo')) {
    ReactDOM.render(<Example />, document.getElementById('cadastro-processo'));
}
