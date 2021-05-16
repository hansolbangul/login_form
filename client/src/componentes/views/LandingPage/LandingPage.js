import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import './LandingPage.css';
import iconMain from '../../../img/다운로드.png';
import iconHome from '../../../img/home.png';

function LandingPage(props) {
    useEffect(() => {
        axios.get('/api/hello').then((response) => console.log(response.data));
    }, []);

    const onClickHandler = () => {
        axios.get('/api/users/logout').then((response) => {
            if (response.data.success) {
                props.history.push('/login');
            } else {
                alert('로그아웃 하는데 실패했습니다.');
            }
        });
    };

    // const onClicklogin = () => {

    // }

    return (
        <div>
            <div className="Link">
                <div className="Home">
                    <Link to="/">
                        <img className="IconHome" src={iconHome} />
                    </Link>
                </div>
                <div className="Menu">
                    <Link to="/Community">커뮤니티</Link>
                </div>
                <div className="Log">
                    <Link to="/login">로그인</Link>
                    <Link onClick={onClickHandler}>로그아웃</Link>
                </div>
                {/* <button onClick={onClickHandler}>로그아웃</button> */}
            </div>
            <div className="Banner">
                <a href="https://www.naver.com">
                    <img className="IconMain" src={iconMain} />
                    <h2>네이버</h2>
                </a>
            </div>
            <div className="Main_bn">hello</div>
        </div>
    );
}

export default withRouter(LandingPage);
