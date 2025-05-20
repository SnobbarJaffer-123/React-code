import {createSlice} from "@reduxjs/toolkit"

interface Post {
  $id: string;
  title: string;
  slug: string;
  content: string;
  featuredImage: string;
  status: string;
  userId: string;
}

interface PostState {
  posts: Post[];
  currentPost:string | null
  loading: boolean;
  error: string | null;
}

const initialState :PostState= {
  posts: [],
  currentPost: null,
  loading: false,
  error: null,
};

const postSlice=createSlice({
    name:"post",
    initialState,
    reducers:{
        
    setPosts: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
      state.error = null;
    },
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    updatePost: (state, action) => {
      const index = state.posts.findIndex(post => post.$id === action.payload.$id);
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter(post => post.$id !== action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }

    }
})


export const {
  setPosts,
  addPost,
  updatePost,
  deletePost,
  setLoading,
  setError
} = postSlice.actions;

export default postSlice.reducer;