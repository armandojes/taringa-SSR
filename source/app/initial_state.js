const initial_state = {
  posts: {
    items: [],
    loading: false,
    page: 0
  },
  pages: {
    post: {
      loading: false,
      data: {},
    },
    user: {
      loading: false,
      data: {},
    }
  }
}

export default initial_state
