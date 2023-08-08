/*
1. 이용자가 페이지를 본다
2. 3개 폼을 입력한다. (모두 필수임)
2-1 입력한 폼을 모아서 state 로 저장한다.
3. reset 을 클릭하면 페이지가 리셋된다
4. submit 을 클릭한다.
5. 입력완료 메시지가 뜬다.
6  저장한 state 를 출력한다.
*/

"use client";

import { useEffect, useState } from "react";

export const ControlledComponent = () => {
  const [displayData, setDisplayData] = useState(null);

  return (
    <>
      <InputEssay setDisplayData={setDisplayData} />
      <RenderEssay displayData={displayData} />
      <hr />
    </>
  );
};

const InputEssay = ({setDisplayData}) => {
  const [formValue, setFormValue] = useState({
    name: "",
    profile: "",
    essay: "",
  });

  const handleChange = (e) => {
    /* 
    const name = e.target.name;
    const value = e.target.value
    와 같다. 요소의 속성을 구조분해 한거임
    */
    // 구조분해 해서 각각의 요소 객체 값에 이벤트 값을 넣는다
    const { name, value } = e.target;

    // setFormValue에는 이미 추가된 value를 포함하여 넣음
    setFormValue((preValues) => ({
      ...preValues,

      /*computed property name을 사용하여 객체의 key 를 동적으로 표현하는거, 
      어차피 key 에 맞는 value 가 반드시 있기 때문에 value는 동적으로 지정해줄 필요가 없다.
      */

      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formValue));
  };

  useEffect(() => {
    const fetchLocalData = localStorage.getItem("user");
    if (fetchLocalData) {
      const storedData = JSON.parse(fetchLocalData);
      console.log(storedData);
      setDisplayData(storedData);
    }
  }, [setDisplayData]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          name
          <input
            type="text"
            required={true}
            name="name"
            placeholder="이름"
            onChange={(e) => handleChange(e)}
          />
        </label>
      </div>
      <div>
        <label>
          profile
          <textarea
            type="text"
            required={true}
            name="profile"
            placeholder="간단한 소개"
            onChange={(e) => handleChange(e)}
          />
        </label>
      </div>
      <div>
        <label>
          essay
          <textarea
            type="text"
            required={true}
            name="essay"
            placeholder="에세이"
            onChange={(e) => handleChange(e)}
          />
        </label>
      </div>
      <button type="submit">submit</button>
      <button>reset</button>
    </form>
  );
};

// 6  저장한 state 를 출력한다.
const RenderEssay = ({displayData}) => {
  return (
    <>
      {displayData && (
        <div>
          <div>this is render page</div>
          <div>{displayData.name}</div>
          <div>{displayData.profile}</div>
          <div>{displayData.essay}</div>
        </div>
      )}
    </>
  );
};
