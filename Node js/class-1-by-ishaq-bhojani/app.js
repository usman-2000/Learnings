const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        console.log("Checking")
        res.write(`<h1>Hello Usman</h1> 
            <input placeholder='hehe' type= 'text' />`)
        res.end()

    } else {
        res.write('404 - Not Found')
        res.end()
    }
})

server.listen(3000)