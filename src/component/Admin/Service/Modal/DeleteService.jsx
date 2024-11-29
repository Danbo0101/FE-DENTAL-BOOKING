import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { putUpdateService } from "../../../../services/specialtiesService";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const DeleteService = (props) => {
  const { open, dataDelete } = props;

  const handleClose = () => {
    if (reason !== "backdropClick") {
      onClose(event, reason);
    }
  };

  const resetData = () => {
    props.setDataDelete("");
    props.setOpen(false);
  };

  const handleDeleteService = async () => {
    let data = {
      ...dataDelete,
      ...{
        is_Deleted: true,
      },
    };

    delete data.service_Id;

    let result = await putUpdateService(dataDelete.service_Id, data);
    if (result.success) {
      toast.success("Xóa dịch vụ thành công");
      props.fetchListService();
      resetData();
    } else {
      toast.error(result.message);
      props.fetchListService();
      resetData();
    }
  };

  return (
    <>
      {dataDelete ? (
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{`Vui lòng xác nhận xóa chuyên khoa ${dataDelete.name}?`}</DialogTitle>
          <DialogActions>
            <Button onClick={resetData} variant="outlined" color="error">
              Không
            </Button>
            <Button
              onClick={handleDeleteService}
              variant="outlined"
              color="success"
            >
              Xác nhận
            </Button>
          </DialogActions>
        </Dialog>
      ) : (
        <></>
      )}
    </>
  );
};

export default DeleteService;
