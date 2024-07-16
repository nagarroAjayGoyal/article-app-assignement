import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import StoriesDetail from "./StoriesDetail";
import Dashboard from "../../pages/Dashboard";
import thunk from "redux-thunk";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
const middlewares = [thunk];
describe("ArticleDetail Component", () => {
  const initialState = {
    stories: {
      loading: false,
      data: [
        {
          uri: "nyt://article/8d81be7d-a901-5e88-9a2f-ebb6b0a870e9",
          url: "https://www.nytimes.com/2024/07/14/us/politics/shooting-trump-rally.html",
          id: 100000009570363,
          asset_id: 100000009570363,
          source: "New York Times",
          published_date: "2024-07-14",
          updated: "2024-07-15 18:51:49",
          section: "U.S.",
          subsection: "Politics",
          nytdsection: "u.s.",
          adx_keywords:
            "Assassinations and Attempted Assassinations;United States Politics and Government;Presidential Election of 2024;Trump, Donald J;Crooks, Thomas Matthew (2003-24);Butler (Pa)",
          column: null,
          byline: "By Michael Levenson",
          type: "Article",
          title: "What We Know About the Assassination Attempt Against Trump",
          abstract:
            "The former president was holding a rally when he said he was shot in his ear. Two people, including the suspected gunman, were killed and two were critically injured.",
          des_facet: [
            "Assassinations and Attempted Assassinations",
            "United States Politics and Government",
            "Presidential Election of 2024",
          ],
          org_facet: [],
          per_facet: ["Trump, Donald J", "Crooks, Thomas Matthew (2003-24)"],
          geo_facet: ["Butler (Pa)"],
          media: [
            {
              type: "image",
              subtype: "photo",
              caption:
                "People leave the rally in Butler, Pa., on Saturday after the attack on Mr. Trump.",
              copyright: "Eric Lee/The New York Times",
              approved_for_syndication: 1,
              "media-metadata": [
                {
                  url: "https://static01.nyt.com/images/2024/08/13/multimedia/13election-live-what-we-know-shooting-lwjt/13election-live-what-we-know-shooting-lwjt-thumbStandard.jpg",
                  format: "Standard Thumbnail",
                  height: 75,
                  width: 75,
                },
                {
                  url: "https://static01.nyt.com/images/2024/08/13/multimedia/13election-live-what-we-know-shooting-lwjt/13election-live-what-we-know-shooting-lwjt-mediumThreeByTwo210.jpg",
                  format: "mediumThreeByTwo210",
                  height: 140,
                  width: 210,
                },
                {
                  url: "https://static01.nyt.com/images/2024/08/13/multimedia/13election-live-what-we-know-shooting-lwjt/13election-live-what-we-know-shooting-lwjt-mediumThreeByTwo440.jpg",
                  format: "mediumThreeByTwo440",
                  height: 293,
                  width: 440,
                },
              ],
            },
          ],
          eta_id: 0,
        },
        {
          uri: "nyt://article/d8d49de9-7355-5c39-8543-eccf9139715e",
          url: "https://www.nytimes.com/2024/07/12/magazine/diddy-sean-combs.html",
          id: 100000009545512,
          asset_id: 100000009545512,
          source: "New York Times",
          published_date: "2024-07-12",
          updated: "2024-07-14 15:19:04",
          section: "Magazine",
          subsection: "",
          nytdsection: "magazine",
          adx_keywords:
            "Domestic Violence;Sex Crimes;Rap and Hip-Hop;Assaults;Combs, Sean;Ventura, Cassandra (Cassie)",
          column: null,
          byline: "By Danyel Smith",
          type: "Article",
          title: "I Knew Diddy for Years. What I Now Remember Haunts Me.",
          abstract:
            "Looking back on my life as a woman in the music industry, I’m unsettled by the inescapable sexism perpetrated by Sean Combs and others.",
          des_facet: [
            "Domestic Violence",
            "Sex Crimes",
            "Rap and Hip-Hop",
            "Assaults",
          ],
          org_facet: [],
          per_facet: ["Combs, Sean", "Ventura, Cassandra (Cassie)"],
          geo_facet: [],
          media: [
            {
              type: "image",
              subtype: "photo",
              caption: "",
              copyright: "Artwork by David Samuel Stern",
              approved_for_syndication: 0,
              "media-metadata": [
                {
                  url: "https://static01.nyt.com/images/2024/07/14/magazine/14mag-Diddy-openerart/14mag-Diddy-openerart-thumbStandard-v2.jpg",
                  format: "Standard Thumbnail",
                  height: 75,
                  width: 75,
                },
                {
                  url: "https://static01.nyt.com/images/2024/07/14/magazine/14mag-Diddy-openerart/14mag-Diddy-openerart-mediumThreeByTwo210-v2.jpg",
                  format: "mediumThreeByTwo210",
                  height: 140,
                  width: 210,
                },
                {
                  url: "https://static01.nyt.com/images/2024/07/14/magazine/14mag-Diddy-openerart/14mag-Diddy-openerart-mediumThreeByTwo440-v2.jpg",
                  format: "mediumThreeByTwo440",
                  height: 293,
                  width: 440,
                },
              ],
            },
          ],
          eta_id: 0,
        },
        // Add more mock data as needed
      ],
    },
  };

  const mockStore = configureStore(middlewares);
  let store;

  //   beforeEach(() => {
  //     store = mockStore(initialState);
  //   });

  it("renders article details when data is available", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Router initialEntries={["/stories/100000009570363"]}>
          <Routes>
            <Route path="/stories/:id" element={<StoriesDetail />} />
          </Routes>
        </Router>
      </Provider>
    );
  });

  it("navigate when data is undefined", () => {
    store = mockStore({
      stories: {
        loading: false,
      },
    });
    render(
      <Provider store={store}>
        <Router initialEntries={["/stories/2"]}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/stories/:id" element={<StoriesDetail />} />
          </Routes>
        </Router>
      </Provider>
    );
  });
});
