import { reload } from "vike/client/router";
import { Button } from "../../components/Button";

const Page = () => {
  return (
    <>
      <h1>Log in</h1>
      <PresetButtons />
      <form onSubmit={onSubmit} style={{ marginTop: 10 }}>
        <Input id="username" />
        <Input id="password" type="password" />
        <Validation />
        <Button type="submit" style={{ marginTop: 20 }}>
          Login
        </Button>
      </form>
    </>
  );
};

const PresetButtons = () => {
  const fill = (username: string, password: string) => {
    const usernameElement = document.querySelector("input#username");
    if (usernameElement !== null) {
      (usernameElement as HTMLInputElement).value = username;
    }
    const passwordElement = document.querySelector("input#password");
    if (passwordElement !== null) {
      (passwordElement as HTMLInputElement).value = password;
    }
  };
  return (
    <>
      Fill in as:{" "}
      <Button
        onClick={() => fill("turing", "I'm the creator of the Turing Machine")}
      >
        Alan Turing (admin)
      </Button>{" "}
      <Button
        onClick={() =>
          fill("neumann", "I'm the creator of the Von Neumann Architecture")
        }
      >
        John von Neumann (not admin)
      </Button>
    </>
  );
};

const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
  ev.preventDefault();
  const usernameElement = document.querySelector("input#username");
  const passwordElement = document.querySelector("input#password");

  let username: string | null = null;
  let password: string | null = null;

  if (usernameElement !== null) {
    username = (usernameElement as HTMLInputElement).value;
  }

  if (passwordElement !== null) {
    password = (passwordElement as HTMLInputElement).value;
  }

  const response = await fetch("/_auth/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: [["Content-Type", "application/json"]],
  });
  const { success } = await response.json();
  if (success) {
    await reload();
  } else {
    const validation = document.querySelector("#validation");
    if (validation !== null) {
      (validation as HTMLInputElement).style.display = "block";
    }
  }
};

const Validation = () => {
  return (
    <div
      style={{ color: "red", display: "none", marginTop: 5, marginBottom: -6 }}
      id="validation"
    >
      Wrong username and/or password.
    </div>
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

const Input = ({ id, ...props }: InputProps) => {
  return (
    <label style={{ display: "block" }}>
      <span style={{ fontSize: "0.91em" }}>{id}</span>
      <br />
      <input type="text" id={id} size={20} {...props}></input>
    </label>
  );
};

export default Page;
