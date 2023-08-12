import { useEffect, useState } from "react";

const Button = (props: any) => {
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    setDisabled(false);
  });
  return <button type="button" disabled={disabled} {...props} />;
};

export { Button };
