// ✨ create your `quotesSlice` in this module
import { createSlice } from "@reduxjs/toolkit"

let id = 1
const getNextId = () => id++
const initialState = {
  displayAllQuotes: true,
  highlightedQuote: null,
  quotes: [
    {
      id: getNextId(),
      quoteText: "Don't cry because it's over, smile because it happened.",
      authorName: "Dr. Seuss",
      apocryphal: false,
    },
    {
      id: getNextId(),
      quoteText: "So many books, so little time.",
      authorName: "Frank Zappa",
      apocryphal: false,
    },
    {
      id: getNextId(),
      quoteText: "Be yourself; everyone else is already taken.",
      authorName: "Oscar Wilde",
      apocryphal: false,
    },
  ],
}

const slice = createSlice({
  name: "quotes_state",
  initialState: initialState,
  reducers: {
    deleteQuote (state, action) {
      state.quotes = state.quotes.filter( qt => qt.id !== action.payload)
    },
    editQuoteAuthenticity (state, action) {
      state.quotes = state.quotes.map ( qt => {
        if (qt.id === action.payload) qt.apocryphal = !qt.apocryphal
        return qt
      })
    },
    setHighlightedQuote(state,action) {
      state.highlightedQuote = action.payload
    },
    toggleVisibility(state) {
      state.displayAllQuotes = !state.displayAllQuotes
    },
    createQuote: {
      prepare(quoteText, authorName) {
        const newQuote = {id: getNextId(), quoteText: quoteText, authorName: authorName, apocryphal: false}
        return {payload: newQuote}
      },
      reducer(state,action) {
        state.quotes.push(action.payload)
      }
    }
  }
})

export default slice.reducer 
export const {deleteQuote, editQuoteAuthenticity, setHighlightedQuote, toggleVisibility, createQuote} = slice.actions