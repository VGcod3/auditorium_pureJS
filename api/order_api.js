import api from './api_service';

async function fetchOrderById(id) {
    try {
        const data = await api.get(`order/${id}/`);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function createOrder(data) {
    try {
        const response = await api.post('order/', data);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function updateOrder(id, data) {
    try {
        const response = await api.put(`order/${id}/`, data);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function partialUpdateOrder(id, data) {
    try {
        const response = await api.patch(`order/${id}/`, data);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function deleteOrder(id) {
    try {
        const response = await api.delete(`order/${id}/`);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export {
    fetchOrderById,
    createOrder,
    updateOrder,
    partialUpdateOrder,
    deleteOrder,
};
