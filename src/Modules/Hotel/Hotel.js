import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../../Components/Header/Header';
import { H4 } from '../../Components/Text/Text';
import { Grid } from '../../Components/UI/Grid/Grid';
import { useQueryFetch } from '../../Utils/useQueryFetch';
import { PoplularDishFoods } from '../Fastfood/PoplularDishFoods';

export const Hotel = (props) => {

    const navigate = useNavigate();


    const { fetchData: hotel } = useQueryFetch('hotel');

    const [popular, setPopular] = useState(false);

    const [hotel_id, setHotelID] = useState();

    const [hotel_name, setHotelName] = useState();

    const { id } = useParams();



    const onSubmit = (htl) => {

        setPopular(true)

        setHotelID(htl._id)

        setHotelName(htl.hotel_name)

    }

    let marginTop = id != null && "60px";


    return (

        <div style={{ marginTop: marginTop }}>

            {id != null && <Header back={() => navigate("/")} title={id} />}


            {popular ? <PoplularDishFoods hotel_name={hotel_name} popular={popular} hotel_id={hotel_id} category={id} setPopular={setPopular} /> :


                <Grid>

                    {hotel?.map(data =>

                        <div style={{ margin: "10px 0", }} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2  col-xxl-2" key={data._id} >

                            <img onClick={(htl) => onSubmit(htl = data)} style={{
                                boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                                borderRadius: "10px",
                                width: "100%",
                                height: "150px",
                                objectFit: "cover"
                            }} src={data.image} className="card-img-top" alt="..." />

                            <H4 margin="10px 0" fontWeight="bold">{data.hotel_name}</H4>

                            <H4 margin="5px 0">Kozhikode</H4>

                        </div>

                    )}

                </Grid>}

        </div>

    )
}
