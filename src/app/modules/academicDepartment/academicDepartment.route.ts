import express from 'express';
import { academicDepartmentController } from './academicDepartment.controller';

const router = express.Router();

// create
router.post('/', academicDepartmentController.createAcademicDepartment);

// get all
router.get('/', academicDepartmentController.getAllAcademicDepartment);

// get single
router.get('/:id', academicDepartmentController.getSingleAcademicDepartment);

// update
router.patch('/:id', academicDepartmentController.updateAcademicDepartment);

// delete
router.delete('/:id', academicDepartmentController.deleteAcademicDepartment);

export const academicDepartmentRoute = router;
