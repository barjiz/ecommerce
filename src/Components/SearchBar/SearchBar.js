import { useEffect, useState } from "react"
import { useQuery } from "react-query";
import { fetchAllProduct } from "../../Modules/Products/Method";
import { H4 } from "../Text/Text";

import { Flex } from "../../Components/UI/Flex/Flex"

import "./SearchBar.css"
import { useNavigate } from "react-router-dom";


export const SearchBar = () => {

    const [searchTerm, SetSearchTerm] = useState("");


    const [searchState, setSearchState] = useState(false)


    const { data: product } = useQuery('product', fetchAllProduct)

    const navigate = useNavigate()


    const closeStyle = {
        display: "inline"
    }


    const searchResult = {
        display: "none"
    }


    if (searchState === true) {

        searchResult.display = "block"
        closeStyle.display = "inline"
    }

    if (searchTerm === "") {
        searchResult.display = "none"
        closeStyle.display = "none"
    }

    const theSearch = (e) => {

        SetSearchTerm(e.target.value)

        setSearchState(true)

    }

    const clearSearch = (e) => {
        SetSearchTerm("")
    }



    return (
        <div className="searchbar">

            <div className="search" >

                <i class="fas fa-search"></i>

                <input type="text" placeholder="Search" value={searchTerm}

                    onChange={theSearch} />

                <i style={closeStyle} onClick={clearSearch} class="fas fa-times"></i>

            </div>

            <div style={searchResult} className="searchResult">

                {product?.product?.filter((data) => {
                    if (searchTerm === "") {
                        return <h2>val</h2>
                    } else if (data.product_name.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
                        return <h2>val</h2>
                    }
                }).map((data, key) => (
                    <Flex flexDirection="column" alignItems="flex-start">
                        <H4 onClick={() => navigate(`product/${data._id}`)} fontWeight="bold" margin="10px 15px">{data.product_name}</H4>
                    </Flex>

                )
                )}

            </div>

            {/* 
            <div className="mypost">
                {stories.map(mystories => (

                    <div className="stories">
                        <img src={require(`./images/${mystories.image}`).default} alt="img" />
                    </div>

                ))}
            </div> */}

        </div>
    )
}
