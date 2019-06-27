import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const searchResults = this.props.searchResults.map(curr => <li key={curr.id} className="currency-list-item"><a href="#" className="currency" data-id={curr.id} onClick={this.props.handleSelect}><span>{curr.name}</span><span className="currency-symbol"> {curr.currency_symbol}</span></a></li>)
    return(
      <div>
        <h1>Crypto Currency Portfolio Calculator</h1>
        <form>
          <div className="form-group">
            <label>Search for a currency</label>
            <input onChange={this.props.handleChange}autoComplete="off" type="text" name="name" placeholder="Ex: Bitcoin, Litecoin, Ethereum..." value={this.props.name} className="field"></input>
          </div>
          <div className="currency-list">
            {searchResults}
          </div>
        </form>
      </div>
    )
  }
}

export default Search