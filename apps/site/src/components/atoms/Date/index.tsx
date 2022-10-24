import { useMemo } from "react";
import { format, parse } from "date-fns";
import { Typography } from "@components/styles/Typography";

import { DateProps } from "./types";

const FormatedDate: React.FC<DateProps> = ({ date, className }) => {
  const formatedDate = useMemo(() => {
    const parsedDate = parse(date, "yyyy-MM-dd", new Date());

    return format(parsedDate, "dd MMM yyyy");
  }, [date]);

  return (
    <Typography
      fontSize="fontSize14"
      lineHeight="1.1em"
      {...{ className }}
    >
      {formatedDate}
    </Typography>
  );
};

export default FormatedDate;
