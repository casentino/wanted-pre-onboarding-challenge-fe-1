import { AxiosResponse } from 'axios';
import { CreateTodoRequest, Todo } from '../types/todo';
import { axiosInstance } from './axiosInstance';

/**
 * todo 생성(추가)
 * @param todoRequest - 생성할떄 사용할 todo 제목과 내용
 */
export const createTodo = async (todoRequest: CreateTodoRequest) => {
  const url = '/todos';
  return await axiosInstance.post<AxiosResponse<Todo>>(url, todoRequest);
};

/**
 * 사용자가 등록한 todo 목록
 * @param
 */
export const getTodos = async () => {
  const url = '/todos';
  return await axiosInstance.get<AxiosResponse<Array<Todo>>>(url);
};

/**
 * todo의 상세내용 조회
 * @param id - todo id
 */
export const getTodoById = async (id: string) => {
  const url = `/todos/${id}`;
  return await axiosInstance.get<AxiosResponse<Todo>>(url);
};

/**
 * todo 내용 수정
 * @param id - todo id
 * @param todoRequest - 수정할 제목이나 내용
 */
export const updateTodo = async (id: string, todoRequest: CreateTodoRequest) => {
  const url = `/todos/${id}`;
  return await axiosInstance.put<AxiosResponse<Todo>>(url, todoRequest);
};

/**
 * todo 삭제
 * @param id - todoid
 */
export const deleteTodo = async (id: string) => {
  const url = `/todos/${id}`;
  return await axiosInstance.delete<AxiosResponse<Todo>>(url);
};
