import shortId from 'shortid';
import produce from 'immer';


export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "tank",
      },
      content: "sample 게시글 for Test",
      Images: [
        {
          src: "https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159__340.jpg",
        },
        {
          src: "https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg",
        },
        // {
        //   src: "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg",
        // },
        // {
        //   src: "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg",
        // },
      ],

      Comments: [{
        User: {
          nickname: 'nero',
        },
        content: '첫번째 더미 댓글 fisrt ',
      }, {
        User: {
          nickname: 'hero',
        },
        content: '두번째 더미 댓글 second',
      }]

    },

  ],

  removePostLoading: false,
  removePostDone: false,
  removePostError: null,

  addPostLoading: false,
  addPostDone: false,
  addPostError: null,

  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,

};

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';


const dummyComment = (data) => ({
  id: shortId.generate(),
  content: data,
  User: {
    id: 1,
    nickname: "제로초",
  },
});

const dummyPost = (data) => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: '제로초',
  },
  Images: [],
  Comments: [],
});

// export const ADD_POST = 'ADD_POST';
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';


// export const addPost = {
//   type: ADD_POST,
// };

export default (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_POST_REQUEST:
        // return {
        //     ...state,
        //     addPostLoading: true,
        //     addPostDone: false,
        //     addPostError: null,
        // };
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
    case ADD_POST_SUCCESS:
        // return {
        //     ...state,
        //     mainPosts: [dummyPost(action.data), ...state.mainPosts],
        //     addPostLoading: false,
        //     addPostDone: true,
        // };
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(dummyPost(action.data));
        break;
    case ADD_POST_FAILURE:
        // return {
        //     ...state,
        //     addPostLoading: false,
        //     addPostError: action.error,
        // };
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;


      case REMOVE_POST_REQUEST:
        return {
          ...state,
          removePostLoading: true,
          removePostDone: false,
          removePostError: null,
        };
      case REMOVE_POST_SUCCESS:
        return {
          ...state,
          // filter 의 각각의 요소가 v로 전달 되며 
          // v.id !== action.data(=post.id) 인것들로 다시 재구성 
          mainPosts: state.mainPosts.filter((v) => {
            console.log("삭제할 id : ", action.data);
            return v.id !== action.data
          }),
          removePostLoading: false,
          removePostDone: true,
        };
      case REMOVE_POST_FAILURE:
        return {
          ...state,
          removePostLoading: false,
          removePostError: action.error,
        };

        case ADD_COMMENT_REQUEST:
          // return {
          //     ...state,
          //     addCommentLoading: true,
          //     addCommentDone: false,
          //     addCommentError: null,
          // };
          draft.addCommentLoading = true;
          draft.addCommentDone = false;
          draft.addCommentError = null;
          break;
      case ADD_COMMENT_SUCCESS:
          // // 사가에서 넘어온 postId를 이용해 원래 게시글 정보 찾기
          // const postIndex = state.mainPosts.findIndex(
          //     (v) => v.id === action.data.postId
          // );
          // const post = { ...state.mainPosts[postIndex] };
          // // 원래 댓글 정보 + 새로운 댓글 정보로 댓글 정보 재구성
          // const Comments = [
          //     dummyComment(action.data.content),
          //     ...post.Comments,
          // ];
          // // 원래 게시글 정보의 게시글과 댓글 정보를 재구성 
          // const mainPosts = [...state.mainPosts]
          // mainPosts[postIndex] = { ...post, Comments };
          // return {
          //     ...state,
          //     mainPosts,
          //     addCommentLoading: false,
          //     addCommentDone: true,
          // };
          // 댓글이 달릴 포스팅 객체 찾기
          const post = draft.mainPosts.find((v) => v.id === action.data.postId);
          post.Comments.unshift(dummyComment(action.data.content));
          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          break;                
      case ADD_COMMENT_FAILURE:
          // return {
          //     ...state,
          //     addCommentLoading: false,
          //     addCommentError: action.error,
          // };
          draft.addCommentLoading = false;
          draft.addCommentError = action.error;
          break;

      default:
        return state;

    }
  })
}

// const reducer = (state = initialState, action) => {
//   switch (action.type) {

//     // case ADD_POST: {
//     //   return {
//     //       ...state,
//     //       mainPosts: [dummyPost, ...state.mainPosts],
//     //       postAdded: true,
//     //   };
//     // }

//   }
// };

// export default reducer;
