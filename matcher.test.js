const{getStatus, matchProfile} = require("./src/matcher.js");
const assert = require("assert");
const{bianca, chris, jobDescriptions} = require("./src/data/data.js");


console.log("** Testing the candidate level and requiredlevel logic********")
const meetResult = getStatus(2,2);
assert.strictEqual(meetResult,"meets");
console.log("Meets assertion is passed");

const missingResult = getStatus(2,0);
assert.strictEqual(missingResult,"missing");
console.log("Missing assertion is passed");

const belowResult = getStatus(2,1);
assert.strictEqual(belowResult,"below");
console.log("Below assertion is passed");

const exceedsResult = getStatus(2,3);
assert.strictEqual(exceedsResult,"exceeds");
console.log("Exceeds assertion is passed");

console.log("*****All testcases are passed*****")

console.log("*** Testing Integration****");
const result = matchProfile(bianca,jobDescriptions.juniorWebDeveloper);

const resulMissing = result.find(s=>s.skillName=== "React");
assert.strictEqual(resulMissing.status,"missing");
console.log("Missing assertion is passed");

const resultExceeds = result.find(s=>s.skillName === "JavaScript");
assert.strictEqual(resultExceeds.status,"exceeds");
console.log("Exceeds assertion is passed");

const resultMeets = result.find(s=>s.skillName === "Debugging");
assert.strictEqual(resultMeets.status,"meets");
console.log("Meets assertion is passed");

const chrisResults = matchProfile(chris, jobDescriptions.juniorWebDeveloper);
const chrisHTML = chrisResults.find(s => s.skillName === "HTML/CSS");
assert.strictEqual(chrisHTML.status, "below");
console.log("Below assertion (Chris) passed");


console.log("****ALL Testcase passed*****");