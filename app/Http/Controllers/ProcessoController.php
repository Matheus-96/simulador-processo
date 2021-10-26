<?php

namespace App\Http\Controllers;

use App\Models\Processo;
use Illuminate\Http\Request;
use App\Models\Item;
use stdClass;


function getItemRecursive($element, $separator, $classe)
{
    $cod_item = $element->cod_item;
    $query = Item::where('cod_item_pai', $cod_item)->where('tipo_item', 'C')->get();
    foreach ($query as $item) {
        // echo $separator . $item->nome . "<br>";

        $myItem = new stdClass();

        $myItem->cod_item = $item->cod_item;
        $myItem->cod_item_pai = $item->cod_item_pai;
        $myItem->nome = $item->nome;
        $myItem->tipo_item = $item->tipo_item;
        $myItem->child = array();

        array_push($element->child, $myItem);
        $filhos = Item::where('cod_item_pai', $item->cod_item)->where('tipo_item', 'C')->get();
        if ($filhos) {
            $separator = '--' . $separator;
            // getItemRecursive($element['child'][sizeof($element['child']) - 1], $separator);
            getItemRecursive($element->child[sizeof($element->child) - 1], $separator, $classe);
        }
        $separator = substr($separator, 2);
    }
}

class ProcessoController extends Controller
{


    public function getClasses(){
                // 
                $classes = array();


                $query = Item::where('cod_item_pai', '0')->where('tipo_item', 'c')->get();
                // $query = Item::where('tipo_item', 'C')->get();
        
        
                foreach ($query as $item) {
        
                    $myItem = new stdClass();
                    $myItem->cod_item = $item->cod_item;
                    $myItem->cod_item_pai = $item->cod_item_pai;
                    $myItem->nome = $item->nome;
                    $myItem->tipo_item = $item->tipo_item;
                    $myItem->child = array();
        
                    array_push($classes, $myItem);
        
                    // echo $item->nome . "<br>";
                    getItemRecursive($classes[sizeof($classes) - 1], '-->', $classes);
                }
                // echo (json_encode($classes));
                return $classes;
        
    }
    

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('cadastroProcessos');
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
