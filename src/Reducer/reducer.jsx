import { v4 as uuidv4 } from 'uuid';

const initialState = {
    users: [
        {
            id: '1',
            username: "admin",
            password: "admin123",
            role: "Admin",
            phoneNumber: '9342649696',
            email: 'saiprakash112k@gmail.com',
            userId: '001',
            status: true
        }
    ],
    roles: [
        {
            id:'1',
            roleId: '101',
            roleName: 'Admin',
            permissions: ['create_users','update_users','delete_users','create_roles','update_roles','delete_roles']
        }
    ]
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        // User Management
        case "CREATE_USER":
            const newUser = {
                userId: uuidv4(),
                id: state.users.length + 1,
                password: "test123",
                ...action.payload
            };
            return {
                ...state,
                users: [...state.users, newUser]
            };

        case "UPDATE_USER":
            return {
                ...state,
                users: state.users.map(user =>
                    user.userId === action.payload.userId
                        ? { ...user, ...action.payload }
                        : user
                )
            };

        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => user.userId !== action.payload)
            };

        // Role Management
        case "CREATE_ROLE":
            const newRole = {
                roleId: uuidv4(),
                id:state.roles.length + 1,
                ...action.payload
            };
            return {
                ...state,
                roles: [...state.roles, newRole]
            };

        case "UPDATE_ROLE":
            return {
                ...state,
                roles: state.roles.map(role =>
                    role.roleId === action.payload.roleId
                        ? { ...role, ...action.payload }
                        : role
                )
            };

        case "DELETE_ROLE":
            return {
                ...state,
                roles: state.roles.filter(role => role.roleId !== action.payload)
            };

        default:
            return state;
    }
};

export default Reducer;
