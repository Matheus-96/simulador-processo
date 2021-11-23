

export const CadastroAdvogados = ({ handleChangeObject }) => {

    return (<>
        <div className="lead">Cadastro de Advogados</div>
        <div className="p-1 mt-2 bg-dark mb-5"></div>
        <div className="backgroundProjeto rounded-3 p-4">
            <div className="row justify-content-center">
                <label className='mr-2'><span className="text-danger">*</span> Advogados: </label>
                <div className="">
                    <table class="table table-striped caption-top">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">OAB</th>
                                <th scope="col">Advogado</th>
                                <th scope="col">Partes</th>
                                <th scope="col">Opções</th>
                            </tr>
                        </thead>
                        <tbody id="listAdvogados">
                            <tr>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>
                                <button type="button" class="btn buttonEdit " > Editar </button>
                                <button type="button" class="btn buttonExcluir"> Excluir </button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row justify-content-end ">
                <div className="col-md-4">
                    <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#Modal_adicionar_adivogados"> Adicionar </button>
                </div>
            </div>

            <div class="modal fade" id="Modal_adicionar_adivogados" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Cadastro de Advogados</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {/* <select class="form-select" aria-label="Default select example">
                                <option selected></option>
                                <option value="1">Polo Ativo</option>
                                <option value="2">Polo Passivo</option>
                                <option value="3">Vítima</option>
                                <option value="4">Testemunha</option>
                                <option value="5">Terceiro</option>
                                <option value="6">Outro</option>
                            </select>
                            <br/> */}

                            <br/>
                            <div className="row">
                                <div className="col-md-3">
                                    <label>Advogado: </label>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" class="form-control" id="advogado"></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <label>OAB: </label>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" class="form-control" id="oab"></input>
                                </div>
                            </div>
                                
                            <table class="table table-striped caption-top mt-5">
                                <thead className="table-secondary">
                                    <tr>
                                        <th scope="col">OAB</th>
                                        <th scope="col">Advogado</th>
                                    </tr>
                                </thead>
                                <tbody id="listAdvogados">
                                    <tr>
                                        <th>1</th>
                                        <th>2</th>
                                    </tr>
                                </tbody>
                            </table>                                 
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                            <button id="salvarAdvogado" type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick="inserirLinha()">Salvar</button>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    </>)
}
