import { configureStore } from "@reduxjs/toolkit";
import newsApiArticlesReducer from "../features/news_api_slice";

export const store = configureStore({
  reducer: {
    articles: newsApiArticlesReducer,
  },
});
