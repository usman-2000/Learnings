const fs = require('fs')

/*handling the input command-line arguments*/
let args = process.argv[2];
let fileName = process.argv[3];

/*if no options is entered, the 2nd index is then treated as the file name*/
if (!fileName) {
    fileName = args;
    args = null;
}

if (fs.existsSync(fileName)) {
    switch (args) {
        case '-b':
            console.log(`${byteCount()} ===>>> ${fileName}`)
            break

        case '-l':
            console.log(`${lineCount()} ===>>> ${fileName}`)
            break

        case '-w':
            console.log(`${wordCount()} ===>>> ${fileName}`)
            break

        case 'c':
            console.log(`${charCount()} ===>>> ${fileName}`)
            break

        case null:
            console.log(`${byteCount()} ${lineCount()} ${charCount()} ===>>> ${fileName}`)
            break
    }
} else {
    console.log("The filename you entered doesn't exit. Please try another filename")
}


const byteCount = () => {
    try {
        let data = fs.readFileSync(fileName)
        return data.length
    } catch (error) {
        return error
    }
}

const lineCount = () => {
    try {
        let data = fs.readFileSync(fileName, 'utf-8')
        return data.split(/\r\n|\r|\n/).length
    } catch (error) {
        return error
    }
}

const wordCount = () => {
    try {
        let data = fs.readFileSync(fileName, 'utf-8')
        return data.split(' ').length
    } catch (error) {
        return error
    }
}

const charCount = () => {
    try {
        let data = fs.readFileSync(fileName, 'utf-8')
        return data.length
    } catch (error) {
        return error
    }
}