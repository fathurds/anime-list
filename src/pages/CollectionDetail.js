import React, { useEffect, useRef, useState } from 'react'
import { Container, Flex, H1, H2, H5 } from '../styles/AllStyle';
import { Content, Img, Card, ImgWrap, TextWrap } from '../styles/HomeStyle';
import { Button, ButtonWrap, TitleWrap } from '../styles/CollectionStyle';
import { BgModal, Modal, ModalHeader, Svg } from '../styles/DetailStyle';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setNewCollectionRedux } from '../store/collection/collection';

function CollectionDetail() {

    const [anime, setAnime] = useState([]);
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [display, setDisplay] = useState('none');
    const [temp, setTemp] = useState();

    const { id } = useParams();

    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        let collection = JSON.parse(localStorage.getItem('collection'));

        if (collection) {
            collection.map(el => {
                if (id === el.name) {
                    setAnime(el.anime);
                    setTitle(el.name);
                    setImage(el.image);
                }
                return ''
            })
        }

    }, [id])

    const handleRemove = (i, anime) => {
        let arrayForDelete = [...anime];
        arrayForDelete.splice(i, 1);

        const newArray = {
            anime: arrayForDelete,
            name: id,
            image
        }
        console.log(newArray)

        dispatch(setNewCollectionRedux(newArray))

        setDisplay('none');
        window.location.reload();
    }

    const ref = useRef(null);
    return (
        <Content ref={ref}>
            {console.log(anime)}
            <Container>
                <TitleWrap>
                    <H2 collection>{title}</H2>
                </TitleWrap>
                <Flex justifyContent='space-evenly'>
                    {anime.map((el, i) => (
                        <Card key={i} >
                            <ImgWrap onClick={() => navigate(`/anime/${el.id}`)}>
                                <Img src={el.coverImage.large} alt="" />
                            </ImgWrap>
                            <TextWrap>
                                <H5>{el.title.english ? el.title.english : el.title.romaji}</H5>
                            </TextWrap>
                            <Button danger onClick={() => {
                                ref.current?.scrollIntoView({ behavior: 'smooth' });
                                setDisplay('flex');
                                setTemp(i);
                            }}>Remove</Button>
                        </Card>
                    ))}
                </Flex>

                <BgModal display={display}>
                    <Modal>
                        <ModalHeader>
                            <div />
                            <H2>Remove from Collection</H2>
                            <Svg id='close-modal' onClick={() => setDisplay('none')}>
                                <path fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"></path>
                            </Svg>
                        </ModalHeader>
                        <div style={{ textAlign: "center" }}>
                            <H1 collection>Are you sure?</H1>
                            <p>You won't be able to revert this!</p>
                            <ButtonWrap>
                                <Button danger style={{ width: "150px" }} onClick={() => handleRemove(temp, anime)}>Yes, delete it</Button>
                                <Button>Cancel</Button>
                            </ButtonWrap>
                        </div>
                    </Modal>
                </BgModal>
            </Container>
        </Content>
    )
}

export default CollectionDetail