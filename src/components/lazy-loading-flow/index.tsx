"use client";
import ConditionalAlert from "../feedbacks/conditional-alert";
import LazyComponentLoader from "../loaders/lazy-component-loader";
import { LazyLoadingFlowPropsI } from "./lazy-loading-flow.interface";

const LazyLoadingFlow = (props: LazyLoadingFlowPropsI) => {
  const { isLoading, error } = props;

  if (isLoading) return <LazyComponentLoader />;
  if (error)
    return <ConditionalAlert condition={!!error} message="Please try later" />;
};

export default LazyLoadingFlow;
