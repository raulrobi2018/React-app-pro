import {
    ProductButtons,
    ProductCard,
    ProductImage,
    ProductTitle
} from "../components";
import "../styles/custom-styles.css";
import {products} from "../../data/products";
import styles from "../styles/styles.module.css";

const product = products[0];

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <ProductCard
                product={product}
                key={product.id}
                initialValues={{
                    count: 4
                    //maxCount: 10
                }}
            >
                {({reset, isMaxCountReached, increaseBy, count, maxCount}) => (
                    <>
                        <ProductImage />
                        <ProductTitle />
                        <ProductButtons />
                    </>
                )}
            </ProductCard>
        </div>
    );
};
