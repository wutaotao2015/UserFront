import React from 'react';
import history from '../history';

export default class LogFail extends React.Component {

    handleClick() {
        history.push('/');
    }
    render() {
        return (<div>
            <h3>登录失败！</h3>
            <div><a onClick={this.handleClick}>返回登录</a></div>
        </div>
        );
    }
}