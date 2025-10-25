import type { FormEvent } from "react";
import ColorPicker from "../../ui/ColorPicker/ColorPicker";
import { FormField } from "../../ui/FormField/FormField";

const Form = () => {
  const handleHtmlFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      text: formData.get("text"),
      color: formData.get("color"),
      message: formData.get("message"),
      option: formData.get("option"),
      agree: formData.get("agree") === "on",
    };
    console.log("HTML Form Data:", data);
    alert("HTML форма отправлена!");
  };

  return (
    <div style={{ margin: "0 300px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Заполните поля</h2>
        <p>ну пожалуйста</p>
      </div>
      <div
        style={{
          backgroundColor: "#fffef8ff",
          color: "#000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>Основное</h3>
        <form
          id="htmlForm"
          onSubmit={handleHtmlFormSubmit}
          style={{ width: "100%" }}
        >
          <div style={{ padding: "20px" }}>
            <FormField>
              <label htmlFor="htmlText">Имя</label>
              <input
                type="text"
                id="htmlText"
                name="text"
                style={{
                  display: "block",
                  width: "100%",
                  padding: "8px",
                  marginTop: "5px",
                  border: "1px solid #ddd",
                }}
              />
            </FormField>
            <FormField>
              <label htmlFor="htmlColor">Цвет вашего настроения</label>
              <ColorPicker
                id="htmlColor"
                name="color"
                defaultValue="#3700ffff"
              />
            </FormField>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fff8d3ff",
              color: "#000",
              width: "100%",
              margin: "20px 0",
              padding: "20px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3 style={{ margin: "0 0 15px 0" }}>Дополнительное</h3>
            </div>
            <FormField>
              <label htmlFor="htmlMessage">Комментарий</label>
              <textarea
                id="htmlMessage"
                name="message"
                rows={4}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "8px",
                  marginTop: "5px",
                  border: "1px solid #ddd",
                  boxSizing: "border-box",
                }}
              ></textarea>
            </FormField>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <label>
              <FormField>
                <input type="radio" name="option" value="option1" />
                Ну а тут просто полежит радиобатон
              </FormField>
            </label>

            <label>
              <div
                style={{
                  marginBottom: "15px",
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  alignItems: "start",
                }}
              >
                <input type="checkbox" name="agree" />
                <div style={{ lineHeight: "1.4" }}>
                  Соглашаюсь на всё, что бы вы не <br /> придумали и осознаю,
                  что это может <br />
                  означать
                  <a
                    href="/text_page"
                    style={{
                      color: "#007bff",
                      textDecoration: "underline",
                      marginLeft: "5px",
                    }}
                  >
                    что угодно
                  </a>
                </div>
              </div>
            </label>

            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#5736e7ff",
                borderRadius: "5px",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Сохранить все мои данные
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
