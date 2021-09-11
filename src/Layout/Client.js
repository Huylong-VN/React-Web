import React from 'react'
import { Layout, Row, Col, Button } from 'antd'
import "./Client.css"
import { useMediaQuery } from 'react-responsive'

export const Client = (props) => {
    const { Header, Footer, Content } = Layout;
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
                            <Col style={styles.appName} span={23}>News COVID</Col>
                            <Col style={styles.icon} span={1}><i className="fas fa-list"></i></Col>
                            </>
                        ) : (
                            <>
                            <Col style={styles.appName} span={10}>News COVID</Col>
                        <Col style={styles.inputSearch} span={7}></Col>
                                <Col style={styles.icon} span={2}><i className="fab fa-artstation"></i></Col>
                                <Col style={styles.icon} span={2}><i className="fas fa-bell"></i></Col>

                                <Col style={styles.icon} span={2}><i className="fas fa-cogs"></i></Col>
                                <Col style={styles.icon} span={1}><Button style={styles.login}>Login</Button></Col>
                            </>
                        )}
                    

                        {/* End Menu tren */}

                    </Row>
                </div>
            </Header>
            <Content style={{ backgroundColor: 'white', }}>{props.children}</Content>
            <Footer style={{ alignItems: 'center' }}>
                <Row>
                    <Col span={8}>
                        <p>ok</p>
                    </Col>
                    <Col span={8}>
                        <div><h4>Thông tin liên hệ</h4></div>
                        <div><p>Địa chỉ: 107 Nguyễn Phong Sắc, Cầu giấy, Hà Nội</p></div>
                        <div><p>Số điện thoại: 0245874168554</p></div>
                        <div><p>Email: T4H@gmail.com</p></div>
                    </Col>
                    <Col span={8}>
                        <div><h4>Một số liên kết Một số liên kết</h4></div>
                        <div>Yêu cầu hỗ trợ Một số liên kết a a a a </div>
                        <div>Báo cáo lỗi Một số liên kết a a a a </div>
                    </Col>
                </Row>
            </Footer>
        </Layout>
    )

}
