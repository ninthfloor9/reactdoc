/*
1. 이용자가 페이지를 본다
2. 3개 폼을 입력한다. (모두 필수임)
3. reset 을 클릭하면 페이지가 리셋된다
4. submit 을 클릭한다.
5. 입력완료 메시지가 뜬다.
*/

export const ControlledComponent = () => {
  return (
    <form>
      <div>
        <label>
          name
          <input type="text" required={true} name='name' placeholder="이름"  />
        </label>
      </div>
      <div>
        <label>
          profile
          <textarea type="text" required={true} name='profile' placeholder="간단한 소개" />
        </label>
      </div>
      <div>
        <label>
          essay
          <textarea type="text" required={true} name='essay' placeholder="에세이" />
        </label>
      </div>
      <button>submit</button>
      <button>reset</button>
    </form>
  );
};
