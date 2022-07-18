import { useCallback, useState } from "react";
import { debounce } from "lodash";

const Debounce = () => {
  const [value2, setValue] = useState("");
  const [search, setSearch] = useState("");

  const delaySetValue = useCallback(
    debounce((value) => {
      setSearch(value);
    }, 500),
    []
  );
  const handleInputChange = (e: any) => {
    delaySetValue(e.currentTarget.value);
    setValue(e.currentTarget.value);
  };
  return (
    <div>
      {" "}
      <input
        className="input"
        type="text"
        placeholder="Debounce 입력"
        value={value2}
        onChange={handleInputChange}
      />
      <p className="text">{search}</p>
    </div>
  );
};

export default Debounce;
