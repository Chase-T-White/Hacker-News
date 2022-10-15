import React, { useReducer, useEffect, useContext } from "react";
import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";
import reducer from "./reducer";

const url = "http://hn.algolia.com/api/v1/search";

const initialState = {
  loading: true,
  query: "react",
  page: 0,
  nbPages: 0,
  stories: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: SET_LOADING, payload: true });
    try {
      const response = await fetch(
        `${url}?query=${state.query}&page=${state.page}`
      );
      const data = await response.json();
      dispatch({ type: SET_STORIES, payload: data });
    } catch (error) {
      console.error();
      dispatch({ type: SET_LOADING, payload: false });
    }
  };

  const handleSearch = (e) => {
    let search;
    if (!e.target.value) {
      search = "react";
    } else {
      search = e.target.value;
    }
    return dispatch({ type: HANDLE_SEARCH, payload: search });
  };

  const removeStory = (objectID) => {
    return dispatch({ type: REMOVE_STORY, payload: objectID });
  };

  const prevButton = () => {
    if (state.page === 0) {
      return dispatch({ type: HANDLE_PAGE, payload: state.nbPages - 1 });
    }
    return dispatch({ type: HANDLE_PAGE, payload: state.page - 1 });
  };

  const nextButton = () => {
    if (state.page === state.nbPages - 1) {
      return dispatch({ type: HANDLE_PAGE, payload: 0 });
    }
    return dispatch({ type: HANDLE_PAGE, payload: state.page + 1 });
  };

  useEffect(() => {
    fetchData();
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, removeStory, prevButton, nextButton, handleSearch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
