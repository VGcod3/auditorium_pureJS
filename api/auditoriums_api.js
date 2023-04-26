import api from './api_service';

async function fetchAuditoriums() {
    try {
        const data = await api.get('auditorium/');
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function createAuditorium(data) {
    try {
        const response = await api.post('auditorium/', data);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function fetchAuditoriumById(id) {
    try {
        const data = await api.get(`auditorium/search/${id}/`);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function updateAuditorium(id, data) {
    try {
        const response = await api.put(`auditorium/${id}/update/`, data);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function deleteAuditorium(id) {
    try {
        const response = await api.delete(`auditorium/${id}/delete/`);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export {
    fetchAuditoriumById,
    fetchAuditoriums,
    createAuditorium,
    updateAuditorium,
    deleteAuditorium,
};
