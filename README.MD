# MoBro Feed for OBS

This runs a small proxy fetcher to ignore CORs

You will need Node/NPM installed (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Once installed, open a terminal in this folder and run `npm i`

Once the dependencies are installed, run the server `npm run start`

You should then see the html in your browser when you go to `http://localhost:3000`

To change your MoBro URL edit line 8 of `index.js`

To change the interval of update (default is 30 secs) edit line 27 of `public/index.html`

---

Thanks to Jan Wisgerhof for his advice and help