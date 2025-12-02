import axios from "axios";

export interface PostItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getPosts = async () => {
  const res = await axios.get<PostItem[]>("https://jsonplaceholder.typicode.com/posts");
  return res.data;
};
