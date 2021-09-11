import axiosClient from "./AxiosClient"

const postApi=({ 
    getListAsync:async(params)=>{
        const url='/posts/';
        return await axiosClient.get(url,{params,headers:{
            Authorization:"Bearer "+localStorage.getItem("token")
        }})
    },
})
export default postApi