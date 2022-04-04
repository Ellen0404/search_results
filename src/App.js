import React, {useState} from 'react'
import showSearchResults from './utils/API'
import ItemDetails from './components/ItemDetails'

const App = () => {

  const [data, setData] = useState({hits: [], query: ''})
  const [searchParam, setSearchParam] = useState('')

  const handleFormSubmit = () => {
    if (!searchParam) return
    showSearchResults(searchParam, setData)
    setSearchParam('')
  }

  return (
    <div className="mainContainer">
      <div className="newBaner">
        <div className="container">
          <h2 className="pt-5">
            Search for your product <br/>
          </h2>
          <div className ="ui icon input">
            <input 
              type="text"
              placeholder="enter product name..."
              name='searchParam'
              value={searchParam}
              onChange={event => setSearchParam(event.target.value)} 
            />
            <button className = 'ui icon inverted green button' onClick={handleFormSubmit}>
              <i className ="large search link icon"></i>
            </button>
          </div>
          {data.query && ( 
            <h3>
            Cool results retriever for: &nbsp;  
              <code>
            {data.query}
              </code>
            </h3>
          )}
          <div className="container p-4">
            <div className="ui four cards">
                {data.hits.map(item => (
                <ItemDetails
                  key={item.Sku}
                  name={item.Name}
                  description={item.Description}
                  sku={item.Sku}
                  ups={item.Upc}
                />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
