import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPlanes} from "../redux/slice/planesSlice";
import { Card, Col, Row } from 'antd';
import styled from "styled-components";
import PlanesItem from "../components/PlanesItem";
import Spiner from "../components/Spiner";
import {Result } from 'antd';
const Home = () => {
    const dispatch=useDispatch()
    const {planes,isloading,iserror}=useSelector(state => state.planesdata)

    useEffect(()=>{
        dispatch(getPlanes())
    },[])

    return (
        <Box>
            <Row gutter={16}>
                {isloading? <Spiner/>:(
                    iserror?  <Result
                        status="500"
                        title="500"
                        style={{margin:"0 auto"}}
                        subTitle="Sorry, something went wrong."
                    />:(
                     planes &&  planes?.map((item,key)=><PlanesItem key={key} data={item}/>)
                    )
                )}
            </Row>
        </Box>

    );
};

const Box=styled.div`
`
export default Home;