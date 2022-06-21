import React, { useState, useEffect } from 'react';
import { useQuery } from "@apollo/client";
import { ANIME_DETAIL } from '../GraphQL/Queries'
import { useParams } from 'react-router-dom';

function Detail() {
    const [anime, setAnime] = useState([]);

    const { id } = useParams();

    const { data } = useQuery(ANIME_DETAIL(id));

    useEffect(() => {
        if (data) {
            setAnime(data.Media);
        }
    }, [data])

    return (
        <div>
            Detail
        </div>
    )
}

export default Detail