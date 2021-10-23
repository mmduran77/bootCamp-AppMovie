import React, { useEffect, useState } from 'react';
import SearchBox from '../NavBar/SearchBox';
import { Form } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';

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
import 'antd/dist/antd.css';
import axios from 'axios';

import NavBar from '../NavBar/navBar';
const navbarLinks = [
    { url: "/", title: "Home" },
    { url: "#", title: "Contact" },
    { url: "#", title: "About" },
  ];

const API_KEY = 'c9ba90e7';
const { Content, Footer } = Layout;
const { Search } = Input;
const { Meta } = Card;
const TextTitle = Typography.Title;




// const SearchBox = ({searchHandler}) => {
//     return (
//         <Container>
//             <Row>
//                 <Col span={12} offset={6}>
//                     <Search
//                         placeholder="Ingrese Pelicula a buscar"
//                         enterButton="Buscar"
//                         size="large"
//                         onSearch={value => searchHandler(value)}
//                     />
//                 </Col>
//             </Row>
//         </Container>
        
//     )
// }
const SearchYear = ({searchHandler}) => {
    return (
        <Container>
            <Row>
                <Col span={12} offset={6}>
                    <Search
                        placeholder="Ingrese Pelicula a buscar"
                        enterButton="Buscar"
                        size="large"
                        onSearch={value => searchHandler(value)}
                    />
                </Col>
            </Row>
        </Container>
        
    )
}

