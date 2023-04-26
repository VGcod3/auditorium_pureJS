import api from './api_service';

async function fetchUserById(id) {
    try {
        const data = await api.get(`user/${id}/`);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function createUser(data) {
    try {
        const response = await api.post('user/', data);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function loginUser(email, password) {
    const credentials = btoa(`${email}:${password}`);

    try {
        const response = await api.get('user/login/', [
            {
                Authorization: `Basic ${credentials}`,
            },
        ]);

        return response;
    } catch (error) {
        const errorMessage = await error.text();
        throw new Error(errorMessage);
    }
}

async function updateUser(id, data) {
    try {
        const response = await api.put(`user/search/${id}/`, data);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function partialUpdateUser(id, data) {
    try {
        const response = await api.patch(`user/search/${id}/`, data);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function deleteUser(id) {
    try {
        const response = await api.delete(`user/search/${id}/`);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function fetchUserOrders(id) {
    try {
        const data = await api.get(`user/search/${id}/orders/`);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export {
    fetchUserById,
    createUser,
    updateUser,
    partialUpdateUser,
    deleteUser,
    fetchUserOrders,
    loginUser,
};
