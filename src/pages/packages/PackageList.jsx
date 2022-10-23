import {  Result, Spin, Divider } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import PackageContainer from "../../components/sections/packageList/PackageContainer";
import TotalPrice from "../../components/sections/packageList/TotalPrice";
import {getPackageData} from "../../features/package/packageSlice";


function PackageList() {
    const { packages, isLoading } = useSelector((store) => store.package)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPackageData())
    }, [dispatch])


    if (isLoading && packages.length === 0){
        return (
            <Result
                title="Loading..."
                extra={<Spin />}
            />
        )
    }
    return(
           <div className="package-list">
               <PackageContainer packages={packages} />
               <Divider className="page-divider"/>
               <TotalPrice />
           </div>
    )
}

export default PackageList;