import React, { useState, useEffect, useRef } from 'react';
import { useQuery } from "@apollo/client";
import { ANIME_DETAIL } from '../GraphQL/Queries'
import { useParams } from 'react-router-dom';
import { Container, Banner, CoverComponent, CoverWarp, HeaderDetail, Img, TitleWrap, DescriptionWrap, Button, ContentWrap, InformationWrap, H4, FlexInfor, H3, CharWrap, CharCard, CharCover, BgModal, Modal, ModalHeader, Svg, BtnDropdown, ListDropdown, ListStyle } from '../styles/DetailStyle';
import { H2, H5 } from '../styles/AllStyle';
import { useSelector, useDispatch } from 'react-redux';
import { setCollection } from '../store/collection/collection';

function Detail() {
    const [anime, setAnime] = useState([]);
    const [coverImage, setCoverImage] = useState();
    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [studio, setStudio] = useState([]);
    const [character, setCharacter] = useState([]);

    const [displayCollection, setDisplayCollection] = useState('none')
    const [checkCollection, setCheckCollection] = useState('new');
    const [newCollection, setNewCollection] = useState('');

    const [dropdown, setDropdown] = useState('none');
    const [listDropdown, setListDropdown] = useState('Collection List')

    const collection = useSelector(state => state.collection.collection);
    const dispatch = useDispatch();

    const { id } = useParams();

    const { loading, data } = useQuery(ANIME_DETAIL(id));

    useEffect(() => {
        console.log(collection)
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        if (data) {
            setAnime(data.Media);
            setCoverImage(data.Media.coverImage.large);
            setTitle(data.Media.title.english ? data.Media.title.english : data.Media.title.romaji);
            setStartDate(`${month[data.Media.startDate.month - 1]} ${data.Media.startDate.day}, ${data.Media.startDate.year}`);
            setEndDate(data.Media.endDate.month ? `to ${month[data.Media.endDate.month - 1]} ${data.Media.endDate.day}, ${data.Media.endDate.year}` : "");
            setStudio(data.Media.studios.edges);
            setCharacter(data.Media.characters.edges)
        }
    }, [data, collection]);

    const handleSubmit = () => {
        if (newCollection.length > 0) {
            const collection = {
                name: newCollection,
                anime: [anime]
            }
            dispatch(setCollection(collection));
            setDisplayCollection('none');
            setNewCollection('');
        } else {
            console.log("error")
        }
    }

    const ref = useRef(null);
    if (loading) {
        return (<p>Now Loading</p>)
    }

    return (
        <div ref={ref}>
            <HeaderDetail>
                <Banner image={anime.bannerImage} />
                <Container>
                    <CoverWarp>
                        <CoverComponent>
                            <div>
                                <Img src={coverImage} alt={title} width='100%' />
                                <Button onClick={() => {
                                    setDisplayCollection('flex');
                                    ref.current?.scrollIntoView({ behavior: 'smooth' });
                                }}>Add to Collection</Button>
                            </div>
                            <TitleWrap>
                                <H2>{title}</H2>
                                <Button mobile onClick={() => {
                                    setDisplayCollection('flex');
                                    ref.current?.scrollIntoView({ behavior: 'smooth' });
                                }}>Add to Collection</Button>
                            </TitleWrap>
                        </CoverComponent>
                    </CoverWarp>
                </Container>
            </HeaderDetail>


            <Container>
                <ContentWrap>
                    <InformationWrap>
                        <FlexInfor>
                            <div>
                                <H4>Status</H4>
                                <H4 desc>{anime.status}</H4>
                            </div>
                            <div>
                                <H4>Episode</H4>
                                <H4 desc>{anime.episode ? anime.episode : "Ongoing"}</H4>
                            </div>
                        </FlexInfor>
                        <br />
                        <H4>Aired</H4>
                        <H4 desc>
                            {startDate}
                            <br />
                            {endDate}
                        </H4>

                        <br />
                        <H4>Genre</H4>
                        {anime.genres ? anime.genres.map((el, i) => (
                            <H4 desc key={i}>{el}</H4>
                        )) : ""}

                        <br />
                        <H4>Studios</H4>
                        {studio.filter(el => el.isMain).map((el, i) => (
                            <H4 desc key={i}>{el.node.name}</H4>
                        ))}


                        <br />
                        <H4>Producers</H4>
                        {studio.filter(el => !el.isMain).map((el, i) => (
                            <H4 desc key={i}>{el.node.name}</H4>
                        ))}
                    </InformationWrap>
                    <div>
                        <H3 desc>Description</H3>
                        <DescriptionWrap dangerouslySetInnerHTML={{ __html: `<p>${anime.description}</p>` }}></DescriptionWrap>

                        <H3>Characters & Voices Actors</H3>
                        <div>
                            <CharWrap>
                                {character.map((el, i) => (
                                    <CharCard key={i}>
                                        <CharCover className='character'>
                                            <Img src={el.node.image.medium} alt="" />
                                            <H5>{el.node.name.full}</H5>
                                        </CharCover>
                                        <CharCover className='staff' end='true'>
                                            <H5 bottom>{el.voiceActors[0].name.full}</H5>
                                            <Img src={el.voiceActors[0].image.medium} alt="" />
                                        </CharCover>
                                    </CharCard>
                                ))}
                            </CharWrap>
                        </div>

                        <H3 desc>Information</H3>

                        <InformationWrap mobile>
                            <FlexInfor mobile>
                                <div>
                                    <H4>Status</H4>
                                    <H4 desc>{anime.status}</H4>

                                    <br />
                                    <H4>Episode</H4>
                                    <H4 desc>{anime.episode ? anime.episode : "Ongoing"}</H4>

                                    <br />
                                    <H4>Aired</H4>
                                    <H4 desc>
                                        {startDate}
                                        <br />
                                        {endDate}
                                    </H4>
                                </div>
                                <div>
                                    <H4>Genre</H4>
                                    {anime.genres ? anime.genres.map((el, i) => (
                                        <H4 desc key={i}>{el}</H4>
                                    )) : ""}

                                    <br />
                                    <H4>Studios</H4>
                                    {studio.filter(el => el.isMain).map((el, i) => (
                                        <H4 desc key={i}>{el.node.name}</H4>
                                    ))}

                                    <br />
                                    <H4>Producers</H4>
                                    {studio.filter(el => !el.isMain).map((el, i) => (
                                        <H4 desc key={i}>{el.node.name}</H4>
                                    ))}
                                </div>
                            </FlexInfor>
                        </InformationWrap>
                    </div>
                </ContentWrap>

                {/* COLLECTION MODALS */}
                <BgModal display={displayCollection}>
                    <Modal>
                        <ModalHeader>
                            <div />
                            <H4>Add to Collection</H4>
                            <Svg id='close-modal' onClick={() => setDisplayCollection('none')}>
                                <path fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"></path>
                            </Svg>
                        </ModalHeader>
                        <div>
                            <input type="radio" id='new-collection' name='collection' value='new' checked={checkCollection === 'new' ? true : false} onChange={() => {
                                setCheckCollection('new');
                                setListDropdown('Collection List');
                                setDropdown('none')
                            }} />
                            <label htmlFor="new-collection">New Collection</label>
                        </div>
                        <input type="text" style={{ width: "100%" }} value={newCollection} disabled={checkCollection !== 'new' ? true : false} onChange={(e) => setNewCollection(e.target.value)} />

                        <div>
                            <input type="radio" id='list-collection' name='collection' value='list' onChange={() => setCheckCollection('list')} />
                            <label htmlFor="list-collection">List Collection</label>
                        </div>
                        <BtnDropdown disabled={checkCollection === 'list' ? false : true} onClick={() => {
                            if (checkCollection === 'list') {
                                setDropdown('block');
                            } else {
                                setDropdown('none')
                            }
                        }}>{listDropdown}</BtnDropdown>
                        <ListDropdown display={dropdown}>
                            {collection.map((el, i) => (
                                <ListStyle key={i} onClick={() => {
                                    setListDropdown(el.name)
                                    setDropdown('none');
                                }}>
                                    {el.name}
                                </ListStyle>
                            ))}
                        </ListDropdown>

                        <button onClick={() => handleSubmit()}>Submit</button>
                    </Modal>
                </BgModal>
            </Container>
        </div>
    )
}

export default Detail