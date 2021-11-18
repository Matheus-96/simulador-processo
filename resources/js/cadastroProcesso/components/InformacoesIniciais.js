import { useState, useEffect } from "react";


export const InformacoesIniciais = ({ handleChangeObject, cadastro }) => {
    const [dependent, setDependent] = useState((!!cadastro.processoDependente ? true : false));

    return(
        <div className="row justify-content-start">
        <div className="col-md-12 my-auto">
            <label className='mr-5'><span className="text-danger">*</span> Processo Dependente</label>
            <label className='mx-2' htmlFor="dependentYes">Sim</label>
            <input className='mx-1' onChange={() => { setDependent(true) }} type="radio" checked={(dependent ? true : "")} name="dependentProcess" id="dependentYes" />
            <label className='mx-2' htmlFor="dependentNo">Não</label>
            <input className='mx-1' onChange={() => { setDependent(false); cadastro.processoDependente = "" }} type="radio" value='false' name="dependentProcess" id="dependentNo" />
            {!dependent || <input type="number" value={(cadastro.processoDependente > 0 ? cadastro.processoDependente : "")} className="form-control bg-light" onChange={handleChangeObject} name="processoDependente" id="exampleFormControlInput1" placeholder="Número do processo" />}
        </div>
        <div className="col-md-6 mt-2">
            <label htmlFor="selectTribunal" className='mr-2'><span className="text-danger">*</span> Tribunal</label>
            <select className="form-control" name="tribunal" id="selectTribunal" onChange={handleChangeObject}>
                <option value="1">Tribunal de Justiça do Estado do Paraná</option>
                <option value="2">Tribunal de Justiça do Estado de Santa Catarina</option>
                <option value="3">Tribunal de Justiça do Estado do Rio Grande do Sul</option>
            </select>
        </div>
        <div className="col-md-6 mt-2">
            <label htmlFor="selectLocalidade" className='mr-2'><span className="text-danger">*</span> Localidade</label>
            <select className="form-control" name="localidade" id="selectLocalidade" onChange={handleChangeObject}>
                <option value="1">Curitiba</option>
                <option value="2">Rio Negro</option>
                <option value="3">Campo do Tenente</option>
            </select>
        </div>
        <div className="col-md-12 mt-2">
            <label htmlFor="selectCompetencia" className='mr-2'><span className="text-danger">*</span> Competência</label>
            <select className="form-control" onChange={handleChangeObject} name="competencia" id="selectCompetencia">
                <option value="1">Curitiba</option>
                <option value="2">Rio Negro</option>
                <option value="3">Campo do Tenente</option>
            </select>
        </div>
    </div>
    )
}