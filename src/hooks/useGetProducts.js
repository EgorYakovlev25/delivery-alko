import { axiosInstance } from "../services/axios"
import category from "../bd/category.json"

export default function useGetProducts() {
    const getProducts = async () => {
        const { data } = await axiosInstance.get('/category');
        return data;
    }

    return {
        getProducts
    }
}