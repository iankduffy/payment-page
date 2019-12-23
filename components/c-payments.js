import PaymentForm from './c-payment-form'
import PaymentCard from './c-payment-card'

const PaymentContainer = () => (
  <div className="c-payments col-12 u-pad-h-xl@md-min">
    <div className="c-payments--container u-pad-v-md">
      <div className="col-7 col-12@lg">
        <h3 className="u-t-b u-t-cen">Card Details</h3>
        <PaymentForm />
      </div>
    </div>
    <div className=" ">
      <PaymentCard />
    </div>
  </div>
)

export default PaymentContainer
