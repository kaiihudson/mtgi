const fs = require('fs')

const arr = []

fs.readdir('.', function(err, items) {
    for(const item of items){
        if(item.substring(item.length-3) === 'png'){
            const importFile=item.substring(0,item.length-4).replace('-','')
            console.log(`import ${importFile} from './${item}';`)
            arr.push(importFile)
        }
    }

    console.log(`const toExport = {${arr.join(',')}};`)
    console.log(`export default toExport;`)
});