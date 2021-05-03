# sambal-ui-material

A [Sambal](https://www.sambal.dev) theme built with React and [Material-UI](https://material-ui.com)

To use sambal-ui-material theme for your Sambal project, do the following in your root project folder

```sh
git submodule add https://github.com/chen4119/sambal-ui-material.git

cd sambal-ui-material

npm install

npm run theme  // build project into /dist

cd ..

```

Add theme config to your sambal.site.js

```js
export const siteConfig = {
    // ...other configs
    theme: {
        name: "sambal-ui-material",
        options: {
            googleAnalyticsId: "<analytics ID>"
        }
    }
};
```

Start Sambal dev server

```sh
npx sambal serve
```