import express from 'express';
import { academicSemesterRoute } from '../modules/academicSemeter/academicSemeter.route';
import { academicDepartmentRoute } from '../modules/academicDepartment/academicDepartment.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semester-R',
    routes: academicSemesterRoute
  },
  {
    path: '/academic-department-R',
    routes: academicDepartmentRoute
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
