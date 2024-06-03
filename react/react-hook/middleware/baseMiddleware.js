const baseMiddleware = (store) => (next) => (action) => {
    console.group(action && action.type);
    // 데이터 처리 전 작업
    console.log('이전 상태', store.getState());
    console.log('액션', action);

    // 다음 미들웨어 혹은 리듀서에게 전달하여 처리
    next(action); 
    
    // 데이터 처리 후 작업
    console.log('다음 상태', store.getState());
    console.groupEnd();
};

export default baseMiddleware;