import React, { useRef, useState } from 'react'
import { Container, Flex, H1, H2, H5 } from '../styles/AllStyle';
import { Content, Img, Card, ImgWrap, TextWrap } from '../styles/HomeStyle';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, ButtonWrap, TitleWrap } from '../styles/CollectionStyle';
import { BgModal, Modal, ModalHeader, Svg } from '../styles/DetailStyle';

function CollectionList() {

    const anime = useSelector(state => state.collection.collection);

    const [display, setDisplay] = useState('none')
    const [temp, setTemp] = useState();

    const navigate = useNavigate();

    const handleRemove = (i, anime) => {
        let arrayForDelete = [...anime];
        arrayForDelete.splice(i, 1);
        localStorage.setItem('collection', JSON.stringify(arrayForDelete));
        setDisplay('none');

        window.location.reload();
    }

    const ref = useRef(null);

    return (
        <Content ref={ref}>
            <Container>
                <TitleWrap>
                    <H2 collection>Collection List</H2>
                    <Button>Add Collection</Button>
                </TitleWrap>
                <Flex justifyContent='space-evenly'>
                    {anime.map((el, i) => (
                        <Card key={i} >
                            <ImgWrap onClick={() => navigate(`/collection/${el.name}`)}>
                                <Img src={el.image} alt="" />
                            </ImgWrap>
                            <TextWrap>
                                <H5>{el.name}</H5>
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
                                <Button onClick={() => setDisplay('none')}>Cancel</Button>
                            </ButtonWrap>
                        </div>
                    </Modal>
                </BgModal>
            </Container>
        </Content>
    )
}

export default CollectionList