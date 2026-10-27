function task2(): void {

    const getItemTotal = (item: { price: number, quantity: number}): number => {
        return item.price * item.quantity;
    };

    const getCartTotal = (cart: { price: number, quantity: number}[]): number => {
        let acc = 0;
        for (let i = 0; i < cart.length; i++) {
            acc += getItemTotal(cart[i]);
        }

        return acc;
    }

    const getExpensiveItems = (cart: { price: number, quantity: number, name: string}[], minPrice: number): { price: number, quantity: number, name: string}[] => {
        const res: { price: number, quantity: number, name: string}[] = [];
        for (let i = 0; i < cart.length; i++) {
            if (getItemTotal(cart[i]) > minPrice) {
                res.push(cart[i]);
            }
        }

        return res;
    }

    const cart = [
        {
            name: "computer1",
            price: 120_000,
            quantity: 1,
        },

        {
            name: "computer2",
            price: 150_000,
            quantity: 3,
        },

        {
            name: "computer3",
            price: 220_000,
            quantity: 2,
        }
    ]

    console.log(`Cart Total: ${getCartTotal(cart)}`);
    
    const expenciveItems = getExpensiveItems(cart, 200_000);

    console.log("Expensive Items:")
    for (let i = 0; i < expenciveItems.length; i++) {
        console.log(`${expenciveItems[i].name} - ${getItemTotal(expenciveItems[i])}`);
    }

};

export default task2;