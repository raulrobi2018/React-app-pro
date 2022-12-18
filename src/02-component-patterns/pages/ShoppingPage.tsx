import {
    ProductButtons,
    ProductCard,
    ProductImage,
    ProductTitle
} from "../components";
import "../styles/custom-styles.css";
import {products} from "../../data/products";
import {useShoppingCart} from "../hooks/useShoppingCart";

export const ShoppingPage = () => {
    const {shoppingCart, onProductCountChange} = useShoppingCart();

    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap"
                }}
            >
                {products.map((p) => (
                    <ProductCard
                        key={p.id}
                        product={p}
                        className="text-white bg-dark"
                        onChange={onProductCountChange}
                        value={shoppingCart[p.id]?.count || 0}
                    >
                        <ProductImage className="custom-image" />
                        <ProductTitle className="text-bold" />
                        <ProductButtons className="custom-buttons" />
                    </ProductCard>
                ))}
            </div>

            <div className="shopping-cart">
                {Object.entries(shoppingCart).map(([key, product]) => (
                    <ProductCard
                        product={product}
                        className="text-white bg-dark"
                        style={{
                            width: "120px"
                        }}
                        key={key}
                        value={product.count}
                        onChange={onProductCountChange}
                    >
                        <ProductImage
                            className="custom-image"
                            style={{
                                width: "80px"
                            }}
                        />
                        <ProductTitle
                            className="text-bold"
                            style={{
                                fontSize: "10px",
                                fontWeight: 400,
                                justifyContent: "center"
                            }}
                        />
                        <ProductButtons
                            className="custom-buttons"
                            style={{display: "flex", justifyContent: "center"}}
                        />
                    </ProductCard>
                ))}
            </div>

            <div>
                <code>{JSON.stringify(shoppingCart, null, 3)}</code>
            </div>
        </div>
    );
};
