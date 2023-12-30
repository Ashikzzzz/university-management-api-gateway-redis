import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { academicDepartmentService } from './academicDepartment.service';
import sendResponse from '../../../shared/response';

// create
const createAcademicDepartment = catchAsync(async (req: Request, res: Response) => {
  const result = await academicDepartmentService.createAcademicDepartment(req);
  sendResponse(res, result);
});

// get all from db
const getAllAcademicDepartment = catchAsync(async (req: Request, res: Response) => {
  const result = await academicDepartmentService.getAllAcademicDepartment(req);
  sendResponse(res, result);
});

// get single by id
const getSingleAcademicDepartment = catchAsync(async (req: Request, res: Response) => {
  const result = await academicDepartmentService.getSingleAcademicDepartment(req);
  sendResponse(res, result);
});

// update
const updateAcademicDepartment = catchAsync(async (req: Request, res: Response) => {
  const result = await academicDepartmentService.updateAcademicDepartment(req);
  sendResponse(res, result);
});

// delete
const deleteAcademicDepartment = catchAsync(async (req: Request, res: Response) => {
  const result = await academicDepartmentService.deleteAcademicDepartment(req);
  sendResponse(res, result);
});

export const academicDepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
  deleteAcademicDepartment
};
