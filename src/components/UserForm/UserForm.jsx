import { useState } from "react";
import { Button } from "bootstrap";

const defaultFormValue = {
  firstName: "",
  lastName: "",
  age: "",
};

export const UserForm = () => {
  const [formValue, setFormValue] = useState(defaultFormValue);

  const inputChangeHandler = (value, formControlName) => {
    setFormValue((state) => ({ ...formValue, [formControlName]: value }))};

  const submitHandler = () => {
    console.log(formValue);
    setFormValue(defaultFormValue);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label>
          First Name
          <input
            onChange={({ target: { value } }) =>
              inputChangeHandler(value, "firstName")
            }
            value={formValue.firstName}
            type="text"
            placeholder="Enter Name"
          />
        </label>
      </div>

      <div className="mb-3">
        <label>
          Last Name
          <input
            onChange={({ target: { value } }) =>
              inputChangeHandler(value, "lastName")
            }
            value={formValue.lastName}
            type="text"
            placeholder="Enter Last Name"
          />
        </label>
      </div>
      <div className="mb-3">
        <label>
          Age
          <input
            onChange={({ target: { value } }) =>
              inputChangeHandler(Number(value), "age")
            }
            value={formValue.age}
            type="number"
            placeholder="Enter Age"
          />
        </label>
      </div>

      <button type="submit">Save</button>
    </form>
  );
};
