import React, { useCallback } from "react";
import { Form, Input, Button } from "antd";
import useInput from "../hooks/useInput";

// 2추가
import { useDispatch } from 'react-redux';
import { addPost } from '../reducers/post';

function PostForm() {
  const dispatch = useDispatch();
  const [text, onChangeText, setText] = useInput("");

  const onSubmit = useCallback(() => {
    console.log("입력 text : " + text);
    // 추가1
    dispatch(addPost);
    setText("");
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
      <div style={{ marginTop: "4px", marginBottom:"50px"}}>
        <Button style={{ float: "left" }}>이미지 업로드</Button>
        <Button htmlType="submit" style={{ float: "right" }}>
          짹짹
        </Button>
      </div>
    </Form>
  );
}

export default PostForm;
