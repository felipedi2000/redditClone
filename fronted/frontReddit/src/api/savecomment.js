import axios  from "axios";

export const saveComment = async (commentData) => {
    const response = await axios.post('http://localhost:8000/comments/api/comments/', commentData);
    return response.data;
}