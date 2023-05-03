import React, {useState} from 'react';
import styled from "styled-components";
import axios from "axios";
import {BASE_URL, PLANES} from "../utils/apiurl";
import {useNavigate} from "react-router-dom";

const CreatePage = () => {

    const navigate=useNavigate()
    const Savedata = (e) => {
        e.preventDefault()

        const data = {
            name: e.target.name.value,
            price: e.target.price.value,
            capasity: e.target.capasity.value,
            desc: e.target.desc.value,
            planeImg: e.target.file.files[0]
        }

        const formdata = new FormData()
        for (let key in data) {
            formdata.append(`${key}`, data[key])
        }

        axios.post(BASE_URL+PLANES.create,formdata)
            .then(res=> {
                navigate(`/plane/${res.data._id}`, {replace :true})
            })
            .catch(er=>console.log(er))

        e.target.reset()
    }



    return (
        <>
            <Title>
                Create
            </Title>
            <Form onSubmit={Savedata}>
                <Input
                    id='name'
                    style={{marginTop: "20px"}}
                    type="text"
                    placeholder={"name"}
                    required={true}/>

                <Input
                    id='price'
                    type="number"
                    placeholder={"price"}
                    required={true}/>

                <Input
                    id='capasity'
                    type="number"
                    placeholder={"capasity"}
                    required={true}/>

                <Input
                    id='desc'
                    type="text"
                    placeholder={"description"}
                    required={true}/>

                <Input
                    id='file'
                    type="file"
                    required={true}/>

                <Btnsave type={"primary"}> Save</Btnsave>
            </Form>
        </>
    );
};
const Btnsave = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  background-color: #629ef5;
  cursor: pointer;
  border: none;

  :hover {
    background-color: #3a83f3;
  }
`
const Title = styled.h1`
  text-align: center;
  margin-bottom: 15px;
  font-size: 25px;
`
const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  padding: 5px;
  outline: none;
  border: 1px solid silver;
  background-color: #fff;
`
const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border-radius: 5px;
  margin: 0 auto;
  background-color: #c3c3c3;
  padding: 10px;
`
export default CreatePage;