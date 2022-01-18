import React, { useCallback, useEffect } from "react";
import { Form, Input, Button } from "antd";
import useInput from "../hooks/useInput";

// 2추가
import { useDispatch, useSelector } from 'react-redux';
import { ADD_POST_REQUEST } from '../reducers/post';

function PostForm() {
  const dispatch = useDispatch();
  const [text, onChangeText, setText] = useInput("");
  const { addPostLoading, addPostDone } = useSelector((state) => state.post);

  useEffect(() => {
    if (addPostDone) {
      setText('');
    }
  }, [addPostDone]);

  const onSubmit = useCallback(() => {
    console.log("입력 text : " + text);
    // 추가1
    // dispatch(addPost);
    // setText("");

    dispatch({
      type: ADD_POST_REQUEST,
      data: {
        text,
      },
    });

}, [text]);

return (
  <Form
    onFinish={onSubmit}
    style={{ marginTop: "10px", marginBottom: "41px" }}
  >
    <Input.TextArea
      value={text}
      onChange={onChangeText}
      placeholder="어떤 신기한 일이 있었나요?"
      maxLength={140}
    />
    <input type="file" multiple hidden />
    <div style={{ marginTop: "4px", marginBottom: "50px" }}>
      <Button style={{ float: "left" }}>이미지 업로드</Button>
      <Button type="primary" style={{ float: 'right' }} htmlType="submit" loading={addPostLoading}>짹짹</Button>

    </div>
  </Form>
);
}

export default PostForm;
