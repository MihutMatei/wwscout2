import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Input, Layout ,Menu} from 'antd';
import { UserOutlined, BookOutlined, TeamOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import './App.css';
import { useNavigate } from 'react-router-dom';


const { Header, Content } = Layout;

export const ListingsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobData, setJobData] = useState([]);
  const navigate = useNavigate();

  const handleNabigationToPage = () => {
    navigate("/peers")
  }

  const handleNabigationToPage2 = () => {
    navigate("/HelpfulInfo")
  }

  useEffect(() => {
    axios.get('http://localhost:8000/api/get_job_applications/') // Replace with your Django server URL
      .then(response => {
        console.log(response.data.jobApplications);
        setJobData(response.data.job_applications);
      })
      .catch(error => console.error(error));
  }, []);

  const filteredData = jobData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const chunkedData = [];
  for (let i = 0; i < filteredData.length; i += 3) {
    chunkedData.push(filteredData.slice(i, i + 3));
  }

  return (
    <Layout>
      <Header style={{ display:'flex'}}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['listings']}>
          <Menu.Item key="login" icon={<LoginOutlined />}>
            Login
          </Menu.Item>
          <Menu.Item key="register" icon={<UserAddOutlined />}>
            Register
          </Menu.Item>
          <Menu.Item key="listings" icon={<BookOutlined />}>
            Listings
          </Menu.Item>
          <Menu.Item key="peers" icon={<TeamOutlined />}>
            Peers
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64,display:'flex' }}>
        <div className="App">
          <div className="header">
            <h1 className="header-text">Job Listings</h1>
            <div className="search-bar">
              <Input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="cotainer-box">
            <button className='button-menu' onClick={handleNabigationToPage}>Peers</button>
            <button className='button-menu' onClick={handleNabigationToPage2}>Helpful Info</button>
          </div>
          <div className="listings-page">
            <div className="cards-container">
              {chunkedData.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                  {row.map((item, columnIndex) => (
                    <Card
                      key={columnIndex}
                      className="card"
                      title={<h2>{item.name}</h2>}
                      bordered={false}
                      style={{ width: '60%' }}
                    >
                      <p>Position: {item.open_position}</p>
                      <p>Number of Positions: {item.num_open_positions}</p>
                      <p>Hours per Week: {item.hours_per_week}</p>
                      <p>Days off per Year: {item.days_off_per_year}</p>
                      <p style={{ fontWeight: 'bold' }}>Salary: {item.salary_per_month} lei</p>
                      <p>{item.facilities}</p>
                    </Card>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
};