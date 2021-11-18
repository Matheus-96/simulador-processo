const CadastroAdvogados = (props) => {
    return (<>
        <div className="lead">Cadastro de Representantes</div>
        <div className="p-1 mt-2 bg-dark mb-5"></div>
        <div>
            <div className="row justify-content-center">
                <label className='mr-2'><span className="text-danger">*</span> Advogados: </label>
                <div className="">
                    <table class="table table-striped caption-top">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">OAB</th>
                                <th scope="col">Advogado</th>
                                <th scope="col">Partes</th>
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
            </div>
            <div>
            <div className="row justify-content-end col-md-12 my-auto">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal_adicionar_partes"> Adicionar </button>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal_adicionar_partes"> Alteral </button>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal_adicionar_partes"> Remover </button>
            </div>
            </div>
        </div>
    </>)
}

export default CadastroAdvogados;