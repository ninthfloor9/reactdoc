export const ControlledComponent = () => {
  return (
    <form>
      <div>
        <label>name
        <input type="text"/>
        </label>
      </div>
      <div>
        <label>profile
        <input type="text"/>
        </label>
      </div>
      <div>
        <label>essay
        <textarea type="text"/>
        </label>
      </div>
      <button>submit</button>
      <button>reset</button>
    </form>
  )
}