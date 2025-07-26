import { axiosInstance } from "../services/axios"

export default function useGetReviews({ setReviews }){
    const getReviews = async () => {
        const { data } = await axiosInstance.get('/review');
        setReviews(data);
    }

    return {
        getReviews,
    }
}