import axiosClient from "@/service/client";
import { paths } from "@/service/endpoints";
import type { AxiosResponse } from "axios";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getUserPosts = async (): Promise<AxiosResponse<Post[]>> => {
  return await axiosClient.get(paths.posts);
};
