import ApiErrorState from "../api-error-state";
import ApiNoDataState from "../api-no-data-state";
import { SKELETON_TYPES } from "../../../constants/ui";
import BarSkeleton from "../skeletons/bar-skeleton";

const skeletonTypes = {
  [SKELETON_TYPES?.BARS]: BarSkeleton,
};

export const ApiRequestFlow = (props) => {
  const {
    showSkeleton = false,
    skeletonType = SKELETON_TYPES?.BARS,
    cardSkeletonType = SKELETON_TYPES?.CARD,
    length = 4,
    hasError = false,
    refreshApi,
    errorHeight = "50vh",
    hasNoData = false,
    noDataMessage,
    noDataHeight = errorHeight,
    refreshButtonProps,
    children,
    errorChildren,
    noDataChildren,
    errorMessage,
    canRefresh = true,
    errorTextColor,
  } = props;

  const SkeletonComponent = skeletonTypes?.[skeletonType];

  if (showSkeleton)
    return (
      <SkeletonComponent
        length={length}
        {...(skeletonType === SKELETON_TYPES?.CARD
          ? { cardType: cardSkeletonType }
          : {})}
      />
    );

  if (hasError)
    return (
      <ApiErrorState
        message={errorMessage}
        canRefresh={canRefresh}
        refresh={refreshApi}
        height={errorHeight}
        refreshButtonProps={refreshButtonProps}
        textColor={errorTextColor}
      >
        {errorChildren}
      </ApiErrorState>
    );

  if (hasNoData)
    return (
      <ApiNoDataState message={noDataMessage} height={noDataHeight}>
        {noDataChildren}
      </ApiNoDataState>
    );

  return <>{children}</>;
};
