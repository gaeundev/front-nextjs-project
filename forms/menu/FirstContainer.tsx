// module
import React from 'react';

// component
import ContainerRowItem from 'component/frame/ContainerRowItem';
import Form from 'component/input/Form';
import InputTextBox from 'component/input/InputTextBox';
import Button from 'component/input/Button';

import styled from '/component/input/input.module.scss';
import { formType, formSchema } from 'validators/validator';
import { useRouter } from 'next/router';

const Direction: React.FC = () => {
  const router = useRouter();
  const onSubmit = (data: formType) => {
    console.log(data);
    router.replace('/');
  };

  return (
    <ContainerRowItem>
      <div></div>
      <Form<formType> onSubmit={onSubmit} schema={formSchema}>
        {({ register }) => (
          <>
            <h5 style={{ color: 'white' }}>아이디</h5>
            <InputTextBox className={styled.inputTextBox} {...register('id')} />
            <h5 style={{ color: 'white' }}>비밀번호</h5>
            <InputTextBox
              className={styled.inputTextBox}
              type="password"
              {...register('passWd')}
            />
            <Button className={styled.submitButton} type="submit">
              회원가입
            </Button>
          </>
        )}
      </Form>
      <div></div>
    </ContainerRowItem>
  );
};

export default Direction;
