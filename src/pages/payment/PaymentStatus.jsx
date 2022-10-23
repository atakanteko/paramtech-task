import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import { Button } from 'antd';
import SuccessIcon from '../../assets/images/successIcon.svg'

function PaymentStatus(){
    const navigate = useNavigate();
    const { paymentResp, isPaymentSuccessful } = useSelector((store) => store.payment)

    useEffect(() =>{
        if (!isPaymentSuccessful){
            navigate('/')
        }
    }, [isPaymentSuccessful])

    const navigateLoginPage =() =>{
        navigate('/')
    }

    return(
        <div className="payment-status">
            <div className="info">
                <figure>
                    <img src={SuccessIcon} alt="success"/>
                </figure>
                <h1>{paymentResp.message}</h1>
                <Button type="primary"
                        onClick={()=> {navigateLoginPage()}}>
                    Back Home
                </Button>
            </div>
        </div>
    )
}

export default PaymentStatus;