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
                                <th scope="col">Nome</th>
                                <th scope="col">RG</th>
                                <th scope="col">CPF/CNPJ</th>
                                <th scope="col">Prioridade</th>
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
                <div className="col-md-12 my-auto">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal_partes"> Mostrar Partes Existentes </button>
                    <div className="col-md-12 my-auto">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal_adicionar_partes"> Adicionar </button>
                    </div>
                    <div className="col-md-12 my-auto">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal_alterar_partes"> Alterar   </button>
                    </div>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal_remover_partes"> Remover </button>


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

export default CadastroPartes;