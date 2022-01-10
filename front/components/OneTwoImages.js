import React from 'react'
import { Modal, Button } from 'antd';
import { MultiImageWrapper } from "./style/MultiImageStyle"
import { OneTwoImageButton } from "./style/OneTwoImages"
import { PostingImageWrapper } from "./style/PostingImageStyle"


const OneTwoImages = ({ images }) => {
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [modalText, setModalText] = React.useState('Content of the modal');

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
                    <OneTwoImageButton>
                        왼쪽
                    </OneTwoImageButton>
                    <OneTwoImageButton>
                        오른쪽
                    </OneTwoImageButton>
                    <img src={images[0].src} alt="no image" onClick={showModal} style={{ width: "100%", height:"400px"}} />
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

            <MultiImageWrapper>
                {images.length == 1 ? 
                OneImageTag()
                : TwoImageTag()}
                <br /> <br />
            </MultiImageWrapper>

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