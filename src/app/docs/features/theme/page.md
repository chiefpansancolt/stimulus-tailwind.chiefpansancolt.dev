---
title: Theme
nextjs:
  metadata:
    title: StimulusJS Tailwindcss - Feature - Theme
    description: This component is giving you the ability to enable dark mode on your site. This supports on load set of the theme based on your system preferences.
---

This component is giving you the ability to enable dark mode on your site. This supports on load set of the theme based on your system preferences.

---

## Playground

Want to see them in action? Check out the examples [here](https://chiefpansancolt.github.io/stimulus-tailwind-components/docs/theme) for the ability to play with theme.

## Attributes

### Targets

| Attribute | Type   | Required | Details                                                   | Syntax                     |
| --------- | ------ | -------- | --------------------------------------------------------- | -------------------------- |
| body      | String | true     | Target for the container of the page to set dark class on | `data-theme-target="body"` |

### Classes

| Attribute | Required | Details                             | Syntax                         |
| --------- | -------- | ----------------------------------- | ------------------------------ |
| dark      | true     | Detail class for defining dark mode | `data-theme-dark-class="dark"` |

### Values

| Attribute     | Type    | Default       | Required | Details                                                                                             | Syntax                                         |
| ------------- | ------- | ------------- | -------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| storageName   | String  | "color-theme" | false    | Used to define the local storage item name, allows for multiple instances in a site for theme usage | `data-theme-storage-name-value="color-theme2"` |
| useSystemPref | Boolean | true          | false    | Used to turn on and off reading a user System preference, on by default                             | `data-theme-use-system-pref-value="false"`     |

## Methods

### Actions

| Function | Details                                                       | Syntax                       |
| -------- | ------------------------------------------------------------- | ---------------------------- |
| toggle() | This toggle button will toggle the theme from its current set | `data-action="theme#toggle"` |

---

## Basic Usage

### Common

```html
<!DOCTYPE html>
<html lang="en" data-controller="theme" data-theme-target="body" data-theme-dark-class="dark">
  <head>
    <meta charset="utf-8" />
    <title>Example Site Title</title>
  </head>
  <body>
    <button type="button" data-action="click->theme#toggle">
      <span class="dark:hidden">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-6 w-6"
        >
          <path
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            class="fill-emerald-400/20 stroke-emerald-500"
          ></path>
          <path
            d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
            class="stroke-emerald-500"
          ></path>
        </svg>
      </span>
      <span class="hidden dark:inline">
        <svg viewBox="0 0 24 24" fill="none" class="h-6 w-6">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
            class="fill-emerald-400/20"
          ></path>
          <path
            d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
            class="fill-emerald-500"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
            class="fill-emerald-500"
          ></path>
        </svg>
      </span>
    </button>
  </body>
</html>
```

### Without System Preference Enabled

```html
<!DOCTYPE html>
<html
  lang="en"
  data-controller="theme"
  data-theme-target="body"
  data-theme-dark-class="dark"
  data-theme-use-system-ref-value="false"
>
  <head>
    <meta charset="utf-8" />
    <title>Example Page Title</title>
  </head>
  <body>
    <button type="button" data-action="click->theme#toggle">
      <span class="dark:hidden">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-6 w-6"
        >
          <path
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            class="fill-emerald-400/20 stroke-emerald-500"
          ></path>
          <path
            d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
            class="stroke-emerald-500"
          ></path>
        </svg>
      </span>
      <span class="hidden dark:inline">
        <svg viewBox="0 0 24 24" fill="none" class="h-6 w-6">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
            class="fill-emerald-400/20"
          ></path>
          <path
            d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
            class="fill-emerald-500"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
            class="fill-emerald-500"
          ></path>
        </svg>
      </span>
    </button>
  </body>
</html>
```

## Rails Usage

### Common Usage

```erb
<!DOCTYPE html data-controller="theme" data-theme-target="body" data-theme-dark-class="dark">
<html>
  <head>
    <title>Example App</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <%= csrf_meta_tags %>
    <%= csp_meta_tag %>
    <%= stylesheet_link_tag "tailwind", "inter-font", "data-turbo-track": "reload" %>
    <%= stylesheet_link_tag "application", "data-turbo-track": "reload" %>
    <%= javascript_importmap_tags %>
  </head>
  <body>
    <main class="container mx-auto mt-28 px-5 flex">
      <button type="button" data-action="click->theme#toggle">
        <span class="dark:hidden">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
            <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" class="fill-emerald-400/20 stroke-emerald-500"></path>
            <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" class="stroke-emerald-500"></path>
          </svg>
        </span>
        <span class="hidden dark:inline">
          <svg viewBox="0 0 24 24" fill="none" class="h-6 w-6">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
              class="fill-emerald-400/20"
            ></path>
            <path
              d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
              class="fill-emerald-500"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
              class="fill-emerald-500"
            ></path>
          </svg>
        </span>
      </button>
      <%= yield %>
    </main>
  </body>
</html>
```
