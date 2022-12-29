import { Component} from 'react'

class SearchBox extends Component {
    
    
    render(){
    const {handleSearch} = this.props

      return (
      <div>
         <input 
          type='search' 
          placeholder='search monsters' 
          className='search-box' 
          onChange={handleSearch}
        />
      </div>
    )
  }
}

export default SearchBox