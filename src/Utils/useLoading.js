import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { setLoadingState } from '../Redux/cartSlice';


export const useLoading = () => {

    const dispatch = useDispatch()

    const handleLoading = (boolean) => {

        dispatch(setLoadingState(boolean));


    }

    return handleLoading;
}