# PrimoCSS style guide

*A living style guide as a kick off point and resource to help define the visual language for different web components.*

Using PrimoCSS at its core for styling, this is a pre-made style guide to visually show common elements and to assist in building a style guide for any web project. It has been built to use the same production tools found in PrimoCSS and is kept to a high standard.

### Built using SCSS & Gulp

Using Gulp to create tests and build steps. Developing the source code using SCSS and harnessing the powerful preprocessor for our CSS.

---

## Local development

If you would like to help and improve this project in anyway or use the project and develop on it locally follow these commands to help. Start by downloading via [GitHub](https://github.com/primocss/primocss-style-guide/archive/master.zip) or git cloning the project ```git clone git@github.com:primocss/primocss-style-guide.git```.

Development requires the latest version of [Node.js](https://nodejs.org/en/). To setup, here is a list of commands to help you get started:

``` bash
npm install
gulp build
```

Once complete open the folder at public/assets/css to see the newly created CSS. You can override any of the global settings for PrimoCSS by creating your own variables SCSS file and a new build. Any new SCSS created can be tested by running the gulp linter and keeps all styles in check.

```bash
gulp test
```

To view the style guide locally run the express server which has been setup by running:

```bash
npm start
```

View site at http://localhost:8080. Port number and other details can be changed in the [server.js](https://github.com/primocss/primocss-style-guide/blob/master/server.js) file.

### Browser support

Using the latest technologies, PrimoCSS is aimed at new browsers and will attempt to degrade gracefully to previous versions.

- Chrome latest
- Firefox latest
- Opera latest
- Safari latest
- IE Latest

---

## License

Code licensed [MIT](https://github.com/primocss/primocss-style-guide/blob/develop/LICENSE.md) by [Richard McCartney](http://www.github/richmccartney/)
