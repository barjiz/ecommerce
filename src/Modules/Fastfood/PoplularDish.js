import React from 'react'
import { H4 } from '../../Components/Text/Text'
import { useQueryFetch } from '../../Utils/useQueryFetch'
import { useNavigate } from 'react-router-dom'

export const PoplularDish = (props) => {

    const { category, flexDirection, className } = props;

    const { fetchData: fastfoods } = useQueryFetch('fastfoods')

    const navigate = useNavigate();

    return (

        <React.Fragment>

            {fastfoods?.filter(fil => fil.category === category).map(data => (

                <div className={className} style={{ width: "100%" }}>

                    <div key={data._id} style={{
                        width: "100%",
                        display: "flex", flexDirection: flexDirection, justifyContent: 'start', margin: "10px",
                        borderRadius: "30px",
                    }}>

                        <img onClick={() => navigate(`/popular/${data._id}`)

                        } style={{
                            boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px", borderRadius: "30px",
                            width: "130px",
                            height: "130px",
                            objectFit: "cover"
                        }} src={data.image} class="card-img-top" alt="..." />

                        <H4 maxWidth="130px" maxHeight="1.3rem" fontWeight="bolder" margin="10px 5px">{data.name}</H4>

                    </div>

                </div>

            ))}

        </React.Fragment>

    )
}
