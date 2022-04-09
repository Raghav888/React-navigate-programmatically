import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [pass, setpass] = useState("");
  const [err, setError] = useState("");
  const inputPass = (newpass) => {
    setpass(newpass);
    setError(false);
  };

  const navigate = useNavigate();
  const clickHandler = () => {
    if (pass === "4242") {
      navigate("/user");
    } else {
      setError(true);
    }
  };
  return (
    <div>
      <input
        type="password"
        onChange={(event) => inputPass(event.target.value)}
      />
      <button onClick={clickHandler}>Submit</button>
      {err && <p>Wrong pass</p>}
    </div>
  );
};
