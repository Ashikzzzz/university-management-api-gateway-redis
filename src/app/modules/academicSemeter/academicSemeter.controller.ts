import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/response';
import httpStatus from 'http-status';
import { academicSemesterService } from './academicSemeter.service';

const createAcademicSemester = catchAsync(async (req: Request, res: Response) => {
  const result = await academicSemesterService.createAcademicSemester(req);
  sendResponse(res, result);
});

// get all from db
const getAllAcademicSemester = catchAsync(async (req: Request, res: Response) => {
  const result = await academicSemesterService.getAllAcademicSemester(req);
  sendResponse(res, result);
});

export const academicSemetserController = {
  createAcademicSemester,
  getAllAcademicSemester
};
