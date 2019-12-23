const Input = ({classes, label, formId, type}) => (
  <div className={`o-input--group u-mar-t-sm ${classes}`}>
   <input className="o-input--input" type={type} id={formId} required />
   <label className="o-input--label" htmlFor={formId}>{label}</label>
  </div>
)

export default Input
