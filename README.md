## Get started 🛫

1. Add a .env file. You can follow the example of .env.example and add the maps API key.
2. Run `npm install` and `npm start`.

## Description 💬

This is a single-page demo website that features a list of sports and a map view. The application uses the Sport API to retrieve information about the sports. When a user clicks on one of these sports, the application uses the Sport Places API to retrieve information about places that are related to the sport. These places are then displayed on the map and can be clicked on to show more information.

## What I did ✅

- The project utilizes the state management solution, react-query, which is known for keeping the state 'fresh' without the need for extensive boilerplate code. (The icon located in the bottom left corner is used to open the react-query dev tools)
- I encountered an issue with react-query throwing an obscure error, which was later found to be caused by the experimental nature of the Next 13 app folder. I resolved the issue by refactoring the app folder components to the old pages folder.
- I extracted the data types and placed them in the types directory.
- I made a concerted effort to incorporate the Vitamin design system throughout the project.
- I implemented the `@vtmn/css` package. Although it was my first experience using tailwind, I found it to be a valuable learning opportunity, albeit one that resulted in a slower development process.
- To make the `@vtmn/css` tree shakable, I used PurgeCSS. I also added the default Next.js Post CSS config to ensure it would not get lost in overwriting the postcss.config.js file.
- There was an issue that PurgeCSS caused during development where the .next folder needed to be deleted before changes could be noticed in the browser. I fixed this by only enabling it during production builds.
- The .next folder gets deleted each time before a production build to fix the pruneCSS bug.
- I used the google-map-react library that uses the GOOGLE_MAPS_API to render a map with markers.
- The file uses an Eslint config that for the majority extends the Airbnb config. I also added prettier in the config because it puts all formatting logic in one place.

## Time constraint compromises ❌

- I ultimately decided against using Svelte for this project as I felt it would add an additional layer of complexity given that I was already working with new technologies such as the Vitamin design system, tailwind setup, and the decathlon API.
- I had intended to create a simple design in Figma before beginning development, however, due to the time required to set up the repository, I was unable to do so.
- The list view of sports is currently limited to 10 items while all sports are still being fetched. Ideally, I would have preferred to limit the request, if possible, and lazy load the remaining items based on user interactions.
- The search bar is currently disabled as I did not have sufficient time to implement a search sports endpoint.
- The coordinates associated with a place are currently limited to one, due to limitations with the map library's ability to handle a large number of markers. This could have been resolved by grouping markers based on the zoom level, but it would have been a significant undertaking for this project.
- The markers on the map are not currently interactive, and I would have preferred to add a modal or tooltip element to display more meaningful data.
- There was an issue with the tailwind setup using `@vtmn/css-tailwind-preset` where the styles did not apply, which led me to use the `@vtmn/css` setup. I still wanted IntelliSense, so I left the configuration file and the library installed, but this is not a permanent solution.
- The site is not currently responsive.
- I would have liked to improve the design of the cards by adding more data.

## Time 🕚

- **Setting up:** 2 hours
- **Building UI:** 2 hours
- **Documenting in README:** 1 hour
