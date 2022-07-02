import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { setMainLoadingState, setDetailLoadingState, } from '../Redux/featuresSlice';


export const useLoading = () => {

    const dispatch = useDispatch()

    const handleLoading = (boolean) => {

        dispatch(setMainLoadingState(boolean));


    }

    return handleLoading;
}

export const useDetailLoading = () => {

    const dispatch = useDispatch()

    const handleLoading = (boolean) => {

        dispatch(setDetailLoadingState(boolean));


    }

    return handleLoading;
}