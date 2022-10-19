import { UserActionTypes } from "../user/user.types";

export const setCurrentUser = (user) => ({
	type: UserActionTypes,
	payload: user,
});
