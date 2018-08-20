var fs = require('fs')
var source = fs.readFileSync('../timg.jpg')

fs.writeFileSync('stream_copy_logo.jpg', source)