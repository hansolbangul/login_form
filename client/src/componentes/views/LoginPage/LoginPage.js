import axios from 'axios';
// import { response } from 'express';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { Link, withRouter } from 'react-router-dom';

function LoginPage(props) {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const OnsubmitHandler = (event) => {
        event.preventDefault(); // 이걸 안하면 계속 페이지가 리프레시 된다.

        let body = {
            email: Email,
            password: Password,
        };

        dispatch(loginUser(body)).then((response) => {
            if (response.payload.loginSuccess) {
                props.history.push('/');
            } else {
                alert('Error');
            }
        });
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
            }}
        >
            <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={OnsubmitHandler}>
                <label>이메일</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>비밀번호</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />

                <br />
                <button type="submit">Login</button>
                <Link style={{ padding: '5px 0px', textAlign: 'end' }} to="/register">
                    회원가입
                </Link>
            </form>
        </div>
    );
}

export default withRouter(LoginPage);
