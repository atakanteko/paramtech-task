import {  Row, Result, Spin } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import CardItem from "../components/sections/packageList/CardItem";
import {getPackageData} from "../features/package/packageSlice";

function PackageList() {
    const { packages, isLoading } = useSelector((store) => store.package)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPackageData())
    }, [])

    console.log(packages)

    if (isLoading && packages.length === 0){
        return (
            <Result
                title="Loading..."
                extra={<Spin />}
            />
        )
    }
    return(
            <Row gutter={
                [
                    { xs: 16, sm: 20, md: 24, lg: 75 },
                    { xs: 16, sm: 20, md: 24, lg: 48 }
                ]}
                 className="package-list">
                {
                    packages?.map((item) => {
                        return(
                            <CardItem key={item.id}
                                      id={item.id}
                                      amount={item.amount}
                                      currency={item.currency}
                                      details={item.details}
                                      imagePath={item.imagePath}
                                      name={item.name}
                                      tags={item.tags}
                            />
                        )
                    })
                }

            </Row>
    )
}

export default PackageList;