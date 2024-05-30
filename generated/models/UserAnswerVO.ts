/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserVO } from "./UserVO";

export type UserAnswerVO = {
  id?: number;
  appId?: number;
  appType?: number;
  scoringStrategy?: number;
  choices?: Array<string>;
  resultId?: number;
  resultName?: string;
  resultDesc?: string;
  resultPicture?: string;
  resultScore?: number;
  userId?: number;
  createTime?: string;
  updateTime?: string;
  user?: UserVO;
};

