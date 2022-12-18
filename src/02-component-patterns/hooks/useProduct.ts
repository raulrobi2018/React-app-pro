import { useState, useEffect, useRef } from 'react';
import { onChangeArgsProps, Product } from '../interfaces/interfaces';

interface useProductProps {
    product: Product;
    onChange?: (args: onChangeArgsProps) => void;
    value?: number;
}

export const useProduct = ({ onChange, product, value = 0 }: useProductProps) => {

    const [counter, setCounter] = useState(value);

    const increaseBy = (value: number) => {

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