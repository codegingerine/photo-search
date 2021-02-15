import React from "react";
import {
  ModalTopStyled,
  UserBoxStyled,
  UserPhotoStyled,
  UserInfoStyled,
  UserNameStyled,
  InstaNameStyled,
} from "./ModalTop.styled";

const ModalTop = ({ userImgUrl, userName, instaName, userProfUrl }) => {
  return (
    <ModalTopStyled>
      <UserBoxStyled href={userProfUrl}>
        {userImgUrl && <UserPhotoStyled src={userImgUrl} alt={userName} />}
        <UserInfoStyled>
          <UserNameStyled>{userName}</UserNameStyled>
          <InstaNameStyled>@{instaName}</InstaNameStyled>
        </UserInfoStyled>
      </UserBoxStyled>
    </ModalTopStyled>
  );
};

export default ModalTop;
