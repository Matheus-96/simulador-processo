const InformacoesProcessuais = ({handleChangeObject}) => {

    var classList = ""
    const [json, setJson] = useState('')

    const objectChanged = e => handleChangeObject(e)

    useEffect(() => {
        fetch('/api/classesProcessuais').then(
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
                `<li class='selectable'><input type='radio' id='${args.cod_item}' name='classe'><label for='${args.cod_item}'>${args.nome}</label></input></li>`
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

    return (<>
        <div className="lead">Informações Processuais</div>
        <div className="p-1 mt-2 bg-dark mb-5"></div>

        <div className="row justify-content-start mt-2">
            <div className="col-md-3 my-auto text-right">
                <label className='mr-2'><span className="text-danger">*</span> Processo de Execução</label>
            </div>
            <div className="col-md-9 my-auto">
                <label className='ml-2' htmlFor="dependentYes">Sim</label>
                <input className='ml-1' type="radio" value='false' name="dependentProcess" onChange={objectChanged} id="dependentYes" />
                <label className='ml-2' htmlFor="dependentNo">Não</label>
                <input className='ml-1' type="radio" value='false' name="dependentProcess" onChange={objectChanged} id="dependentNo" />
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
                <input className='flex-grow-1 form-control' readOnly type="text" name="classeProcessual" id="" />
                <button className='btn btn-primary ml-2' type="button" name="classeProcessual" data-bs-toggle="modal" data-bs-target="#modalClassesProcessuais"><i className="fas fa-search"></i></button>
            </div>
        </div>

        <div className="row justify-content-start mt-2">
            <div className="col-md-3 my-auto text-right">
                <label className='mr-2 my-auto'><span className="text-danger">*</span> Assunto principal</label>
            </div>
            <div className="col-md-9 my-auto d-flex">
                <input className='flex-grow-1 form-control' readOnly type="text" name="classeProcessual" id="" />
                <button className='btn btn-primary ml-2' type="button" name="classeProcessual" data-bs-toggle="modal" data-bs-target="#modalAssuntoPrincipal"><i className="fas fa-search"></i></button>
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
                        <button type="button" id="salvarClasse" data-bs-dismiss="modal" className="btn btn-primary">Save changes</button>
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
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default InformacoesProcessuais;