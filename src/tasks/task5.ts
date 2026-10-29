function task5() {
    
    interface Product {
        id: number,
        name: string,
        price: number,
        inStock: boolean,
    }

    interface OkResponse {
        products: Product[],
        code: number,
        message: string,
    }

    interface ErrorResponse {
        code: number,
        message: string,
    }

    type ApiResponse = OkResponse | ErrorResponse | null;

    const products: Product[] = [
        {
            id: 1,
            name: "computer1",
            price: 120_000,
            inStock: true,
        },

        {
            id: 2,
            name: "New Balance 1906r",
            price: 23_000,
            inStock: true,
    
        },

        {
            id: 3,
            name: "computer2",
            price: 220_000,
            inStock: false,
        },

        {
            id: 4,
            name: "Monthly ChatGPT subscription",
            price: 1_000,
            inStock: true,
        },
    ]

    const response: ApiResponse = {
        products: products,
        code: 201,
        message: "dfdfbdbdbd",
    }

    const handleResponse = (response: ApiResponse): void => {
        if (response === null) {
            console.log("Сервер не ответил");
            return;
        }

        if ("products" in response) {
            for (let i = 0; i < response.products.length; i++) {
                console.log(`${response.products[i].name} - ${response.products[i].price}`);
            }
            return;
        }

        console.log(response.message);
    }

    const isProductAvailable = (product: Product): boolean => {
        return product.inStock;
    }

    const getAvailableProducts = (products: Product[]): Product[] => {
        const filteredProducts = products.filter((product) => {
            return isProductAvailable(product);
        });

        return filteredProducts;
    }

    const getProducts = (response: ApiResponse): Product[] => {
        if (response === null) return []
        if ("products" in response) return response.products;
        return [];
    }

    handleResponse(response);

    const responseProducts = getProducts(response);

    console.log(getAvailableProducts(responseProducts));

};

export default task5;