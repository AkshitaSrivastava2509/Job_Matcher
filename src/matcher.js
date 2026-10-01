function findSkills(skillLists, skillname){

    if(!skillLists){
        return undefined;
    }
    return skillLists.find(s=> s.name ===skillname);

}

function getStatus(requiredLevel, candidateLevel) {
    if (candidateLevel === 0) {
        return "missing";
    } else if (candidateLevel < requiredLevel) {
        return "below";
    } else if (candidateLevel === requiredLevel) {
        return "meets";
    } else {
        return "exceeds";
    }
}

function matchProfile(profile,jobDescription){
    const results= [];

    for (const req of jobDescription.requirements){
        const candidateSkill = findSkills(profile.skills,req.skillName);
        const candidateLevel = candidateSkill ? candidateSkill.level : 0;

    results.push({
            skillName: req.skillName,
            mustHave: req.mustHave,
            requiredLevel: req.requiredLevel,
            candidateLevel: candidateLevel,
            status: getStatus(req.requiredLevel, candidateLevel)
        });
    }

         return results;
    
}   

function isMustHaveMet(status){
    if (status === "meets" || status === "exceeds"){
        return true;
    }else{
        return false;
    }
   }
module.exports = {matchProfile, isMustHaveMet, getStatus};