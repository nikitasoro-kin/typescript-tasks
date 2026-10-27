function task3(): void {

    interface Product {
        id: number,
        name: string,
        price: number,
        quantity: number,
        category: string,
        description?: string,
    }

    type ProductSearchResult = Product | undefined;

    const products: Product[] = [
        {
            id: 1,
            name: "computer1",
            price: 120_000,
            quantity: 1,
            category: "tech",
        },

        {
            id: 2,
            name: "New Balance 1906r",
            price: 23_000,
            quantity: 3,
            category: "shoes",
        },

        {
            id: 3,
            name: "computer2",
            price: 220_000,
            quantity: 2,
            category: "tech",
        },

        {
            id: 4,
            name: "Monthly ChatGPT subscription",
            price: 1_000,
            quantity: 1,
            category: "digital",
        },
    ]

    const getProductsByCategory = (products: Product[], category: string): Product[] => {
        return products.filter((product) => product.category === category)
    }

    const getMostExpensiveProduct = (products: Product[]): ProductSearchResult => {
        if (!products.length) return undefined;

        let max: number = products[0].price;
        let res: Product = products[0];

        for (let i = 1; i < products.length; i++) {
            if (products[i].price > max) {
                max = products[i].price;
                res = products[i];
            }
        }

        return res;
    }

    const applyDiscount = (product: Product, discount: number): number => {
        return product.price - product.price * (discount / 100);
    }



    const filteredProducts: Product[] = getProductsByCategory(products, "tech");
    console.log(`Filtered Products:`);
    for (let i = 0; i < filteredProducts.length; i++) {
        console.log(`${filteredProducts[i].name} - ${filteredProducts[i].category}`);
    }

    const theMostExpensiveProduct: ProductSearchResult = getMostExpensiveProduct(products);
    if (theMostExpensiveProduct !== undefined) {
        console.log(`The Most Expensive Product: ${theMostExpensiveProduct.name}`);
    } else {
        console.log("There Are No Products!");
    }

    console.log(`Products with 10% discount:`);
    for (let i = 0; i < products.length; i++) {
        console.log(`${products[i].name} - ${applyDiscount(products[i], 10)}`);
    }
};

export default task3;