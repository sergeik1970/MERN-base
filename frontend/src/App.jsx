import { useEffect, useState } from "react";

const apiUrl = import.meta.env.VITE_API_URL;
const App = () => {
  // Получим сообщение с сервера
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(apiUrl)
    .then((res) => res.json().then((data) => setMessage(data.message)))
  })
  return ( 
    <div className="app">
      <h1>{message}</h1>
    </div>
   );
}
 
export default App;