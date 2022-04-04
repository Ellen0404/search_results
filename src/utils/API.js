import axios from 'axios'

const showSearchResults = (searchParam, setData) => {
    const URL = 'https://i1cqoys68c-dsn.algolia.net/1/indexes/stg_choicemarket_products/query?x-algolia-application-id=I1CQOYS68C&x-algolia-api-key=eac7b807c0109771a245855c7501fca3'
    const data = `{"params":"query=${searchParam}&hitsPerPage=8"}`
    const headers = {
        headers: {
            Accept: 'application/json',
            'content-type': 'application/x-www-form-urlencoded',
        }
    }
    axios
        .post(URL, data, headers)
        .then(response => {
            if (!response.data.hits.length) {
                alert("Not a valid search parameter!")
                return 
            } 
            setData(response.data)
        })
        .catch(error => {
            console.log(error)
            alert(error)
            return
        })
}

export default showSearchResults
