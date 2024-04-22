import * as React from "react";
import {
  Box,
  TableRow,
  TablePagination,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Paper,
} from "@mui/material";
import { useSelector } from "react-redux";

interface Column {
  id: "employeeID" | "leaveID" | "natureOfLeave" | "dateFrom" | "dateTo";
  label: string;
  minWidth?: number;
  align?: "center";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "employeeID", label: "Employee ID", minWidth: 20, align: "center" },
  { id: "leaveID", label: "Leave ID", minWidth: 20, align: "center" },
  {
    id: "natureOfLeave",
    label: "Nature of Leave",
    minWidth: 50,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "dateFrom",
    label: "Date From",
    minWidth: 30,
    align: "center",
  },
  {
    id: "dateTo",
    label: "Date To",
    minWidth: 30,
    align: "center",
  },
];

export default function ApprovedTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const leave = useSelector((state: object) => state.leave.leave);
  const user = useSelector((state: object) => state.auth.user);

  const userFilteredLeave = leave.filter(
    (data: object) => data.employeeID === user?.employeeID
  )
  const approvedLeave = userFilteredLeave.filter(
    (data: object) => data.status === "approved"
  );

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, key) => (
                <TableCell
                  key={key}
                  align={column.align}
                  style={{ width: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {approvedLeave
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, key) => {
                return (
                  <TableRow key={key} hover role="checkbox" tabIndex={-1}>
                    {columns.map((column, key) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={key} align={column.align}>
                          {column.id === "dateFrom" ? (
                            <Box>{value.slice(0, 10)}</Box>
                          ) : column.id === "dateTo" ? (
                            <Box>{value.slice(0, 10)}</Box>
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={approvedLeave.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
