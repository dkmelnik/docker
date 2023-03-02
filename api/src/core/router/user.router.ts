import Router from 'koa-router';

const router = new Router();
router.get('/test', async ctx => {
    ctx.body = 'ok'
});


export default router.routes();