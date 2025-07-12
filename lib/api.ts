import axios from "axios"

const api = axios.create({
    baseURL: "http://127.0.0.1:8008"
})

// GET user by email
export async function getExistingUser(email: string | undefined | null){
    try{
        const response = await api.get(`existing_user/${email}`)
        return response.data
    }

    catch(err: unknown){
        if(err instanceof Error){
            throw new Error(err.message)
        }

        throw new Error("An unknown error occured")
    }
}

// POST new user

export async function createNewUser(data: {
    email: string | null | undefined;
    username: string | null | undefined;
    first_name: string | null | undefined;
    last_name: string | null | undefined;
    profile_picture_url: string | null ;
}){
    try{
        const response = await api.post('create_user/', data)
        return response.data
    }
    catch(err: unknown){
        if(err instanceof Error){
            throw new Error(err.message)
        }

        throw new Error("An unknown error occured")
    }
}