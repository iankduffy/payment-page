const PaymentCard = () => (
  <div className="c-payments--card u-pad-h-md u-pad-v-sm">
    <div className="h4 u-t-r">Card<br/>Company</div>
    <div className="c-payments--card--chip"></div>
    <div className="col-12 h3 u-pad-v-sm u-let-spacing">#### #### #### ####</div>
    <div className="container__row container--space-between">
      <div className="col-5">
        <p className="">Card Holder</p>
        <p className="h4">Card Holder</p>
      </div>
      <div className="col-5 u-t-r">
        <p>Expiration Date</p>
        <p className="h4">00 / 00</p>
      </div>
    </div>
  </div>
)

export default PaymentCard
