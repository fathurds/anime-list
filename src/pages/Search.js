import React, { useEffect, useState } from 'react'
import {
    useQuery
} from "@apollo/client";
import { SEARCH_ANIME } from '../GraphQL/Queries'
import { Container, Flex, H2, H3, H5 } from '../styles/AllStyle';
import { Content, Img, Card, ImgWrap, TextWrap, Search, BtnSearch, SearchInput } from '../styles/HomeStyle';
import { useNavigate, useSearchParams } from 'react-router-dom';

function SearchComponent() {
    const [anime, setAnime] = useState([]);
    const [name, setName] = useState('');
    const [page, setPage] = useState(1);
    const [pageInfo, setPageInfo] = useState(true);

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const title = searchParams.get('title')

    const { data } = useQuery(SEARCH_ANIME(title, page));

    useEffect(() => {
        document.title = `Search "${title}"`
        if (data) {
            setAnime(data.Page.media);
            setPageInfo(data.Page.pageInfo.hasNextPage);
        }
    }, [data, title]);

    return (
        <Content>
            <Container>
                <H3 home>Browse Anime</H3>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    navigate(`/search?title=${title}`);
                }}>
                    <Search>
                        <SearchInput type='text' value={name} onChange={(e) => setName(e.target.value)} />
                        <BtnSearch onClick={() => navigate(`/search?title=${name}`)}>Search</BtnSearch>
                    </Search>
                </form>
                <H2>Search "{title}"</H2>
                <div style={{ justifyContent: "end", display: "flex", gap: "1rem" }}>
                    <BtnSearch onClick={() => {
                        if (page > 1) {
                            setPage(page - 1);
                        }
                    }}>Previous</BtnSearch>
                    <BtnSearch onClick={() => {
                        if (pageInfo) {
                            setPage(page + 1)
                        }
                    }}>Next</BtnSearch>
                </div>
                <Flex justifyContent='space-evenly'>
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

export default SearchComponent