import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { closeModal } from '../redux/actions';
import { MODALS_NAMES_LIST } from '../constants';
import { colors } from 'src/styles/variables';
import { GreenButton } from 'src/components/common/Button';
import { Input } from 'src/components/common/index';

const modalZIndex = 1000;

const CreateUserModalWrapper = styled.section`
  z-index: ${modalZIndex};
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const CreateUserModalContainer = styled.section`
  margin: 50px auto 0;
  width: 300px;
  height: 420px;
  padding: 30px;
  background: ${colors.madison};

  form {
    align-items: center;
    flex-direction: column;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: flex-start;

    h3 {
      font-size: 22px;
      color: ${colors.white};
      margin: 0;
    }
    p {
      margin: 10px;
      width: 100%;
      display: flex;
      flex-direction: column;

      label {
        font-size: 18px;
        color: ${colors.white};
        margin: 0 0 8px 0;
      }

      input {
        font-size: 16px;
        color: ${colors.nepal};
      }

      #desk {
        padding: 5px;
        color: ${colors.nepal};
        border: 1px solid ${colors.nepal};
        height: 80px;
      }
    }

    .create-user {
      font-size: 20px;
      justify-content: flex-end;
      width: 100%;
      height: 50px;
    }
  }
`;

type CreateUserModalProps = {
  closeModal: () => void;
};

const stopBubbling = e => {
  e.preventDefault();
  e.stopPropagation();
  return false;
};

class CreateUserModal extends React.PureComponent<CreateUserModalProps> {
  render() {
    const { closeModal } = this.props;

    return (
      <CreateUserModalWrapper onClick={closeModal}>
        <CreateUserModalContainer onClick={stopBubbling}>
          <form
            onSubmit={() => {
              console.log('create user');
            }}
          >
            <h3>Створення користувача</h3>
            <p>
              <label>Повне Ім'я:</label>
              <Input
                value={'Тіщенко Валентин'}
                type="text"
                name="fullname"
                placeholder="User full name"
              />
            </p>
            <p>
              <label>Логін:</label>
              <Input
                value={'vtish'}
                type="text"
                name="login"
                placeholder="User login"
              />
            </p>
            <p>
              <label>Пароль: </label>
              <Input
                value={'password'}
                type="password"
                name="password"
                placeholder="User login"
              />
            </p>
            <p>
              <label>Опис: </label>
              <div id={'desk'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </p>

            <GreenButton className="create-user"> Create user</GreenButton>
          </form>
        </CreateUserModalContainer>
      </CreateUserModalWrapper>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  closeModal: () => {
    console.log('ispatch(openModal(');
    dispatch(closeModal(MODALS_NAMES_LIST.CREATE_USER));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUserModal);
