import Colors from "src/components/styles/Colors";
import colors from "@setup/theme/partials/colors";
import { ColorsItemProps } from "@components/styles/Colors/types";

const ColorPage = () => {
  const colorsArray = Object.entries(colors);

  const items = colorsArray.reduce<ColorsItemProps[]>(
    (result, [name, hex]) => [...result, { name, hex }],
    []
  );

  return (
    <div>
      <Colors colors={items} />
    </div>
  );
};

export default ColorPage;
