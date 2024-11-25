import React, { useEffect } from 'react'
import {  Button, Modal, Form, Input, Select, message } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createRoleFunc, updateRoleFunc } from '../Reducer/action';
function Rolemodal(props) {
    const { modalVisible, setModalVisible, editingRole } = props

    const [form] = Form.useForm();
    useEffect(() => {
        if (editingRole) {
            form.setFieldsValue({
                roleName: editingRole.roleName,
                permissions: editingRole.permissions
            });
        } else {
            form.resetFields();
        }
    }, [editingRole, form]);
    const formSubmit = (values) => {
        try {
            if (editingRole) {
                const format = {
                    ...values,
                    roleId: editingRole.roleId
                }
                props.updateRoleFunc(format)
                message.success("Role updated successfully");
            } else {
                if(values.permissions)
                props.createRoleFunc(values);
                message.success("Role created successfully");
            }
            setModalVisible(false);
            form.resetFields();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <Modal
                open={modalVisible}
                onCancel={() => {
                    setModalVisible(false);
                }}
                footer={null}
            >
                <Form
                    layout="vertical"
                    className="pt-5"
                    form={form}
                    onFinish={formSubmit}
                    initialValues={{
                        roleName: "",
                        permissions: []
                    }}

                >
                    <lable className="text-md font-semibold">Role Name</lable>
                    <Form.Item name="roleName" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <lable className="text-md font-semibold">Permissions</lable>
                    <Form.Item name="permissions" rules={[{ required: true }]}>
                        <Select mode="multiple" options={[
                            { value: "create_users" },
                            { value: "update_users" },
                            { value: "delete_users" },
                            { value: "create_roles" },
                            { value: "update_roles" },
                            { value: "delete_roles" }
                        ]} />
                    </Form.Item>
                    <div className="flex justify-end mt-2 gap-2">
                        <Button danger onClick={() => setModalVisible(false)}>
                            Close
                        </Button>
                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                    </div>
                </Form>
            </Modal>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.roles
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        createRoleFunc,
        updateRoleFunc
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Rolemodal);