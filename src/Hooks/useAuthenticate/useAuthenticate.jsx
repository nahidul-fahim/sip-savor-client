import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";


const useAuthenticate = () => {
    
    const info = useContext(AuthContext);

    return info;
};

export default useAuthenticate;