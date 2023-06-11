import { FC, createContext, useContext } from "react";

import { INotificationContext, INotificationProvider } from "./interfaces";

import { ToastContainer, toast } from "react-toastify";

const NotificationContext = createContext<INotificationContext>({
  notificationSuccess: (): void => {
    throw new Error("Function not implemented.");
  },
  notificationError: (): void => {
    throw new Error("Function not implemented.");
  },
  notificationWarn: (): void => {
    throw new Error("Function not implemented.");
  },
  notificationInfo: (): void => {
    throw new Error("Function not implemented.");
  },
});

export const useNotification = () => useContext(NotificationContext);

const NotificationProvider: FC<INotificationProvider> = ({ children }) => {
  const notificationSuccess = (message: string) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const notificationError = (message: string) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const notificationWarn = (message: string) => {
    toast.warn(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const notificationInfo = (message: string) => {
    toast.info(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <NotificationContext.Provider value={{ notificationSuccess, notificationError, notificationInfo, notificationWarn }}>
      {children}
      <ToastContainer />
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
