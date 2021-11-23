export const CadastroPartes = (props) => {

    function procuraCPF(valor) {

        //Nova variável cpf - somente com dígitos.
        var cpf = valor.replace(/\D/g, '');

        //Verifica se campo cpf possui valor informado.
        if (cpf != "") {

            //Expressão regular para validar o CPF.
            var validacpf = /^(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2})$/;

            //Valida o formato do CEP.
            if(validacpf.test(cpf)) {

                document.getElementById('CPF_PARTE').value="...";
                

                //Cria um elemento javascript.
                var script = document.createElement('script');

                //Chama 
                script.src = a;

                //Insere script no documento e carrega o conteúdo.
                document.body.appendChild(script);

            } //end if.
            else {
                //cep é inválido.
                limpaCep();
                alert("Formato de CPF inválido.");
            }
        } //end if.
        else {
            //cpf sem valor, limpa formulário.
            limpaCep();
        }
    };

    function limpaCep(){

    }

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

                    </thead>
                    <tbody>

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
                                    <br />

                                    <p>
                                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#selecao_parte" aria-expanded="false" aria-controls="collapseExample">
                                            Seleção de Parte
                                        </button>
                                    </p>
                                    <div class="collapse" id="selecao_parte">
                                        <div class="col-sm-6">
                                            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"></input>
                                                <label class="btn btn-outline-primary" for="btnradio1">Pessoa Física/Jurídica</label>

                                                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"></input>
                                                <label class="btn btn-outline-primary" for="btnradio2">Órgão/Entidade Pública</label>

                                                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"></input>
                                                <label class="btn btn-outline-primary" for="btnradio3">Cargo/Autoridade</label>
                                            </div>
                                        </div>
                                        <br />
                                        <label>CPF/CNPJ: </label><input type="text" class="form-control" id="CPF_PARTE" onchange={procuraCPF(this.valor)}></input>
                                        <br />
                                        <label>RG: </label><input type="text" class="form-control" id="RG_PARTE"></input>
                                        <br />
                                        <table class="table table-sm table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Nome</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <label>Telefone: </label>
                                    <br/>
                                    {/* Continuar */}
                                    <br/>
                                    <label>Prioridade: </label>
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

                                    <table class="table">
                                        <thead>
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
                                                <td colspan="2">Larry the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>

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
