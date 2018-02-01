
const winnerlist = function(req, res){
    res.render('goldenball',{
        winners:
        [
            {year:'1990', winner:'Salvatore Schillaci (Italy)'},
            {year:'1994', winner:'Romario (Brazil)'},
            {year:'1998', winner:'Ronaldo (Brazil)'},
            {year:'2002', winner:'Oliver Kahn (Germany)'},
            {year:'2006', winner:'Zinedine Zinade(France)'},
            {year:'2010', winner:'Diego Forlan (Uruquay)'},
            {year:'2014', winner:'Lionel Messi (Argentina)'}

        ]});
    };
module.exports = {
    winnerlist

};