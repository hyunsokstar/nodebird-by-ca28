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

};

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';


// const dummyPost = {
//   id: 2,
//   content: 'hello world #posting_test',
//   User: {
//     id: 1,
//     nickname: '제로초',
//   },
//   Images: [{ src: "https://image.shutterstock.com/image-photo/odaiba-japan-10-january-2016-600w-687132658.jpg" }],
//   Comments: [],
// };

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

const reducer = (state = initialState, action) => {
  switch (action.type) {

    // case ADD_POST: {
    //   return {
    //       ...state,
    //       mainPosts: [dummyPost, ...state.mainPosts],
    //       postAdded: true,
    //   };
    // }

    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        addPostLoading: false,
        addPostDone: true,
        mainPosts: [dummyPost(action.data), ...state.mainPosts],
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };

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

    default:
      return state;
  }
};

export default reducer;
