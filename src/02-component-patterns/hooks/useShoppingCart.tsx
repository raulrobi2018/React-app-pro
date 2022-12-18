import {useState} from "react";
import {Product, ProductInCart} from "../interfaces/interfaces";

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: ProductInCart;
    }>({});

    const onProductCountChange = ({
        count,
        product
    }: {
        count: number;
        product: Product;
    }) => {
        setShoppingCart((prevShoppingCart) => {
            const productInCart: ProductInCart = prevShoppingCart[
                product.id
            ] || {...product, count: 0};

            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...prevShoppingCart,
                    [product.id]: productInCart
                };
            }

            //Delete the product
            const {[product.id]: toDelete, ...rest} = prevShoppingCart;
            return rest;

            //Cuando llega a 0 hay que quitarle el producto para que no lo muestre en pantalla
            // if (count === 0) {
            //     delete prevShoppingCart[product.id];
            //     //Desestructuro el producto que tenga la key igual a la que estoy llegando a 0
            //     //y además saco todo lo demás que venga en el array de objetos con el ...rest
            //     const {[product.id]: toDelete, ...rest} = prevShoppingCart;

            //     //Luego retorno el rest sin el producto que llegó a 0
            //     return rest;
            // }

            // return {
            //     ...prevShoppingCart,
            //     //Aquí le pasamos la key computada
            //     [product.id]: {...product, count}
            // };
        });
    };
    return {
        shoppingCart,
        onProductCountChange
    };
};
