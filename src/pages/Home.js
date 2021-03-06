import React, { useEffect, useState } from 'react'
import {
    useQuery
} from "@apollo/client";
import { TOP_AIRING_ANIME } from '../GraphQL/Queries'
import { Container, Flex, H1, H2, H3, H5 } from '../styles/AllStyle';
import { Content, Img, Card, ImgWrap, TextWrap, Search, BtnSearch, SearchInput } from '../styles/HomeStyle';
import { useNavigate } from 'react-router-dom';


function Home() {
    const [anime, setAnime] = useState([]);
    const [title, setTitle] = useState('');

    const navigate = useNavigate();

    const { loading, data } = useQuery(TOP_AIRING_ANIME);

    useEffect(() => {
        document.title = "Home | AnimeKita"
        if (data) {
            setAnime(data.Page.media);
        }
    }, [data]);

    return (
        <Content>
            <Container>
                <H3 home>Browse Anime</H3>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    navigate(`/search?title=${title}`);
                }}>
                    <Search>
                        <SearchInput type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                        <BtnSearch type='submit'>Search</BtnSearch>
                    </Search>
                </form>
                <H2>TOP AIRING ANIME</H2>
                <Flex justifyContent={loading ? 'center' : 'space-evenly'}>
                    {loading ? (<H1>Now Loading</H1>) : ''}
                    {anime.map((el, i) => (
                        <Card key={i} onClick={() => navigate(`/anime/${el.id}`)}>
                            <ImgWrap>
                                <Img src={el.coverImage.large} alt="" />
                            </ImgWrap>
                            <TextWrap>
                                <H5 align="center">{el.title.english ? el.title.english : el.title.romaji}</H5>
                            </TextWrap>
                        </Card>
                    ))}
                </Flex>
            </Container>
        </Content>
    )
}

export default Home