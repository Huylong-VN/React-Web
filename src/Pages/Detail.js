
import React, { useEffect, useState } from 'react'
import postApi from '../Api/PostsClient'
import { Layout, Image, Row, Col, Button } from 'antd'
const styles = ({
    container: {
        maxWidth: "90%",
        marginLeft: "5%",
        marginTop: "1%",
        marginBottom: "1%",
    },
    title: {
        fontSize: "28px"
    },
    content: {
        margin: "2% 0%",
        fontSize: "17px"
    }
})
export const Detail = (history) => {
    var id = history.location.search.slice(1, history.location.search.length);
    const [post, setpost] = useState([]);
    useEffect(() => {
        postApi.getDetailsAsync(id).then(response => {
            setpost(response)
        })
    }, [])
    
    return (
        <>
            {post.length!==0 ? (
                <Row justify="center" style={styles.container}>
                    <Col className="gutter-row" span={24}>
                        <h3 style={styles.title}>{post.title}</h3>
                        <div style={{display: 'flex', justifyContent: 'center'}}><Image width="60%" src={process.env.REACT_APP_API_URL_IMG + post.images[0].path} /></div>
                        
                        <p style={styles.content}>{post.content}</p>
                        
                            { post.images.length > 1 ? post.images.map((value, index) => {
                                    if (index !== 0) {
                                        return (
                                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                                <Image width="60%" src={process.env.REACT_APP_API_URL_IMG + value.path} />
                                            </div>)
                                    }
                                }) : ""
                            }
                        
                        
                    </Col>
                </Row>
            ) : "loading"}
        </>
    )
}
