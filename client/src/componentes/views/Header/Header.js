import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import './Header.css';
import iconMain from '../../../img/다운로드.png';
import iconHome from '../../../img/home.png';
import { AliwangwangOutlined, QqOutlined } from '@ant-design/icons';

function Header(props) {
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
                        <AliwangwangOutlined
                            style={{ fontSize: '40px', marginLeft: '14px', color: 'black' }}
                        />
                        <h2>cOingkoo</h2>
                    </Link>
                </div>
                <div className="Menu">
                    <Link to="/Community">커뮤니티</Link>
                </div>
                <div className="Log">
                    <Link to="/login">로그인</Link>
                    <Link onClick={onClickHandler}>로그아웃</Link>
                </div>
            </div>
            {/* <div className="body">
                <QqOutlined style={{ fontSize: '4rem' }} />
                <span style={{ fontSize: '2rem' }}>hello hansol homepage default</span>
            </div> */}
        </div>
    );
}

export default withRouter(Header);

// const Header = () => (
//     <header style={headerStyle}>
//         <h1 style={{ color: '#f9f7f7' }}>코인 시세 정보</h1>
//     </header>
// );

const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    // backgroundColor: '#3f72af',
    marginBottom: 20,
    zIndex: 100,
    textAlign: 'center',
};

// export default Header;
