import React from 'react';
import Login from "./Login.jsx";
import {WhiteSpace} from 'antd-mobile';

export default class Index extends React.Component {

    render() {
        return (<div>
            <WhiteSpace size="xl"/>
            <h1 align="center">登录</h1>
            <WhiteSpace size="xl"/>
            <Login/>
        </div>);
    }
}