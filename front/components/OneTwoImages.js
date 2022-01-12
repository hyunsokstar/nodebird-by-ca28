import React, {useState} from 'react'
import { Modal, Button } from 'antd';
import { PostingImageWrapper, OneTwoImageButton } from "./style/OneTwoImageStyle"


const OneTwoImages = ({ images }) => {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const [imageOrder, setImageOrder] =  useState("first");

    const showModal = () => {
        setVisible(true);
    };

    console.log("images : ", images);

    const OneImageTag = () => {
        return (
            <div>
                <PostingImageWrapper>
                    <img src={images[0].src} alt="no image" onClick={showModal} style={{ width: "100%", height:"400px"}} />
                </PostingImageWrapper>
            </div>
        )
    };

    const TwoImageTag = () => {
        return (
            <div>
                <PostingImageWrapper>
                    <OneTwoImageButton onClick={()=> setImageOrder("first")}>
                        first
                    </OneTwoImageButton>
                    <OneTwoImageButton onClick={()=> setImageOrder("second")}>
                        second
                    </OneTwoImageButton>
                    {imageOrder === "first" ? 
                    <img src={images[0].src} alt="no image" onClick={showModal} style={{ width: "100%", height:"400px"}} />
                    :
                    <img src={images[1].src} alt="no image" onClick={showModal} style={{ width: "100%", height:"400px"}} />

                    }
                </PostingImageWrapper>
            </div>
        )
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    return (
        <>
            {/* <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button> */}

                {images.length == 1 ? 
                OneImageTag()
                : TwoImageTag()}
                <br /> <br />

            <Modal
                title="Title"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>{modalText}</p>
            </Modal>
        </>
    );
};

export default OneTwoImages;