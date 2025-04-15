# PokeDexLite - Your Lightweight Pokedex

![Screenshot of PokeDexLite](https://picsum.photos/800/400)

## Overview

PokeDexLite is a simple, responsive web application built with Next.js that allows users to browse and view details about their favorite Pokemon. This project leverages the PokeAPI to fetch Pokemon data and presents it in an easy-to-use interface.

## Features

-   **Browse Pokemon:** View a list of Pokemon with names and images.
-   **Search:** Quickly find Pokemon by name using the search bar.
-   **Sort:** Sort Pokemon by ID in ascending or descending order.
-   **Detailed View:** Click on a Pokemon to see detailed information, including height, weight, and additional sprites.
-   **Responsive Design:** Enjoy a seamless experience on desktops, tablets, and mobile devices.

## Technologies Used

-   [Next.js](https://nextjs.org/): React framework for building performant web applications.
-   [TypeScript](https://www.typescriptlang.org/): Superset of JavaScript that adds static typing.
-   [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework for styling.
-   [Shadcn/ui](https://ui.shadcn.com/): Reusable components built using Radix UI and Tailwind CSS.
-   [Lucide React](https://lucide.dev/): Beautifully simple icons.
-   [PokeAPI](https://pokeapi.co/): RESTful API providing Pokemon data.

## Setup Instructions

Follow these steps to get PokeDexLite up and running on your local machine:

### Prerequisites

-   [Node.js](https://nodejs.org/) (>=18.17)
-   [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/<your-github-username>/<your-repo-name>.git
    cd <your-repo-name>
    ```

2.  **Install dependencies:**

    ```bash
    npm install # or yarn install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev # or yarn dev
    ```

    Open [http://localhost:9002](http://localhost:9002) with your browser to see the application.

## Usage

-   **Searching:** Type in the search bar to filter Pokemon by name.
-   **Sorting:** Click the "Sort by ID" button to toggle between ascending and descending order.
-   **Viewing Details:** Click on a Pokemon card to open a dialog with detailed information.
-   **Pagination:** Use the "Previous" and "Next" buttons to navigate through the list of Pokemon.

## Contributing

Contributions are welcome! Here's how you can contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request to the main branch of the original repository.

### Contribution Guidelines

-   Follow the existing code style.
-   Write clear, concise commit messages.
-   Test your changes thoroughly.

## Acknowledgements

-   Thanks to [PokeAPI](https://pokeapi.co/) for providing the Pokemon data.
-   Thanks to [Shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components.
-   Thanks to [Lucide React](https://lucide.dev/) for the icons.
