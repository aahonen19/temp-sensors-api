const Koa = require('koa');
const Router = require('koa-router');
const sensor = require('ds18b20-raspi');

const app = new Koa();
const PORT = 1337;

const router = new Router();

router.get('/ids', async (ctx) => {
  ctx.body = {
    ids: sensor.list()
  };
})

router.get('/all', async (ctx) => {
  const temps = sensor.readAllC(2);
  ctx.body = {
    temps
  };
})

app.use(router.routes());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
