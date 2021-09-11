
import React,{useEffect, useState} from 'react'
import postApi from '../Api/PostsClient'
import { Layout, Row, Col, Button } from 'antd'
export const Home = () => {
    const [posts,setpost]=useState([]);
    useEffect(() => {
        postApi.getListAsync().then(response =>{
            setpost(response)
        })
    },[])
    const styles = ({
        container: {
            maxWidth: "80%",
            marginLeft: "10%"
        },
        contentTop: {
            marginTop: "20px",
        },
        
        post: {
            marginBottom: "25px"
        },
        
        
        // post:hover img {
        //     opacity: 0.7;
        // },
        
        titleFirst: {
            fontSize: "24px",
            marginBottom: "0",
        },
        
        title: {
            fontSize: "18px",
            marginBottom: "0"
        },
        
        regionItemH3: {
            fontSize: "20px"
        },
        regionItem: {
            height:"30px",
            lineHeight: "30px",
            paddingLeft: "4%",
            borderLeft: "3px solid rgb(199, 41, 41)"
        },
        
        regionItemLink: {
            fontSize: "18px",
            color: "red",
        },
        
        // regionItem a:hover {
        //     color: rgb(199, 41, 41);
        // }
        
        regionItemActive: {
            borderLeftWidth: "3px",
            borderLeftColor:"#158095",
            fontWeight: "bold"
        }
    })
    console.log(posts)
    return (
        <Row justify="center" style={styles.container}>
            <Col className="gutter-row" span={24}>
                <Row justify="space-between" style={styles.contentTop}>
                    <Col className="gutter-row" span={16} >
                        <Row justify="space-between">
                            
                            {posts.length!==0?posts.items.map((value, index) =>{
                                if (index === 0){
                                    return (
                                        <Col key={index} style={styles.post} className="gutter-row" span={24} >
                                            <a href="https://google.com">
                                                <img width="100%" src={process.env.REACT_APP_API_URL_IMG + value.images[0].path} />
                                                <h3 style={styles.titleFirst}>{ value.title}</h3>
                                            </a>
                                        </Col>
                                    )
                                }
                                else {
                                    return (
                                        <Col key={index} style={styles.post} className="gutter-row" span={7} >
                                            <a href="https://google.com">
                                                <img width="100%" height= "140px" src={process.env.REACT_APP_API_URL_IMG + value.images[0].path} />
                                                <h3 style={styles.title}>{ value.title }</h3>
                                            </a>
                                        </Col>
                                        
                                        
                                    )
                                } 
                            }):"loading"}
                        </Row>
                    </Col>
                    <Col className="gutter-row" span={7} >
                        <Row>
                            <Col style={styles.regionItemH3} span={24} >
                                <h3>Khu Vực</h3>
                            </Col>
                            <Col style={styles.regionItem} span={24} >
                                <a style={styles.regionItemLink}>Hà Nội</a>
                            </Col>
                            <Col style={styles.regionItem} span={24} >
                                <a style={styles.regionItemLink}>Hà Nội</a>
                            </Col>
                            <Col style={styles.regionItem} span={24} >
                                <a style={styles.regionItemLink}>Hà Nội</a>
                            </Col>
                            <Col style={styles.regionItem} span={24} >
                                <a style={styles.regionItemLink}>Hà Nội</a>
                            </Col>
                            <Col style={styles.regionItem} span={24} >
                                <a style={styles.regionItemLink}>Hà Nội</a>
                            </Col>
                            <Col style={styles.regionItem} span={24} >
                                <a style={styles.regionItemLink}>Hà Nội</a>
                            </Col>
                            
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>

        // <div style={styles.container}>
        //     <h1>Tieeu De</h1>
        //     {posts.length!==0?posts.items.map((value, index) =>{
        //         return <div key={index}>{value.title}</div>
        //     }):"loading"}
        // </div>
    )
}


