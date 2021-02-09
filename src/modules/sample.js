import {createAction, handleActions} from 'redux-actions';
import {call, put, takeLatest} from 'redux-saga/effects'
import * as api from '../lib/api';
//import createRequestThunk from '../lib/createRequestThunk';
import {startLoading, finishLoading} from './loading';
import createRequestSaga from '../lib/createRequestSaga';
//액션 타입선언
//하나의 요청당 3개

const GET_POST =  'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

//thunk함수 (시작, 성공, 실패 각각 다른 액션을 디스패치)

export const getPost = createAction(GET_POST, id => id);
export const getUsers = createAction(GET_USERS);

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

/*
function* getPostSaga(action){
    yield put(startLoading(GET_POST));
    //파라미터로 action을 받아오면 액션 정보 조회 가능
    try{
        const post = yield call(api.getPost, action.payload);
        // api.getPost(action.payload)와 동일
        yield put({
            type: GET_POST_SUCCESS,
            payload: post.data
        });
    }catch(e){
        yield put({
            type: GET_POST_FAILURE,
            payload:e,
            error:true
        });
    }
    yield put(finishLoading(GET_POST));
}

function* getUsersSaga(action){
    yield put(startLoading(GET_USERS));
    //파라미터로 action을 받아오면 액션 정보 조회 가능
    try{
        const users = yield call(api.getUsers, action.payload);
        // api.getPost(action.payload)와 동일
        yield put({
            type: GET_USERS_SUCCESS,
            payload: users.data
        });
    }catch(e){
        yield put({
            type: GET_USERS_FAILURE,
            payload:e,
            error:true
        })
    }
    yield put(finishLoading(GET_USERS));
}*/


export function* sampleSaga(){
    yield takeLatest(GET_POST, getPostSaga);
    yield takeLatest(GET_USERS, getUsersSaga);
}


//초기상태 선언
//요청의 로딩 중 상태는 loading으로 관리

const initialState = {
    loading:{
        GET_POST: false,
        GET_USERS: false
    },
    post:null,
    users:null
}

const sample = handleActions(
    {
        
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            loading:{
                ...state.loading,
                GET_POST:false //요청완료
            },
            post: action.payload
        }),
        [GET_USERS_SUCCESS]: (state,action) => ({
            ...state,
            loading:{
                ...state.loading,
                GET_POST:false //요청완료
            },
            users: action.payload
        })
       
    }, initialState
);

export default sample;