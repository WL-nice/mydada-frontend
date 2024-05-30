/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponseBoolean } from "../models/BaseResponseBoolean";
import type { BaseResponseInteger } from "../models/BaseResponseInteger";
import type { BaseResponseLong } from "../models/BaseResponseLong";
import type { BaseResponsePageUser } from "../models/BaseResponsePageUser";
import type { BaseResponseUser } from "../models/BaseResponseUser";
import type { UserLoginRequest } from "../models/UserLoginRequest";
import type { UserQueryRequest } from "../models/UserQueryRequest";
import type { UserRegisterRequest } from "../models/UserRegisterRequest";
import type { UserUpdateRequest } from "../models/UserUpdateRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class UserControllerService {
  /**
   * @param requestBody
   * @returns BaseResponseInteger OK
   * @throws ApiError
   */
  public static updateUser(
    requestBody: UserUpdateRequest
  ): CancelablePromise<BaseResponseInteger> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/user/update",
      body: requestBody,
      mediaType: "application/json"
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponsePageUser OK
   * @throws ApiError
   */
  public static userSearch(
    requestBody: UserQueryRequest
  ): CancelablePromise<BaseResponsePageUser> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/user/search",
      body: requestBody,
      mediaType: "application/json"
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseLong OK
   * @throws ApiError
   */
  public static userRegister(
    requestBody: UserRegisterRequest
  ): CancelablePromise<BaseResponseLong> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/user/register",
      body: requestBody,
      mediaType: "application/json"
    });
  }

  /**
   * @returns BaseResponseInteger OK
   * @throws ApiError
   */
  public static userLogout(): CancelablePromise<BaseResponseInteger> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/user/logout"
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseUser OK
   * @throws ApiError
   */
  public static userLogin(
    requestBody: UserLoginRequest
  ): CancelablePromise<BaseResponseUser> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/user/login",
      body: requestBody,
      mediaType: "application/json"
    });
  }

  /**
   * @param id
   * @returns BaseResponseBoolean OK
   * @throws ApiError
   */
  public static deleteUser(
    id: number
  ): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/user/delete",
      query: {
        "id": id
      }
    });
  }

  /**
   * @returns BaseResponseUser OK
   * @throws ApiError
   */
  public static getCurrentUser(): CancelablePromise<BaseResponseUser> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/user/current"
    });
  }
}
