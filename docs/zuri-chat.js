async function sendMessage(message) {
  const response = await fetch("https://zuribright-com.onrender.com/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message })
  });

  const data = await response.json();
  return data.reply;
}
