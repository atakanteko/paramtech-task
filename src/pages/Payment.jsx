import { useEffect } from "react";
import { useSelector } from "react-redux";

function Payment(){
    const { selectedPackages, packages } = useSelector((store) => store.package)
    let total = 0
    useEffect(() => {
        packages.forEach((item) => {
            selectedPackages.forEach((x) => {
                if (item.id === x){
                    console.log(item)
                }
            })
        })
    },[])

    return(
        <div className="package-list">
            Payment
        </div>
    )
}

export default Payment;