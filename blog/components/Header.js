import React,{useState, useEffect} from 'react'
import '../static/style/components/header.css'
import {Row,Col,Menu,Icon} from 'antd'
import Router from 'next/router'
import axios from 'axios'
import servicePath from '../config/apiUrl'
const Header = () => {

    const [navArray, setNavArray] = useState([])
    useEffect(()=>{
        const fetchData = async () => {
            const result = await axios(servicePath.getTypeInfo).then(
                (res) => {
                    return res.data.data
                }
            )
            setNavArray(result)
        }
        fetchData();
    },[])

    const handleClick = (e) => {
        if (e.key == 0){
            Router.push('/index')
        }else{
            Router.push('/MyList?id=' + e.key)
        }
    }

    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className="header-logo">菜鸟晨</span>
                    <span className="header-txt">争取毕业前学习下小程序</span>
                </Col>
                <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal" onClick={handleClick}>
                        <Menu.Item key="0">
                            <Icon type="home" />
                            博客首页
                        </Menu.Item>
                        {
                            navArray.map((Item) => {
                                return (
                                    <Menu.Item key={Item.Id}>
                                        <Icon type={Item.icon} />
                                        {Item.typeName}
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

Header.get

export default Header
