import { axiosInstance } from "../services/axios"

export default function useGetProducts() {
    const getProducts = async () => {
        const { data } = await axiosInstance.get('/category');
        return data;
    }

    return {
        getProducts
    }
}