import axiosClient from "./AxiosClient"

const userApi=({ 
    getListAsync:async(params)=>{
        const url='/users/';
        return await axiosClient.get(url,{params,headers:{
            Authorization:"Bearer "+localStorage.getItem("token")
        }})
    },
    Authenticate:async(params)=>{
        const url='/users/authenticate/';
        return await axiosClient.get(url,{params,headers:{
            Authorization:"Bearer "+localStorage.getItem("token")
        }})
    },
    Register:async(params)=>{
        const url='/users/';
        return await axiosClient.post(url,{params,headers:{
            Authorization:"Bearer "+localStorage.getItem("token")
        }})
    },
    Update:async(params)=>{
        const url='/users/';
        return await axiosClient.put(url,{params,headers:{
            Authorization:"Bearer "+localStorage.getItem("token")
        }})
    },
    Delete:async(params)=>{
        const url='/users/'+params;
        return await axiosClient.delete(url,{headers:{
            Authorization:"Bearer "+localStorage.getItem("token")
        }})
    },
})
export default userApi