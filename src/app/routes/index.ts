import express from 'express';
import { academicSemesterRoute } from '../modules/academicSemeter/academicSemeter.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semester-R',
    routes: academicSemesterRoute
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
