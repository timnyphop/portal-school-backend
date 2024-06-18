function cors(req, res, next) {
  const { origin } = req.headers; // Исправлено: req.headers - это объект, а не метод
  const allowedCors = ["http://localhost:3000", "http://localhost:3001"];

  if (allowedCors.includes(origin)) {
    // Если источник разрешен
    res.header("Access-Control-Allow-Origin", origin); // Исправлено: используем конкретный origin, а не "*"
    res.header(
      "Access-Control-Allow-Methods",
      "GET,HEAD,PUT,PATCH,POST,DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
  }

  next();
}
module.exports = cors;
