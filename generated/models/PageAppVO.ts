/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppVO } from "./AppVO";
import type { OrderItem } from "./OrderItem";

export type PageAppVO = {
  records?: Array<AppVO>;
  total?: number;
  size?: number;
  current?: number;
  orders?: Array<OrderItem>;
  optimizeCountSql?: PageAppVO;
  searchCount?: PageAppVO;
  optimizeJoinOfCountSql?: boolean;
  maxLimit?: number;
  countId?: string;
  pages?: number;
};

