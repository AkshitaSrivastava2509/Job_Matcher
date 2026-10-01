const {isMustHaveMet} = require("./matcher");

function printResults(candidateName, results) {
    const mustHaves = results.filter(r => r.mustHave);
    const niceToHaves = results.filter(r => !r.mustHave);

    const statusIcon = {
        missing: "❌",
        below: "⚠️",
        meets: "✅",
        exceeds: "✅"
    };

    console.log(`\n=== ${candidateName} ===`);
    console.log("\nMust-have skills:");
    for (const r of mustHaves) {
        console.log(`${statusIcon[r.status]} ${r.skillName} — ${r.status}`);
    }

    console.log("\nNice-to-have skills:");
    for (const r of niceToHaves) {
        console.log(`${statusIcon[r.status]} ${r.skillName} — ${r.status}`);
    }

   
    const unmetMustHaves = mustHaves.filter(r => !isMustHaveMet(r.status));
    const metMustHaves = mustHaves.length - unmetMustHaves.length;

console.log("\nSummary:");
console.log(`Must-haves met: ${metMustHaves} of ${mustHaves.length}`);
if (unmetMustHaves.length > 0) {
    const names = unmetMustHaves.map(r => `${r.skillName} (${r.status})`).join(", ");
    console.log(`Critical gap: ${names}`);
    console.log("Recruiter flag: Not all must-haves met — review before proceeding");
} else {
    console.log("Recruiter flag: All must-haves met");
}
}

module.exports = {printResults};