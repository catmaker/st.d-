import { api } from "../api";

export const getHello = async () => {
  try {
    const data = await api.get("/hello");
    console.log({data})
    return data;
  } catch (err: any) {
    console.log(err);
  }
};