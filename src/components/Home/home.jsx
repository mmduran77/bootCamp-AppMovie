import React, { useEffect, useState, setState } from 'react';
import SearchBox from '../NavBar/SearchBox';
import { Form } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
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
    const Peliculas=[];
    const [seleccion, setSeleccion] = useState('coconut');      
    const [anio,setAnio]=useState('2021')
      
    function BuscarPelixAnio(e) {
      setAnio(e.target.value)
      fetch(`http://www.omdbapi.com/?s=${q}&apikey=${API_KEY}&y=${e.target.value}`)
          .then(resp => resp)
          .then(resp => resp.json())
          .then(response => {
              if (response.Response === 'False') {  
                  setError(response.Error);
              }
              else {
                //   for (let index = 0; index < response.Search.length; index++) {
                //      peliculas.push(response.Search[index])
                      
                //   }
                setData(response.Search);
              }
  
              setLoading(false);
          })
          .catch(({message}) => {
              setError(message);
              setLoading(false);
          })
    }
    
  

    
    

    useEffect(() => {

        setLoading(true);
        setError(null);
        setData(null);       

        // const Peliculas2 = cargarPaginas();
        // const Peliculas3 = eliminarDuplicados(Peliculas2, "_imdbID");
        fetch(`http://www.omdbapi.com/?s=${q}&apikey=${API_KEY}&y=${year}&page=1`)
        .then(resp => resp)
        .then(resp => resp.json())
        .then(response => {
            if (response.Response === 'False') {  
                setError(response.Error);
            }
            else {
                for (let index = 0; index < response.Search.length; index++) {
                   Peliculas.push(response.Search[index])                    
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
                   Peliculas.push(response.Search[index])
                    
                }   

                setData(Peliculas);
            }

            setLoading(false);
        })
        .catch(({message}) => {
            setError(message);
            setLoading(false);
        })
      
        console.log(Peliculas)

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
                                   <span className="nav-item"> <Form.Check
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
                                <p><select className="form-control" value={anio} onChange={BuscarPelixAnio}>
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