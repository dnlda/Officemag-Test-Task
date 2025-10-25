import { useRef, useState } from "react";

const ColorPicker: React.FC<{
  id: string;
  name: string;
  defaultValue: string;
}> = ({ id, name, defaultValue }) => {
  const colorInputRef = useRef<HTMLInputElement>(null);
  const [colorValue, setColorValue] = useState<string>(defaultValue);

  const handleColorPreviewClick = () => {
    colorInputRef.current?.click();
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorValue(e.target.value);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div
        style={{
          width: "60px",
          height: "30px",
          backgroundColor: colorValue,
          border: "2px solid #ddd",
          borderRadius: "4px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "12px",
          color:
            parseInt(colorValue.replace("#", ""), 16) > 0xffffff / 2
              ? "#000"
              : "#fff",
        }}
        onClick={handleColorPreviewClick}
        title="Нажмите для выбора цвета"
      ></div>
      <input
        ref={colorInputRef}
        type="color"
        id={id}
        name={name}
        value={colorValue}
        onChange={handleColorChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default ColorPicker;
