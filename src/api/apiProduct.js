import axios from "axios";
import config from "../config/config";

const findAll = async () => {
    try {
        const result = await axios.get(`${config.localDomain}product/`);
        return result.data;
    } catch (error) {
        return error;
    }
};

const addProduct = async (payload) => {
    try {
        const result = await axios.post(
            `${config.localDomain}product/`,
            payload
        );
        return result;
    } catch (error) {
        return error;
    }
};

export default { findAll, addProduct};
