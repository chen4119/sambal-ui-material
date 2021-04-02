const { bundleSambalFile } = require("./helpers/bundler");


(async () => {
    await bundleSambalFile("./sambal.entry.js");
})();
