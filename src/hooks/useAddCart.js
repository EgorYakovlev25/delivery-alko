export default function useAddCart({ cart, setCart }) {
    const addCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        localStorage.setItem('productCart', JSON.stringify(newCart));
    };

    return {
        addCart
    }
}