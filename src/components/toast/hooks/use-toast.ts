import Subscriber from '~/utils/subscriber';
import type { DispatchedToast } from '../helpes/types';

function useToast() {
  function alert(data: DispatchedToast) {
    Subscriber.publish('open-toast', data);
  }

  return { alert }
}

export default useToast;
