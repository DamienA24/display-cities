import cities from "../module/cities";

const preMiddleware = (app, express) => {
  app.disable("x-powered-by");
  app.enable("trust proxy");

  app.use((req, res, next) => {
    req.rawBody = "";

    req.on("data", function (chunk) {
      req.rawBody += chunk;
    });
    next();
  });

  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: false }));

  return app;
};

const init = (app) => {
  app.get("/api/ping", (req, res) => {
    res.json({ success: true });
  });

  app.use("/api/cities", cities.route);

  return app;
};

const responseMiddleware = (app) => {
  app.use((err, req, res, next) => {
    let responseMessage = {
      status: "error",
      data: {},
    };

    let statusCode = 500;
    if (err.isError) {
      responseMessage.data = JSON.stringify(err.responseMessage);
      responseMessage.data = JSON.parse(responseMessage.data);
      statusCode = err.responseMessage.code || 500;
    } else {
      responseMessage.data = {
        error: "Something went wrong.",
      };
    }
    if (process.env.NODE_ENV !== "production") {
      responseMessage.data.logError = err;
    }

    try {
      res.status(statusCode).send(responseMessage);
    } catch (e) {
      throw e;
    }
  });
  return app;
};

export default {
  preMiddleware,
  init,
  responseMiddleware,
};
