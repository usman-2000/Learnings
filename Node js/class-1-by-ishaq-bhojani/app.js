const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        console.log("Checking")
        res.setHeader('content-type', 'text/html')
        res.write(`
            <form action='/submit' method='POST'>
            <h1>Hello Usman</h1> 
            <input placeholder='hehe' type= 'text' /> <button type='submit' >Submit</button>
            </form>
            `)
        res.end()

    } else if (req.url == '/submit') {
        res.write(req.url)
    }

    else {
        res.write('404 - Not Found')
        res.end()
    }
})

server.listen(3000)