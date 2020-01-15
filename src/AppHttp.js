import React, { Component } from 'react'
import logger from './http-app/services/logService'
import { ToastContainer, toast } from 'react-toastify'

import http from './http-app/services/httpService'
import config from './http-app/config.json'
import 'react-toastify/dist/ReactToastify.css'
import './AppHttp.css'

class AppHttp extends Component {
  state = {
    posts: []
  }

  async componentDidMount() {
    const { data: posts } = await http.get(config.apiEndpoint)
    this.setState({ posts })
  }

  handleAdd = async () => {
    const obj = { title: 'The title', body: 'The body' }
    const { data: post } = await http.post(config.apiEndpoint, obj)

    const posts = [post, ...this.state.posts]
    this.setState({ posts })
  }

  handleUpdate = async post => {
    const originalPosts = this.state.posts

    post.title += ' UPDATED'
    const posts = [...this.state.posts]
    const index = posts.indexOf(post)
    posts[index] = { ...post }
    this.setState({ posts })

    try {
      await http.put(config.apiEndpoint + '/' + post.id, post)
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        logger.log('Post not found')
        toast.error('Post not found')
      }

      this.setState({ posts: originalPosts })
    }
  }

  handleDelete = async post => {
    const originalPosts = this.state.posts

    const posts = this.state.posts.filter(p => p.id !== post.id)
    this.setState({ posts })

    try {
      await http.delete(config.apiEndpoint + '/' + post.id)
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        logger.log('This post has already been deleted')
        toast.error('This post has already been deleted')
      }

      this.setState({ posts: originalPosts })
    }
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <button onClick={this.handleAdd} className='btn btn-primary'>
          Add
        </button>
        <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    onClick={() => this.handleUpdate(post)}
                    className='btn btn-info btn-sm'
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(post)}
                    className='btn btn-danger btn-sm'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

export default AppHttp
