/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuestionContentDTO } from "./QuestionContentDTO";
import type { UserVO } from "./UserVO";

export type QuestionVO = {
  id?: number;
  questionContent?: Array<QuestionContentDTO>;
  appId?: number;
  userId?: number;
  createTime?: string;
  updateTime?: string;
  user?: UserVO;
};

