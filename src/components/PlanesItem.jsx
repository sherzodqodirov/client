import React from 'react';
import {Card, Col, Row} from "antd";
import {Link} from "react-router-dom";

const PlanesItem = ({data}) => {
    return (
        <Link to={`/plane/${data._id}`}>
            <Col span={8} >
                <Card  hoverable
                       style={{
                           width: 240,
                           margin:"10px auto"
                       }}
                       cover={<img alt="img" src={data.planeImg} />}
                       bordered>
                    <h3>{data.name}</h3>
                    <h4 style={{color:"#7dadf4"}} >{data.price}$</h4>
                </Card>
            </Col>
        </Link>
    );
};

export default PlanesItem;