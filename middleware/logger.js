
module.exports = (format) =>{
    return (req, res) => {
    switch (format){

        case "short":
            console.log(req.method)
            break

        case "long":
            const time = new Date().toISOString()
            console.log( `[ ${time} ] ${req.ip} ${req.url} ${req.method}`)
            break
    } 
    next()
}
}
