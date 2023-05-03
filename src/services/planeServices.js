import axios from "axios";
import {BASE_URL, PLANES} from "../utils/apiurl";

export const getPlanesData = async () => {
    const planes = await axios.get(BASE_URL+PLANES.getall)
    return planes.data;
}
export const getOnePlanesData = async (id) => {
    const planes = await axios.get(BASE_URL+PLANES.getone+id)
    return planes.data;
}
export const postPlanesData = async (data) => {
    const planes = await axios.post(BASE_URL+PLANES.create,data)
    return planes.data;
}
