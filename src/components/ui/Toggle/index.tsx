import "./style.css";

interface ToggleProps {
  isOn: boolean;
  onToggle: () => void;
  id?: string;
}

const Toggle = ({ isOn, onToggle, id = "toggle" }: ToggleProps) => {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        checked={isOn}
        onChange={onToggle}
        style={{ display: "none" }}
      />
      <label htmlFor={id} className="toy-toggle">
        <span className="border1"></span>
        <span className="border2"></span>
        <span className="border3"></span>
        <span className="handle">
          <span className="handle-off"></span>
          <span className="handle-on"></span>
        </span>
      </label>
    </>
  );
};

export default Toggle;
