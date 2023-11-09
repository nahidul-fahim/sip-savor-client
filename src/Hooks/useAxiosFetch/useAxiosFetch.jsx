import axios from "axios";
import { useEffect } from "react";
import useAuthenticate from "../useAuthenticate/useAuthenticate";
import { Navigate } from "react-router-dom";


const axiosFetch = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
})

const useAxiosFetch = () => {

    const { logOutUser } = useAuthenticate();

    useEffect(() => {
        axiosFetch.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log("interceptor", error);
            console.log("interceptor", error.response);
            if (error.response.status === 401 || error.response.status === 403) {
                logOutUser()
                    .then(() => {
                        <Navigate to="/"></Navigate>
                    })
                    .catch(error => {
                        if (error) {
                            console.log(error)
                        }
                    })
            }
        })
    }, [logOutUser,])

    return axiosFetch;
};

export default useAxiosFetch;