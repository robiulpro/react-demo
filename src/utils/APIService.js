const request = (url, options) => {
    const headers = new Headers();
    if (!(options.body instanceof FormData)){
        headers.append('Content-Type', 'application/json')
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);
   
    return fetch(url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return Promise.resolve(json);
        })
    );
};

export function getStrategyData() {
    return request("http://www.mocky.io/v2/5e439b3d31000062413afffd", { method: 'GET' });
}