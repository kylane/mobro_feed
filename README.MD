# MoBro Feed for OBS

## This runs a small proxy fetcher to ignore CORs, and presents it in a html page locally

---

1. You will need Node/NPM installed (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

2. Once installed, open a terminal in this folder and run `npm i`

3. Once the dependencies are installed, run the server `npm run start`

4. You should then see the html in your browser when you go to `http://localhost:3000`

---

* To change your MoBro URL edit line 8 of `index.js`

* To change the interval of update (default is 10 secs) edit line 50 of `public/index.html`

---

Have now added confetti from () when you receive a donation. Can be disabled/removed in `public/index.html` or add whatever effects/triggers you please.

---

Thanks to Jan Wisgerhof (`https://github.com/jwwisgerhof`) for his advice and help