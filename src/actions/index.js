import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://localhost:3000/api';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/kittens`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/kittens/${id}`);
  return {
    type: FETCH_POST,
    payload: request
  };
}

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/kittens`, props);
  return {
    type: CREATE_POST,
    payload: request
  };
}

export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/kittens/${id}`);
  return {
    type: DELETE_POST,
    payload: request
  };
}