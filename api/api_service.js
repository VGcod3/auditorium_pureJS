const API_BASE = 'http://localhost:8000/api/v1/';

class Api {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async get(endpoint, customHeaders = {}) {
        const headers = Object.assign(
            {
                'Content-Type': 'application/json',
            },
            ...customHeaders
        );

        console.log(headers);

        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                headers,
            });
            if (!response.ok) {
                throw new Error(`Failed to GET data from ${endpoint}`);
            }
            return response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async post(endpoint, data) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`Failed to POST data to ${endpoint}`);
            }
            return response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async put(endpoint, data) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`Failed to PUT data to ${endpoint}`);
            }
            return response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async patch(endpoint, data) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`Failed to PATCH data to ${endpoint}`);
            }
            return response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async delete(endpoint) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error(`Failed to DELETE data from ${endpoint}`);
            }
            return response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

const api = new Api(API_BASE);

export default api;
