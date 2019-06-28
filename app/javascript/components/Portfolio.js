import React, { Component } from 'react'
import PortfolioItem from './PorftfolioItem'

class Portfolio extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const portfolioItems = this.props.portfolio.map( (item, index) => <PortfolioItem key={index} item={item} />)
    const total = this.props.portfolio.reduce( (total, curr) => total + curr.value, 0) ) 
    return (
      <div>
        <div className="portfolio-value">
          <div className="portfolio-value--header">Your Total Portfolio Value Is:</div>
          <div className="portfolio-value--content">TOTAL</div>
        </div>

        <div className="portfolio-items">
          {portfolioItem}
        </div>
      </div>
    )
  }
}

export default Portfolio