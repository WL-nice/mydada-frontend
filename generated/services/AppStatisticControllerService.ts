/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponseListAppAnswerResultCountDTO } from "../models/BaseResponseListAppAnswerResultCountDTO";
import type { BaseResponseListUserAnswerCountDTO } from "../models/BaseResponseListUserAnswerCountDTO";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class AppStatisticControllerService {
  /**
   * @param appId
   * @returns BaseResponseListAppAnswerResultCountDTO OK
   * @throws ApiError
   */
  public static getAppAnswerResultCount(
    appId: number
  ): CancelablePromise<BaseResponseListAppAnswerResultCountDTO> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/app/statistic/result_count",
      query: {
        "appId": appId
      }
    });
  }

  /**
   * @returns BaseResponseListUserAnswerCountDTO OK
   * @throws ApiError
   */
  public static getUserAnswerCount(): CancelablePromise<BaseResponseListUserAnswerCountDTO> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/app/statistic/answer_count"
    });
  }
}
