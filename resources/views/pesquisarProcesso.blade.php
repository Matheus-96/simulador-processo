@extends('layouts.app')

@section('content')
<div class="mx-5">
    <div class="col-md-12">
        <div class="card colorPrimary p-5">
            <!-- Criar uma div com uma grind que permita deixar as colunas separadas no extremo oposto -->
            <h4>Pesquisar processo</h4>
            <div class="p-1 mt-2 colorSecondary mb-5"></div>
            <!-- <div class="row justify-content-md-center">
                <div class="col-md-6">
                    <div class="row">
                    <p class="">Número do Processo principal:</p>
                    <input type="email" class="form-control bg-light" id="exampleFormControlInput1">
                    </div>
                    <p class="form-label">Número do Processo principal:</p>
                    <input type="email" class="form-control bg-light" id="exampleFormControlInput1">
                </div>
            </div>
            <div class="row justify-content-md-center">
                <div class="col-md-6">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control bg-light" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div> -->
            <div class="row justify-content-md-center mb-3">  
                <div class="col-md-6">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf
                        <div class="row justify-content-md-center mb-4">
                            <h4 class="textColorBlack">Filtrar por:</h4>
                        </div>
                        <!-- <div class="row justify-content-md-center mb-3">
                            <div class="col-md-auto">
                                <p class="form-label">Número do Processo principal:</p>
                            </div>
                            <div class="col">
                                <input type="email" class="form-control bg-light" id="exampleFormControlInput1" placeholder="name@example.com">
                            </div>
                        </div> -->
                        <div class="row justify-content-md-center mb-3">
                            <div class="col-md-auto">
                                <p class="form-label">Tribunal:</p>
                            </div>
                            <div class="col">
                                <input type="email" class="form-control bg-light" id="exampleFormControlInput1">
                            </div>
                        </div>
                        <div class="row justify-content-md-center mb-3">
                            <div class="col-md-auto">
                                <p class="form-label">Comarca:</p>
                            </div>
                            <div class="col">
                                <input type="email" class="form-control bg-light" id="exampleFormControlInput1">
                            </div>
                        </div>
                        <div class="row justify-content-md-center mb-3">
                            <div class="col-md-auto">
                                <p class="form-label">Competencia:</p>
                            </div>
                            <div class="col">
                                <input type="email" class="form-control bg-light" id="exampleFormControlInput1">
                            </div>
                        </div>
                        <div class="row justify-content-md-center mt-5">
                            <button  class="btn btn-secondary mr-4">
                                {{ __('Cancelar') }}
                            </button>
                            <button type="submit" class="btn btn-dark">
                                {{ __('Pesquisar') }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection