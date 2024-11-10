import { useCallback } from "react";
import { useEventListener } from "usehooks-ts";

/** ref로 전달된 컴포넌트에 wheel이벤트를 등록하여 세로 스크롤 동작 대신 가로 스크롤이 동작하게 만듭니다.
 * 횡스크롤 동작은 원래 shift+scroll이지만 scroll만으로도 동작하게 만듭니다.
 */
export function useHorizontalScroll(
  ref: React.RefObject<HTMLElement>,
  disabled?: boolean,
) {
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      const scrollElement = ref.current;
      if (!scrollElement) return;
      if (disabled) return;
      e.preventDefault();
      scrollElement.scrollLeft += e.deltaY;
    },
    [ref, disabled],
  );

  useEventListener("wheel", handleWheel, ref, {
    passive: false,
  });
}

/** ref로 전달된 컴포넌트에 wheel이벤트를 등록하여 특정 상황에서 wheel 이벤트가 전파되지 않도록 합니다.
 */
export function useStopWheelPropagation(
  ref: React.RefObject<HTMLElement>,
  shouldStop: (e: WheelEvent) => boolean,
) {
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (shouldStop(e)) {
        e.stopPropagation();
      }
    },
    [shouldStop],
  );

  useEventListener("wheel", handleWheel, ref, { passive: false });
}

/** ref로 전달된 컴포넌트가 현재 오버스크롤(최상단에서 위스크롤, 최하단에서 아래스크롤) 상태인지 확인합니다. */
export function isOverScrolling(
  ref: React.RefObject<HTMLElement>,
  e: WheelEvent,
) {
  const scrollElement = ref.current;
  if (!scrollElement) return false;
  const scrollableHeight =
    scrollElement.scrollHeight - scrollElement.offsetHeight;
  const currentScrollTop = scrollElement.scrollTop;
  const isBottomOverScrolling =
    currentScrollTop >= scrollableHeight && e.deltaY > 0;
  const isTopOverScrolling = currentScrollTop <= 0 && e.deltaY < 0;
  return isBottomOverScrolling || isTopOverScrolling;
}
