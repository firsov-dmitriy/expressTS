import { Box } from "@mui/system";
import React, { FC } from "react";
import { useFetchAllUsersQuery } from "../service/UserAPI";

const MainPage: FC = () => {
  const { data } = useFetchAllUsersQuery({});
  console.log(data);

  return <Box>MainPage</Box>;
};

export default MainPage;
