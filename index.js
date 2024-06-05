const jsonServer = require("json-server"); // nhập thư viện json-server
const auth = require("json-server-auth"); // nhập thư viện json-server-auth
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; // chọn cổng từ đây như 8080, 3001

// Gắn kết cơ sở dữ liệu của router với ứng dụng
server.db = router.db

// Bạn phải áp dụng middleware auth trước router
server.use(middlewares);
server.use(auth);
server.use(router);

server.listen(port, () => {
  console.log(`Server đang chạy trên cổng ${port}`);
});
