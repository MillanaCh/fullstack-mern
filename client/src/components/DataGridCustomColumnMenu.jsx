import { GridColumnMenu } from "@mui/x-data-grid";

const CustomColumnMenu = (props) => {
  return (
    <GridColumnMenu
      {...props}
      // Override `columnMenuFilterItem` component
      slotProps={{
        // Swap positions of filter and sort items
        columnMenuFilterItem: {
          displayOrder: 0, // Previously `10`
        },
        columnMenuSortItem: {
          displayOrder: 10, // Previously `0`
        },
      }}
    />
  );
};
export default CustomColumnMenu;
