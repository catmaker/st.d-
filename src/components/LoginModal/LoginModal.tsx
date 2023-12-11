import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import style from "./LoginModal.module.css";
import KaKaoLoginBtn from "./KaKaoLoginBtn";
import GithubLoginBtn from "./GithubLoginBtn";
import GoogleLoginBtn from "./GoogleLoginBtn";
interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const { data: session, status } = useSession();

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={style.overlay} onClick={handleOutsideClick}>
      <div className={style.wrapper}>
        <div
          className={style.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className={style.h1}>간편하게 시작해보세요</h1>
          {status === "authenticated" && (
            <p>Session: {JSON.stringify(session)}</p>
          )}
          <KaKaoLoginBtn />
          <GoogleLoginBtn />
          <GithubLoginBtn />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
