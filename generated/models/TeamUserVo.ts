/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserVO } from "./UserVO";

export type TeamUserVo = {
  id?: number;
  teamName?: string;
  description?: string;
  expireTime?: string;
  userId?: number;
  maxNum?: number;
  teamStatus?: number;
  createTime?: string;
  updateTime?: string;
  createUser?: UserVO;
  hasJoin?: boolean;
  hasJoinNum?: number;
};

