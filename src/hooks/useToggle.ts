import { useCallback, useState } from 'react';

/**
 * 一个开关钩子函数
 * @param initialState 初始化的开关状态
 * @returns {[state: boolean, toggle: () => void]}
 */
const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => {
    setState((prevState) => !prevState);
  }, []);

  return [state, toggle] as const;
};

export default useToggle;