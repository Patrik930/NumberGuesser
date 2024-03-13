export const compare = (guessedNr, randNr)=>{
    if(guessedNr == randNr){
        return "Helyes megfejtés"
    }
    if(guessedNr > randNr){
        return "A te számod kissebb"
    }
    if(guessedNr < randNr){
        return "A te számod nagyobb"
    }
}