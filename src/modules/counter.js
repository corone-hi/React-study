import {createAction, handleActions} from 'redux-actions';
import {delay, put,  takeEvery, takeLatest, select} from 'redux-saga/effects';


const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';


export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increaseAsync = createAction(INCREASE_ASYNC, ()=>undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

/*
export const increaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(increase());
    }, 1000);
}
export const decreaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(decrease());
    }, 1000);
    
}*/

function* increaseSaga() {
    yield delay(1000);
    yield put(increase()); //특정 액션 디스패치
    
    const number = yield select(state => state.counter);
    console.log(`현재 값은 ${number}입니다.`)
}

function* decreaseSaga(){
    yield delay(1000);
    yield put(decrease()); //특정 액션 디스패치
}



export function* counterSaga(){
    //takeEvery는 들어오는 모든 액션에 대해 특정 작업을 처리해 준다.
    yield takeEvery(INCREASE_ASYNC, increaseSaga);
    yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}
const initialState = 0;
//상태는 꼭 객체일 필요 x

const counter = handleActions(
    {
        [INCREASE]: state => state +1,
        [DECREASE]: state => state -1
    },
    initialState
);

export default counter;
