import React, { useState }  from 'react'
    const Contador=()=>{
        let [contador ,setContado] = useState(0);
        
        const onChangeMas = (a)=>{
            if (a) {
                setContado(contador ++);
            }
            else{
                setContado(contador --);
            }
        } 

        return (
            <div>
                <button onClick={()=>onChangeMas(true)} > contador +</button>
                <button onClick={()=>onChangeMas(false)} > contador -</button>
                {contador}
          </div>
        )
    }
    export default Contador;
