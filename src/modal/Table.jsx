import React from 'react'
import { Table } from 'antd'
import { Button } from "antd";
import { deleteUserFunc } from "../Reducer/action";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
function Tablecomponent(props) {
    const { dataSource, setEditingUser, setModalVisible } = props
    const loginData =JSON.parse(sessionStorage.getItem('userData'))
    const handleDeleteUser =  (userId) => {
        props.deleteUserFunc(userId)
    };
    const columns = [
        { title: "ID", dataIndex: "id",responsive: ["xs","sm", "md", "lg"], },
        { title: "User Name", dataIndex: "username",responsive: ["xs","sm", "md", "lg"], },
        { title: "Role", dataIndex: "role",responsive: ["xs","sm", "md", "lg"], },
        { title: "Email", dataIndex: "email",responsive: ["sm", "md", "lg"], },
        { title: "Phone Number", dataIndex: "phoneNumber",responsive: ["sm", "md", "lg"], },
        {
            title: "Status", dataIndex: "status",responsive: ["xs","sm", "md", "lg"], render: (_, { status }) => {
                if (status)
                    return <p>available</p>
                else
                    return <p>unavailable</p>
            }
        },
        {
            title: "Actions",
            responsive: ["sm", "md", "lg"],
            render: (_, record) => {
                return (
                    <span>
                        <Button  onClick={() => { setEditingUser(record); setModalVisible(true) }} disabled={!loginData?.permissions.find((ele)=> ele == "update_users")} className="me-3">Edit</Button>
                        <Button danger onClick={() => handleDeleteUser(record.userId)} disabled={record.userId === '001' || !loginData?.permissions.find((ele)=> ele == "delete_users")}>
                            Delete
                        </Button>
                    </span>
                )
            }

            ,
        },
    ];


    return (
        <div>
            <Table columns={columns} dataSource={dataSource} rowKey="userId" bordered  scroll={{ x: 600 }} />
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        userData: state.users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            deleteUserFunc
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Tablecomponent);