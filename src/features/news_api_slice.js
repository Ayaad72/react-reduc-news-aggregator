// src/features/articles/articlesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { NEWS_API_KEY, dsadwerewfs, GOOGLE_NEWS_API_KEY } from "../api-consts";

export const fetchArticles = createAsyncThunk(
  "news/fetchNews",
  async (query, { rejectWithValue }) => {
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${NEWS_API_KEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      return data.articles;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getArticlesByCategory = createAsyncThunk(
  "articles/getArticlesByCategory",
  async (query, { rejectWithValue }) => {
    const url = `https://newsapi.org/v2/top-headlines/sources?category=${query}&apiKey=${NEWS_API_KEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      return data.articles;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchNewYorkTimesArticles = createAsyncThunk(
  "articles/fetchNewYorkTimesArticles",
  async (query, { rejectWithValue }) => {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${NEW_YORK_TIMES_API_KEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      return data.response.docs;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchGoogleNewsArticles = createAsyncThunk(
  "articles/fetchGoogleNewsArticles",
  async (query, { rejectWithValue }) => {
    const url = `https://gnews.io/api/v4/search?q=${query}&lang=en&country=us&max=20&apikey=${GOOGLE_NEWS_API_KEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      return data.articles;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const newsApiArticlesReducer = createSlice({
  name: "articles",
  initialState: {
    items: [],
    status: "",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getArticlesByCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        const myFilteredArticlesList = action.payload
          ?.filter(
            (item) =>
              item.content !== "[Removed]" || item.description !== "[Removed]"
          )
          .map((i) => ({
            key: i.index,
            url: i.url,
            urlToImage: i.urlToImage || "",
            title: i.title,
            description: i.description,
            source: i.source?.name,
          }));
        state.items = myFilteredArticlesList;
      })
      .addCase(getArticlesByCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getArticlesByCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchNewYorkTimesArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNewYorkTimesArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        const myNytArticlesList = action.payload?.map((item) => ({
          key: item.index,
          url: item.web_url,
          urlToImage: item.multimedia[0]?.url
            ? `https://static01.nyt.com/${item.multimedia[0]?.url}`
            : "",
          title: item.headline.main,
          description: item.abstract,
          source: item.source,
        }));
        state.items = myNytArticlesList;
      })
      .addCase(fetchNewYorkTimesArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchGoogleNewsArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGoogleNewsArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        const myNytArticlesList = action.payload?.map((item) => ({
          key: item.index,
          url: item.url,
          urlToImage: item.image,
          title: item.title,
          description: item.description,
          source: item.source.name,
        }));
        state.items = myNytArticlesList;
      })
      .addCase(fetchGoogleNewsArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default newsApiArticlesReducer.reducer;
