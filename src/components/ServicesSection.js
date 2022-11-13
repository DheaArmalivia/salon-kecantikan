import React, { useState, useEffect } from 'react'
import './ServicesSection.css';
import ServicesList from './ServicesList';
import Pagination from './Pagination';
import { Input, Label, Button, Modal, ModalBody } from 'reactstrap';

const searchState = {
    text: "",
    category: 0
}

export default function ServicesSection() {

    const img1 = require("../assets/slider-1.jpg")
    const img2 = require("../assets/slider-2.jpg")
    const img3 = require("../assets/slider-6.jpg")
    const img4 = require("../assets/slider-5.jpg")
    const imgO = require("../assets/slider-4.jpg")

    const dataSource = require("../data-source/services.json")
    const categoryList = require("../data-source/category.json")
    const [services, setServices] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [servicesPerPage] = useState(8)
    const [category, setCategory] = useState([])
    const [searchParam, setSearchParam] = useState(searchState)
    const [sorting, setSorting] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [service, setService] = useState({})
    const [serviceCategory, setServiceCategory] = useState({})

    useEffect(() => {
        setServices(dataSource);
        setCategory(categoryList)
    }, [dataSource, categoryList])

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if(name === 'text') {
            searchParam.text = value
        }

        if(name === 'category') {
            searchParam.category = value
        }
        
        setSearchParam({...searchParam})
    }

    const handleSearch = () => {
        setServices(dataSource)
        console.log(searchParam);
        const filtered = services.filter((item) => {
            if(searchParam.text !== "" && searchParam.category !== "") {
                return item.name.toLowerCase().includes(searchParam.text.toLowerCase()) && item.idCategory.includes(searchParam.category)
            } else {
                if(searchParam.text !== "") {
                    return item.name.toLowerCase().includes(searchParam.text.toLowerCase())
                }

                if(searchParam.category !== "") {
                    return item.idCategory.includes(searchParam.category)
                }
            }
            if(searchParam.text === "" && searchParam.category === "") {
                return item
            } else {
                return false;
            }
            
        })
        setServices(filtered)
        console.log("filtered ", filtered);
        
    }

    const reset = () => {
        console.log('reset');
        setSearchParam({ text: '', category:''})
        setServices(dataSource)
    }

    const sortData = (event) => {
        console.log(dataSource);
        const value = event.target.value;
        setSorting(value);
        console.log(value);
        if(value === 'ASC') {
            const asc = services.sort((a, b) => {
                if(a.name < b.name) { return -1}
                if(a.name > b.name) { return 1}
                return 0;
            })
            setServices(asc)
        } else if(value === 'DESC') {
            const desc = services.sort((a, b) => {
                if(a.name > b.name) { return -1}
                if(a.name < b.name) { return 1}
                return 0;
            })
            setServices(desc)
        } else {
            console.log("else ",dataSource);
            
            setServices(dataSource)
        }
        console.log(services);
    }

    const showDetail = (item) => {
        setShowModal(true)
        setService(item)
        const categoryS = categoryList.find((cat) => {
            return item.idCategory === cat.id.toString()
        })
        setServiceCategory(categoryS)
        
    }

    const toggle = () => {
        setShowModal(false)
        setService({})
    }

    const indexOfLastServices = currentPage * servicesPerPage;
    const indexOfFirstServices = indexOfLastServices - servicesPerPage;
    const currentServices = services.slice(indexOfFirstServices, indexOfLastServices)
    console.log(services);

    const urlImg = (service.idCategory === "1") ? img1 : 
                    (service.idCategory === "2") ? img2 :
                    (service.idCategory === "3") ? img3 :
                    (service.idCategory === "4") ? img4 : imgO;
    
    return (
        <div className="services-wrapper">
            <div className="item-wrapper heading-text">
                <h4>Cari Layanan Perawatan yang Anda Butuhkan!!</h4>
            </div>
            <div className="item-wrapper search-item"> 
                <div className="item-search">
                    <Label>Filter by Category</Label>
                    <Input 
                    type="select" 
                    name="category" 
                    id="exampleSelect"
                    value={searchParam.category}
                    onChange={(e) => handleInput(e)}
                    >
                        <option value={""}></option>
                        {
                            category.map((item) => {
                                return (
                                    <option key={item.id} value={item.id}>{item.category}</option>
                                )
                            })
                        }
                        
                    </Input>
                </div>
                <div className="item-search item-field">
                    <Input 
                    name="text"
                    onChange={(e) => handleInput(e)} 
                    value={searchParam.text}/>
                </div>
                <div className="item-search item-field item-button">
                    <Button style={{backgroundColor: '#ffddc0', color:"#75563b"}} onClick={handleSearch}>Search</Button>
                </div>
                <div className="item-search item-field item-button">
                    <Button style={{backgroundColor: '#ffddc0', color:"#75563b"}} onClick={reset}>Reset</Button>
                </div>
                <div className="item-sort">
                    <Label>Sort Data</Label>
                    <Input 
                    type="select" 
                    name="sorting" 
                    id="exampleSelect"
                    value={sorting}
                    onChange={(e) => sortData(e)}
                    >
                        <option value={"0"}></option>
                        <option value={"ASC"}>A - Z</option>
                        <option value={"DESC"}>Z - A</option>
                        
                    </Input>
                </div>
                

            </div>
            <div className="service-list-wrapper" >
                <ServicesList source={currentServices} onShow={showDetail}></ServicesList>
            </div>
            <div className="item-wrapper">
                <Pagination itemsPerPage={servicesPerPage} totalItems={services.length} paginate={paginate}></Pagination>
            </div>

            <Modal className="modal-wrapper" size="lg" isOpen={showModal} toggle={() => toggle()}>
                <ModalBody>
                    <div className="row">
                        <div style={{width:'22rem', height:'16.5rem'}} className="col">
                            <img src={urlImg} alt="" style={{width: '100%', height: '100%'}}/>
                        </div>
                        <div className="col">
                            <h3>{service.name}</h3>
                            <small>{serviceCategory.category}</small> <br/>
                            <span style={{marginTop:20}}>{service.detail}</span>
                            <p style={{marginTop:10}}>{service.description}</p>
                            <h6>Price : IDR {service.price}</h6>
                            <span>Untuk pemesanan hubungi Whatsapp 081888888888</span>
                        </div>
                    </div>
                    
                </ModalBody>
            </Modal>
        </div>
    )
}
