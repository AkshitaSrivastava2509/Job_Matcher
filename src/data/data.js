const fs = require('fs');

let data;
try{
const rawData = fs.readFileSync('./src/data/profiles.json', 'utf-8');
data = JSON.parse(rawData);
}catch(error){
    console.log("Failed to load profiles.json:", error.message);
    process.exit(1);
}

const{bianca, alex, chris, dana, evan, tom, jack, sam, jobDescriptions} = data;

module.exports = {bianca, alex, chris,dana,evan,tom,jack, sam, jobDescriptions};


