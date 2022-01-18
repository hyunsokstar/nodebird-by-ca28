import { all, fork, takeLatest, delay, put } from 'redux-saga/effects';
import {
    REMOVE_POST_REQUEST,
    REMOVE_POST_SUCCESS,
    REMOVE_POST_FAILURE,
    ADD_POST_FAILURE,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,

    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILURE,

} from '../reducers/post';
import shortId from 'shortid';
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';

function addCommentAPI(data) {
    return axios.post(`/api/post/${data.postId}/comment`, data);
}
function* addComment(action) {
    console.log("addComent action : ", action.data);
    try {
        // const result = yield call(addCommentAPI, action.data);
        console.log("saga comment action.data : ", action.data);
        yield delay(1000);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        console.log("댓글 에러 : ", err);
        yield put({
            type: ADD_COMMENT_FAILURE,
            data: err.response.data,
        });
    }
}

function addPostAPI(data) {
    return axios.post('/api/post', data);
}
function* addPost(action) {
    try {
        // const result = yield call(addPostAPI, action.data);
        yield delay(1000);
        const id = shortId.generate();
        console.log("saga action.data : ", action.data);
        yield put({
            type: ADD_POST_SUCCESS,
            data: {
                id,
                content: action.data.text, // 입력폼에 입력한 데이터가 여기까지 넘어옴
            },
        });
        yield put({
            type: ADD_POST_TO_ME,
            data: id,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: ADD_POST_FAILURE,
            data: err.response.data,
        });
    }
}

function removePostAPI(data) {
    return axios.delete('/api/post', data);
}
function* removePost(action) {

    console.log("삭제할 id : ", action.data);

    try {
        // const result = yield call(removePostAPI, action.data);
        yield delay(1000);
        yield put({
            type: REMOVE_POST_SUCCESS,
            data: action.data,
        });

        yield put({
            type: REMOVE_POST_OF_ME,
            data: action.data,
        });

    } catch (err) {
        console.error(err);
        yield put({
            type: REMOVE_POST_FAILURE,
            data: err.response.data,
        });
    }
}

function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
    yield all([
        fork(watchRemovePost),
        fork(watchAddPost),
        fork(watchAddComment),
    ]);
}

