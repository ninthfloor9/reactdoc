// 1. form 을 만든다. controlled / uncontrolled
// 2. 이름, 프로필 영역, 에세이를 submit 한다.
// 3. 각 3개의 영역이 노출된다.

import { ControlledComponent } from "./ControlledComponent";

export default function Form() {
  return (
    <>
      <h3>Controlled Component!!</h3>
      <ControlledComponent />
    </>
  );
}

