import {useState, useEffect} from "react";
import {Col, Row} from "antd";
import { transformDate,  transformCvv, transformCardNumber } from "../../../utils/payment";
import {useDispatch} from "react-redux";
import {setValid, unSetValid} from "../../../features/payment/paymentSlice";

function DebitCardForm(){
    const dispatch = useDispatch();

    const [cardInfo, setCardInfo] = useState({
        name:'',
        cardNo:'',
    })

    const [date, setDate] = useState({ day: "04", year: "25" });
    const [cvv, setCvv] = useState("");


    useEffect(() => {
        if (
            cardInfo.name.length > 2 &&
            cardInfo.cardNo.length === 16 &&
            date.day.length === 2 &&
            date.year.length === 2 &&
            cvv.length === 3
        ) {
            dispatch(setValid())
        } else {
            dispatch(unSetValid())
        }
    }, [cardInfo.name, cardInfo.cardNo, date.day, date.year, cvv]);

    function calcDay(par){
        if (Number(par.charAt(0)) === 3 && Number(par.charAt(1)) > 1){
            return '01'
        }
        else if(Number(par.charAt(0)) === 0 && Number(par.charAt(1)) === 0){
            return '01'
        }
        else if(Number(par.charAt(0)) < 3){
            return par;
        }
        else {
            return par
        }
    }

    const handleChange = (e) => {
        const inputName = e.target.name;
        let inputValue = e.target.value;

        if (inputName === "cardNo") {
            inputValue = inputValue.replace(/ /g, "");
            if (!isNaN(inputValue)) {
                inputValue = inputValue.length > 16 ? inputValue.substring(0, 16) : inputValue;
                setCardInfo({...cardInfo, [inputName]: inputValue})
            }
        } else if (inputName === "date") {
            inputValue = inputValue.replace("/", "");
            let v = {
                day: "00",
                year: "00"
            };
            if (!isNaN(inputValue)) {
                if (inputValue.length === 1) {
                    v.day = Number(inputValue.charAt(0)) > 3 ? `0` : inputValue;
                    v.year = "";
                } else if (inputValue.length === 2) {
                    v.day = calcDay(inputValue);
                    v.year = "";
                } else if (inputValue.length === 3) {
                    v.day = inputValue.substring(0, 2);
                    v.year = inputValue.charAt(2);
                } else {
                    v.day = inputValue.substring(0, 2);
                    v.year = inputValue.substring(2, 4);
                }
                inputValue = v;
                setDate(inputValue)
            }
        }else if (inputName === "cvv") {
            if (!isNaN(inputValue)) {
                inputValue = inputValue.length > 3 ? inputValue.substring(0, 3) : inputValue;
                setCvv(inputValue)
            }
        }else {
            setCardInfo({...cardInfo, [inputName]: inputValue})
        }
    }

    return(
        <>
            <Row gutter={
                [
                    { xs: 16, sm: 20, md: 24, lg: 18 },
                    { xs: 16, sm: 20, md: 24, lg: 18 }
                ]} style={{marginBottom:'18px'}}
            >
                <Col xs={24} md={24} lg={12} className="cr-input-group">
                    <label htmlFor="name">
                        Kart Üzerindeki İsim Soyisim
                    </label>
                    <input type="text"
                           name="name"
                           className="pt-input-credentials"
                           onChange={(event) => {handleChange(event)}}
                    />
                </Col>
            </Row>
            <Row gutter={
                [
                    { xs: 16, sm: 20, md: 24, lg: 18 },
                    { xs: 16, sm: 20, md: 24, lg: 18 }
                ]}
            >
                <Col xs={24} md={24} lg={12} className="cr-input-group">
                    <label htmlFor="cardNo">Kart Numarası</label>
                    <input type="text"
                           name="cardNo"
                           placeholder="XXXX XXXX XXXX XXXX"
                           className="pt-input-credentials"
                           value={transformCardNumber(cardInfo.cardNo)}
                           onChange={(event) => {handleChange(event)}}
                    />
                </Col>
                <Col xs={24} md={24} lg={6} className="cr-input-group">
                    <label htmlFor="date">
                        Son Kul. Tar.
                    </label>
                    <input type="text"
                           name="date"
                           placeholder="MM / YY"
                           value={transformDate(date)}
                           className="pt-input-credentials"
                           onChange={(event) => {handleChange(event)}}

                    />
                </Col>
                <Col xs={24} md={24} lg={6} className="cr-input-group">
                    <label htmlFor="cvv">
                        CVV/CVC
                    </label>
                    <input type="text"
                           name="cvv"
                           placeholder="XXX"
                           value={cvv}
                           className="pt-input-credentials cvv"
                           onChange={(event) => {handleChange(event)}}
                    />
                </Col>
            </Row>
        </>
    )
}

export default DebitCardForm;


