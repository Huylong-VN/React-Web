import axiosClient from "./AxiosClient"

const postApi=({ 
    getListAsync:async(params)=>{
        const url='/posts/';
        return await axiosClient.get(url,{params,headers:{
            Authorization:"Bearer "+localStorage.getItem("token")
        }})
    },
    createAsync:async(params)=>{
        const url='/posts/';
        return await axiosClient.post(url,{params,headers:{
            Authorization:"Bearer "+localStorage.getItem("token")
        }})
    },
    updateAsync:async(params)=>{
        const url='/posts/';
        return await axiosClient.put(url,{params,headers:{
            Authorization:"Bearer "+localStorage.getItem("token")
        }})
    },
    deleteAsync:async(params)=>{
        const url='/posts/';
        return await axiosClient.delete(url,{params,headers:{
            Authorization:"Bearer "+localStorage.getItem("token")
        }})
    },
    grantPermissionAsync:async(params)=>{
        const url='/posts/addpresmission/';
        return await axiosClient.post(url,{params,headers:{
            Authorization:"Bearer "+localStorage.getItem("token")
        }})
    },
    getDetailsAsync:async(params)=>{
        const url='/posts/detail/'+params;
        return await axiosClient.get(url)
    },
})
export default postApi