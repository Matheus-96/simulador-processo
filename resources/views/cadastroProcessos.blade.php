@extends('layouts.app')

@section('content')
<script>
        var teste = {!! json_encode($query->toArray()) !!} 
</script>
<div class="container">
    <div class="col-md-12">
        <div id="cadastro-processo">a</div>
    </div>
</div>
@endsection