export default function useDeleteCart({ cart, setCart }) {
    const deleteCart = (product) => {
        const newCart = cart.filter(item => !(item.name === product.name && item.price === product.price));
        setCart(newCart);
        localStorage.setItem('productCart', JSON.stringify(newCart));
    };

    return {
        deleteCart
    }
}