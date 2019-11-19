import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { AuthLogin, setToken, removeToken } from './utils/Auth';

const Login = props => {
  return <div>
    <button onClick={() => {
      console.log(props);
      setToken();
      props.history.push('/home');
    }}>登录</button>
  </div>;
};

const NotFound = () => {
  return <div>404 NotFound</div>;
};

const Home = props => {
  console.log('home props: ', props);
  return <div>
    <h1>This is Home Page!!!</h1>
    <button onClick={() => {
      removeToken();
      props.history.push('/login');
    }}>退出登录</button>
  </div>;
};

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/" exact render={props => {
          /**
           * @param props 表示的是重定向之前的路由信息，这里是 '/'
           */
          return <Redirect to="/home" />;
        }} />
        <Route path="/home" render={props => {
          // 判断 sessionStorage 中是否存储了 token
          // 如果存储了 token 就允许跳转到 Home component
          // 否则就跳转到登录页面
          if (AuthLogin()) {
            return <Home {...props} />
          }
          return <Redirect to="/login" />;
        }} />
        <Route path="/login" render={props => {
          if (AuthLogin()) {
            return <Redirect to="/home" />;
          }
          return <Login {...props} />
        }} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
