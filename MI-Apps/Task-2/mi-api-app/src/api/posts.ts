import axios from "axios";

export interface PostItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getPosts = async (): Promise<PostItem[]> => {
  try {
    const res = await axios.get<PostItem[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return res.data;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return []; 
  }
};
