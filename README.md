# Modal

Custom fixed position modal with click away listener that dims the screen and displays the content in the middle


## Usage

```typescript
  const [openDialog, setOpenDialog] = useState(false);
  const closeDialog = ()=>{setOpenDialog(false)}

    return (
      <>
        <Modal
          isOpen={openDialog}
          closeDialog={closeDialog}
        >
          here will be the content
        </Modal>
...

```


Feel free to use and upgrade as you like
