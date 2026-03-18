import { Product } from "./Product";

export function ProductGrid({ products, loadCartData }) {

    return (
        <div className="products-grid">
            {products.map((product) => {
                return (
                    <Product key={product.id} product={product} loadCartData={loadCartData} />
                )
            })}

        </div>
    );
}