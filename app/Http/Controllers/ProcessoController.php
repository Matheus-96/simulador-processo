<?php

namespace App\Http\Controllers;

use App\Models\Processo;
use Illuminate\Http\Request;
use App\Models\Item;
use stdClass;
use App\Models\User;


function getItemRecursive($element, $tipo_item)
{
    $cod_item = $element->cod_item;
    $query = Item::where('cod_item_pai', $cod_item)->where('tipo_item', $tipo_item)->get();
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
            getItemRecursive($element->child[sizeof($element->child) - 1], $tipo_item);
        }
    }
}

class ProcessoController extends Controller
{
    private $user;

    public function __construct(User $user) {
        $this->user = $user;
    }

    public function getItemProcessual($tipo_item){
                // 
                $classes = array();


                $query = Item::where('cod_item_pai', '0')->where('tipo_item', $tipo_item)->get();
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
                    getItemRecursive($classes[sizeof($classes) - 1], $tipo_item);
                }
                // echo (json_encode($classes));
                return $classes;
        
    }
    
    // function listUsers(){
    //     $users = Post::findOrFail(100);
    //     return \json_decode($users);
    // }    

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //home
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $users = User::get();
        return view('cadastroProcessos', compact('users'));
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
        return view('painelProcesso');
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
