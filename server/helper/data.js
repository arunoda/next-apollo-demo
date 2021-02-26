const casual = require('casual');
const fs = require('fs');
const path = require('path');

const dataCount = 2000;
const fileName = 'data.json';

casual.define('contact',function(){
    return {
        name: casual.full_name,
        address: casual.address,
        phone: casual.phone,
        email: casual.email
    }
})

const generateData = count =>{
    const data=[];
    for(let i=0;i<count;i++){
        data.push(casual.contact);
    }
    return data;
}

const writeToFile = (data,fileName)=>fs.writeFileSync(path.join(process.cwd(),'data',fileName),JSON.stringify(data))

const readData =() =>fs.readFileSync(path.join(process.cwd(),'data',fileName));

const generateAndSave = () =>{
    const data= generateData(dataCount);
    writeToFile(data,fileName);
}

module.exports ={
    generateAndSave,
    readData
}