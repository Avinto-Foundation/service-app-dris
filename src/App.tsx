import { useEffect, useState } from "react";
import type { Service } from "./types/service";

function App() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchServices = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("http://localhost:3000/services");

      if (!response.ok) {
        throw new Error("Failed to fetch services");
      }

      const data: Service[] = await response.json();

      setServices(data);
    } catch (error) {
      setError("Failed to load services");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div>
      <h1>ServiceApp</h1>
      <p>Local service directory</p>
    </div>
  );
}

export default App;