const BASE_URL = 'https://api.escuelajs.co/'

export const GET = async (id = '') => {
    const res = await fetch (BASE_URL + `api/v1/products/${id}?limit=8&offset=0`)
    
    const data = await res.json();

    console.log(data);

    return data
}


/* export const POST = async (object) => {
    const res = await fetch(BASE_URL + 'api/v1/products', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(object)
    });

    const data = await res.json();

    return data;
} */

    export const PUT = async (id, object) => {
        const res = await fetch (BASE_URL + `api/v1/products/${id}`, {

        method: "PUT",
        headers: {
            'Content-Type': 'application/json; charset=utf-8' 
        },
            body: JSON.stringify(object)
        })
        
        const data = await res.json();
    
        return data
    }

/* export const PATCH = async (id, object) => {
    const res = await fetch (BASE_URL + `api/v1/products/${id}`, {

    method: "PATCH",
    headers: {
        'Content-Type': 'application/json; charset=utf-8' 
    },
        body: JSON.stringify(object)
    })
    
    const data = await res.json();

    return data
} */


export const DELETE = async (id) => {
    const res= await fetch (BASE_URL + `api/v1/products/${id}`, {

        method: 'DELETE'

});

    const data = res.json();

    return data
}




