@extends('layouts.app')

@section('content')
<div class="container">
    <div class="col-md-12">
        <div class="card colorPrimary p-5">
            <h4>Cadastro de processo</h4>
            <div class="p-1 mt-2 colorSecondary mb-5"></div>
            <div class="row justify-content-md-center">
                <div class="col-md-6">
                    <div class="row">
                    <p class="">Número do Processo principal:</p>
                    <input type="email" class="form-control bg-light" id="exampleFormControlInput1" placeholder="name@example.com">
                    </div>
                    <p class="form-label">Número do Processo principal:</p>
                    <input type="email" class="form-control bg-light" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
            </div>
            <div class="row justify-content-md-center">
                <div class="col-md-6">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control bg-light" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection