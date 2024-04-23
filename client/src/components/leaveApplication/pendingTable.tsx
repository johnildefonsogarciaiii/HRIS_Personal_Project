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
  Button,
  Stack,
  Snackbar,
  Alert,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { GETTING_ALL_LEAVE, UPDATE_LEAVE } from "../../store/leaveSlice";
import { useState } from "react";
import Loader from "../loader/loader";


interface Column {
  id:
    | "employeeID"
    | "leaveID"
    | "natureOfLeave"
    | "dateFrom"
    | "dateTo"
    | "remarks";
  label: string;
  minWidth?: number;
  align?: "center";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "employeeID", label: "Employee ID", minWidth: 70, align: "center" },
  { id: "leaveID", label: "Leave ID", minWidth: 70, align: "center" },
  {
    id: "natureOfLeave",
    label: "Nature of Leave",
    minWidth: 100,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "dateFrom",
    label: "Date From",
    minWidth: 100,
    align: "center",
  },
  {
    id: "dateTo",
    label: "Date To",
    minWidth: 100,
    align: "center",
  },
  {
    id: "remarks",
    label: "Remarks",
    minWidth: 350,
    align: "center",
  },
];

export default function PendingTable() {
  const dispatch = useDispatch();
  const leave = useSelector((state: object) => state.leave.leave);
  const user = useSelector((state: object) => state.auth.user);
  const loading = useSelector((state: object) => state.user.isLoading);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  const [successAlert, setSuccessAlert] = useState<boolean>(false);


  React.useEffect(() => {
    async function fetchingLeaves() {
      const leaveResponse = await dispatch(GETTING_ALL_LEAVE());
      // console.log(leave)
    }
    fetchingLeaves();
  }, [leave]);

  const userFilteredLeave = Object.values(leave).filter(
        (data: object) => data?.employeeID === user?.employeeID
      )


  const pendingLeave = Object.values(userFilteredLeave).filter(
    (data: object) => data?.status === "pending" 
  )  ;

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // handle close alert
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccessAlert(false);
  };

  return (
    <>
      {loading ? (
        Loader()
      ) : (
        <>
          {successAlert ? (
            <Stack spacing={2} sx={{ width: "100%" }}>
              <Snackbar
                open={successAlert}
                autoHideDuration={3000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  Leave was approved.
                </Alert>
              </Snackbar>
            </Stack>
          ) : null}

          <Paper sx={{ width: "100%" }}>
            <TableContainer sx={{ maxHeight: 650 }}>
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
                  {pendingLeave
                    ? pendingLeave
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row, key) => {
                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={key}
                            >
                              {columns.map((column, key) => {
                                const value = row[column.id];
                                return (
                                  <TableCell key={key} align={column.align}>
                                    {value === undefined ? (
                                      <Box>
                                        <Button
                                          onClick={(
                                            event: React.SyntheticEvent
                                          ) => {
                                            event.preventDefault();
                                            dispatch(
                                              UPDATE_LEAVE({
                                                status: "approved",
                                                id: row._id,
                                              })
                                            );
                                          }}
                                        >
                                          Approved
                                        </Button>
                                        <Button
                                          onClick={(
                                            event: React.SyntheticEvent
                                          ) => {
                                            event.preventDefault();
                                            dispatch(
                                              UPDATE_LEAVE({
                                                status: "disapproved",
                                                id: row._id,
                                              })
                                            );
                                          }}
                                        >
                                          Disapproved
                                        </Button>
                                        <Button
                                          onClick={(
                                            event: React.SyntheticEvent
                                          ) => {
                                            event.preventDefault();
                                            dispatch(
                                              UPDATE_LEAVE({
                                                status: "void",
                                                id: row._id,
                                              })
                                            );
                                          }}
                                        >
                                          Void
                                        </Button>
                                      </Box>
                                    ) : column.id === "dateFrom" ? (
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
                        })
                    : null}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={pendingLeave.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </>
      )}
    </>
  );
}