const ColCardBox = ({Title, imdbID, Poster, Type, ShowDetail, DetailRequest, ActivateModal}) => {
  
    
    const clickHandler = () => {

        // Display Modal and Loading Icon
        ActivateModal(true);
        DetailRequest(true);

        fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}&page=1`)
        .then(resp => resp)
        .then(resp => resp.json())
        .then(response => {
            DetailRequest(false);
           
           ShowDetail(response);
        })
        .catch(({message}) => {
            DetailRequest(false);
        })
      
    }
      
    
  
    return (
       
            <Row>
            <Col style={{padding: '1rem'}} className="gutter-row" span={4}>
                <div className="gutter-box">
                    <Card
                        style={{ width: 250 }}
                        cover={
                            <img
                                alt={Title}
                                src={Poster === 'N/A' ? 'https://placehold.it/198x264&text=Image+Not+Found' : Poster}
                            />
                        }
                        onClick={() => clickHandler()}
                    >
                        
                        <Meta
                                title={Title}
                                description={false}
                        />
                        <Row style={{marginTop: '5px'}} className="gutter-row">
                            <Col>
                                <Tag color="magenta">{Type}</Tag>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </Col>
            </Row>
       
        
    )
}

const MovieDetail = ({Title, Poster, imdbRating, Rated, Runtime, Genre, Plot}) => {
    return (
        <Row>
            <Col span={11}>
                <img 
                    src={Poster === 'N/A' ? 'https://placehold.it/198x264&text=Image+Not+Found' : Poster} 
                    alt={Title} 
                />
            </Col>
            <Col span={13}>
                <Row>
                    <Col span={21}>
                        <TextTitle level={4}>{Title}</TextTitle></Col>
                    <Col span={3} style={{textAlign:'right'}}>
                        <TextTitle level={4}><span style={{color: '#41A8F8'}}>{imdbRating}</span></TextTitle>
                    </Col>
                </Row>
                <Row style={{marginBottom: '20px'}}>
                    <Col>
                        <Tag>{Rated}</Tag> 
                        <Tag>{Runtime}</Tag> 
                        <Tag>{Genre}</Tag>
                    </Col>
                </Row>
                <Row>
                    <Col>{Plot}</Col>
                </Row>
            </Col>
        </Row>
    )
}

const Loader = () => (
    <div style={{margin: '20px 0', textAlign: 'center'}}>
        <Spin />
    </div>
)


function Home() {


    const [data, setData] = useState(null);
    const [page,setPage]=useState(1)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
   const [q, setQuery] = useState('batman');
    const [year, setQueryYear] = useState('');
    const [activateModal, setActivateModal] = useState(false);
    const [detail, setShowDetail] = useState(false);
    const [detailRequest, setDetailRequest] = useState(false);
    const peliculas=[]
    

       
 
    // useEffect(() => {

    //     setLoading(true);
    //     setError(null);
    //     setData(null);       


    //     fetch(`http://www.omdbapi.com/?s=${q}&apikey=${API_KEY}&page=1`)
    //     .then(resp => resp)
    //     .then(resp => resp.json())
    //     .then(response => {
    //         if (response.Response === 'False') {  
    //             setError(response.Error);
    //         }
    //         else {
    //             for (let index = 0; index < response.Search.length; index++) {
    //                peliculas.push(response.Search[index])
                    
    //             }
                


    //            //setData(peliculas);
    //         }

    //         setLoading(false);
    //     })
    //     .catch(({message}) => {
    //         setError(message);
    //         setLoading(false);
    //     })
       
    //     fetch(`http://www.omdbapi.com/?s=${q}&apikey=${API_KEY}&page=2`)
    //     .then(resp => resp)
    //     .then(resp => resp.json())
    //     .then(response => {
    //         if (response.Response === 'False') {
    //             setError(response.Error);
    //         }
    //         else {
    //             for (let index = 0; index < response.Search.length; index++) {
    //                peliculas.push(response.Search[index])
                    
    //             }

                
              

    //             setData(peliculas);
    //         }

    //         setLoading(false);
    //     })
    //     .catch(({message}) => {
    //         setError(message);
    //         setLoading(false);
    //     })

      

       
    //     console.log(peliculas)
        
       

  

    // }, [q]);
    useEffect(() => {

        setLoading(true);
        setError(null);
        setData(null);       


        fetch(`http://www.omdbapi.com/?s=${q}&apikey=${API_KEY}&y=${year}&page=1`)
        .then(resp => resp)
        .then(resp => resp.json())
        .then(response => {
            if (response.Response === 'False') {  
                setError(response.Error);
            }
            else {
                for (let index = 0; index < response.Search.length; index++) {
                   peliculas.push(response.Search[index])
                    
                }
                


               //setData(peliculas);
            }

            setLoading(false);
        })
        .catch(({message}) => {
            setError(message);
            setLoading(false);
        })
       
        fetch(`http://www.omdbapi.com/?s=${q}&apikey=${API_KEY}&y=${year}&page=2`)
        .then(resp => resp)
        .then(resp => resp.json())
        .then(response => {
            if (response.Response === 'False') {
                setError(response.Error);
            }
            else {
                for (let index = 0; index < response.Search.length; index++) {
                   peliculas.push(response.Search[index])
                    
                }

                
              

                setData(peliculas);
            }

            setLoading(false);
        })
        .catch(({message}) => {
            setError(message);
            setLoading(false);
        })

      

       
        console.log(peliculas)
        
       

  

    }, [q,year]);


    const ordAscendente = () => {
        let newSortedList = [...data].sort((a, b) => (a.Title > b.Title ? 1 : a.Title < b.Title ? -1 : 0))
            setData(newSortedList)
        //         alert("Orden Ascendente")
    }

    const ordDescendente = () => {
        let newSortedList = [...data].sort((a, b) => (a.Title < b.Title ? 1 : a.Title > b.Title ? -1 : 0))
            setData(newSortedList)
        // alert("Orden Descendente")
    }

   
    return (
<>
                <NavBar 
               searchHandler={setQuery} 
               
               />
               
               <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Filtrar</Accordion.Header>
                                <Accordion.Body>
                                <Row justify="center">
                                    <Col md>   
                                        <Form>                           
                                            Ordenar Titulos en forma
                                            <div key={`inline-radio`} className="mb-3">
                                            <Form.Check
                                                onChange={ordAscendente}
                                                inline
                                                label="Ascendente"
                                                name="ordenar"
                                                type="radio"
                                                id={`inline-1`}
                                            />
                                            <Form.Check
                                                onChange={ordDescendente}
                                                inline
                                                label="Descendente"
                                                name="ordenar"
                                                type="radio"
                                                id={`inline-2`}
                                            />                                            
                                            </div>
                                            
                                        </Form>
                                    </Col>
                                    <Col lg={12}> <SearchYear searchHandler={setQueryYear} /></Col>
                                   
                                        {/* <Col md>
                                            <FloatingLabel controlId="floatingSelectGrid" label="Categoria">
                                            <Form.Select name="categoria" onChange={filType(this)} aria-label="Seleccione una categoria">
                                                <option>Elija una Opcion</option>
                                                <option value="movie">movie</option>
                                                <option value="series">series</option>
                                                <option value="episode">episode</option>
                                            </Form.Select>
                                            </FloatingLabel>
                                        </Col> */}
                                </Row>
                                </Accordion.Body>
                            </Accordion.Item>                            
                        </Accordion>
                      
        <div className="App">
               
            <Layout className="layout" >
                {/* //<Navbar navbarLinks={navbarLinks} /> */}
                <Content style={{ padding: '50px 50px' }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                       {/* <SearchBox searchHandler={setQuery} />  */}
                       
                        <br />
                     
                        

                        <Row gutter={16} type="flex" justify="center">
                            { loading &&
                                <Loader />
                            }

                            { error !== null &&
                                <div style={{margin: '20px 0'}}>
                                    <Alert message={error} type="error" />
                                </div>
                            }
                            
                            { data !== null && data.length > 0 && data.map((result, index) => (
                                <ColCardBox 
                                    ShowDetail={setShowDetail} 
                                    DetailRequest={setDetailRequest}
                                    ActivateModal={setActivateModal}
                                    key={index} 
                                    {...result} 
                                    page={setPage}
                                />
                            ))}
                        </Row>
                    </div>
                    <Modal
                        title='Detail'
                        centered
                        visible={activateModal}
                        onCancel={() => setActivateModal(false)}
                        footer={null}
                        width={800}
                        >
                        { detailRequest === false ?
                            (<MovieDetail {...detail} />) :
                            (<Loader />) 
                        }
                    </Modal>
                </Content>
                <Footer style={{ textAlign: 'center' }}>FullPelis ©2021</Footer>
            </Layout>
        </div>
        </>
    );
 
}

export default Home;