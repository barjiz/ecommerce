import { useEffect, useState } from "react"
import { useQuery } from "react-query";
import { fetchAllProduct } from "../../Modules/Products/Method";
import { H4 } from "../Text/Text";
import { Button } from "../Button/Button";
import { Flex } from "../../Components/UI/Flex/Flex"

import "./SearchBar.css"
import { useNavigate } from "react-router-dom";

import { OpacityBg } from "../../Components/UI/OpacityBg/OpacityBg"

export const SearchBar = (props) => {

    const [searchTerm, SetSearchTerm] = useState("");


    const [searchState, setSearchState] = useState(false)


    const { data: product } = useQuery('product', fetchAllProduct)

    const navigate = useNavigate()


    const closeStyle = {
        display: "inline"
    }


    const searchResult = {
        display: "none",
        marginTop: "60px"
    }

    const searchResult2 = {
        display: "none",
    }

    if (searchState === true) {

        searchResult.display = "block"
        searchResult2.display = "block"
        closeStyle.display = "inline"
    }

    if (searchTerm === "") {
        searchResult.display = "none"
        searchResult2.display = "none"
        closeStyle.display = "none"
    }

    const theSearch = (e) => {

        SetSearchTerm(e.target.value)

        setSearchState(true)


        document.body.style.overflow = "hidden"

    }

    const clearSearch = (e) => {
        SetSearchTerm("")

        document.body.style.overflow = "scroll"

    }


    return (
        <div className="search_bar">

            <div className="search" >

                <div className="search_input">

                    <input type="text" placeholder="Search for products" value={searchTerm}
                        onChange={theSearch} />

                    <i style={closeStyle} onClick={clearSearch} class="fas fa-times"></i>

                </div>


                <Button color="green" width="fit-content" margin="0 10px">Search</Button>


            </div>

            <OpacityBg style={searchResult}>

                <div style={searchResult2} className="searchResult">

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



            </OpacityBg>



        </div >
    )
}
