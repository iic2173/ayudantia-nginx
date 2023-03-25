const Koa = require('koa');
const app = new Koa();

// response
app.use( async (ctx) => {

  // Initial request
  ctx.body = {
    'message': 'Hello IIC2173!',
    'message2': 'This is the THIRD server in the round-robin load balancer'
  };

});

app.listen(3000, () => {
  console.log("Starting app in port 3000")
})
