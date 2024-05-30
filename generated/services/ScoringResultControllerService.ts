/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponseBoolean } from "../models/BaseResponseBoolean";
import type { BaseResponseLong } from "../models/BaseResponseLong";
import type { BaseResponsePageScoringResult } from "../models/BaseResponsePageScoringResult";
import type { BaseResponsePageScoringResultVO } from "../models/BaseResponsePageScoringResultVO";
import type { BaseResponseScoringResultVO } from "../models/BaseResponseScoringResultVO";
import type { ScoringResultAddRequest } from "../models/ScoringResultAddRequest";
import type { ScoringResultQueryRequest } from "../models/ScoringResultQueryRequest";
import type { ScoringResultUpdateRequest } from "../models/ScoringResultUpdateRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class ScoringResultControllerService {
  /**
   * @param requestBody
   * @returns BaseResponseBoolean OK
   * @throws ApiError
   */
  public static updateScoringResult(
    requestBody: ScoringResultUpdateRequest
  ): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/scoringResult/update",
      body: requestBody,
      mediaType: "application/json"
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponsePageScoringResultVO OK
   * @throws ApiError
   */
  public static listMyScoringResultVoByPage(
    requestBody: ScoringResultQueryRequest
  ): CancelablePromise<BaseResponsePageScoringResultVO> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/scoringResult/my/list/page/vo",
      body: requestBody,
      mediaType: "application/json"
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponsePageScoringResult OK
   * @throws ApiError
   */
  public static listScoringResultByPage(
    requestBody: ScoringResultQueryRequest
  ): CancelablePromise<BaseResponsePageScoringResult> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/scoringResult/list/page",
      body: requestBody,
      mediaType: "application/json"
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponsePageScoringResultVO OK
   * @throws ApiError
   */
  public static listScoringResultVoByPage(
    requestBody: ScoringResultQueryRequest
  ): CancelablePromise<BaseResponsePageScoringResultVO> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/scoringResult/list/page/vo",
      body: requestBody,
      mediaType: "application/json"
    });
  }

  /**
   * @param id
   * @returns BaseResponseScoringResultVO OK
   * @throws ApiError
   */
  public static getScoringResultVo(
    id: number
  ): CancelablePromise<BaseResponseScoringResultVO> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/scoringResult/get/vo",
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
  public static deleteScoringResult(
    id: number
  ): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/scoringResult/delete",
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
  public static addScoringResult(
    requestBody: ScoringResultAddRequest
  ): CancelablePromise<BaseResponseLong> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/scoringResult/add",
      body: requestBody,
      mediaType: "application/json"
    });
  }
}
