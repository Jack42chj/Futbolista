export const login_success = (user: { id: string }) => {
    return{
        type: "SUCCESS",
        payload: user,
    } as const;
};

export const logout = () => {
    return {
        type: "LOGOUT"
    } as const;
};

export type AuthActionType = ReturnType<typeof login_success> | ReturnType<typeof logout>;