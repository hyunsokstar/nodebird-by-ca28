import styled from 'styled-components';

export const MainContainerWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const MainImagesWrapper = styled.div`
    width: 500px;
    height: 500px;
    align-content: center;
    box-sizing: border-box;
    border: 1px solid pink;
    text-align: center;
    overflow: hidden;

    & img {
        float: left;
        width: 50%;
        height: 250px;
    }

`

export const MultiImagesWrapper1 = styled.div`
    /* background-color: yellow; */
    display: flex;
    justify-content: center;
    /* text-align: center; */
    
    & input[name="imageInput"] {
        display: none;
    }
`

export const MultiImageWrapper2 = styled.div`
    width: 500px;
    height: 400px;
    border: 4px solid pink;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
 
    & .multiImages {
        float: left;
        position: absolute;
        top: -2px;
        left: 0px;
        width: 2000px;
        height: inherit;
        box-sizing: border-box;
        transition: 0.5s;
        /* overflow: hidden; */
    }

    & .multiImages img{
        width: 500px;
        height: 100%;
        transition: 1s;
    }

    /* &:hover > img {
        left:0px
    } */

`

export const LabelBtnWrapper = styled.div`
    text-align: center;
    margin-top: 24px;
    /* background-color: red; */

    & label {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-left: 5px;
        background-color: lightgray;
        border-radius: 50%;
        /* background-color: red; */
        cursor: pointer;
    }

`

export const MutilImageSlideWrapper = styled.div`
    /* background-color: red; */
    /* border: 4px solid purple; */
    margin-bottom: 20px;

    & input[id=tab1]:checked ~ ${MultiImageWrapper2} .multiImages,
    & input[id=tab1]:checked ~ ${LabelBtnWrapper} > label:nth-child(1)
    {
        background-color: yellow;
        left: 0px
    }

    & input[id=tab2]:checked ~ ${MultiImageWrapper2} .multiImages,
    & input[id=tab2]:checked ~ ${LabelBtnWrapper} > label:nth-child(2)
    {
        background-color: yellow;
        left: -500px
    }

     & input[id=tab3]:checked ~ ${MultiImageWrapper2} .multiImages,
     & input[id=tab3]:checked ~ ${LabelBtnWrapper} > label:nth-child(3)
     {
        background-color: yellow;
        left: -1000px
    }

    & input[id=tab4]:checked ~ ${MultiImageWrapper2} .multiImages ,
    & input[id=tab4]:checked ~ ${LabelBtnWrapper} > label:nth-child(4)
    {
        background-color: yellow;
        left: -1500px
    }

`


