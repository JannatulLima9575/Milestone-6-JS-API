const fetchData = () => {
    return new Promise((resolve, reject) => {
        const status = true;
        if(status) {
            const mockData = {
                json:()=> Promise.resolve({name:'Lima'})
            }
            resolve(mockData)
        }
        else {
            reject('404')
        }
    })
}
fetchData()
.then(Response => Response.json())
.then(data => console.log(data))
.catch(error => console.log(error))