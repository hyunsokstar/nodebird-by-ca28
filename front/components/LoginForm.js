import React, { useState, useCallback } from "react";
import { Form, Input, Row, Col , Button} from "antd";
import Link from "next/link";
import {
  LoginFormWrapper,
  LoginButtonWrapper,
  LoginButton,
} from "./style/LoginFormStyle";
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from '../reducers/user';

import useInput from '../hooks/useInput';


const LoginForm = () => {
  const dispatch = useDispatch();

  // const [id, setId] = useState("");
  const [email, onChangeEmail] = useInput('');
  const [password, setPassword] = useState("");
  const { logInLoading } = useSelector((state) => state.user);


  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    // console.log("id,password : ", id, password);
    console.log(email, password);


    dispatch({
      type: LOG_IN_REQUEST,
      // data: { id, password },
      data: { email, password },
    });

  // }, [id, password]);
  }, [email, password]);

  return (
    <LoginFormWrapper>
      <Form onFinish={onSubmitForm}>
        <div>
          {/* <label htmlFor="user-id">아이디</label> */}
          <label htmlFor="user-email">이메일</label>
          <br />
          {/* <Input name="user-id" value={id} onChange={onChangeId} required /> */}
          <Input name="user-id" type="email" value={email} onChange={onChangeEmail} required />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user-password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <div>
          <LoginButtonWrapper>
            <Button type="primary" htmlType="submit" loading={logInLoading}>
              로그인
            </Button>
            <Link href="/signup">
              <LoginButton type="default">회원 가입</LoginButton>
            </Link>
          </LoginButtonWrapper>
        </div>
      </Form>
    </LoginFormWrapper>
  );
};

export default LoginForm;
