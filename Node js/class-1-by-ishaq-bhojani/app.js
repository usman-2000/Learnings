const { log } = require('console')
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        console.log("Checking")
        res.setHeader('content-type', 'text/html')
        res.write(`
            <form action='/submits' method='POST'>
            <h1>Hello Usman</h1> 
            <input placeholder='hehe' name='inputField' type='text' />  <button type='submit' >Submit</button>
            </form>
            `)
        res.end()

    } else if (req.url === '/submits') {
        console.log("Checking submit")
        let data = ''
        req.on('data', chunk => data += chunk)
        req.on('end', () => {
            console.log('Received Data:', data); // Log the received data
            res.write('Data received successfully!');
            res.end()
        })
    } else {
        res.write('404 - Not Found')
        res.end()
    }
})

server.listen(3000)