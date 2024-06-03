/*
 * createRequestThunk
 * ------------------
 * Thunk Creator 지원
 * 출처: 리액트를 다루는 기술
 */


export default function createRequestThunk(type, request) {
    // Action Types 추가(성공/실패)
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    // Thunk Creator
    return (params) => async (dispatch) => {
        // 시작 디스패치
        dispatch({ type });

        try {
            // 호출
            const response = await request(params);

            // 성공시
            dispatch({
                type: SUCCESS,
                payload: response.data
            });

        } catch (e) {
            // 실패시
            dispatch({
                type: FAILURE,
                payload: e,
                error: true
            });
            throw e; // 에러 추적용
        }
    };
}