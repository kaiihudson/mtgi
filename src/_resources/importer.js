
// Get all cards with a name cardName
export default function suggestionGet(cardName){
    //start variables
    let suggestionArray = [];
    let cardLength = cardName.length;
    // noise reduction
    // enter the function only if the lenght of the search string is greater than 3
    if (cardLength >= 2){
        //start fetch
        let suggestionArray = fetch(`https://api.magicthegathering.io/v1/cards/?name=${cardName}`)
        // turn rawData into a JSON
            .then(rawData => rawData.json())
            // turn JSON into an Array for AutoSuggestReact.js to read it
            .then(jsonData => {
                suggestionArray = jsonData;
                console.log(suggestionArray)
            })}
    // async example functions
    function getMatchingCard(cardName) {
        const escapedValue = escapeRegexCharacters(cardName.trim());

        if (escapedValue === '') {
            return suggestionArray = [];
        }

        const regex = new RegExp('^' + escapedValue, 'i');

        return suggestionArray.filter(card => regex.test(card.cards.name));
    }
    function escapeRegexCharacters(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    //return empty if no response and return the cardNames if there's response
    return getMatchingCard(cardName)
}





