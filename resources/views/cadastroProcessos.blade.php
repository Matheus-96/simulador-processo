@extends('layouts.app')

@section('content')

<div class="container">
    <div class="col-md-12">
        <div id="cadastro-processo">a</div>
    </div>
</div>

<script>
    window.addEventListener('load', () => {
        $(document).on('click', '.caret', (e) => {
            console.log(e.target.parentElement);
            e.target.parentElement.querySelector(".nested").classList.toggle("active");
            e.target.classList.toggle("caret-down");
        })
    })
</script>
@endsection