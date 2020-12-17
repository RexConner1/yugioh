# Deere Project 4 - Front End

## Description
This app is meant to simulate the Yu-Gi-Oh! Trading Card Game, a card-based battle game that is basically just glorified math. It is a simplified version, with normal, non-effect monsters and minimal spell/trap cards to make project completion possible. More of the game's logic (ex. effect monsters) will be added as a gold plan.
 
## Application
https://orona-yugioh-frontend.herokuapp.com/

## User Stories
- To be able to easily create new decks
- To be able to name those decks for clarity's sake
- In navigating those decks, be able to add cards
- Similarly, be able to delete cards from said deck
- To keep track of all this deck building, a login feature would be useful to save data
- To allow multiple users, a signup feature is necessary as well
- In terms of game prep, users need to be able to select which deck the want to use in the game


## The Plan
- Wireframe:
![](./planning/wireframe.jpg)

## The Approach
For a user's sake, building the deck was meant to be a simple process. As such, I did't imagine it having very many screens. Within those few screens, a user should be able to:

- Sign up for a new deck building account or login to an existing one
- Retitle the name of their decks for clarity
- Add and delete decks

By clicking on each deck entry, the app will then display the cards in that particular deck. Once there, they can likewise:

- Add a pre-built card to their deck
- Delete cards


Because the back-end utilizes a Deck and Card structure, it would therefore make sense to have Deck and Card components. These would serve as objects in the game, where one would be able to draw cards and view them. More importantly, because the user would like to play with their own deck versus a randomly generated one, EditDeck and EditCard components were added to provide this customization.

Utilizing the router/API routes as defined in the backend, it was merely a matter of using axios requests to return the information from the PostgreSQL databases. For example, when it came to the deck component, it made sense to have options to add, delete, and rename the decks. After all, these are the user stories. Likewise, after each execution, it also made sense to return the newly defined decks.

```
    getDecks = async() => {
        const response = await axios(`${backendUrl}/decks/${this.props.userId}`)

        this.setState({
            decks: response.data.decks
        })
    }

    addNewDeck = async(e) => {
        if (e.target.name.value) {
            await axios.post(`${backendUrl}/users/${this.props.userId}/newdeck`, {
                name: e.target.name.value
            })

            this.getDecks()
        }
    }

    deleteDeck = async(id) => {
        await axios.delete(`${backendUrl}/decks/${id}`)

        this.getDecks()
    }

    updateDeckName = async(e, id) => {
        await axios.put(`${backendUrl}/decks/${id}`, {
            name: e.target.value
        })

        this.getDecks()
    }
```

Much the same logic was applied to the EditCards components. Users are allowed to freely add and remove cards, much like the decks structure. However, there is no option to rename the cards. This is because the cards, which originate from a Yu-Gi-Oh API (https://db.ygoprodeck.com/api-guide/) are a fixed item. You can change the name and features much like you cannot change that a 5 of hearts is a 5 of hearts.

You can, on the other hand, associate the cards to a deck. In other words, you can add a 5 of hearts to deck 1, deck 2, deck 3, etc. Herein like the logic of the DeckCard. Because we know the deck we are dealing with due to actually being in that deck, and because we know the card is a constant entity in the database, we can simply link the two and say 'this card belongs to this deck' (see the example below, noting the deckId and the cardId)

```
    addCardToDeck = async(id) => {
        await axios.post(`${backendUrl}/decks/${this.props.match.params.id}/addcard`, {
            deckId: this.props.match.params.id,
            cardId: id
        })

        this.getCardsForDeck()
    }
```


This takes care the MVP of the project. Though the plan was to actually build a robust Yu-Gi-Oh game, the rules and implementation of the game logic is a project in itself. Essentially, this project turned into more of a Yu-Gi-Oh deck builder versus a fully functional game. 

However, this did not stop me from attempting a bit of logic. In about a day's worth of time, I set up a rough diagram of what I wanted the game to look like and how I wanted it to behave. I used this Yu-Gi-Oh field image as an example:

- Wireframe:
![](/board.jpg)


Mainly, a user is able to draw random cards from their deck into their hand and "summon" those cards to the field.

## Technologies Used
Javascript ES6   
REST, CRUD  
React
Cloud-based Hosting (Heroku)  
Bootstrap

## Unsolved issues/Future Improvements
- The Yu-Gi-Oh game itself was barely touched due to the complexity of the front and back end implementation. I would like to finish name, namelt:
    - Associate the deck to the user's deck instead of random cards
    - Align the CSS to neatly fit the images on screen
    - Allow for two player or computer battle
    - Once all components and game logic are running, allow computers to face each other, using random decks/cards in the process. The goal behind this is to create a Monte Carlo simulation in order to determine the most effective decks
- Right now, only normal monsters are imported into my API. This works from an elementary standpoint, but allowing more cards, such as spell and trap cards, would be ideal for more realistic gameplay.


