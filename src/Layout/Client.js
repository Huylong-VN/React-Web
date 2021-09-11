import React, { useState } from 'react'
import { Layout, Row, Col, Button, Drawer, Menu } from 'antd'
import "./Client.css"
import { useMediaQuery } from 'react-responsive'

export const Client = (props) => {
    const { Header, Footer, Content } = Layout;
    const [visible, setVisible] = useState(false);
    const isTabletOrMobile = useMediaQuery({ maxWidth: 556 })
    const styles = ({
        width: {
            width: '70%',
        },
        inputSearch: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        appName: {
            color: "white",
            fontWeight: "800",
            fontSize: "24px"
        },
        icon: {
            color: 'white',
            fontSize: "20px"
        },
        login: {
            backgroundColor: 'red',
            borderRadius: "5px",
            bordercolor: 'rgb(199, 41, 41)',
            color: 'white',
        },
        container: {
            height: "100vh"
        },
        iconColor: {
            color: "rgb(199, 41, 41)"
        }

    })

    return (
        <Layout style={styles.container}>
            <Header className="header">
                <div className="appMenu">
                    <Row>
                        {/* Menu tren */}
                        {isTabletOrMobile ? (
                            <>
                                {!visible ? 
                                (<>
                                <Col style={styles.appName} span={23}>News COVID</Col>
                                <Col style={styles.icon} onClick={() => setVisible(true)} span={1}><i className="fas fa-list"></i></Col>
                                </>) : ""}
                                <Drawer title="News COVID" placement="right" onClose={() => setVisible(false)} visible={visible}>
                                    <h2 style={{ textAlign: 'center' }}>Menu</h2>
                                    <Menu defaultSelectedKeys={['1']}>
                                        <Menu.Item key="1"><i className="fab fa-artstation"></i> Menu 1</Menu.Item>
                                        <Menu.Item key="2"><i className="fab fa-artstation"></i> Menu 2</Menu.Item>
                                        <Menu.Item key="3"><i className="fab fa-artstation"></i> Menu 3</Menu.Item>
                                        <Menu.Item key="4"><i className="fab fa-artstation"></i> Menu 4</Menu.Item>
                                    </Menu>
                                </Drawer>
                            </>
                        ) : (
                            <>
                                <Col style={styles.appName} span={16}>News COVID</Col>
                                <Col style={styles.icon} span={2}><i className="fab fa-artstation"></i></Col>
                                <Col style={styles.icon} span={2}><i className="fas fa-bell"></i></Col>
                                <Col style={styles.icon} span={2}><i className="fas fa-cogs"></i></Col>
                                <Col style={styles.icon} span={2}><Button style={styles.login}>Login</Button></Col>
                            </>
                        )}


                        {/* End Menu tren */}

                    </Row>
                </div>
            </Header>
            <Content style={{ backgroundColor: 'white', minHeight: "auto"}}>{props.children}</Content>
            <Footer style={{textAlign: 'center'}}>
                <Row>
                    <Col span={8}>
                        <div><h4 className="appLogo">News COVID</h4></div>
                        <div style={{display: 'flex', justifyContent: 'space-around'}}>
                            <div><a ><i style={styles.iconColor} className="fab fa-3x fa-facebook" ></i></a></div>
                            <div><a ><i style={styles.iconColor} className="fab fa-3x fa-instagram"></i></a></div>
                            <div><a ><i style={styles.iconColor} className="fab fa-3x fa-github"></i></a></div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div><h4>Thông tin liên hệ</h4></div>
                        <div><p>Địa chỉ: 107 Nguyễn Phong Sắc, Cầu giấy, Hà Nội</p></div>
                        <div><p>Số điện thoại: 0245874168554</p></div>
                        <div><p>Email: T4H@gmail.com</p></div>
                    </Col>
                    <Col span={8}>
                        <div><h4>Một số liên kết</h4></div>
                        <div><a>Báo cáo sự cố</a></div>
                        <div><a>Liên hệ quảng cáo</a></div>
                    </Col>
                </Row>
            </Footer>
        </Layout>
    )

}
