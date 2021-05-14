import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';

function RegisterPage(props) {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState('');
    const [Name, setName] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');

    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    };

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value);
    };

    const OnsubmitHandler = (event) => {
        event.preventDefault(); // 이걸 안하면 계속 페이지가 리프레시 된다.

        if (Password !== ConfirmPassword) {
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.');
        }

        let body = {
            email: Email,
            password: Password,
            name: Name,
        };

        // axios.post('/api/users/register', body)

        dispatch(registerUser(body)).then((response) => {
            if (response.payload.success) {
                props.history.push('/login');
            } else {
                alert('Failed to sign up');
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
                <label>이름</label>
                <input type="text" value={Name} onChange={onNameHandler} />
                <label>비밀번호</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <label>비밀번호 확인</label>
                <input
                    type="password"
                    value={ConfirmPassword}
                    onChange={onConfirmPasswordHandler}
                />

                <br />
                <button type="submit">회원가입</button>
            </form>
        </div>
    );
}

export default withRouter(RegisterPage);
