import { createContext, useReducer } from "react"

const INITIAL_VALUE = {
  city: undefined,
  date: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined
  }
}

export const SearchContext = createContext(INITIAL_VALUE)

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_VALUE;
    default:
      return state;
  }
}


export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_VALUE)

  return (
    <SearchContext.Provider value={{
      city: state.city,
      dates: state.dates,
      options: state.options,
      dispatch,
    }} >

      {children}
    </SearchContext.Provider>
  )

}

