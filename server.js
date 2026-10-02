const express = require('express');
const {bianca, alex, chris, dana, evan, tom, jack, sam, jobDescriptions} = require('./src/data/data');
const {matchProfile} = require('./src/matcher');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();

const allProfiles = {bianca, alex, chris, dana, evan, tom, jack, sam};

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));

app.get('/profiles',(req,res)=>{

    const profileNames = Object.keys(allProfiles).map(key=>({
        id: allProfiles[key].id,
        name: allProfiles[key].name 
    }));
    res.json(profileNames);
});

app.get('/jobDescriptions',(req,res)=>{
    const jdList = Object.keys(jobDescriptions).map(key =>({
        key: key,
        title: jobDescriptions[key].title
    }));
    res.json(jdList);

});

app.get('/match/:profileName/:jdKey', (req,res)=>{

    const profileName = req.params.profileName;
    const jdKey = req.params.jdKey;
    
    const profile = allProfiles[profileName];
    const jobDescription = jobDescriptions[jdKey];

    if (!profile) {
        return res.status(404).json({ error: `Profile '${profileName}' not found.` });
    }
    if (!jobDescription) {
        return res.status(404).json({ error: `Job description '${jdKey}' not found.` });
    }

    const result = matchProfile(profile,jobDescription);

    res.json(result);
});

app.listen(3000, () =>{
    console.log('Server running on http://localhost:3000');
});