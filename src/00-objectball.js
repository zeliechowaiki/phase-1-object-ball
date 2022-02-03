const gameObject = function() {
    return {home: {
        teamName: 'Brooklyn Nets',
        colors: ['Black', 'White'],
        players: {
            'Alan Anderson': {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            },
            'Reggie Evans': {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7
            },
            'Brook Lopez': {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15
            },
            'Mason Plumlee': {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5
            },
            'Jason Terry': {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1
            }
        }
    }, away: {
        teamName: 'Charlotte Hornets',
        colors: ['Turquoise', 'Purple'],
        players: {
            'Jeff Adrien': {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2
            },
            'Bismak Biyombo': {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 2
            },
            'DeSagna Diop': {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5
            },
            'Ben Gordon': {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0
            },
            'Brendan Haywood': {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12
            }
        }
    }
};
}
function numPointsScored(player) {
    let game = gameObject();
    for (let teamKey in game){
        let playerKey = game[teamKey].players;
        if (player in playerKey){
            return playerKey[player].points;
        }
    }
}
//console.log(numPointsScored('DeSagna Diop'));
function shoeSize(player) {
    let game = gameObject();
    for (let teamKey in game){
        let playerKey = game[teamKey].players;
        if (player in playerKey){
            return playerKey[player].shoe;
        }
    }
}
//console.log(shoeSize('DeSagna Diop'));
function teamColors(team) {
    let game = gameObject();
    for (let teamKey in game){
        if (game[teamKey].teamName === team){
            return game[teamKey].colors;
        };
    }
}
//console.log(teamColors('Charlotte Hornets'));
function teamNames() {
    let game = gameObject();
    let nameList = [];
    for (let teamKey in game) {
        nameList.push(game[teamKey].teamName);
    }
    return nameList;
}
//console.log(teamNames());
function playerNumbers(team) {
    let game = gameObject();
    let numberList = [];
    for (let teamKey in game){
        if (game[teamKey].teamName === team){
            let playerKey = game[teamKey].players;
            for (player in playerKey) {
                numberList.push(playerKey[player].number);
            };
        }
    }
    return numberList;
}
//console.log(playerNumbers('Charlotte Hornets'));
function playerStats(player){
    let game = gameObject();
    for (let teamKey in game){
        let playerKey = game[teamKey].players;
        if (player in playerKey){
            return playerKey[player];
        }
    }
}
//console.log(playerStats('DeSagna Diop'));
function bigShoeRebounds(){
    let game = gameObject();
    let bigShoe = 0;
    let bigFoot;
    for (let teamKey in game){
        let playerKey = game[teamKey].players;
        for (player in playerKey) {
            let playerShoe = playerKey[player].shoe;
            if (playerShoe > bigShoe){
                bigShoe = playerShoe;
                bigFoot = player;
            }
            }
        }
    for (let teamKey in game){
        let playerKey = game[teamKey].players;
        if (bigFoot in playerKey){
            return playerKey[bigFoot].rebounds;
        }
    }
}
//console.log(bigShoeRebounds());
function mostPointsScored(){
    let game = gameObject();
    let bigPoints = 0;
    let bigShooter;
    for (let teamKey in game){
        let playerKey = game[teamKey].players;
        for (player in playerKey) {
            let playerPoints = playerKey[player].points;
            if (playerPoints > bigPoints){
                bigPoints = playerPoints;
                bigShooter = player;
            }
            }
        }
    return bigShooter;
}
//console.log(mostPointsScored());
function winningTeam(){
    let game = gameObject();
    let bigTeamPoints = 0;
    let bigTeam;
    for (let teamKey in game){
        let teamPoints = 0;
        let playerKey = game[teamKey].players;
        for (player in playerKey){
            teamPoints += playerKey[player].points;
        }
        if (teamPoints > bigTeamPoints){
            bigTeamPoints = teamPoints;
            bigTeam = game[teamKey].teamName;
        }
    }
    return bigTeam;
}
//console.log(winningTeam());
function playerWithLongestName(){
    let game = gameObject();
    let longNameLength = 0;
    let longNamePlayer;
    for (let teamKey in game){
        let playerKey = game[teamKey].players;
        for (player in playerKey) {;
            if (player.length > longNameLength){
                longNameLength = player.length;
                longNamePlayer = player;
            }
            }
        }
    return longNamePlayer;
}
//console.log(playerWithLongestName());
function doesLongNameStealATon(){
    let game = gameObject();
    let longName = playerWithLongestName();
    let bigSteals = 0;
    let bigStealer;
    for (let teamKey in game){
        let playerKey = game[teamKey].players;
        for (player in playerKey) {
            let playerSteals = playerKey[player].steals;
            if (playerSteals > bigSteals){
                bigSteals = playerSteals;
                bigStealer = player;
            }
            }
        }
    return bigStealer === longName;
}
//console.log(doesLongNameStealATon());