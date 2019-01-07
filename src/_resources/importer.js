// query by uniques



// Get all cards with a name cardName
export default function suggestionGet(cardName){
    //start variables
    let suggestionArray = [];
    let cardLength = cardName.length;
    // noise reduction
    // enter the function only if the lenght of the search string is greater than 3
    if (cardLength >= 3){
        //start fetch
    fetch(`https://api.magicthegathering.io/v1/cards/?name=${cardName}`)
    // turn rawData into a JSON
        .then(rawData => rawData.json())
        // turn JSON into an Array for AutoSuggestReact.js to read it
        .then(jsonData => {
           suggestionArray = jsonData;
           console.log(suggestionArray)
        })}
    //return empty if no response and return the cardNames if there's response
    return cardLength === 0 ? [] : suggestionArray.filter(card =>
                card.cards.name.toLowerCase().slice(0, cardLength) === cardName
            )
}

