import React from 'react';
import {Space, Spin} from 'antd';
import styled from "styled-components";

const Spiner = () => {
    return (
        <Space style={{width:"100%",margin: "10px auto"}} size="middle">
            <Spin size="large"/>
        </Space>
    );
};

export default Spiner;