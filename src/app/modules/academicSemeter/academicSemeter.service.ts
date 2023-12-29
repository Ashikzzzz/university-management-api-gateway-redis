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

// get by id
const getSingleAcademicSemester = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HTTPService.get(`/academic-semester/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

// update a academic semetser
const updateAcademicSemester = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HTTPService.patch(`/academic-semester/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

// delete
const deleteAcademicSemester = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HTTPService.delete(`/academic-semester/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const academicSemesterService = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester,
  deleteAcademicSemester
};
