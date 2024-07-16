import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import StoriesDetail from "./StoriesDetail";
import * as router from "react-router";

describe("rendering Artical detail with mock state", () => {
  const initialState = { stories: [] };
  const mockStore = configureStore();
  let store;

  const navigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  });

  it('Shows "Article detail"', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <StoriesDetail />
      </Provider>
    );
    expect(navigate).toHaveBeenCalledWith("/");
  });
});
