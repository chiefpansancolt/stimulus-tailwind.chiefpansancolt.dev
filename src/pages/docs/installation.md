---
title: Installation
description: Installation steps to add Simplecov Tailwindcss.
---

Find out how to install Stimulus Tailwind Component to your project and use the most out of it!

---

## Setup

Run the below to install dependencies and stimulus-tailwind-components to your project.

### Installing dependencies

Be sure to add [@hotwired/stimulus](https://stimulus.hotwired.dev/) and [tailwindcss](https://tailwindcss.com) to your dependencies to start before installing stimulus-tailwind-components

```bash
yarn add @hotwired/stimulus@latest tailwindcss@latest
```

or

```bash
npm install @hotwired/stimulus@latest tailwindcss@latest
```

> Tailwindcss is not a hard dependecy but is the recommeneded styling library.

### Adding to Project

```bash
yarn add stimulus-tailwind-components@latest
```

or

```bash
npm install stimulus-tailwind-components@latest
```

---

## Basic Usage

### Prerequisite

You'll want to initialize StimulusJS and then you can import all the Tailwind components.

### Common JS projects

```javascript
// ../application.js

import { Application } from "@hotwired/stimulus"
const application = Application.start();
// Import and register all Tailwind Components
import { Notification, Theme, Switch, Modal } from "stimulus-tailwind-components"
application.register('notification', Notification)
application.register('theme', Theme)
application.register('switch', Switch)
application.register('modal', Modal)
```

### Jekyll projects

This project would be you downloading the minified js file that outputs for usage

```html
<!-- ./_layouts/default.html -->

<head>
  <script>
    window.esmsInitOptions = { enable: ["css-modules", "json-modules"] };
  </script>
  <script async src="https://unpkg.com/es-module-shims/dist/es-module-shims.js"></script>

  <script type="importmap">
    {
      "imports": {
        "@hotwired/stimulus": "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js",
        "stimulus-tailwind-components": "https://unpkg.com/stimulus-tailwind-components/dist/stimulus-tailwind-components.min.js"
      }
    }
  </script>

  <script type="module">
    import { Application } from "@hotwired/stimulus";
    import { Theme, Notification, Switch, Modal } from "stimulus-tailwind-components";
    (() => {
      const application = Application.start();
      application.register("theme", Theme);
      application.register("notification", Notification);
      application.register("switch", Switch);
      application.register("modal", Modal);
    })();
  </script>
</head>
```


### Rails Application (v7+)

```javascript
// ./app/javascript/controllers/application.js

import { Application } from '@hotwired/stimulus'
const application = Application.start()
// Import and register all Tailwind Components
import { Notification, Theme, Switch, Modal } from 'stimulus-tailwind-components'
application.register('notification', Notification)
application.register('theme', Theme)
application.register('switch', Switch)
application.register('modal', Modal)
// Configure Stimulus development experience
application.debug = false
window.Stimulus = application
export { application }
```
