export const checkPermission = (userRole, action, roles) => {
    const role = roles.find((r) => r.name === userRole);
    return role?.permissions.includes(action);
  };
  