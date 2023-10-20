## recipify

A fun way to find recipes based on ingredients you have at home (Or just get some randomly shuffled ones).

## Technologies Used

- [SvelteKit](https://kit.svelte.dev/) - A framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing.
- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [tailwindcss](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
- [daisyui](https://daisyui.com/) - A component library for Tailwind CSS.

## Usage

### Installation

```bash
git clone https://github.com/paulbgtr/recipify
cd recipify
npm i
```

### Obtaining an API key

You will need an API key from [Spoonacular](https://spoonacular.com/food-api) to use this app. Once you have one, create a `.env` file in the `/apps/frontend` of the project and write there the following:

```bash
PUBLIC_SPOONACULAR_API_KEY=<your key> > .env
```

After that, just run the project by typing

```bash
npm run dev
```

## Licence

MIT
