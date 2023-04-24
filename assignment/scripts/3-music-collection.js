console.log('***** Music Collection *****')


let collection = [];

function addToCollection(title, artist, yearPublished) {
    let newAlbum = {
        albumTitle: title,
        albumArtist: artist,
        albumYear: yearPublished,
    }
    collection.push(newAlbum);
    return newAlbum;
}
console.log(addToCollection('legends', 'butler', '1993'));




console.log(collection);

console.log(addToCollection('Thriller', 'MichalJ', '1982'));
console.log(addToCollection('BackInBlack', 'AC/DC', '1980'));
console.log(addToCollection('TheBodyGuard', 'WhitneyHouston', '1992'));
console.log(addToCollection('DarkSideOfTheMoon', 'PinkFloyd', '1972'));
console.log(addToCollection('TheirGreatestHits', 'TheEagles', '1976'));
console.log(addToCollection('BatOutOfHell', 'MeatLoaf', '1977'));
console.log(addToCollection('DogOutOfHeaven', 'MeatLoaf', '1969'));

console.log(collection[0].albumArtist);
console.log(collection[0].albumTitle);
console.log(collection[0].albumYear);

console.log(collection[2])





function showCollection(array) {
    for(item of array) {
        
        console.log(`${item.albumTitle} by ${item.albumArtist}, published in ${item.albumYear}.`); 
        
        }
        
    }

showCollection(collection);


function findByArtist(artist) {
    let resultsArray = [];
    for(album of collection) {
        if(album.albumArtist == artist){
            console.log(album.albumArtist == artist)
            resultsArray.push(album) 
        }
        
    }
    return resultsArray;
}
console.log(findByArtist('Geraldo'))
console.log(findByArtist('MeatLoaf'))




function search(searchObj) {
    let results = [];
    let searchVals = Object.values(searchObj)
    for(input of collection){
        let ourVals = Object.values(input) 
        console.log(ourVals)
        let newVar = searchVals.map(x => ourVals.includes(x))
        console.log(newVar.every(x => x));
        if(newVar.every(x => x)){
            results.push(input)
        }
    }
    console.log(results)
    return results;
    
    

}
search({artist: 'MeatLoaf', year: '1969' }) 






