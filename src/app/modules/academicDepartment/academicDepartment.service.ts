import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService as HTTPService } from '../../../shared/axios';

// create
const createAcademicDepartment = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HTTPService.post('/academic-department', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

// get all from db
const getAllAcademicDepartment = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HTTPService.get('/academic-department', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

// get by id
const getSingleAcademicDepartment = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HTTPService.get(`/academic-department/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

// update a academic department
const updateAcademicDepartment = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HTTPService.patch(
    `/academic-department/${id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

// delete
const deleteAcademicDepartment = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HTTPService.delete(`/academic-department/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const academicDepartmentService = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
  deleteAcademicDepartment
};
