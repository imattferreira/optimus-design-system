import { useEffect, useState } from 'react';
import Heading from '~/components/heading/components/heading';
import Text from '~/components/text/components/text';
import cs from '~/utils/cs';
import type { ToastProps } from '../helpes/types';
import { CLOSE_TIMEOUT, UPDATE_PROGRESS_BAR_TIME } from '../constants/time';
import { PROGRESS_TYPES, TYPES } from '../constants/styles';

function Toast({ message, title, type, onClose }: ToastProps) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time => {
        if (time + UPDATE_PROGRESS_BAR_TIME >= CLOSE_TIMEOUT) {
          clearInterval(interval);
          onClose();
        }

        return time + UPDATE_PROGRESS_BAR_TIME;
      });
    },
      UPDATE_PROGRESS_BAR_TIME
    );

    return () => {
      clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <li
      role="status"
      className={cs(
        'relative list-none p-4 border-2 border-solid w-96 rounded-md',
        TYPES[type]
      )}
    >
      <Heading as='h2' color={{ light: '', dark: '' }} size='size6'>{title}</Heading>
      <Text color={{ light: '', dark: '' }} as='p' size='size2'>{message}</Text>
      {/* TODO: adjust for Firefox and Safari */}
      <progress
        value={time}
        max={CLOSE_TIMEOUT}
        className={cs(
          'left-0 right-0 w-full h-1 bottom-0 absolute [&::-webkit-progress-value]:transition-all [&::-webkit-progress-bar]:bg-transparent [&::-webkit-progress-value]:rounded-sm',
          PROGRESS_TYPES[type]
        )}
      />
    </li>
  )
}

export default Toast;
