function task1(): void {
    
    const getFinalPrice = (initialPrice: number, discount: number): number => {
        const finalPrice: number = Math.ceil(initialPrice - initialPrice / 100 * discount);
        return finalPrice;
    };

    const isAvailable = (product: { inStock: boolean }): boolean => {
        return product.inStock;
    }

    const products = [
        {
            name: "computer1",
            price: 120_000,
            inStock: true,
            discount: 15,
        },

        {
            name: "computer2",
            price: 150_000,
            inStock: false,
            discount: 10,
        },

        {
            name: "computer3",
            price: 220_000,
            inStock: true,
            discount: 5,
        }
    ]

    for (let i = 0; i < products.length; i++) {
        if (isAvailable(products[i])) {
            console.log(`${products[i].name} - ${getFinalPrice(products[i].price, products[i].discount)}`);
        }
    }
};

export default task1;