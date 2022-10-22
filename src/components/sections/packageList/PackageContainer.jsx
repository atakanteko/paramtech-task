import CardItem from "./CardItem";
import {Row} from "antd";

function PackageContainer({packages}) {
    return(
        <Row gutter={
            [
                { xs: 16, sm: 20, md: 24, lg: 75 },
                { xs: 16, sm: 20, md: 24, lg: 48 }
            ]}
        >
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

export default PackageContainer;