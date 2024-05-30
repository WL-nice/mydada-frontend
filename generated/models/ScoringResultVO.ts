/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserVO } from "./UserVO";

export type ScoringResultVO = {
  id?: number;
  resultName?: string;
  resultDesc?: string;
  resultPicture?: string;
  resultProp?: Array<string>;
  resultScoreRange?: number;
  appId?: number;
  userId?: number;
  createTime?: string;
  updateTime?: string;
  user?: UserVO;
};

