export const createSubscribable = <MessageType>() => {
  const subscribers: Set<(message: MessageType) => void> = new Set();

  const subscribe = (event: (msg: MessageType) => void) => {
    subscribers.add(event);

    return () => subscribers.delete(event);
  };

  const publish = (message: MessageType) => {
    subscribers.forEach((subscriber) => subscriber(message));
  };

  return { publish, subscribe };
};
