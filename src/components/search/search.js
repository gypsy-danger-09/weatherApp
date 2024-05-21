import { useState } from "react"
import { AsyncPaginate} from "react-select-async-paginate"
import { url, geoAPIOptions } from "../api"


const Search = ({onSearchChange}) => {
    const [search,setSearch] = useState(null)

    const loadOptions = async (inputValue) => {
        try {
            const response = await fetch(`${url}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoAPIOptions);
            const result = await response.json()
            return {
                options : result.data.map((city) => {
                    return {
                        value : `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`
                    }
                })
            }
        } catch (error) {
            console.error(error);
        }
    } 

    const handleChange = (data) => {
        setSearch(data)
        onSearchChange(data)
    }

    return (
        <AsyncPaginate 
            placeholder = "Search for city"
            debounceTimeout = {1000}
            value = {search}
            onChange={handleChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search