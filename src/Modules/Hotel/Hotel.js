import React from 'react'
import { useNavigate } from 'react-router-dom';
import { H4 } from '../../Components/Text/Text';
import { Grid } from '../../Components/UI/Grid/Grid';
import { useQueryFetch } from '../../Utils/useQueryFetch';

export const Hotel = () => {

    const navigate = useNavigate();


    const { fetchData: hotel } = useQueryFetch('hotel');


    return (

        <div>

            <Grid>

                {hotel?.map(data =>

                    <div style={{ margin: "10px 0" }} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2  col-xxl-2" key={data._id} >

                        <img onClick={() => navigate(`hotel/${data._id}`)} style={{
                            width: "100%",
                            height: "150px",
                            objectFit: "cover"
                        }} src={data.image} className="card-img-top" alt="..." />

                        <H4 margin="15px" fontWeight="bold">{data.hotel_name}</H4>

                    </div>

                )}

            </Grid>

        </div>

    )
}
