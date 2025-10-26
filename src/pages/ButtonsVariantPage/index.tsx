import Button from "../../components/ui/Button";
import deleteIcon from "../../assets/delete.svg";
import editIcon from "../../assets/edit.svg";
import printIcon from "../../assets/print.svg";
import uploadIcon from "../../assets/upload.svg";
import downloadIcon from "../../assets/download.svg";

const ButtonsVariantPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "15px",
          margin: "15px 0",
        }}
      >
        <Button
          onClick={() => console.log("Click")}
          variant="standard"
          title="Просмотреть"
        />
        <Button
          onClick={() => console.log("Click")}
          variant="errorOutlined"
          title="Просмотреть"
        />
        <Button
          onClick={() => console.log("Click")}
          variant="error"
          title="Просмотреть"
        />
        <Button
          onClick={() => console.log("Click")}
          variant="goTo"
          title="Просмотреть"
        />
        <Button
          onClick={() => console.log("Click")}
          variant="success"
          title="Просмотреть"
        />
        <Button
          onClick={() => console.log("Click")}
          variant="successOutlined"
          title="Просмотреть"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "15px",
          margin: "15px 0",
        }}
      >
        <Button
          onClick={() => console.log("Click")}
          variant="standard"
          title="Просмотреть"
          isDisabled
        />
        <Button
          onClick={() => console.log("Click")}
          variant="errorOutlined"
          title="Просмотреть"
          isDisabled
        />
        <Button
          onClick={() => console.log("Click")}
          variant="error"
          title="Просмотреть"
          isDisabled
        />
        <Button
          onClick={() => console.log("Click")}
          variant="goTo"
          title="Просмотреть"
          isDisabled
        />
        <Button
          onClick={() => console.log("Click")}
          variant="success"
          title="Просмотреть"
          isDisabled
        />
        <Button
          onClick={() => console.log("Click")}
          variant="successOutlined"
          title="Просмотреть"
          isDisabled
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
        <Button
          onClick={() => console.log("Click")}
          variant="standard"
          title="Редактировать"
          icon={<img src={editIcon} alt="delete" width={24} height={24} />}
        />
        <Button
          onClick={() => console.log("Click")}
          variant="standard"
          title="Выгрузить в Excel"
          icon={<img src={uploadIcon} alt="delete" width={24} height={24} />}
        />
        <Button
          onClick={() => console.log("Click")}
          variant="standard"
          title="Удалить список"
          icon={<img src={deleteIcon} alt="delete" width={24} height={24} />}
        />
        <Button
          onClick={() => console.log("Click")}
          variant="standard"
          title="Распечатать"
          icon={<img src={printIcon} alt="delete" width={24} height={24} />}
        />
        <Button
          onClick={() => console.log("Click")}
          variant="standard"
          title="Загрузить из файла"
          icon={<img src={downloadIcon} alt="delete" width={24} height={24} />}
        />
      </div>
    </div>
  );
};

export default ButtonsVariantPage;
