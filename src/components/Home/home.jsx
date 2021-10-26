import React, { useEffect, useState, setState } from 'react';
import SearchBox from '../NavBar/SearchBox';
import { Form } from 'react-bootstrap';
import { Container,Button } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import logo from "../../assets/logo2.png";
import Footer1 from '../Footer/footer1';
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


import NavBar from '../NavBar/navBar';

const API_KEY = '860cbf17';
const { Content, Footer } = Layout;
const { Search } = Input;
const { Meta } = Card;
const TextTitle = Typography.Title;






const ColCardBox = ({Title, imdbID, Poster, Type, ShowDetail, DetailRequest, ActivateModal, Year}) => {
  
    
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
                                src={Poster === 'N/A' ? logo : Poster}
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
                                <Tag color="cyan">{Year}</Tag>
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
        <Row >
            <Col span={11}>
                <img width="250px"
                    src={Poster === 'N/A' ? logo : Poster} 
                    alt={Title} 
                />
            </Col>
            <Col span={13}>
                <Row >
                    <Col span={21}>
                        <TextTitle level={4}>{Title}</TextTitle></Col>
                    <Col span={3} style={{textAlign:'right'}}>
                        <p> Rating <TextTitle level={4}><span style={{color: '#41A8F8'}}>{imdbRating}</span></TextTitle></p>

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
    <div style={{margin: '10px 0', textAlign: 'center'}}>
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
    const peliculas=[];
    const [seleccion, setSeleccion] = useState('coconut');      
    const [anio,setAnio]=useState('')
    const [data1, setData1] = useState(null);
    const [error1, setError1] = useState(null);
    const [loading1, setLoading1] = useState(false);
      
    // function BuscarPelixAnio(e) {
    //   setAnio(e.target.value)
    //   fetch(`http://www.omdbapi.com/?s=${q}&apikey=${API_KEY}&y=${e.target.value}`)
    //       .then(resp => resp)
    //       .then(resp => resp.json())
    //       .then(response => {
    //           if (response.Response === 'False') {  
    //               setError(response.Error);
    //           }
    //           else {
    //             //   for (let index = 0; index < response.Search.length; index++) {
    //             //      peliculas.push(response.Search[index])
                      
    //             //   }
    //             setData(response.Search);
    //           }
  
    //           setLoading(false);
    //       })
    //       .catch(({message}) => {
    //           setError(message);
    //           setLoading(false);
    //       })
    // }
    
  

    
    

    
    const peliculas1=[]
    
    
    useEffect(() => {
        setPage(1)
    }, [q]);
    
    useEffect(() => {
    setLoading(true);
    setError(null);
    setData(null);   
    
    
    
    fetch(`http://www.omdbapi.com/?s=${q}&apikey=${API_KEY}&y=${anio}&page=${page}`)
    .then(resp => resp)
    .then(resp => resp.json())
    .then(response => {
    
    if (response.Response === 'False') {  
        if (page<=0) {
            setPage(1)
            
        }
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
    
    
    }, [q,page,anio]);
    useEffect(() => {
        setLoading1(true);
        setError1(null);
        setData1(null);   
        
        
           
        
        fetch(`http://www.omdbapi.com/?s=${q}&apikey=${API_KEY}&y=${anio}&page=${page + 1}`)
        .then(resp => resp)
        .then(resp => resp.json())
        .then(response => {
        if (response.Response === 'False') {
        //setError(response.Error);
        }
        else {
        for (let index = 0; index < response.Search.length; index++) {
        peliculas1.push(response.Search[index])
        
        
        }
             
        setData1(peliculas1);
        
        
        }
        
        setLoading1(false);
        })
        .catch(({message}) => {
        setError1(message);
        setLoading1(false);
        })
             
        console.log(peliculas)  
        
        }, [q,page,anio]);


    const siguiente=()=>{    
        setPage(page + 2);
        console.log(page)
    }


    const anterior=()=>{    
        setPage(page<0?page :page- 2);       
        }


    const cambiaranio=(e)=>{
        setAnio(e.target.value)
    }


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
                <NavBar searchHandler={setQuery} />

                <div id="wrapper">

                    <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
                        <div className="container-fluid d-flex flex-column p-0">
                            <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="/">
                                <div className="sidebar-brand-icon rotate-n-15">
                                    <i className="fas fa-laugh-wink"></i>
                                </div>
                                <div className="sidebar-brand-text mx-3">
                                    <span>Filtros</span>
                                </div>
                            </a>
                            <hr className="sidebar-divider my-0"/>
                            <form className="sidebar-brand-text mx-3">                           
                                <div className="navbar-nav text-light">
                                    <span> ORDENAR TITULOS </span>
                                </div>
                                <div key={`inline-radio`} className="navbar-nav text-light">
                                   <span className="nav-item"> 
                                   <Form.Check
                                        onChange={ordAscendente}
                                        inline
                                        label="Ascendente"
                                        name="ordenar"
                                        type="radio"
                                        id={`inline-1`}
                                    /></span>
                                    <Form.Check
                                        onChange={ordDescendente}
                                        inline
                                        label="Descendente"
                                        name="ordenar"
                                        type="radio"
                                        id={`inline-2`}
                                    />                                            
                                </div>
                            </form>
                            <hr/>
                            <form  className="sidebar-brand-text mx-3">                           
                                <div className="navbar-nav text-light">
                                    <span> BUSCAR POR AÑO </span>
                                </div>                                
                                <p><select className="form-control" value={anio} onChange={cambiaranio}>
                                <option>2021</option>
                                <option>2020</option>
                                <option>2019</option>
                                <option>2018</option>
                                <option>2017</option>
                                <option>2016</option>
                                <option>2015</option>
                                <option>2014</option>
                                <option>2013</option>
                                <option>2012</option>
                                <option>2011</option>
                                <option>2010</option>
                                <option>2009</option>
                                <option>2008</option>
                                <option>2007</option>
                                <option>2006</option>
                                <option>2005</option>
                                <option>2004</option>
                                <option>2003</option>
                                <option>2002</option>
                                <option>2001</option>
                                <option>2000</option>
                                <option>1999</option>
                                <option>1998</option>
                                <option>1997</option>
                                <option>1996</option>
                                <option>1995</option>
                                <option>1994</option>
                                <option>1993</option>
                                <option>1992</option>
                                <option>1991</option>
                                <option>1990</option>
                                <option>1989</option>
                                <option>1988</option>
                                <option>1987</option>
                                <option>1986</option>
                                <option>1985</option>
                                <option>1984</option>
                                <option>1983</option>
                                <option>1982</option>
                                <option>1981</option>
                                <option>1980</option>
                                <option>1979</option>
                                <option>1978</option>
                                <option>1977</option>
                                <option>1976</option>
                                <option>1975</option>
                                <option>1974</option>
                                <option>1973</option>
                                <option>1972</option>
                                <option>1971</option>
                                <option>1970</option>
                                <option>1969</option>
                                <option>1968</option>
                                <option>1967</option>
                                <option>1966</option>
                                <option>1965</option>
                                <option>1964</option>
                                <option>1963</option>
                                <option>1962</option>
                                <option>1961</option>
                                <option>1960</option>
                                </select></p>
                            </form>                            
                        </div>
                    </nav>
                    <div className="d-flex flex-column" id="content-wrapper">
                        <div id="content" >  
                                                  
                            <div className="container-fluid">
                                <div >               
                                    <Layout className="layout" >
                                        
                                        {/* //<Navbar navbarLinks={navbarLinks} /> */}
                                        <Content style={{ padding: '50px 50px' }}>
                                                <div className="container justify-content-center d-xl-flex d-flex">
                    
                                                    <Button style={{marginRight:'5px'}} variant="secondary"  size="lg" onClick={anterior} >anterior</Button>
                                                
                                                    
                                                    
                                                    <Button size="lg" variant="primary" onClick={siguiente} >siguiente</Button>
                                                    
                                                    
                                                    
                                                    </div>  

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
                                                     { data1 !== null && data1.length > 0 && data1.map((result, index) => (
         

                                                            <ColCardBox 
                                                                style={{borderRadius:'50px'}}
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
                                    <Footer1/>
                                </Layout>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>        
        </>
    );
 
}

export default Home;