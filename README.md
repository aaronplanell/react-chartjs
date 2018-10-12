# react-chartjs
A frontend application with React for testing Chart.js.
It is a responsive application and uses `@media queries` with a `max-width` of `414px` (The width resolution of the iPhone 6 plus is 414px). That means that the order of components will change.


## Who is this project for?
It is a good example of how using these tecnologies:
- [React](https://facebook.github.io/react/)
- [Create-React-App](https://github.com/facebookincubator/create-react-app)


## How to install/configure the project?

### Installation
Just:
```
$ git clone https://github.com/aaronplanell/react-chartjs.git
$ cd react-chartjs
$ npm install
```
Obviously, the last line can be replaced by:
```
$ yarn install
```

## How to run the project?
For running in development mode just run:
```
$ npm start
```
Or:
```
$ yarn start
```

Automagically the browser will be open with the application.

```
Compiled successfully!

You can now view react-chartjs in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://xxx.xxx.xxx.xxx:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```

## How create an optimized production build ?
For creating an optimized production build just run:
```
$ npm run build
```
Or:
```
$ yarn build
```

You will see a message like:
```
Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  48.12 KB  build/static/js/main.9fdf0e48.js
  288 B     build/static/css/main.cacbacc7.css

The project was built assuming it is hosted at the server root.
To override this, specify the homepage in your package.json.
For example, add this to build it for GitHub Pages:

  "homepage" : "http://myname.github.io/myapp",

The build folder is ready to be deployed.
You may serve it with a static server:

  yarn global add serve
  serve -s build

Done in 9.28s.
```

After executing `server -s build` you will see:
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   Serving!                                          │
│                                                     │
│   - Local:            http://localhost:5000         │
│   - On Your Network:  http://xxx.xxx.xxx.xxx:5000   │
│                                                     │
│   Copied local address to clipboard!                │
│                                                     │
└─────────────────────────────────────────────────────┘
```

## Contributing
This project uses.
- [React](https://facebook.github.io/react/)
- [Create-React-App](https://github.com/facebookincubator/create-react-app)

## License

GPL (GNU GENERAL PUBLIC LICENSE)
