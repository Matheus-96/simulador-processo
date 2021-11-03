@extends('layouts.app')

@section('content')
<div class="mx-5">
        <div class="col-md-10">
            <div class="card filtroLateral colorPrimary p-5 mb-5">
                <h5>Processos</h5>
                <div class="card backgroundProjeto mt-3 p-3">
                    <p class="">Só para ver</p>@guest
                        
                    @endguest
                </div>
                <div class="card backgroundProjeto mt-3 p-3">
                    <p class="">Só para ver</p>
                </div>

            </div>
        </div>
    </div>
</div>
@endsection
