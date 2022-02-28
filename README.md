## Development
Run from the console

```shell
npm run develop
```

Your site is now running at http://localhost:8000!

Edit `src/pages/index.js` to see your site update in real-time!

## Deploy
Run from the console

```shell
npm run build
```

The result will be put inside the `public` directory.

## Changing configurations
Most of the website content can be customized editing the `src/config.js` file.
Inside the source code you can find documentation for each section.

## Changing images
Images are linked by relative paths inside the project, so if you want to change a specific image, you can:
- replace the image without changing the filename
- insert a new image and change in the source code to point to that image (this could be necessary if the two images have different extensions)

## Adding Basemaps
Basemaps can be configured inside the `src/config.js` file.

Example:
```js
{
    name: 'Basemap name',
    url: 'https://{s}.example.com/{z}/{x}/{y}.png',
    attribution: 'Example attribution',
    checked: false,
}
```

Ensure that **ONLY** one basemap has `checked: true`, this is used to specify which map should be used by default.

## Adding Projects
Projects can be configured inside the `src/config.js` file.

Example:
```js
{
    image: 'learnosm',
    name: 'LearnOSM',
    description: 'Un sito con guide su come usare OSM.',
    link: 'https://learnosm.org/it/',
}
```
Images for projects must be placed inside `src/images/projects`, you can then reference it using just it's name without the extension.

**NOTE:** It's recommended to keep the filename simple and without spaces or special characters (replace space with _).
