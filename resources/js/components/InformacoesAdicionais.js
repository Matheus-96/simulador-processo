const InformacoesAdicionais = (props) => {
    return (<>
        <div className="lead">Informações Adicionais</div>
        <div className="p-1 mt-2 bg-dark mb-5"></div>
        <div>
            <div className="row justify-content-center">
                
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

export default InformacoesAdicionais;