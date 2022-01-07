import React, { useState, useCallback } from "react";
import { Form, Input, Row, Col } from "antd";
import Link from "next/link";
import { LoginFormWrapper, LoginButtonWrapper, LoginButton } from './style/LoginFormStyle';


const LoginForm = ({ setIsLoggedIn }) => {

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const onSubmitForm = useCallback(() => {
        console.log("id,password : ", id, password);
        // submit 버튼 누르면 로그인 되도록 하기
        setIsLoggedIn(true)
    }, [id, password]);

    return (
        <LoginFormWrapper>
            <Form onFinish={onSubmitForm}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br />
                    <Input
                        name="user-id"
                        value={id}
                        onChange={onChangeId}
                        required
                    />
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
                        <LoginButton type="primary" htmlType="submit">
                            로그인
                        </LoginButton>
                        <Link href="/signup">
                            <LoginButton type="default">
                                회원 가입
                            </LoginButton>
                        </Link>
                    </LoginButtonWrapper>
                </div>
            </Form>
        </LoginFormWrapper>

    );
};


export default LoginForm;


