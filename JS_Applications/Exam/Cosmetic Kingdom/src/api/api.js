import { clearUserData, getUserData } from "../util.js"

const host = 'http://localhost:3030';

//makes the requests
async function request(url, method, data){
    const options = {
        method,
        headers: {}
    };

    if(data != undefined){
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();
    if(userData){
        options.headers['X-Authorization'] = userData.accessToken;
    } 

    try {
        //get data
        const response = await fetch(host + url, options);

        //error
        if(response.ok == false){

            //refuses to authorise
            if(response.status == 403){
                clearUserData();
            }
            const error = await response.json();
            throw new Error(error.message);
        }

        //no content
        if(response.status == 204){
            return response;
        }
        else{
            //returns the data
            return response.json();
        }
    } 
    catch (error) {
        alert(error.message);
        throw error;
    }  
}

export async function get(url){
    return request(url, 'get');
}

export async function post(url, data){
    return request(url, 'post', data);
}

export async function put(url, data){
    return request(url, 'put', data);
}

export async function del(url){
    return request(url, 'delete');
}