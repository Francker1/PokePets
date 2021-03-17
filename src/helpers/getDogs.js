import { data } from "../data/dogs";

export const getDogs = async () => {

    const resp = await data;
    console.log(resp);
    return resp;
}