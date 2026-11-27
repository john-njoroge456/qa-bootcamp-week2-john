# QA Bootcamp Week 2

This is my repo for Week 2 of the QA bootcamp. During the week I used it to practise:

- TypeScript
- Playwright (UI testing)
- Postman (API testing)
- The Toolshop REST API

It now holds my Week 2 test suite: UI and API tests for Toolshop, all run together with `npm test`.

## Prerequisites

Install these before you start:

- [Node.js](https://nodejs.org/) (the current LTS version)
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/)

## Setup

First clone the repo and open the folder:

```bash
git clone https://github.com/john-njoroge456/qa-bootcamp-week2-john.git
cd qa-bootcamp-week2-john
```

Then:

1. Install the dependencies and the Chromium browser:

```bash
   npm install
   npx playwright install chromium
```

2. Copy `.env.example` to `.env`:

```bash
   cp .env.example .env
```

   `.env` already contains the Toolshop website URL (`TOOLSHOP_URL`) and the Toolshop API URL (`TOOLSHOP_API_URL`). Only change them if your trainer gives you different URLs.

3. Run the tests:

```bash
   npm test
```

   All tests should pass.

Optional: `npm run check` checks your setup by calling the Toolshop API and printing `PASS`.

> **Warning:** never commit `.env`. It is where your own settings and, later in the course, your secrets (keys, tokens, passwords) live. It is listed in `.gitignore` so Git ignores it. Do not remove it from there.

## Folders

| Folder      | What it is for |
|-------------|----------------|
| `tests/`    | The Playwright tests (UI and API). |
| `pages/`    | Page objects. `home-page.ts` holds the home page's search and sort locators and actions (`search`, `sortBy`, `getPrices`, `sortingCompleted`). |
| `features/` | Feature files (Given/When/Then) and their Cucumber step definitions. One scenario is automated.  |
| `src/`      | Day 6 TypeScript practice files. |
| `scripts/`  | Helper scripts. `check.ts` checks your setup and is run by `npm run check`. |

## What's in the suite

| File | What it tests |
|---|---|
| `tests/toolshop.spec.ts` | UI: the home page title |
| `tests/item_pliers.spec.ts` | UI: a search for "pliers" shows only pliers products |
| `tests/invalid_login.spec.ts` | UI: a wrong login shows "Invalid email or password" |
| `tests/search.spec.ts` | UI: the pliers search, written through the `Homepage` page object |
| `tests/api_products.spec.ts` | API: GET /products returns 200 and the first page |
| `tests/api_carts.spec.ts` | API: create a cart and add a product; a missing cart returns 404. Any cart a test creates is deleted afterwards. |
| `tests/c3_sort_by_price.spec.ts` | Capstone C3 (UI): sorting by "Price (Low - High)" shows the products cheapest first. Uses the `Homepage` page object. |
| `tests/c6_missing_quantity.spec.ts` | Capstone C6 (API): adding a product to a cart without a quantity returns 422 with a quantity error. The test deletes its cart afterwards. |
| `tests/drill/save.spec.ts` | Flakiness drill: opens a local page (`tests/drill/index.html`) and waits for the "Saved" message with a retrying check instead of a fixed wait. |

The tests run against the shared Toolshop site, so an occasional failure can come from the site being down rather than from the tests.


## BDD scenario (Cucumber)

One scenario in `features/cart.feature`, "Shopper adds one product to the cart", is tagged `@automated` and connected to step definitions in `features/step_definitions/cart.steps.ts`. Run it with:

```bash
npm run bdd
```

The other two scenarios are descriptions only and are not automated yet.

## Week 2 – Day 6: TypeScript basics

- `src/ts-basics/objects.ts` – typing an object inline: a `readonly` id,
  a string name, and a method (`retire`) that takes a `Date`.
- `src/ts-basics/optional-chaining.ts` – a function that can return a
  customer, `null` or `undefined`, and reading `birthday` safely with `?.`
  so a missing customer doesn't crash the code.
- `src/profile-validator.ts` – the practical exercise: a `User` type with
  optional nested settings, and a function that checks whether notifications
  are enabled. It uses `?.` and `??` so it returns `false` instead of crashing
  when settings are missing or empty. Tested on four users, including one who turned notifications off.

### How to run

```bash
npx tsx src/profile-validator.ts
```