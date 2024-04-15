class Subscriber {
  static subscribe<T extends Record<string, unknown>>(event: string, callback: (data: T) => void) {
    const fn = (e: Event) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      callback((e as any).detail as T);
    }

    document.addEventListener(event, fn);

    return () => {
      document.removeEventListener(event, fn);
    }
  }

  static publish(event: string, payload: Record<string, unknown>) {
    const customEvent = new CustomEvent(event, { detail: payload });

    document.dispatchEvent(customEvent);
  }
}

export default Subscriber;
