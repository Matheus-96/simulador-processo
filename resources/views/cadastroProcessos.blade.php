@extends('layouts.app')

@section('content')

<div class="container">
    <!--  -->
    <!--  -->
    
    <div class="col-md-12">
        <div id="cadastro-processo"></div>
    </div>
</div>

<script>
    window.addEventListener('load', () => {
        $(document).on('click', '.caret', (e) => {
            e.target.parentElement.querySelector(".nested").classList.toggle("active");
            e.target.classList.toggle("caret-down");
        })

        $(document).on('click', '#salvarClasse', ()=> {
            if(document.querySelector('input[name="classe"]:checked') != null)
                document.querySelector('input[name="classeProcessual"]').value = document.querySelector('input[name="classe"]:checked').parentElement.textContent
        })

        $(document).on('click', '#salvarAssunto', ()=> {
            if(document.querySelector('input[name="assunto"]:checked') != null)
                document.querySelector('input[name="assuntoProcessual"]').value = document.querySelector('input[name="assunto"]:checked').parentElement.textContent
        })


        var controlAdvogados = 0;

        $(document).on('click', '#salvarAdvogado', ()=> {
            controlAdvogados += 1;
            console.log(controlAdvogados)
            var opt = document.getElementById('listAdvogados')
            var newRow = document.createElement('tr');

            newRow.insertCell(0).innerHTML = 'ID';
            newRow.insertCell(1).innerHTML = 'NOME';

            var colunaValor = newRow.insertCell(2);
            colunaValor.button = 'Excluir';
            colunaValor.className = 'btn buttonEdit';
            colunaValor.onclick = apagarLinha();

            colunaValor2 = newRow.insertCell(3);

            colunaValor.button = 'Excluir';
            colunaValor.className = 'btn buttonExcluir';
            // colunaValor.onclick = Modal_adicionar_adivogados();

            newRow.id(colunaValor.id = `Adv${controlAdvogados}`)
            opt.appendChild(newRow);
            alet('chega aqui!');
            return false;
        })
    })

    

    // function inserirLinha() {
    //     alert('chega aquei!!')
    //     controlAdvogados += 1;
    //     var opt = document.getElementById('listAdvogados')
    //     var newRow = opt.createElement('tr');

    //     newRow.insertCell(0).innerHTML = 'ID';
    //     newRow.insertCell(1).innerHTML = 'NOME';

    //     colunaValor = newRow.insertCell(2);
    //     colunaValor.button = 'Excluir';
    //     colunaValor.className = 'btn buttonEdit';
    //     colunaValor.onclick = apagarLinha();

    //     // colunaValor2 = newRow.insertCell(3);
    //     // colunaValor.button = 'Excluir';
    //     // colunaValor.className = 'btn buttonExcluir';
    //     // colunaValor.onclick = Modal_adicionar_adivogados();

    //     opt.appendChild(newRow);
    //     return false;
    // }

    function apagarLinha(id){

    }

</script>
@endsection