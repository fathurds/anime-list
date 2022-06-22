import React, { useState, useEffect } from 'react';
import { useQuery } from "@apollo/client";
import { ANIME_DETAIL } from '../GraphQL/Queries'
import { useParams } from 'react-router-dom';
import { Container, Banner, CoverComponent, CoverWarp, HeaderDetail, Img, TitleWrap, DescriptionWrap } from '../styles/DetailStyle';
import { Button, H2, H3 } from '../styles/AllStyle';

function Detail() {
    const [anime, setAnime] = useState([]);
    const [coverImage, setCoverImage] = useState();
    const [title, setTitle] = useState('');

    const { id } = useParams();

    const { loading, data } = useQuery(ANIME_DETAIL(id));

    useEffect(() => {
        if (data) {
            setAnime(data.Media);
            setCoverImage(data.Media.coverImage.large);
            setTitle(data.Media.title.english ? data.Media.title.english : data.Media.title.romaji)
        }
    }, [data])

    if (loading) {
        return (<p>Now Loading</p>)
    }

    return (
        <div>
            {console.log(anime)}
            <HeaderDetail>
                <Banner image={anime.bannerImage} />
                <Container>
                    <CoverWarp>
                        <CoverComponent>
                            <Img src={coverImage} alt={title} />
                            <TitleWrap>
                                <H2>{title}</H2>
                                <Button>Add to Collection</Button>
                            </TitleWrap>
                        </CoverComponent>
                    </CoverWarp>
                </Container>
            </HeaderDetail>
            <Container style={{marginTop: '35px'}}>
                <H3>Description</H3>
                <DescriptionWrap dangerouslySetInnerHTML={{ __html: `<p>${anime.description}</p>` }}></DescriptionWrap>

                <H3>Characters & Voices Actors</H3>
            </Container>
        </div>
    )
}

export default Detail