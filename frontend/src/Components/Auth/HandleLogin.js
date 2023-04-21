import userApi from "../Api/UserApi.js";


const HandleLogin = async (userCred,setDialog) => {

    const res = await userApi.post('/login', userCred);
    
    if(res.data.status===true){
        localStorage.setItem('email', userCred.email)
        localStorage.setItem(userCred.email, res.data.token)
        return true;
    }
    else{
        setDialog(res.data.massage)
    }
    
    console.log(res.data.massage)
    return false;
}

export default HandleLogin;