"use client";

import style from "./Applicants.module.css";
import { useState } from "react";

interface IProps {
  userId: string;
  studyId: string;
  onReject?: (applicantId: string, studyId: string) => void;
}

export default function Reject({ userId, studyId, onReject }: IProps) {
  const [showAlert, setShowAlert] = useState(false);
  const clickAlert = () => setShowAlert(!showAlert);

  return (
    <div>
      <p onClick={clickAlert} className={style.reject_btn}>
        거절
      </p>
      {showAlert && (
        <FeedAlert
          userId={userId}
          studyId={studyId}
          clickAlert={clickAlert}
          onReject={onReject}
        />
      )}
    </div>
  );
}

const FeedAlert = (props: any) => {
  const { userId, studyId, clickAlert, onReject } = props;

  return (
    <div onClick={clickAlert} className={style.alert_bg}>
      <div onClick={(e) => e.stopPropagation()} className={style.alert}>
        <p>스터디 참여를 거절할까요?</p>
        <div className={style.btns}>
          <p
            onClick={() => {
              onReject(userId, studyId);
              clickAlert();
            }}
            className={style.cancel_yes_btn}
          >
            거절
          </p>
          {/* 거절 -> onClick={상태를 '거절'로 변경} */}
          <p onClick={clickAlert} className={style.cancel_no_btn}>
            취소
          </p>
        </div>
      </div>
    </div>
  );
};
