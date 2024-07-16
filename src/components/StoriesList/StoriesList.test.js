import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import StoriesList from "./StoriesList";

describe("rendering Artical List", () => {
  it('Shows "Article List!"', () => {
    render(<StoriesList />);
  });
});

// describe("rendering Artical List with List ", () => {
//   const article = [
//     {
//       uri: "nyt://article/43f70c4a-a3d5-5ed5-9c67-9b0f34016398",
//       url: "https://www.nytimes.com/2024/07/13/us/politics/doug-mills-trump-photo.html",
//       id: 100000009570347,
//       asset_id: 100000009570347,
//       source: "New York Times",
//       published_date: "2024-07-13",
//       updated: "2024-07-14 13:05:44",
//       section: "U.S.",
//       subsection: "Politics",
//       nytdsection: "u.s.",
//       adx_keywords:
//         "Assassinations and Attempted Assassinations;Presidential Election of 2024;United States Politics and Government;Photography;News and News Media;Trump, Donald J;Crooks, Thomas Matthew (2003-24);Mills, Doug;New York Times;Butler (Pa)",
//       column: null,
//       byline: "By Doug Mills",
//       type: "Article",
//       title:
//         "A Times Photographer Who Was Feet Away From Trump Describes the Shooting",
//       abstract:
//         "“I hope I get the right shot. I hope I’m not shot myself,” said Doug Mills, who has been photographing presidents since 1983.",
//       des_facet: [
//         "Assassinations and Attempted Assassinations",
//         "Presidential Election of 2024",
//         "United States Politics and Government",
//         "Photography",
//         "News and News Media",
//       ],
//       org_facet: ["New York Times"],
//       per_facet: [
//         "Trump, Donald J",
//         "Crooks, Thomas Matthew (2003-24)",
//         "Mills, Doug",
//       ],
//       geo_facet: ["Butler (Pa)"],
//       media: [
//         {
//           type: "image",
//           subtype: "photo",
//           caption:
//             "Secret Service agents surround Mr. Trump immediately after reports of gunfire at his rally.",
//           copyright: "Doug Mills/The New York Times",
//           approved_for_syndication: 1,
//           "media-metadata": [
//             {
//               url: "https://static01.nyt.com/images/2024/07/14/multimedia/13xp-mills/13xp-mills-thumbStandard.jpg",
//               format: "Standard Thumbnail",
//               height: 75,
//               width: 75,
//             },
//             {
//               url: "https://static01.nyt.com/images/2024/07/14/multimedia/13xp-mills/13xp-mills-mediumThreeByTwo210.jpg",
//               format: "mediumThreeByTwo210",
//               height: 140,
//               width: 210,
//             },
//             {
//               url: "https://static01.nyt.com/images/2024/07/14/multimedia/13xp-mills/13xp-mills-mediumThreeByTwo440.jpg",
//               format: "mediumThreeByTwo440",
//               height: 293,
//               width: 440,
//             },
//           ],
//         },
//       ],
//       eta_id: 0,
//     },
//   ];

//   jest.mock("react-router-dom", () => {
//     // Require the original module to not be mocked...
//     const originalModule = jest.requireActual("react-router-dom");

//     return {
//       __esModule: true,
//       ...originalModule,
//       // add your noops here
//       useParams: jest.fn(),
//       useHistory: jest.fn(),
//     };
//   });

//   it("Shows Article List", () => {
//     render(<StoriesList articles={article} />);
//   });
// });
