const { bianca, alex, chris, dana, evan,tom,jack, sam, jobDescriptions } = require('./src/data/data');
const { matchProfile } = require('./src/matcher');
const { printResults } = require('./src/display');
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

rl.question("Which role?(dev/qa): ",(answer)=>{
    console.log("You chose: ", answer);

    if(answer === "dev"){
        const developerProfiles = [bianca, alex, chris, dana, evan];

        console.log("\n########## JUNIOR WEB DEVELOPER ##########");
        for (const profile of developerProfiles) {
        const results = matchProfile(profile, jobDescriptions.juniorWebDeveloper);
        printResults(profile.name, results);
}
    }else if(answer === "qa"){

        const testerProfiles = [tom, jack, sam];
        console.log("\n########## QA AUTOMATION ENGINEER ##########");
       for (const profile of testerProfiles) {
       const results = matchProfile(profile, jobDescriptions.qaAutomationEngineer);
       printResults(profile.name, results);
}

    }else{
        console.log("Unrecognized option. Please enter 'dev' or 'qa'.");
    }

    rl.close();
});

//const brokenProfile = {name: "Incomplete Person Profile"};
//const results = matchProfile(brokenProfile, jobDescriptions);
//printResults(brokenProfile.name,results);     

/*const emptyProfile = { name: "Empty Skills Person", skills: [] };
const results = matchProfile(emptyProfile, jobDescriptions);
printResults(emptyProfile.name,results);*/     
