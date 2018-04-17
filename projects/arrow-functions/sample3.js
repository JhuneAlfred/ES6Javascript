const team = {
    members: ['Alex', 'Jane'],
    teamName: 'Blue Team',
    teamSummary: function () {
        return this.members.map(member => {
            return `${member} is on team ${this.teamName}`  //or team.teamName
        })
    }
}

//Another option replacing function() with fat arrow
//this.members becomes team.members
const team2 = {
    members: ['Alex', 'Jane'],
    teamName: 'Blue Team',
    teamSummary: () => {
        return team.members.map(member => {
            return `${member} is on team ${this.teamName}` //or team.teamName
        })
    }
}

console.log(team.teamSummary())

console.log(team2.teamSummary())