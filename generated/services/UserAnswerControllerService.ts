/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponseBoolean } from "../models/BaseResponseBoolean";
import type { BaseResponseLong } from "../models/BaseResponseLong";
import type { BaseResponsePageUserAnswer } from "../models/BaseResponsePageUserAnswer";
import type { BaseResponsePageUserAnswerVO } from "../models/BaseResponsePageUserAnswerVO";
import type { BaseResponseUserAnswerVO } from "../models/BaseResponseUserAnswerVO";
import type { UserAnswerAddRequest } from "../models/UserAnswerAddRequest";
import type { UserAnswerQueryRequest } from "../models/UserAnswerQueryRequest";
import type { UserAnswerUpdateRequest } from "../models/UserAnswerUpdateRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class UserAnswerControllerService {
  /**
   * @param requestBody
   * @returns BaseResponseBoolean OK
   * @throws ApiError
   */
  public static updateUserAnswer(
    requestBody: UserAnswerUpdateRequest
  ): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/userAnswer/update",
      body: requestBody,
      mediaType: "application/json"
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponsePageUserAnswerVO OK
   * @throws ApiError
   */
  public static listMyUserAnswerVoByPage(
    requestBody: UserAnswerQueryRequest
  ): CancelablePromise<BaseResponsePageUserAnswerVO> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/userAnswer/my/list/page/vo",
      body: requestBody,
      mediaType: "application/json"
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponsePageUserAnswer OK
   * @throws ApiError
   */
  public static listUserAnswerByPage(
    requestBody: UserAnswerQueryRequest
  ): CancelablePromise<BaseResponsePageUserAnswer> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/userAnswer/list/page",
      body: requestBody,
      mediaType: "application/json"
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponsePageUserAnswerVO OK
   * @throws ApiError
   */
  public static listUserAnswerVoByPage(
    requestBody: UserAnswerQueryRequest
  ): CancelablePromise<BaseResponsePageUserAnswerVO> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/userAnswer/list/page/vo",
      body: requestBody,
      mediaType: "application/json"
    });
  }

  /**
   * @param id
   * @returns BaseResponseUserAnswerVO OK
   * @throws ApiError
   */
  public static getUserAnswerVo(
    id: number
  ): CancelablePromise<BaseResponseUserAnswerVO> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/userAnswer/get/vo",
      query: {
        "id": id
      }
    });
  }

  /**
   * @param id
   * @returns BaseResponseBoolean OK
   * @throws ApiError
   */
  public static deleteUserAnswer(
    id: number
  ): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/userAnswer/delete",
      query: {
        "id": id
      }
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseLong OK
   * @throws ApiError
   */
  public static addUserAnswer(
    requestBody: UserAnswerAddRequest
  ): CancelablePromise<BaseResponseLong> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/userAnswer/add",
      body: requestBody,
      mediaType: "application/json"
    });
  }

  /**
   * @returns BaseResponseLong OK
   * @throws ApiError
   */
  public static generateId(): CancelablePromise<BaseResponseLong> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/userAnswer/generate/id"
    });
  }
}
