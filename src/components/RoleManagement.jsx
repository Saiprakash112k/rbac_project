import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, Select, message } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Header from "../header/Header";
import Roletable from "../modal/Roletable";
import Rolemodal from "../modal/Rolemodal";
const RoleManagement = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [editingRole, setEditingRole] = useState(null);
  const loginData =JSON.parse(sessionStorage.getItem('userData'))
  return (
    <div className="p-5">
    <Header />
    <div className="w-3/4 m-auto text-right mt-5">
      <Button type="primary" onClick={() => setModalVisible(true)} className="mb-3" disabled={!loginData?.permissions.find((ele)=> ele == "create_roles")}>
        Add Role
      </Button>
      <Roletable dataSource={props.roleData} setEditingRole={setEditingRole} setModalVisible={setModalVisible}/>
      <Rolemodal modalVisible={modalVisible} setModalVisible={setModalVisible} editingRole={editingRole}/>
    </div>
  </div>
  );
};

const mapStateToProps = (state) =>{
  console.log(state)
  return{
    roleData : state.roles
  }
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(RoleManagement);
