import axios  from "axios";

export const getAllComments = async () => {
    const response = await axios.get('http://localhost:8000/comments/api/comments/');
    return response.data;
}