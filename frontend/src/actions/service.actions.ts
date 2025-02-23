'use server'

const API_BASE_URL = process.env.API_URL

export const getServices = async () => {
    const response = await fetch(`${API_BASE_URL}services/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

export const getProjects = async () => {
    const response = await fetch(`${API_BASE_URL}projects/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

export const getService = async (slug: string) => {
    const response = await fetch(`${API_BASE_URL}service/${slug}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}