import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/crypto.png';

const items = [
    {
        label: (<Link to="/">Home</Link>),
        key: 'home',
        icon: <HomeOutlined />,
    },
    {
        label: (<Link to="/cryptocurrencies">Cryptocurrencies</Link>),
        key: 'cryptocurrencies',
        icon: <FundOutlined />,
    },
    {
        label: (<Link to="/exchanges">Exchanges</Link>),
        key: 'exchanges',
        icon: <MoneyCollectOutlined />,
    },
    {
        label: (<Link to="/">News</Link>),
        key: 'news',
        icon: <BulbOutlined />,
    },
]

const NavBar = () => {
  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={icon} size="large" />
            <Typography.Title level={2} className="logo">
                <Link to="/">CryptoDashboard</Link>
            </Typography.Title>            
        </div>
        <Menu theme="dark" items={items} />
        <Button />
    </div>
  )
}

export default NavBar