import React from 'react'
import { Table, Button, message } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { deleteRoleFunc } from '../Reducer/action';

function Roletable(props) {
    const { dataSource, setEditingRole, setModalVisible } = props
    const loginData =JSON.parse(sessionStorage.getItem('userData'))
    const handleDeleteRole = (record) => {
        if (props.userData.find((data) => data.role == record.roleName)) {
            message.error("Role is assigned to some users");
        } else {
            props.deleteRoleFunc(record.roleId)
            message.success("Role deleted successfully");
        }
    };
    const columns = [
        { title: "ID", dataIndex: "id" },
        { title: "Role Name", dataIndex: "roleName" },
        { title: "Permissions", dataIndex: "permissions", render: (permissions) => permissions.join(", ") },
        {
            title: "Actions",
            render: (_, record) => (
                <span>
                    <Button onClick={() => { setEditingRole(record); setModalVisible(true) }} disabled={!loginData?.permissions.find((ele)=> ele == "update_roles")} className="me-3">Edit</Button>
                    <Button danger onClick={() => handleDeleteRole(record)} disabled={record.roleId == '101' || !loginData?.permissions.find((ele)=> ele == "delete_roles")}>Delete</Button>
                </span>
            ),
        },
    ];
    return (
        <div>
            <Table columns={columns} dataSource={dataSource} rowKey="roleId" bordered />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        roleData: state.roles,
        userData: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        deleteRoleFunc,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Roletable);