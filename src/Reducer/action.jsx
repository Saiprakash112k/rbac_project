// User Actions
export const createUserFunc = (data) => {
    return {
        type: "CREATE_USER",
        payload: data
    };
};

export const updateUserFunc = (data) => {
    return {
        type: "UPDATE_USER",
        payload: data
    };
};

export const deleteUserFunc = (data) => {
    return {
        type: "DELETE_USER",
        payload: data
    };
};

// Role Actions
export const createRoleFunc = (data) => {
    return {
        type: "CREATE_ROLE",
        payload: data
    };
};

export const updateRoleFunc = (data) => {
    return {
        type: "UPDATE_ROLE",
        payload: data
    };
};

export const deleteRoleFunc = (data) => {
    return {
        type: "DELETE_ROLE",
        payload: data
    };
};
