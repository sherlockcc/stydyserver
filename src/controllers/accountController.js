const path = require("path");
const captchapng = require("captchapng");
module.exports.getLoginPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/login.html"));
};
module.exports.getImageVcode = (req, res) => {
  var vcode = parseInt(Math.random() * 9000 + 1000);
  var p = new captchapng(80, 30, vcode); // width,height,numeric captcha
  p.color(0, 0, 0, 0); // First color: background (red, green, blue, alpha)
  p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)

  var img = p.getBase64();
  var imgbase64 = new Buffer(img, "base64");
  res.writeHead(200, {
    "Content-Type": "image/png"
  });
  res.end(imgbase64);
};
module.exports.login = (req, res) => {
  console.log(req.body.vcode);
  //1.获取浏览器传递过来的验证码
  const vcode1 = parseInt(req.body.vcode || "");
  //2.获取存储在session中的vcode
  const vcode2 = req.session.vcode;

  //设定成功之后的结果
  const result = { status: 0, message: "登录成功" };

  //校验了验证码
  if (vcode1 != vcode2) {
    result.status = 1;
    result.message = "验证码错误";

    //返回结果
    res.json(result);

    return;
  }
};
