import { App } from 'https://unpkg.com/@wazo/euc-plugins-sdk@latest/lib/esm/app.js';

// APP INIT
const app = new App();

(async() => {

  await app.initialize();

  const context = app.getContext();

  console.log(context)

})();
