@extends('layouts.app')

@section('content')

<div class="row col-md-12 mt-3">
    <div class="col-md-3 ml-4">
        <div id="pesquisa-processo"></div>
    </div>
    <div class="col-md-9 ml-0">
        <!-- <div class="filtroLateral colorPrimary p-5 mb-5"> -->
            <h5>Processos</h5>
            <div class="my-2 p-2 colorPrimary rounded">
                <div class="row justify-content-between">
                    <div class="col-md-1 p-4">
                        <i class="fas fa-file-alt" style="width: 540px;"></i>
                    </div>
                    <div class="col-md-3">
                        <h5 class="">Número processo</h5>
                        <p class="m-0">Assunto:</p>
                        <p class="m-0">Assunto:</p>
                    </div>
                    <div class="col-md-3">
                        <p class="m-0">Assunto:</p>
                        <p class="m-0">Assunto:</p>
                    </div>
                    <div class="col-md-3">
                        <p class="m-0">Assunto:</p>
                        <p class="m-0">Assunto:</p>
                    </div>
                    <div class="col-md-2">
                        <div class="">
                            <button class="btn btn-success"><a class="nav-link" href="{{ route('painel') }}"><i class="fas fa-home"></i>{{ __(' Painel') }}</a></button>
                            <button class="btn btn-info">Navegação</button>
                        </div>
                    </div>
                </div>
                <div class="row ">
                    <p class="col align-self-end m-0 mt-1"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="my-2 p-2 colorPrimary rounded">
                <div class="row justify-content-between">
                    <div class="col-md-1 p-4">
                        <i class="fas fa-file-alt"></i>
                    </div>
                    <div class="col-md-3">
                        <h5 class="">Número processo</h5>
                        <p class="m-0">Assunto:</p>
                        <p class="m-0">Assunto:</p>
                    </div>
                    <div class="col-md-3">
                        <p class="m-0">Assunto:</p>
                        <p class="m-0">Assunto:</p>
                    </div>
                    <div class="col-md-3">
                        <p class="m-0">Assunto:</p>
                        <p class="m-0">Assunto:</p>
                    </div>
                    <div class="col-md-2">
                        <div class="">
                            <button class="btn btn-success">Painel</button>
                            <button class="btn btn-info">Navegação</button>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-end">
                    <p class="m-0 mt-1"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="my-2 p-2 colorPrimary rounded-3">
                <div class="row justify-content-between">
                    <div class="col-md-1 p-4">
                        <img src="./images/file-alt-solid.png" style="width: 100px;">
                    </div>
                    <div class="col-md-3">
                        <h5 class="">Número processo</h5>
                        <p class="m-0">Assunto:</p>
                        <p class="m-0">Assunto:</p>
                    </div>
                    <div class="col-md-3">
                        <p class="m-0">Assunto:</p>
                        <p class="m-0">Assunto:</p>
                    </div>
                    <div class="col-md-3">
                        <p class="m-0">Assunto:</p>
                        <p class="m-0">Assunto:</p>
                    </div>
                    <div class="col-md-2">
                        <div class="">
                            <button class="btn btn-success">Ver </button>
                            <button class="btn btn-info">Navegação</button>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-end">
                    <p class="m-0 mt-1"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <button class="btn colorPrimary my-2 p-3 col-md-12">
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
            </button class="btn">
            <div class="my-2 p-2 colorPrimary">
                <div class="row justify-content-between">
                    <div class="col-md-3">
                        <h5 class="">Número processo</h5>
                    </div>
                    <div class="col-md-3">
                        <p class="m-0">Assunto:</p>
                        <p class="m-0">Assunto:</p>
                    </div>
                    <div class="col-md-3">
                        <p class="m-0">Assunto:</p>
                        <p class="m-0">Assunto:</p>
                    </div>
                    <div class="col-md-3">
                        <p class="m-0">Assunto:</p>
                        <p class="m-0">Assunto:</p>
                    </div>
                    <div class="col-md-2">
                        <div class="">
                            <button class="btn btn-success">Ver </button>
                            <button class="btn btn-info">Navegação</button>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-end">
                    <p class="m-0 mt-1"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        <!-- </div> -->
    </div>
</div>
@endsection
