import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query"
import { BASE_URL } from "../url";


export const useQueryFetch = (url) => {

    const AsyncFetch = async () => {

        const res = await fetch(`${BASE_URL + url}`);
        return res.json();

    }

    const { refetch: refetchData, data: fetchData } = useQuery(url, AsyncFetch, {

        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })


    return { fetchData, refetchData }
}


export const useQueryFetchId = (url, id) => {

    const AsyncFetch = (id) => {

        const res = axios.get(`${BASE_URL + url + '/' + id}`)
        return res;

    }

    const { refetch: refetchData, data: fetchData } = useQuery([url, id], () => AsyncFetch(id), {

        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })

    return { fetchData, refetchData }
}
