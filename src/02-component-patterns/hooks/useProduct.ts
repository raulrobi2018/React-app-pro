import { useState, useEffect, useRef } from 'react';
import { onChangeArgsProps, Product } from '../interfaces/interfaces';

interface useProductProps {
    product: Product;
    onChange?: (args: onChangeArgsProps) => void;
    value?: number;
}


export const useProduct = ({ onChange, product, value = 0 }: useProductProps) => {

    const [counter, setCounter] = useState(value);

    const isControlled = useRef(!!onChange)

    useEffect(() => {
        setCounter(value);
    }, [value])


    const increaseBy = (value: number) => {
        if (isControlled.current) {
            //Este símbolo "!", le dice a typescript que el posible undefined está controlado
            return onChange!({ count: value, product })
        }
        //Aquí se aumenta el counter de esta manera para asegurarnos que el valor seteado
        //nunca sea menor a 0
        const newCounter = Math.max(counter + value, 0)
        setCounter(newCounter);
        onChange && onChange({ count: newCounter, product });
    };

    return {
        counter,
        increaseBy
    }
}