import express from "express";

import route from "./route/index.js";

const app = express();
const port = process.env.PORT || 8080;

route.preMiddleware(app, express);
route.init(app);
route.responseMiddleware(app);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;
