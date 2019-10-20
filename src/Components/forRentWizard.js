import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import ForRentWizardPage1 from './forRentWizardPage1'
import ForRentWizardPage2 from './forRentWizardPage2'
import ForRentWizardPage3 from './forRentWizardPage3'

class WizardForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (
      <div>
        <Header/>
        {page === 1 && <ForRentWizardPage1 onSubmit={this.nextPage} />}
        {page === 2 && (
          <ForRentWizardPage2
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <ForRentWizardPage3
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )}
      </div>
    )
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default WizardForm