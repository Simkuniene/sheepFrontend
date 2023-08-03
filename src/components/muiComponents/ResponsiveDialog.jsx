import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function ResponsiveDialog({ keyProps, delItem, handleDelete }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button key={keyProps} variant="contained" onClick={handleClickOpen}>
        Isrinti
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Ar tikrai norite ištrinti įrašą?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Paspaudus "Taip" bus panaikinti visi įrasai apie {delItem} avį
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Atsisakyti
          </Button>
          <Button onClick={handleDelete} autoFocus>
            Taip
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
