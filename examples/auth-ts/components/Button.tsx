import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Button = (props: any) => {
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    setDisabled(false);
  });
  return <button type="button" disabled={disabled} {...props} />;
};

export { Button };
