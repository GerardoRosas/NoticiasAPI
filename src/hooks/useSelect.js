import React, { useState } from 'react';

const useSelect = (stateInicial, opciones) => {

    const [ state , actualizaState ] = useState('');

    const SelectNoticias = () => (
    
        <select className="browser-default">
           <option value="">Seleccione</option> 
        </select>
    
    )
            
    return [state, SelectNoticias];
}

 
export default useSelect;