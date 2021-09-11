import React,{useEffect, useState} from 'react'
import postApi from '../Api/PostsClient'
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
        }
    })
    console.log(posts)
    return (
        <div style={styles.container}>
            <h1>Tieeu De</h1>
            {posts.length!==0?posts.items.map((value, index) =>{
                return <div key={index}>{value.title}</div>
            }):"loading"}
        </div>
    )
}
