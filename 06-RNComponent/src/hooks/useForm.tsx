import { useState } from 'react';

export const useForm = <T extends Object>( initState: T ) => {
    
    const [state, setState] = useState( initState );

    const onChange =  <K extends Object>( value: K, field: keyof T ) => {
        setState({
            ...state,
            [field]: value
        });
    }

    return {
        ...state,
        form: state,
        onChange,
    }

}

// al hacer este comando  <T extends Object> se puede usar para hacer una k esos son como generalidades
//lo que hacemos es crear un GENERICO lo que hara este es que tome si es un string lo tome como string, si es boolean
//lo tome como boolean