import { useState } from "react";
import Toggle from "../../components/ui/Toggle";

const BeautyPage = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <Toggle isOn={isActive} onToggle={() => setIsActive(!isActive)} />
    </>
  );
};

export default BeautyPage;
