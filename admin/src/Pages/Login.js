import React,{useState} from 'react'
import 'antd/dist/antd.css'
import {Card, Input, Icon, Button, Spin, message} from "antd";
import '../static/Login.css'
import servicePath from '../config/apiUrl'
import axios from 'axios'

function Login(props) {
    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const checkLogin = () => {
        setIsLoading(true)

        if (!userName){
            message.error('用户名不能为空')
            setTimeout(()=>{
                setIsLoading(false)
            },500)
            return false
        }else if (!passWord){
            message.error('密码不能为空')
            setTimeout(()=>{
                setIsLoading(false)
            },500)
            return false
        }

        let dataProps = {
            'userName' : userName,
            'passWord' : passWord
        }

        axios({
            method:'post',
            url:servicePath.checkLogin,
            data:dataProps,
            withCredentials:true //共享session
        }).then(
            (res) => {
                setIsLoading(false)
                if (res.data.data === '登录成功'){
                    localStorage.setItem('openId',res.data.openId)
                    props.history.push('/index')
                }else{
                    message.error('同户名或密码错误')
                }
            }
        )

        setTimeout(()=>{
            setIsLoading(false)
        },1000)
    }

    return (
        <div className="login-div">
            <Spin tip="Loading..." spinning={isLoading}>
                <Card title="博客管理员登录" bordered={true} style={{width:400}}>
                    <Input
                        id="userName"
                        size="large"
                        placeholder="请输入你的账号"
                        prefix={<Icon type="user" style={{color:'rgba(0,0,0,0.25)'}}/>}
                        onChange = {(e) => {setUserName(e.target.value)}}
                    />
                    <br/><br/>
                    <Input.Password
                        id="password"
                        size="large"
                        placeholder="请输入你的密码"
                        prefix={<Icon type="key" style={{color:'rgba(0,0,0,0.25)'}}/>}
                        onChange = {(e) => {setPassWord(e.target.value)}}
                    />
                    <br/><br/>
                    <Button type="primary" size="large" block onClick={checkLogin}>登录</Button>
                </Card>
            </Spin>
        </div>
    )
}

export default Login