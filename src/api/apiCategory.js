import axios from "axios";
import config from "../config/config";

const list = async () => {
    try {
        const result = await axios.get(`${config.localDomain}category/`);
        return result.data;
    } catch (error) {
        return await error.message;
    }
};

// imput data row baru
const createRow = async (payload) => {
    try {
        const result = await axios.post(
            `${config.localDomain}category/`,
            payload
        );
        return result;
    } catch (error) {
        return error;
    }
};

// mencari row berdasarkan id
// mengirimkan id
const findRow = async (id) => {
    try {
        const result = await axios.get(`${config.localDomain}category/${id}`);
        return result.data;
    } catch (error) {
        return error;
    }
};

// update row
const updateRow = async (data) => {
    try {
        const result = await axios.put(
            `${config.localDomain}category/${data.cate_id}`,
            data
        );
        return result;
    } catch (error) {
        return error;
    }
};

const deleteRow = async(id)=>{
    try {
        const result = await axios.delete(`${config.localDomain}category/${id}`);
        return  result;
    } catch (error) {
        return error;
        
    }
}

export default {
    list,
    createRow,
    findRow,
    updateRow,
    deleteRow
};
