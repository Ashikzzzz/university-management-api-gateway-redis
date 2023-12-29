import express from 'express';
import { academicSemetserController } from './academicSemeter.controller';

const router = express.Router();
// update
router.patch('/:id', academicSemetserController.updateAcademicSemester);

// get single
router.get('/:id', academicSemetserController.getSingleAcademicSemester);

// delete
router.delete('/:id', academicSemetserController.deleteAcademicSemester);

// get
router.get('/', academicSemetserController.getAllAcademicSemester);

// create
router.post('/', academicSemetserController.createAcademicSemester);

export const academicSemesterRoute = router;
