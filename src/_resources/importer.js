
// Get all cards with a name cardName
function suggestionGet(cardName){
    //start variables
    let cardLength = cardName.length;
    // noise reduction
    // enter the function only if the length of the search string is greater than 3
    if (cardLength >= 2){
        //start fetch
        let suggestionArray = fetch(`https://api.magicthegathering.io/v1/cards/?name=${cardName}`)
        // turn rawData into a JSON
            .then(rawData => rawData.json())
            // turn JSON into an Array for AutoSuggestReact.js to read it
            .then(jsonData => {
                console.log(jsonData);
                suggestionArray = jsonData;
                console.log(suggestionArray)
            })
    }}

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export default function getMatchingCard(cardName) {
    let suggestionArray = suggestionGet(cardName);
        const escapedValue = escapeRegexCharacters(cardName.trim());

        if (escapedValue === '') {
            return [];
        }

        const regex = new RegExp('^' + escapedValue, 'i');
        console.log(suggestionArray);
        if ( suggestionArray ){
            return suggestionArray.filter(card => regex.test(card.cards.name))
        }
        else {return  []}
    }





