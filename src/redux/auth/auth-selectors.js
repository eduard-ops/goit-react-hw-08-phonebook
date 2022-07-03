const getIsLooggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user?.name;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLooggedIn,
  getUsername,
  getIsFetchingCurrent,
};

export default authSelectors;
