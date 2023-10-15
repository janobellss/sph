import React, { useEffect, useState } from "react";

type MessageProps = { message: string; onClose: () => void };

const Message: React.FC<MessageProps> = ({ message, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return show ? (
    <div className="fixed top-4 right-4 p-4 bg-yellow-500 text-black rounded">
      {message}
    </div>
  ) : null;
};

export default Message;
