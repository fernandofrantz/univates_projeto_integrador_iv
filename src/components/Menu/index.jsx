import { Link, useHistory } from "react-router-dom";
import { BoxMenu } from "./styles";

export const Menu = () => {
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <>
      <BoxMenu>
        <button type="button" onClick={() => sendTo("/")}>
          Home
        </button>
        <button onClick={() => sendTo("client")}>Cadastro de clientes</button>
        <button onClick={() => sendTo("object_type")}>
          Cadastro de tipos de objetos
        </button>
        <button onClick={() => sendTo("objects")}>Cadastro de objetos</button>
        <button onClick={() => sendTo("maintence")}>
          Cadastro de manutenções
        </button>
      </BoxMenu>
    </>
  );
};
