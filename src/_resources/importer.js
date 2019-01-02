const mtg = require('mtgsdk');

// Get all cards
mtg.card.all()
    .on('data', function (card) {
        console.log( `
        {
            name: "${card.name}",
            cost: "${card.manaCost}"
        }`)
    })
;
