import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Input, Select, Switch,Row,Col } from "antd";
import { createUserFunc,deleteUserFunc,updateUserFunc } from "../Reducer/action";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

function Usermodal(props) {
    const { setModalVisible, modalVisible, editingUser } = props;
    const [form] = Form.useForm();
    const [roles,setRoles] = useState([])
    useEffect(() => {
        if (editingUser) {
            // Dynamically set form fields when editingUser changes
            form.setFieldsValue({
                username: editingUser.username,
                role: editingUser.role,
                phoneNumber: editingUser.phoneNumber,
                email: editingUser.email,
                status: editingUser.status,
            });
        } else {
            // Reset form fields for adding a new user
            form.resetFields();
        }
    }, [editingUser, form]);
    useEffect(()=>{
        const formatData = props.roleData.map((data) => {
            return {
              label: data.roleName,
              value: data?.roleName
            }
          })
          setRoles(formatData)
    },[props.roleData])
    const formSubmit = (values) => {
        try {
            if(editingUser){
                const format = {
                    ...values,
                    userId : editingUser.userId
                }
                props.updateUserFunc(format)
            }else{
                props.createUserFunc(values);
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
                width={"40%"}
                open={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={null}
            >
                <Form
                    layout="vertical"
                    className="pt-5"
                    form={form}
                    onFinish={formSubmit}
                    initialValues={{
                        username: "",
                        role: "",
                        phoneNumber: "",
                        email: "",
                        status: false,
                    }}
                >
                    <Row gutter={12}>
                        <Col xs={24} sm={12}>
                            <label className="text-md font-semibold">User Name</label>
                            <Form.Item name="username" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12}>
                            <label className="text-md font-semibold">Role</label>
                            <Form.Item name="role" rules={[{ required: true }]}>
                                <Select options={roles} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={12}>
                        <Col xs={24} sm={12}>
                            <label className="text-md font-semibold">Phone Number</label>
                            <Form.Item name="phoneNumber" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12}>
                            <label className="text-md font-semibold">Email</label>
                            <Form.Item name="email" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col xs={24} sm={12}>
                            <label className="text-md font-semibold">Status</label>
                            <Form.Item name="status" valuePropName="checked">
                                <Switch />
                            </Form.Item>
                        </Col>
                    </Row>
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
    );
}

const mapStateToProps = (state) => {
    return {
        userData: state.users,
        roleData:state.roles
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            createUserFunc,
            updateUserFunc,
            deleteUserFunc
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Usermodal);
