import React from 'react';
import axios from 'axios';
import history from '../history';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        //怎么获取输入框对应的state属性名:  增加name属性 直接由event.target.name获取到name属性
        const target = event.target;
        const name = target.name;
        //复选框value的true,false值 由target.checked 属性获得
        const value = target.value;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        // var instance = axios.create({
        //     timeout: 60 * 1000,
        //     headers: {'X-Requested-With': 'XMLHttpRequest'},
        //     withCredentials: true
        // });
        let param = {
            username: this.state.username,
            password: this.state.password
        };
        axios.post("http://127.0.0.1:8080/login",param, {withCredentials: true}).then(function (res) {
            console.log(res)
            if (0 == res.data.code) {
                console.log("success");
                history.push('logSuccess')
            }else {
                console.log("fail");
                history.push('logFail')
            }
        }.bind(this));
    }
    render() {
        return (
            <form>
                <div>
                    用户名：
                    <input type="text"
                           name="username"
                           value={this.state.username}
                           onChange={this.handleChange}/><br/>
                    密码：    <input type="text"
                                  name="password"
                                  value={this.state.password}
                                  onChange={this.handleChange}/>
                </div>
            <button onClick={this.handleSubmit}>登录</button>
        </form>);
    }
}