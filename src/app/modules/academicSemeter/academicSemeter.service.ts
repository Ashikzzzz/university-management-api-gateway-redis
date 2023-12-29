import { Request } from 'express';
import { CoreService as HTTPService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const createAcademicSemester = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HTTPService.post('/academic-semester', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

// get all from db

const getAllAcademicSemester = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HTTPService.get('/academic-semester', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const academicSemesterService = {
  createAcademicSemester,
  getAllAcademicSemester
};
