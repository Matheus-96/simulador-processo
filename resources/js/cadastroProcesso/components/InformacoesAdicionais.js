export const InformacoesAdicionais = ({ handleChangeObject }) => {
    return (<>
        <div className="lead">Informações Adicionais</div>
        <div className="p-1 mt-2 bg-dark mb-5"></div>
        <div>
            {/* <div className="row justify-content-center">
                
            </div> */}
            <div>
                <div className="row justify-content-end col-md-12 my-auto">
                    <div className="col-md-6 mt-2">
                        <label htmlFor="selectTribunal" className='mr-2'><span className="text-danger">*</span> Tribunal</label>
                        <input className='flex-grow-1 form-control' data-value='' onChange={handleChangeObject} readOnly type="text" name="classeProcessual" id="" />
                    </div>
                </div>
            </div>
        </div>
    </>)
}