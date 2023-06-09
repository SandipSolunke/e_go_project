import userApi from "../Api/UserApi.js";


const HandleLogout = async (email) => {
    const apiRes = await userApi.post(`/logout`, { email: email })

    console.log(apiRes.data.massage)
    if (apiRes.data.status === true) {
        localStorage.removeItem('email');
        localStorage.removeItem(email);
        return true;
    }

    return false;
}


export default HandleLogout