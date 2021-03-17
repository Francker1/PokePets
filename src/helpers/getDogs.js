import { data } from "../data/dogs";

export const getDogs = async () => {

    const resp = await data;
    return resp;
}