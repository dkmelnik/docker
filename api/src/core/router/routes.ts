import UserRouter from './user.router';
import Router from "koa-router";

// const apiRouter = new Router({ prefix: '/api/v1'});
const apiRouter = new Router({ prefix: '/api/v1'});
apiRouter.use('/users', UserRouter);

export default apiRouter.routes();