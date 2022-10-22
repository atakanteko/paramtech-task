import {  Row } from 'antd';
import CardItem from "../components/sections/packageList/CardItem";
function PackageList() {
    return(
            <Row gutter={
                [
                    { xs: 16, sm: 20, md: 24, lg: 75 },
                    { xs: 16, sm: 20, md: 24, lg: 48 }
                ]}
                 className="package-list">
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
            </Row>
    )
}

export default PackageList;