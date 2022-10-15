import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_STORIES:
      return {
        ...state,
        loading: false,
        stories: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case REMOVE_STORY:
      const filteredStories = state.stories.filter((story) => {
        return story.objectID !== action.payload;
      });
      return { ...state, stories: filteredStories };
    case HANDLE_PAGE:
      return { ...state, page: action.payload };
    case HANDLE_SEARCH:
      return { ...state, query: action.payload };

    default:
      throw new Error(`No matching "${action.type}" action type`);
  }
};

export default reducer;
