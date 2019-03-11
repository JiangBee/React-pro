import React, { Component } from 'react';
import { InputItem, Toast, Button } from 'antd-mobile';
import api from '@/api/user'
import Back from '@/components/back/back.jsx';
import '@/scss/register.scss';

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
          Toast.info('请设置密码');
        }
      }
      onPasswordErrorClick () {
        if (this.state.hasPasswordError) {
          Toast.info('确认密码');
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
          registerFn (username, password) {
            console.log(username, password);
            api.requestRegister({username, password})
              .then(data => {
                console.log(data);
                if (data === 1) {
                  Toast.success('注册成功', 1);
                  window.localStorage.setItem("userid",username);
                  window.localStorage.setItem("isLogin","ok");
                  this.props.history.push("/home")
                } else if (data === 0) {
                  Toast.info('注册失败', 1);
                } else if (data === 2) {
                  Toast.fail('用户名已注册', 1);
                  this.props.history.push("/userapp/login")
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
        <div className = "content registercontent">
        <div className="top">
        {/*<button className="fa fa-chevron-circle-left fa-2x" onclick="javascript:history.go(-1)" type="button"></button>*/}
        <Back props={this.props} className="backcolor"></Back>
        <span className="page-title">注册</span>
        </div>
        <InputItem
            className="tel"
            type="text"
            clear
            placeholder="请输入您的手机号"
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}
            onChange={this.onChange.bind(this)}
            value={this.state.value}
          >
          <select name="" id="countryCodeSelector" className="country-select">
            <option value="+86">中国</option>
            <option value="+61">澳大利亚</option>
            <option value="+82">韩国</option>
            <option value="+1">加拿大</option>
            <option value="+60">马来西亚</option>
            <option value="+1">美国</option>
            <option value="+81">日本</option>
            <option value="+65">新加坡</option>
            <option value="+44">英国</option>
            <option value="+853">中国澳门</option>
            <option value="+886">中国台湾</option>
            <option value="+852">中国香港</option>
          </select>
          <span className="fa fa-caret-square-o-down"></span>
          </InputItem>
          <InputItem
            type="password"
            clear
            placeholder="请设置密码"
            error={this.state.hasPasswordError}
            onErrorClick={this.onPasswordErrorClick.bind(this)}
            onChange={this.onPasswordChange.bind(this)}
            value={this.state.passwordvalue}
          >
          </InputItem>
          <Button type={ type } disabled = { disabled } onClick = { this.registerFn.bind(this, this.state.value, this.state.passwordvalue)}>注册</Button>

          <div className="protocol">
            注册即表示您已阅读并同意<br/>
            <a className="a1" href="/service/qaDetail?keyword=服务条款&amp;sonId=340&amp;parentId=250" title="有货用户服务协议" target="_blank">有货用户服务协议</a>
            <a className="a1" href="/service/qaDetail?keyword=隐私条款&amp;sonId=352&amp;parentId=250" title="Yoho!Buy有货隐私政策" target="_blank">有货隐私条款</a>
          </div>


    </div>
     )
    }
}

export default Com
