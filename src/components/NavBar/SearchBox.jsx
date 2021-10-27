import React, { useEffect, useState } from 'react';

import { 
    Layout, 
    Input, 
    Row, 
    Col, 
    Card, 
    Tag, 
    Spin, 
    Alert, 
    Modal, 
    Typography 
} from 'antd';
import { Container } from 'react-bootstrap';
const SearchBox = ({searchHandler}) => {
    const { Search } = Input;
    return (
        <Container>
            <Row>
                <Col span={15} offset={6}>
                    
                    <Search
                        placeholder=  "Ingrese Pelicula"
                        enterButton="Buscar"
                        size="large"
                        onSearch={value => searchHandler(value)}
                       
                    />
                </Col>
            </Row>
        </Container>
        
    )
}
export default SearchBox