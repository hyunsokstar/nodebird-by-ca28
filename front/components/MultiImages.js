import React, { useState } from 'react'
import { Modal, Button } from 'antd';
import { MainContainerWrapper, MainImagesWrapper, MultiImagesWrapper1, MultiImageWrapper2, MutilImageSlideWrapper, LabelBtnWrapper } from "./style/MultiImageStyle"


const MultiImages = ({ images }) => {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const [currentImageSrc, setCurrentImageSrc] = useState(images[0])

    const showModal = () => {
        setVisible(true);
    };

    console.log("images.length : ", images.length);

    const MultiImagesTags = images.map((image, i) => {
        return (
            <img src={image.src} alt="no image" key={i + 1} onClick={showModal} />
        )
    });

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
            <MainContainerWrapper>

                <MainImagesWrapper>
                    {MultiImagesTags}
                </MainImagesWrapper>
            </MainContainerWrapper>

            {/* 모달 */}
            <Modal
                title="Title"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                width={640}
                centered={true}
            >
                {/* <p>{modalText}</p> */}
                <div>

                    <MultiImagesWrapper1>
                        <MutilImageSlideWrapper>
                            <input type="radio" name="imageInput" id="tab1" defaultChecked />
                            <input type="radio" name="imageInput" id="tab2" />
                            <input type="radio" name="imageInput" id="tab3" />
                            <input type="radio" name="imageInput" id="tab4" />

                            <MultiImageWrapper2>
                                <div className='multiImages'>
                                    {MultiImagesTags}
                                </div>
                            </MultiImageWrapper2>

                            <LabelBtnWrapper>
                                <label htmlFor="tab1"></label>
                                <label htmlFor="tab2"></label>
                                <label htmlFor="tab3"></label>
                                <label htmlFor="tab4"></label>
                            </LabelBtnWrapper>
                        </MutilImageSlideWrapper>

                    </MultiImagesWrapper1>

                </div>
            </Modal>
        </>
    );
};

export default MultiImages;