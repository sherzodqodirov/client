import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getPlane} from "../redux/slice/oneplaneSlice";
import styled from "styled-components";
import Spiner from "../components/Spiner";
import {Result} from "antd";
import { Button } from 'antd';

const Datainfo = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {id}=useParams();

    useEffect(()=>{
        dispatch(getPlane(id))
    },[id])

    const {data,isloading,iserror}=useSelector(state => state.oneplane)


    return (
            isloading? <Spiner/>:(
                iserror?  <Result
                    status="500"
                    title="500"
                    style={{margin:"0 auto"}}
                    subTitle="Sorry, something went wrong."
                />: data && (
                    <Container>
                        <Imgbox>
                            <img style={{width:"100%"}} src={data.planeImg} alt="rasim"/>
                        </Imgbox>
                        <InfoBox>
                            <Tags>name:<span>{data.name}</span></Tags>
                            <Tags>price:<span>{data.price}$</span></Tags>
                            <Tags>capasity:<span>{data.capasity}</span></Tags>
                            <Tags>description:<span>{data.desc}</span></Tags>
                            <Button
                                style={{marginTop:"20px"}}
                                type="primary"
                            onClick={()=>navigate(-1)}
                            >Back</Button>
                        </InfoBox>
                    </Container>
                )
            )
    );
};

const Tags=styled.h3`
  margin-top: 15px;
font-weight: bold;
  font-size: 15px;
  span{
    font-weight: normal;
  }
    
`

const InfoBox=styled.div`

`
const Imgbox=styled.div`
width: 500px;
  border-radius: 10px;
  overflow: hidden;
`
const Container=styled.div`
display: flex;
  gap: 30px;
`
export default Datainfo;