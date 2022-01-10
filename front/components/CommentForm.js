import React, { useCallback, useEffect } from 'react';
import { Button, Form, Input } from 'antd';


const CommentForm = () => {
    return (
        <Form onFinish="">
            <Form.Item style={{ position: 'relative', marginTop: "2px" }}>
                <Input.TextArea rows={4} value="" onChange="" />
                <Button
                    style={{ position: 'absolute', right: 0, bottom: -40 }}
                    type="primary"
                    htmlType="submit"
                    loading=""
                >
                    삐약
                </Button>
            </Form.Item>
        </Form>
    );
};


CommentForm.propTypes = {
};


export default CommentForm;
