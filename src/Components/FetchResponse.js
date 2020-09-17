// Simple module to retrieve data using fetchAPI

const getJSONResponse = async (endpoint, query, variables = {}) => {
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {'Content-type' : 'application/json' },
        body: JSON.stringify({query, variables})
    });

    return response.json();
}

export default getJSONResponse;