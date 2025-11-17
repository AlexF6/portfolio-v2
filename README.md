# Astro Starter Kit: Minimal

```sh
pnpm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── README.md
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── public
│   ├── favicon.svg
│   └── images
│       ├── logo.svg
│       └── hero.jpg
├── src
│   ├── components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Nav.astro
│   │   └── Card.astro
│   ├── layouts
│   │   └── BaseLayout.astro
│   ├── pages
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── blog
│   │       ├── index.astro
│   │       └── [slug].astro
│   ├── content
│   │   └── blog
│   │       ├── first-post.mdx
│   │       └── second-post.mdx
│   └── styles
│       └── global.css
├── .gitignore
└── env.d.ts
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
