import { Col, Skeleton } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { paymentThunk } from "../../../features/payment/paymentSlice";

function CompletePayment({packageItems}){
    const dispatch = useDispatch()

    const { isValid,debitCardInfo, paymentResp } = useSelector((store) => store.payment)
    const { selectedPackages, totalPrice,  } = useSelector((store) => store.package)
    const handlePayment = () =>{
        const reqBody = {
            packageIds: [...selectedPackages],
            ...debitCardInfo,
            totalAmount: totalPrice
        }
        dispatch(paymentThunk(reqBody))
        console.log(reqBody)
    }
    console.log(paymentResp)
    return(
        <Col xs={24} lg={6}>
            <div className="payment-card">
                {
                    packageItems.length === 0
                        ? (<Skeleton />)
                        : <div className="payment-completed">
                            <h4>Sepetteki Paketler</h4>
                            {
                                packageItems.map((item) =>{
                                    return(
                                        <div key={item.id} className="product-info">
                                            <h5>{item.name}</h5>
                                            <h5><b>{item.amount}₺</b></h5>
                                        </div>
                                    )
                                })
                            }
                            <div className={`pt-button ${!isValid ? 'disable-btn' : ''}`} onClick={()=>{handlePayment()}}>
                                <span>Ödeme Yap</span>
                            </div>
                        </div>
                }
            </div>
        </Col>
    )
}

export default CompletePayment;