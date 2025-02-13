// hooks/useMySelectors.js
import { useSelector } from "react-redux";
import { selectIstoggle, selectMyData } from "../store/redux/selectors";

export const useMySelectors = () => {
    const Istoggle = useSelector(selectIstoggle);
    const myData = useSelector(selectMyData);
    
    return { Istoggle, myData };
};

