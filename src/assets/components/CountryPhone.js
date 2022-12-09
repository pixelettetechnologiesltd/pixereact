import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const CountryPhone = () => {
  const [state, setState] = useState();
  return (
    <div>
      <PhoneInput
        country={"us"}
        value={state}
        onChange={(phone) => setState({ phone })}
      />
    </div>
  );
};

export { CountryPhone };
