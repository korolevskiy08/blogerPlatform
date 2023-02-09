// import { BlogItemType } from './blogs-api';
// import { blogsSlice, Status } from './blogs-slice';
//
// import { blogsActions } from './index';
//
// const { getBlogs } = blogsActions;
//
// const blogsReducer = blogsSlice;
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// let startState: startStateType;
//
// beforeEach(() => {
//   startState = {
//     status: 'idle' as Status,
//     blogs: [] as BlogItemType[],
//     error: null as null | string,
//     params: {
//       searchNameTerm: '',
//       pageNumber: 0,
//       pageSize: 10,
//       sortBy: 'createdAt',
//       sortDirection: 'desc',
//       pagesCount: 1,
//       page: 0,
//       fetching: false,
//     },
//   };
// });
//
// test('blogs must be received', () => {
//   const endState = blogsReducer(startState, getBlogs.fulfilled);
//
//   expect(endState.blogs.length).toBe(endState.blogs.length > 1);
// });
//
// type startStateType = {
//   status: Status;
//   blogs: BlogItemType[];
//   error: null | string;
//   params: {
//     searchNameTerm: string;
//     pageNumber: number;
//     pageSize: number;
//     sortBy: string;
//     sortDirection: string;
//     pagesCount: number;
//     page: number;
//     fetching: boolean;
//   };
// };
