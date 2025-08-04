import axios from "axios";
import { CHAT_BOT_BASE_BE_URL } from "../config/env";
import {
  ApiError,
  getDataFromLocalStorage,
  removeDataFromLocalStorage,
} from "../utils/api-error";
import { API_MESSAGES } from "../constants/messages";
import { LOCAL_STORAGE_KEYS } from "../constants/ui";

const hasToken = getDataFromLocalStorage()?.authToken;

export const axiosInstance = axios?.create({
  baseURL: CHAT_BOT_BASE_BE_URL,
  headers: {
    ...(hasToken ? { Authorization: `Bearer ${hasToken}` } : {}),
  },
});

axiosInstance?.interceptors?.response?.use(
  (response) => {
    return response;
  },
  (error) => {
    const message = error?.response?.data?.message;
    const hasErrorStatus = error?.response?.status === 400;
    const hasInvalidToken =
      message?.includes(API_MESSAGES?.INVALID_AUTH) ||
      message?.includes(API_MESSAGES?.TOKEN_EXPIRED);
    if (error?.response && hasErrorStatus && hasInvalidToken) {
      removeDataFromLocalStorage(LOCAL_STORAGE_KEYS?.AUTH_DATA);
      removeDataFromLocalStorage(LOCAL_STORAGE_KEYS?.ACTIVITY_SESSION);
      window?.location?.reload();
    }
    return Promise.reject(error);
  },
);

export const getDataAPI = async (apiDataParameter) => {
  const { url, params } = apiDataParameter;
  try {
    const response = await axiosInstance?.get(`${url}`, {
      params: params,
    });
    return { data: response, isSuccess: true };
  } catch (error) {
    const errors = { error, isError: true };
    throw new ApiError(errors);
  }
};

export const postDataAPI = async (apiDataParameter) => {
  const { url, params, body, headers } = apiDataParameter;
  try {
    const response = await axiosInstance?.post(url, body, {
      headers,
      params,
    });
    return { data: response, isSuccess: true };
  } catch (error) {
    const errors = { error, isError: true };
    throw new ApiError(errors);
  }
};

export const putDataAPI = async (apiDataParameter) => {
  const { url, params, body } = apiDataParameter;
  try {
    const response = await axiosInstance?.put(`${url}`, body, {
      params: params,
    });
    return { data: response, isSuccess: true };
  } catch (error) {
    const errors = { error, isError: true };
    throw new ApiError(errors);
  }
};

export const patchDataAPI = async (apiDataParameter) => {
  const { url, params, body } = apiDataParameter;
  try {
    const response = await axiosInstance?.patch(`${url}`, body, {
      params: params,
    });
    return { data: response, isSuccess: true };
  } catch (error) {
    const errors = { error, isError: true };
    throw new ApiError(errors);
  }
};

export const deleteDataAPI = async (apiDataParameter) => {
  const { url, body } = apiDataParameter;
  try {
    const response = await axiosInstance?.delete(`${url}`, { data: body });
    return { data: response, isSuccess: true };
  } catch (error) {
    const errors = { error, isError: true };
    throw new ApiError(errors);
  }
};
