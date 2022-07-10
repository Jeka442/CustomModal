interface IModal {
  isOpen: boolean;
  closeDialog: () => void;
}

/**
 * @isOpen trigger the dialog
 * @closeDialog callback function when click away event occurs ( usually to close the dialog )
 * @children ReactNode - the content to display inside the modal
 */

export const Modal: FC<IModal> = (props) => {
  const outsideClick = () => props.closeDialog();
  const insideClick = (e: MouseEvent) => e.stopPropagation();
  return createPortal(
    <>
      {props.isOpen && (
        <div
          onClick={outsideClick}
          style={{
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            zIndex: 90000,
            top: 0,
            left: 0,
            backgroundColor: '#00000033',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div onClick={insideClick}>
            {props.children}
          </div>
        </div>
      )}
    </>,
    document.body
  );
};
