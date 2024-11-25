import React, { useEffect, useState } from "react";
import {  Button, Modal, Form, Input, Select, message } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createUserFunc } from "../Reducer/action";
import Table from "../modal/Table";
import Header from "../header/Header";
import Usermodal from "../modal/Usermodal";
const UserManagement = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const loginData =JSON.parse(sessionStorage.getItem('userData'))

  return (
    <div className="p-5">
      <Header />
      <div className="w-3/4 m-auto text-right mt-5">
        <Button type="primary" onClick={() => setModalVisible(true)} className="mb-3" disabled={!loginData?.permissions.find((ele)=> ele == "create_users")}>
          Add User
        </Button>
        <Table dataSource={props.userData} setEditingUser={setEditingUser} setModalVisible={setModalVisible}/>
      </div>
      <Usermodal setEditingUser={setEditingUser} setModalVisible={setModalVisible} editingUser={editingUser} modalVisible={modalVisible}  />
    </div>
  );
};

const mapStateToProps = (state) =>{
  return{
    userData : state.users
  }
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({
    createUserFunc
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(UserManagement);
