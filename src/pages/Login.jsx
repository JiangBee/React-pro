import React, { Component } from 'react';
import { InputItem, Toast, Button } from 'antd-mobile';
import { Link } from 'react-router-dom'
import Back from '@/components/back/back.jsx';
import '@/scss/login.scss';
import api from '@/api/user'

class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hasError: false,
      value: '18813007814',
      hasPasswordError: false,
      passwordvalue: '123456'
    }
  }
      onErrorClick = () => {
        if (this.state.hasError) {
          Toast.info('请输入正确格式的手机号码');
        }
      };
      onPasswordErrorClick () {
        if (this.state.hasPasswordError) {
          Toast.info('请输入正确格式的密码');
        }
      }
      onChange (value) {
            if (value.replace(/\s/g, '').length < 11) {
                this.setState({
                  hasError: true,
                });
              } else {
                this.setState({
                  hasError: false,
                });
              }
              this.setState({
                value,
              });
              console.log(this.state.value)
        }
        onPasswordChange (passwordvalue) {
            if (passwordvalue.replace(/\s/g, '').length < 6) {
              this.setState({
                hasPasswordError: true,
              });
            } else {
              this.setState({
                hasPasswordError: false,
              });
            }
            this.setState({
              passwordvalue,
            });
            console.log(this.state.passwordvalue)
          }

          loginFn (username, password) {
            console.log(username, password);
            api.requestData({username, password})
              .then(data => {
                console.log(data);
                if (data === 1) {
                  Toast.success('登录成功', 1);
                  window.localStorage.setItem("isLogin","ok");
                  window.localStorage.setItem("userid",username);
                  this.props.history.push("/home")
                } else if (data === -1) {
                  Toast.info('密码错误', 1);
                } else if (data === 2) {
                  Toast.fail('没有该用户', 1);
                  this.props.history.push("/registerapp/register")
                } else {
                  Toast.fail('登录失败', 1);
                }
              })
          }

    render () {
      let type = '';
      let disabled = true;
      if (this.state.hasError === false && this.state.hasPasswordError === false && this.state.value.length > 0 && this.state.passwordvalue.length > 0) {
        type = 'primary';
        disabled = false
      }
        return (
        <div className="banner-box">
        <img src="//img11.static.yhbimg.com/yhb-img01/2018/03/26/10/01cf2c685c5d7ddbb21b7c7b961da77454.jpg?imageView2/2/w/750/h/290"/>
        <div className="banner-info">
            <div className="top-operation-bar">
                {/*<button  className="fa fa-chevron-circle-left fa-2x" onclick="javascript:window.location='/home'" type="button"></button>*/}
              <Back props={this.props}></Back>
                <Link to="/userapp/register" className="register">注册</Link>
            </div>
            <div className="tip">Yoho!Family账号可登录Yoho!Buy有货？</div>
        </div>
        <InputItem
            type="text"
            clear
            placeholder="请输入您的手机号"
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}
            onChange={this.onChange.bind(this)}
            value={this.state.value}
          >
        </InputItem>
          <InputItem
            type="password"
            clear
            placeholder="请输入您的密码"
            error={this.state.hasPasswordError}
            onErrorClick={this.onPasswordErrorClick.bind(this)}
            onChange={this.onPasswordChange.bind(this)}
            value={this.state.passwordvalue}
          >
          </InputItem>
          <Button type={ type } disabled = { disabled } onClick = { this.loginFn.bind(this, this.state.value, this.state.passwordvalue)}>登录</Button>
          <div className="other-info">
            <span className="btnleft">账号密码登录</span>
            <i>忘记密码?</i>
         </div>

    </div>
     )
    }
}

export default Com
