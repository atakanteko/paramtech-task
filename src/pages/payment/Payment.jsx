import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import PaymentContainer from "../../components/sections/payment/PaymentContainer";

function Payment(){
    const navigate = useNavigate();
    const { selectedPackages, packages } = useSelector((store) => store.package)
    const [packageItems, setPackageItems] = useState([])

    useEffect(() => {
        if (selectedPackages.length === 0){
            navigate('/package-list')
        }else{
            packages.forEach((item) => {
                selectedPackages.forEach((x) => {
                    if (item.id === x){
                        setPackageItems(arr => [...arr, item])
                    }
                })
            })
        }
    },[])


    return(
       <PaymentContainer packageItems={packageItems} />
    )
}

export default Payment;