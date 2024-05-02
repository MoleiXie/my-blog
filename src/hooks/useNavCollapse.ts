import { useState, useEffect, useCallback } from "react";

type UseNavCollapseReturnType = { isCollapse: boolean };

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
