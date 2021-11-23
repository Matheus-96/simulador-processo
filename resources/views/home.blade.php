@extends('layouts.app')

@section('content')

<div class="row col-md-12 mt-3">
    <div class="col-md-3 ml-4">
        <div id="pesquisa-processo"></div>
    </div>
    <div class="col-md-9 ml-0">
        <!-- <div class="filtroLateral colorPrimary p-5 mb-5"> -->
            <h5 class="textCenter mb-3 title1">Processos</h5>
            <button class="backgroundList btn colorPrimary my-2 p-3 col-md-12">
                <a class="listProcesso" href="{{ route('painelProcessos') }}">
                    <div class="row justify-content-between">
                        <div class="col-md-2">
                            <!-- <div class="img_arquivo"></div> -->
                            <img src="" style="width: 100px;">
                            <!-- <img src="{{ asset('images/file-alt-solid.png') }}" /> -->
                        </div>
                        <div class="col-md-2">
                            <h5 class="">Número processo</h5>
                        </div>
                        <div class="col-md-2">
                            <p class="m-0">Assunto:</p>
                            <p class="m-0">Assunto:</p>
                        </div>
                        <div class="col-md-2">
                            <p class="m-0">Assunto:</p>
                            <p class="m-0">Assunto:</p>
                        </div>
                        <div class="col-md-2">
                            <p class="m-0">Assunto:</p>
                            <p class="m-0">Assunto:</p>
                        </div>
                    </div>
                    <div class="row justify-content-end">
                        <p class="m-0 mt-1"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </a>
            </button class="btn">
            <button class="backgroundList btn colorPrimary my-2 p-3 col-md-12">
                <a class="listProcesso" href="{{ route('painelProcessos') }}">
                    <div class="row justify-content-between">
                        <div class="col-md-2">
                            <!-- <div class="img_arquivo"></div> -->
                            <!-- <img src="./images/file-alt-solid.png" style="width: 100px;"> -->
                            <!-- <img src="{{ asset('images/file-alt-solid.png') }}" /> -->
                        </div>
                        <div class="col-md-2">
                            <h5 class="">Número processo</h5>
                        </div>
                        <div class="col-md-2">
                            <p class="m-0">Assunto:</p>
                            <p class="m-0">Assunto:</p>
                        </div>
                        <div class="col-md-2">
                            <p class="m-0">Assunto:</p>
                            <p class="m-0">Assunto:</p>
                        </div>
                        <div class="col-md-2">
                            <p class="m-0">Assunto:</p>
                            <p class="m-0">Assunto:</p>
                        </div>
                    </div>
                    <div class="row justify-content-end">
                        <p class="m-0 mt-1"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </a>
            </button class="btn">
            <button class="backgroundList btn colorPrimary my-2 p-3 col-md-12">
                <a class="listProcesso" href="{{ route('painelProcessos') }}">
                    <div class="row justify-content-between">
                        <div class="col-md-2">
                            <!-- <div class="img_arquivo"></div> -->
                            <!-- <img src="./images/file-alt-solid.png" style="width: 100px;"> -->
                            <!-- <img src="{{ asset('images/file-alt-solid.png') }}" /> -->
                        </div>
                        <div class="col-md-2">
                            <h5 class="">Número processo</h5>
                        </div>
                        <div class="col-md-2">
                            <p class="m-0">Assunto:</p>
                            <p class="m-0">Assunto:</p>
                        </div>
                        <div class="col-md-2">
                            <p class="m-0">Assunto:</p>
                            <p class="m-0">Assunto:</p>
                        </div>
                        <div class="col-md-2">
                            <p class="m-0">Assunto:</p>
                            <p class="m-0">Assunto:</p>
                        </div>
                    </div>
                    <div class="row justify-content-end">
                        <p class="m-0 mt-1"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </a>
            </button class="btn">
            <button class="backgroundList btn colorPrimary my-2 p-3 col-md-12">
                <a class="listProcesso" href="{{ route('painelProcessos') }}">
                    <div class="row justify-content-between">
                        <div class="col-md-2">
                            <!-- <div class="img_arquivo"></div> -->
                            <!-- <img src="./images/file-alt-solid.png" style="width: 100px;"> -->
                            <!-- <img src="{{ asset('images/file-alt-solid.png') }}" /> -->
                        </div>
                        <div class="col-md-2">
                            <h5 class="">Número processo</h5>
                        </div>
                        <div class="col-md-2">
                            <p class="m-0">Assunto:</p>
                            <p class="m-0">Assunto:</p>
                        </div>
                        <div class="col-md-2">
                            <p class="m-0">Assunto:</p>
                            <p class="m-0">Assunto:</p>
                        </div>
                        <div class="col-md-2">
                            <p class="m-0">Assunto:</p>
                            <p class="m-0">Assunto:</p>
                        </div>
                    </div>
                    <div class="row justify-content-end">
                        <p class="m-0 mt-1"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </a>
            </button class="btn">
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        <!-- </div> -->
    </div>
</div>
@endsection