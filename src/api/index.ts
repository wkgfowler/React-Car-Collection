let token = `f371b79222f74e6241cea0808f36eab81800632d43c4dcad`

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://car-collection-rangers59-wf.herokuapp.com/api/cars`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to find car in the garage.')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://car-collection-rangers59-wf.herokuapp.com/api/cars`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        console.log('for darin')
        if (!response.ok){
            throw new Error('Failed to manufacture vehicle.')
        }

        return await response.json()
    },

    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://car-collection-rangers59-wf.herokuapp.com/api/cars/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}'`
            },
            body: JSON.stringify(data)
        });
    },
    delete: async(id:string) => {
        const response = await fetch(`https://car-collection-rangers59-wf.herokuapp.com/api/cars/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}