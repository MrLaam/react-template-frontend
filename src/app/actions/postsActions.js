//export const ADD_TODO = 'ADD_TODO';
export const LOAD_POSTS = 'LOAD_POSTS';
export const STORE_POSTS = 'STORE_POSTS';

// export function addToDo(title) {
//   return {
//     type: ADD_TODO,
//     toDoItem: {
//       _id: (new Date().getTime()),
//       title
//     }
//   };
// }

export function loadPosts() {
    return {
      type: LOAD_POSTS
    };
  }