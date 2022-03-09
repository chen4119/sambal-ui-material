# sambal-ui-material

A [Sambal](https://sambal.dev) theme built with React and [Material-UI](https://material-ui.com).  __Require Sambal 0.1.x__

To use sambal-ui-material theme for your Sambal project, add sambal-ui-material as a git submodule and npm workspace

```sh
git submodule add https://github.com/chen4119/sambal-ui-material.git
```

Add as workspace in package.json and run npm install again to install theme dependencies

```json
{
    // ...other package.json configs
    "workspaces": [
        "sambal-ui-material"
    ]
}
```

Add theme config to your sambal.site.js

```js
export const siteConfig = {
    // ...other configs
    theme: {
        name: "sambal-ui-material",
        options: {
            landingPage: false,                    // Render "/" as a landing page
            googleAnalyticsId: "<analytics ID>"
        }
    }
};
```

Start Sambal dev server

```sh
npx sambal serve
```