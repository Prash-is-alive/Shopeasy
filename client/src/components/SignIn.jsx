import Form from "react-bootstrap/Form";
import { Context } from "../utils/context";
import { useContext } from "react";
import useFetch from "../hooks/useFetch";
import { Button } from "@mui/material";
function SignIn() {
  let { data } = useFetch(`/api/users`);
  // eslint-disable-next-line
  const { setUser, user, setLogged, logged, setShowModal } =
    useContext(Context);

  function handleSubmit(e) {
    e.preventDefault();
    setUser({
      email: e.target.email.value,
      password: e.target.password.value,
    });
    try {
      check();
    } catch (err) {
      console.log(err);
    }
    // setShowModal(false);
  }
  const check = () => {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (item.email === user.email) {
        setLogged({ loggedIn: true, loggedInUsername: item.username });
        sessionStorage.setItem("user", JSON.stringify(logged));
        console.log("Checking...", logged.loggedIn, logged.loggedInUsername);
      }
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder={user.email}
          name="email"
          autoComplete="email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="current-password"
          required
        />
      </Form.Group>
      <div
        className="signIn"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default SignIn;
