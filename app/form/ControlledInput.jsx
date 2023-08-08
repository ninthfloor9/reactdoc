"use client";

import "./controlledInput.css";

// 1. form 을 우선 만든다
export const ControlledInput = () => {
  return (
    <div className="form">
      <form>
        <label>
          name
          <input name="name"></input>
        </label>
        <label>
          profile
          <textarea name="profile"></textarea>
        </label>
        <label>
          essay
          <textarea name="essay"></textarea>
        </label>
        <button type="submit">submit</button>
        <button>reset</button>
      </form>
    </div>
  );
};
