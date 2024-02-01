import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialUsersState = {
    allUsers: [],
    userPosts: [],
    userAlbums: [],
};

const usersSlice = createSlice({
    name: 'users',
    initialState: initialUsersState,
    reducers: {
        updateUsers(state, action) {
            state.allUsers = action.payload;
        },
        updateUserPosts(state, action) {
            state.userPosts = action.payload;
        },
        updateUserAlbums(state, action) {
            state.userAlbums = action.payload;
        },
    },
});

export default usersSlice.reducer;
export const {
    updateUsers,
    updateUserPosts,
    updateUserAlbums,
} = usersSlice.actions;

const selectUsers = (state) => state.users;

export const selectAllUsers = createSelector(selectUsers, (state) => state.allUsers);
export const selectAllUserPosts = createSelector(selectUsers, (state) => state.userPosts);
export const selectAllUserAlbums = createSelector(selectUsers, (state) => state.userAlbums);