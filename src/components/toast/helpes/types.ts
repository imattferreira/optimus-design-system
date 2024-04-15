export type Types = 'message' | 'warning' | 'success' | 'error';

export interface ToastProps {
  /**
   * Change toast type
   */
  type: Types;
  /**
   * Title to append inside toast
   */
  title: string;
  /**
   * Text explaining why toast is showed
   */
  message: string;
  /**
   * Callback to listen to `onclose` event
   */
  onClose: () => void;
}

export type DispatchedToast = Omit<ToastProps, 'onClose'> & {
  onClose?: () => void;
};

