import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
// import renderField from './renderField'

// const renderField = ({ input, label, type, meta: { touched, error } }) => (
//     <div>
//       <label>{label}</label>
//       <div>
//         <input {...input} placeholder={label} type={type} />
//         {touched && error && <span>{error}</span>}
//       </div>
//     </div>
//   )

const renderError = ({touched, error}) =>
  touched && error ? <span>{error}</span> : false

const renderDate = ({input, label, max, min, style, type, meta}) => (
    <div>
        <label>{label}</label><br/>
        <input {...input} type={type} max={max} min={min} class={style}></input>
        {renderError(meta)}
    </div>
)


const renderInput = ({input, label, meta, type, style, placeholder}) => (
        <div>
            <label>{label}</label>
            <input {...input}
                class={style}
                type={type}
                autoComplete="off"
                placeholder = {placeholder}
            // onChange={formProps.input.onChange} 
            // value={formProps.input.value}
        />
        {renderError(meta)}
        </div>
    )

const renderSpinner = ({input, label, meta, type, style, placeholder, step, min, max}) => (
    <div>
        <label>{label}</label>
        <input {...input}
            class={style}
            type={type}
            autoComplete="off"
            placeholder = {placeholder}
            max={max}
            min={min}
            step={step}
        // onChange={formProps.input.onChange} 
        // value={formProps.input.value}
    />
    {renderError(meta)}
    </div>
)

const renderField = ({input, label, rows, cols, meta, style, type, placeholder}) => (
        <div>
            <label>{label}</label><br/>
            <textArea {...input} rows={rows} cols={cols} placeholder={placeholder} class={style} type={type}></textArea>
            {renderError(meta)}
        </div>
    )

const forSaleWizardPage1 = props => {
  const { handleSubmit } = props
  return (
    // <form onSubmit={handleSubmit}>
    //   <Field
    //     name="firstName"
    //     type="text"
    //     component={renderField}
    //     label="First Name"
    //   />
    //   <Field
    //     name="lastName"
    //     type="text"
    //     component={renderField}
    //     label="Last Name"
    //   />
    //   <div>
    //     <button type="submit" className="next">
    //       Next
    //     </button>
    //   </div>
    // </form>
    <div class="container">
        <div style={{marginLeft: "20pt", marginRight: "20pt"}}>
            <br/><h1>Post for Rent</h1><br/>
            <div style={{marginLeft: "20pt", marginRight: "20pt"}}>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <Field name="itemName" component={renderInput} label="Name" style="form-control" type="text"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlSelect1">Category</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                        <option>Books</option>
                        <option>Stationery</option>
                        <option>Tools</option>
                        <option>PC Peripherals</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <Field component={renderField} label="Description" style="form-control" rows="5" type="text"/>
                    </div>
                    <div className="form-group">
                        <Field component={renderDate} label="Date of Purchase" max="3000-12-31" min="1000-01-01" style="form-control" type="date"/>
                    </div>
                    <div className="form-group">
                        <Field name="itemPrice" component={renderInput} label="Rent Fees (per hour)" style="form-control" type="text"/>
                    </div>
                    <label>Maximum Rent Duration</label>
                    <div className="row" style={{marginTop:"5pt"}}>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <Field name="itemRentDurLimitDays" component={renderSpinner} label="Days" style="form-control" type="number" min="0" max="365"/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <Field name="itemRentDurLimitHours" component={renderSpinner} label="Hours" style="form-control" type="number" min="0" max="23"/>
                            </div>
                        </div>
                    </div>
                    <div>
                    <button type="submit" className="btn btn-primary" style={{marginTop: "15pt"}}>
                        Next
                    </button>
                    </div>
                </form>
            </div>   
        </div>
    </div>
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
//   validate
})(forSaleWizardPage1)