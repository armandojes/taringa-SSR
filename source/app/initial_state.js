const initial_state = {
  posts: {
    items: [],
    loading: false,
    page: 0
  },
  pages: {
    post: {
      id: null,
      loading: false,
      data: null,
    },
    user: {
      loading: false,
      data: {},
    }
  }
}

export default initial_state
