import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import chicago from './chicago.jpg';
import la from './la.jpg';
import ny from './ny.jpg';

const renderError = ({touched, error}) =>
  touched && error ? <span>{error}</span> : false

const renderFileInput = ({input, label, style1, style2, type, meta, id}) => (
  <div>
      <input {...input} type={type} className={style1} id={id}></input>
      <label className={style2} for={id}>{label}</label>
      {renderError(meta)}
  </div>
)

const forSaleWizardPage2 = props => {
  const { handleSubmit, previousPage } = props
  return (
    <div className = "container">
      <div style={{marginLeft: "20pt", marginRight: "20pt"}}>
        <br/><h1>Upload Images</h1><br/>
        <div style={{marginLeft: "20pt", marginRight: "20pt"}}>
          <div style={{border: "solid 1px #000", borderRadius: "5pt", width: "100%", marginBottom: "10pt"}}>
            <div id="demo" className="carousel slide" data-ride="carousel">
              <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
              </ul>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={la} alt="Los Angeles" style={{display: "block", width: "100%", height: "auto"}}></img>
                </div>
                <div className="carousel-item">
                  <img src={chicago} alt="Chicago" style={{display: "block", width: "100%", height: "auto"}}></img>
                </div>
                <div className="carousel-item"> 
                  <img src={ny} alt="New York" style={{display: "block", width: "100%", height: "auto"}}></img>
                </div>
              </div>
              <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </a>
              <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon"></span>
              </a>
            </div>
          </div>
          <br/>
          <form>
            <div className="custom-file">
              <Field component={renderFileInput} label="Choose File" type="file" style1="custom-file-input" id="customFile" style2="custom-file-label"/>
            </div>
          </form>
          <br/>
          <div style={{textAlign:"center"}}>
            <button type="button" className="previous btn btn-primary" onClick={previousPage} style={{marginRight: "5pt"}}>Previous</button>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
          </div>
        </div>
      </div>
    // <div className = "container">
    //     <div style={{marginLeft: "20pt", marginRight: "20pt"}}>
    //         <br/><h1>Upload Images</h1><br/>
    //         <div style={{marginLeft: "20pt", marginRight: "20pt"}}>
                // <div style={{border: "solid 1px #000", borderRadius: "5pt", width: "100%", marginBottom: "10pt"}}>
                    // <div id="demo" className="carousel slide" data-ride="carousel">
                    //     <ul className="carousel-indicators">
                    //       <li data-target="#demo" data-slide-to="0" className="active"></li>
                    //       <li data-target="#demo" data-slide-to="1"></li>
                    //       <li data-target="#demo" data-slide-to="2"></li>
                    //     </ul>
                    //     <div className="carousel-inner">
                    //       <div className="carousel-item active">
                    //         <img src="la.jpg" alt="Los Angeles" style={{display: "block", width: "100%", height: "auto"}}></img>
                    //       </div>
                    //       <div className="carousel-item">
                    //         <img src="chicago.jpg" alt="Chicago" style={{display: "block", width: "100%", height: "auto"}}></img>
                    //       </div>
                    //       <div className="carousel-item"> 
                    //         <img src="ny.jpg" alt="New York" style={{display: "block", width: "100%", height: "auto"}}></img>
                    //       </div>
                    //     </div>
                    //     <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    //       <span className="carousel-control-prev-icon"></span>
                    //     </a>
                    //     <a className="carousel-control-next" href="#demo" data-slide="next">
                    //       <span className="carousel-control-next-icon"></span>
                    //     </a>
                    //   </div>
                // </div>
                // <form onSubmit={handleSubmit}>
                //   <div>
                //       <div style={{textAlign: "center", marginTop: "5pt"}}>
                //           <button type="button" className="btn btn-primary">Choose Image</button>
                //       </div>
                //       <input name="img" type="file" accept="image/*" style={{position: "absolute",  top: "0", left: "0", opacity: "0", width: "0", height: "100%"}}/>
                //       <div style="text-align: center;">
                //           <button className="btn btn-primary" type="submit" style={{marginTop: "15pt"}}>Submit</button>
                //       </div>
                //   </div>
                // </form>
    //         </div>
    //       </div>
    //     </div>
   
  )
}

export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  // validate
})(forSaleWizardPage2)        