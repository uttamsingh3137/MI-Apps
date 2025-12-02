import type { Post } from "../types/postTypes";
import { api } from "./apiClients";

export const fetchPosts = async() : Promise<Post[]> =>{
    const res = await api.get("/posts");
    re
}