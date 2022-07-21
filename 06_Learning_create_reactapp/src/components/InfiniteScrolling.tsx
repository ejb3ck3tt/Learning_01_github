import { useEffect, useRef, useState } from "react";

type InfiniteScrollFuncProps = {
  readonly onBottomHit: () => void;
};
type InfiniteScrollProps = InfiniteScrollFuncProps & {
  readonly isLoading: boolean;
  readonly hasMoreData: boolean;
  readonly loadOnMount: boolean;
  readonly scrolledParentId: string;
};

const bottomThreshold = 30;

function isBottom(ref: React.RefObject<HTMLDivElement>) {
  if (ref.current == null) {
    return false;
  }
  return (
    ref.current.getBoundingClientRect().bottom <=
    window.innerHeight + bottomThreshold
  );
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  onBottomHit,
  isLoading,
  hasMoreData,
  loadOnMount,
  scrolledParentId,
  children,
}) => {
  const [initialLoad, setInitialLoad] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loadOnMount && initialLoad) {
      onBottomHit();
      setInitialLoad(false);
    }
  }, [onBottomHit, loadOnMount, initialLoad]);

  useEffect(() => {
    const onScroll = () => {
      if (!isLoading && hasMoreData && isBottom(contentRef)) {
        onBottomHit();
      }
    };
    const scrollableParent = document.getElementById(scrolledParentId);
    scrollableParent?.addEventListener("scroll", onScroll);
    return () => scrollableParent?.removeEventListener("scroll", onScroll);
  }, [onBottomHit, contentRef, isLoading, hasMoreData, scrolledParentId]);

  return <div ref={contentRef}>{children}</div>;
};

export default InfiniteScroll;
