import { useState, useEffect, useCallback } from "react";

type UseNavCollapseReturnType = { isCollapse: boolean };

/**
 * 屏幕宽度小于viewWidth时，isCollapes为false
 * @param viewWidth - 限制屏幕宽度
 * @returns 响应式布尔值
 */
const useNavCollapse = (viewWidth: number): UseNavCollapseReturnType => {
	const [isCollapse, setIsCollapse] = useState(window.innerWidth < viewWidth);

	const checkCollapse = useCallback(() => {
		if (window.innerWidth < viewWidth) {
			setIsCollapse(true);
		} else {
			setIsCollapse(false);
		}
	}, [viewWidth]);

	const listenerCollapse = useCallback(() => {
		window.addEventListener("resize", checkCollapse);
	}, [checkCollapse]);

	const removeListenerCollapse = useCallback(() => {
		window.removeEventListener("resize", checkCollapse);
	}, [checkCollapse]);

	useEffect(() => {
		listenerCollapse();
		return () => {
			removeListenerCollapse();
		};
	}, [listenerCollapse, removeListenerCollapse]);

	return { isCollapse };
};

export default useNavCollapse;
