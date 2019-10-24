import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import requireAuth from './requireAuth';
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

const renderField = ({input, label, rows, cols, meta, style, type, placeholder}) => (
        <div>
            <label>{label}</label><br/>
            <textArea {...input} rows={rows} cols={cols} placeholder={placeholder} class={style} type={type}></textArea>
            {renderError(meta)}
        </div>
    )

const WizardFormFirstPage = props => {
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
            <br/><h1>Post for Sale</h1><br/>
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
                        <Field name="itemPrice" component={renderInput} label="Price" style="form-control" type="text"/>
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

export default requireAuth(reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
//   validate
})(WizardFormFirstPage))