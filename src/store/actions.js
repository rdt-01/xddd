import axios from 'axios'

export default {
    getAllCountries: (context) => {
        axios.get('https://restcountries.eu/rest/v2/regionalbloc/usan').then(response => {
            let paises = response.data 
            context.commit('getPaises', { paises })
        })
    }
}