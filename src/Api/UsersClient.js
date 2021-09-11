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
    Login:async(params)=>{
        const url='/users/';
        return await axiosClient.get(url,{params,headers:{
            Authorization:"Bearer "+localStorage.getItem("token")
        }})
    },
})
export default userApi