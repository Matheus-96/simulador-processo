@extends('layouts.app')

@section('content')
<div class="mx-5">
    <div class="col-md-12">
        <div class="card colorPrimary p-5">
            <h4>Pesquisar processo</h4>
            <div class="p-1 mt-2 colorSecondary mb-5"></div>
            <div class="row justify-content-md-center mb-3">
                <div class="col-md-6">
                    <div class="row justify-content-md-center mb-3">
                        <div class="col-md-auto">
                            <p class="form-label">Número do Processo principal:</p>
                        </div>
                        <div class="col">
                            <input type="email" class="form-control bg-light" id="exampleFormControlInput1" placeholder="name@example.com">
                        </div>
                    </div>
                    <div class="row justify-content-md-center mb-3">
                        <div class="col-md-auto">
                            <p class="form-label">Tribunal:</p>
                        </div>
                        <div class="col">
                            <input type="email" class="form-control bg-light" id="exampleFormControlInput1" placeholder="name@example.com">
                        </div>
                    </div>
                    <div class="row justify-content-md-center mb-3">
                        <div class="col-md-auto">
                            <p class="form-label">Comarca:</p>
                        </div>
                        <div class="col">
                            <input type="email" class="form-control bg-light" id="exampleFormControlInput1" placeholder="name@example.com">
                        </div>
                    </div>
                    <div class="row justify-content-md-center mb-3">
                        <div class="col-md-auto">
                            <p class="form-label">Competencia:</p>
                        </div>
                        <div class="col">
                            <input type="email" class="form-control bg-light" id="exampleFormControlInput1" placeholder="name@example.com">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection