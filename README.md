# Tour Check

## Overview

Tour Check is a small project in which you can mark cities that you've already visited.
The free API used is the following: ![GeoDB Cities API](https://rapidapi.com/wirefreethought/api/geodb-cities)

## Features

- Fetching data through an API from RapidAPI
- Reactive Form to create and edit cities
- Customizable UI with TailwindCSS.
- Unit tests for application logic.

## Project Structure

- `/src`: Main source code directory.
  - `/app`: Application components and logic.
    - `/@types`: Types for the application
    -  `/components`: Components for the UI
    -  `/pages`: Components for routing
    -  `/services`: Fetching and temporal DB for the application
    -  `/util`: Module to imports and exports necessary modules

## Installation

1. Clone the repository.
2. Run `npm install`.
3. You need a RapidAPI-Key in order to enable the API and set the value in the env file.
3. Start the application with `npm start`.

## Usage

- Visit `http://localhost:4200` in your browser.
- Add cities that you visited.
- You can check your cities in "Mis Ciudades".
- You can add a custom city that may not appear in the fetching.
- Also you can edit cities.

## Design Choices

Material Angular is used to build a fast UI and TailwindCSS was chosen for its flexibility in creating a highly customizable UI.

## Troubleshooting

If you face issues running the project in WSL2, try changing the port using `ng serve --port=4000`.

## Future Features

- Planned an input for fetching specific cities.
- Planned a section with more detail for cities.

## Contact

For questions or suggestions, reach out to [Hardy Aguilar](https://www.linkedin.com/in/hardyaguilar/).