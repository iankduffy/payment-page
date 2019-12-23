import WarningMessage from './c-warning'
import Input from './input'

const PaymentForm = () => (
  <div className="c-payments--form col-12 u-pad-h-md@md u-pad-h-lg@md-min u-pad-v-xs">
    <WarningMessage />
    <Input classes="col-12" label="CARD NUMBER" formId="card-number" type="number"/>
    <Input classes="col-12" label="CARD HOLDER" formId="card-holder" type="text"/>
    <div className="container__row container--space-between">
      <Input classes="col-7" label="EXPIRATION DATE" formId="date" type="number"/>
      <Input classes="col-4" label="CVV" formId="CVV" type="number"/>
    </div>
    <button type="submit" className="c-btn">Submit</button>
  </div>
)

export default PaymentForm
