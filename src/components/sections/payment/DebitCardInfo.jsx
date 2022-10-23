import DebitCardForm from "./DebitCardForm";

function DebitCardInfo(){
    return(
        <>
            <h1 className="payment-card-title">Kart Bilgileri</h1>
            <div className="payment-card-container credentials">
                <DebitCardForm />
            </div>
        </>
    )
}

export default DebitCardInfo;