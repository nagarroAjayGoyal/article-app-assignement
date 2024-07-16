import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import StoriesDetail from "./StoriesDetail";

describe("rendering Artical detail page", () => {
  const initialState = { stories: [] };
  const mockStore = configureStore();
  let store;

  it('Shows "Article detail"', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <StoriesDetail />
      </Provider>
    );
  });
});
