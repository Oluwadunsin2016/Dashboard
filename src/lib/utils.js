import toast from 'react-hot-toast';
export function formatDateString(dateString) {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", options);

  const time = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${formattedDate} at ${time}`;
}

export const formatDate=(dateString)=> {
  const date = new Date(dateString);
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = date.getUTCFullYear();

  return `${day}-${month}-${year}`;
}

export const notifier = ({ message, type }) => {
  const types = ['success', 'error'];

  if (!types.includes(type)) {
      console.warn(`Unsupported toast type: ${type}`);
      return;
  }

  switch (type) {
      case 'success':
          toast.success(message);
          break;
      case 'error':
          toast.error(message);
          break;
      default:
          toast(message); // Fallback for a generic message
          break;
  }
};

export const formatCurrency = (currencyCode,value) => {
  return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: currencyCode||"NGN",
  }).format(+value);
};