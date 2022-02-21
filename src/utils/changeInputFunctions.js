export const changeInputHandler = (e, dispatchFn) => {
  dispatchFn({ type: 'CHANGE', value: e.target.value });
};
