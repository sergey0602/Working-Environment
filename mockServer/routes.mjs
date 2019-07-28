import Router from 'koa-router';
const router = new Router();

let db = 0;

router.get('/', async (ctx) => {
  ctx.body = { value: db };
});

router.put('/increment', async (ctx) => {
  db += 1;
  ctx.body = { value: db };
});

router.put('/decrement', async (ctx) => {
  db -= 1;
  ctx.body = { value: db };
});

router.put('/reset', async (ctx) => {
  db = 0;
  ctx.body = { value: db };
});

export default router;
