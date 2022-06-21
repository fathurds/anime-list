import React, { useEffect, useState } from 'react'

import {
    useQuery
} from "@apollo/client";
import { TOP_AIRING_ANIME } from '../GraphQL/Queries'


function Home() {
    const [anime, setAnime] = useState([]);

    const { data } = useQuery(TOP_AIRING_ANIME);

    useEffect(() => {
        if (data) {
            setAnime(data.Page.media);
        }
    }, [data])

    return (
        <div>
            
        </div>
    )
}

export default Home