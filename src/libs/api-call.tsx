import axios from "axios";
import { ApiError } from "@/utils/api";
import { BASE_URL } from "@/configs/env";

export const axiosInstance = axios?.create({
  baseURL: BASE_URL,
});

export const getDataAPI = async (apiDataParameter: any) => {
  const { url, params } = apiDataParameter;
  try {
    const response = await axiosInstance?.get(`${url}`, {
      params: params,
    });
    return { data: response, isSuccess: true };
  } catch (error) {
    const errors: any = { error, isError: true };
    throw new ApiError(errors);
  }
};

export const postDataAPI = async (apiDataParameter: any) => {
  const { url, params, body, headers } = apiDataParameter;
  try {
    const response = await axiosInstance?.post(url, body, {
      headers,
      params,
    });
    return { data: response, isSuccess: true };
  } catch (error) {
    const errors: any = { error, isError: true };
    throw new ApiError(errors);
  }
};

export const putDataAPI = async (apiDataParameter: any) => {
  const { url, params, body } = apiDataParameter;
  try {
    const response = await axiosInstance?.put(`${url}`, body, {
      params: params,
    });
    return { data: response, isSuccess: true };
  } catch (error) {
    const errors: any = { error, isError: true };
    throw new ApiError(errors);
  }
};

export const patchDataAPI = async (apiDataParameter: any) => {
  const { url, params, body } = apiDataParameter;
  try {
    const response = await axiosInstance?.patch(`${url}`, body, {
      params: params,
    });
    return { data: response, isSuccess: true };
  } catch (error: any) {
    const errors: any = { error, isError: true };
    throw new ApiError(errors);
  }
};

export const deleteDataAPI = async (apiDataParameter: any) => {
  const { url, body } = apiDataParameter;
  try {
    const response = await axiosInstance?.delete(`${url}`, { data: body });
    return { data: response, isSuccess: true };
  } catch (error: any) {
    const errors: any = { error, isError: true };
    throw new ApiError(errors);
  }
};
