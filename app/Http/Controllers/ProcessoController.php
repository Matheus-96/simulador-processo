<?php

namespace App\Http\Controllers;

use App\Models\Processo;
use Illuminate\Http\Request;
use App\Models\Item;

function getItemRecursive($cod_item){
    $query = Item::where('cod_item_pai', $cod_item)->get();
    foreach($query as $item){
        echo ' --->' . $item->nome . "<br>";
    }
}

class ProcessoController extends Controller
{


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        // $query = Item::where('cod_item_pai', '0')->where('tipo_item', 'C')->get();
        $query = Item::where('tipo_item', 'C')->get();
        // dd($query);
        // foreach($query as $item) {
            // echo $item->nome . "<br>";
            // getItemRecursive($item->cod_item);

        // }
        return view('cadastroProcessos', compact('query'));
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Processo  $processo
     * @return \Illuminate\Http\Response
     */
    public function show(Processo $processo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Processo  $processo
     * @return \Illuminate\Http\Response
     */
    public function edit(Processo $processo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Processo  $processo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Processo $processo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Processo  $processo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Processo $processo)
    {
        //
    }
}
