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
    {
      id: 2,
      User: {
        id: 2,
        nickname: "tank",
      },
      content: 'sample 게시글 #test',
      Images: [
        {
          src: "https://t4.ftcdn.net/jpg/04/42/24/75/240_F_442247576_8XwSiAl4HxQpBpluRzyI0BFA6DgUNn68.jpg",
        },
        {
          src: "https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg",
        },
        {
          src: "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg",
        },
        {
          src: "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg",
        },
      ],
    },
  ],
};

const dummyPost = {
  id: 2,
  content: 'hello world #posting_test',
  User: {
      id: 1,
      nickname: '제로초',
  },
  Images: [{ src:"https://image.shutterstock.com/image-photo/odaiba-japan-10-january-2016-600w-687132658.jpg"}],
  Comments: [],
};

export const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_POST: {
      return {
          ...state,
          mainPosts: [dummyPost, ...state.mainPosts],
          postAdded: true,
      };
  }

    default:
      return state;
  }
};

export default reducer;
