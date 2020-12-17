# Deere Project 4 - Front End

## Description
This app is meant to simulate the Yu-Gi-Oh! Trading Card Game, a card-based battle game that is basically just glorified math. It is a simplified version, with normal, non-effect monsters and minimal spell/trap cards to make project completion possible. More of the game's logic (ex. effect monsters) will be added as a gold plan.

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

