import { commonAPI } from './commonApi';
import { serverURL } from './server';

// export const uploadMessage = async (reqBody) => {
//     try {
//         const response = await commonAPI('POST', `${serverURL}/messages`, reqBody);
//         return response;
//     } catch (error) {
//         throw error;
//     }
// };

export const uploadMessage = async (reqBody)=>{
    return await commonAPI("POST",`${serverURL}/messages`,reqBody)
}

export const getAllMessages = async ()=>{
    return await commonAPI("GET",`${serverURL}/messages`,"")
}

export const deleteAMessage = async (id)=>{
    return await commonAPI("DELETE",`${serverURL}/messages/${id}`,{})
}

// export const updateMessage = async (id,newMessage)=>{
//     return await commonAPI("PUT",`${serverURL}/messages/${id}`,newMessage)
// }

export const updateMessage = async (id, newMessage) => {
    try {
        const response = await fetch(`${serverURL}/messages/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: newMessage }),
        });
        if (!response.ok) {
            const error = await response.text(); // Get error details
            throw new Error(`Network response was not ok: ${error}`);
        }
        return response.json();
    } catch (error) {
        console.error('Error updating message:', error);
        throw error;
    }
};