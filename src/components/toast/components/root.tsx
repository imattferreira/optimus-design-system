import { useEffect, lazy } from 'react';
import useSingleton from '~/hooks/useSingleton';
import Queue from '~/utils/queue';
import Subscriber from '~/utils/subscriber';
import type { DispatchedToast } from '../helpes/types';

const Toast = lazy(() => import('./toast'));

function ToastRoot() {
  const toasts = useSingleton(new Queue<DispatchedToast>());

  useEffect(() => {
    Subscriber.subscribe<DispatchedToast>('open-toast', (data) => {
      toasts.queue(data);
    });
  }, [toasts]);

  if (toasts.size() < 0) {
    return null;
  }

  return (
    <ol className='z-20 absolute flex gap-y-2 right-1/2 -translate-x-1/2 lg:right-4 lg:translate-x-0 bottom-4'>
      {toasts.iter().map((toast) => (
        <Toast
          key="1"
          onClose={() => {
            if (toast.onClose) {
              toast.onClose()
            }

            toasts.pop();
          }}
          title={toast.title}
          message={toast.message}
          type={toast.type}
        />
      ))}
    </ol>
  )
}

export default ToastRoot;
