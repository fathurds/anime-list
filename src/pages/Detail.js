import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useQuery } from "@apollo/client";
import { ANIME_DETAIL } from '../GraphQL/Queries'
import { useParams } from 'react-router-dom';
import { setId } from '../store/detail/detail';

function Detail() {
    const [anime, setAnime] = useState([]);

    const dispatch = useDispatch();

    const { id } = useParams();

    const { data } = useQuery(ANIME_DETAIL);

    useEffect(() => {
        if (data) {
            setAnime(data.Media);
        }
        dispatch(setId(id));
    }, [data, id, dispatch])

    return (
        <div>
            Detail
        </div>
    )
}

export default Detail