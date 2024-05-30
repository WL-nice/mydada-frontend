/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppAddRequest } from "../models/AppAddRequest";
import type { AppEditRequest } from "../models/AppEditRequest";
import type { AppQueryRequest } from "../models/AppQueryRequest";
import type { AppUpdateRequest } from "../models/AppUpdateRequest";
import type { BaseResponseAppVO } from "../models/BaseResponseAppVO";
import type { BaseResponseBoolean } from "../models/BaseResponseBoolean";
import type { BaseResponseLong } from "../models/BaseResponseLong";
import type { BaseResponsePageApp } from "../models/BaseResponsePageApp";
import type { BaseResponsePageAppVO } from "../models/BaseResponsePageAppVO";
import type { ReviewRequest } from "../models/ReviewRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class AppControllerService {
  /**
   * @param requestBody
   * @returns BaseResponseBoolean OK
   * @throws ApiError
   */
  public static updateApp(
    requestBody: AppUpdateRequest
  ): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/app/update",
      body: requestBody,
      mediaType: "application/json"
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseBoolean OK
   * @throws ApiError
   */
  public static doAppReview(
    requestBody: ReviewRequest
  ): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/app/review",
      body: requestBody,
      mediaType: "application/json"
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponsePageAppVO OK
   * @throws ApiError
   */
  public static listMyAppVoByPage(
    requestBody: AppQueryRequest
  ): CancelablePromise<BaseResponsePageAppVO> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/app/my/list/page/vo",
      body: requestBody,
      mediaType: "application/json"
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponsePageApp OK
   * @throws ApiError
   */
  public static listAppByPage(
    requestBody: AppQueryRequest
  ): CancelablePromise<BaseResponsePageApp> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/app/list/page",
      body: requestBody,
      mediaType: "application/json"
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponsePageAppVO OK
   * @throws ApiError
   */
  public static listAppVoByPage(
    requestBody: AppQueryRequest
  ): CancelablePromise<BaseResponsePageAppVO> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/app/list/page/vo",
      body: requestBody,
      mediaType: "application/json"
    });
  }

  /**
   * @param id
   * @returns BaseResponseAppVO OK
   * @throws ApiError
   */
  public static getAppVo(
    id: number
  ): CancelablePromise<BaseResponseAppVO> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/app/get/vo",
      query: {
        "id": id
      }
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseBoolean OK
   * @throws ApiError
   */
  public static editApp(
    requestBody: AppEditRequest
  ): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/app/edit",
      body: requestBody,
      mediaType: "application/json"
    });
  }

  /**
   * @param id
   * @returns BaseResponseBoolean OK
   * @throws ApiError
   */
  public static deleteApp(
    id: number
  ): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/app/delete",
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
  public static addApp(
    requestBody: AppAddRequest
  ): CancelablePromise<BaseResponseLong> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/app/add",
      body: requestBody,
      mediaType: "application/json"
    });
  }
}
