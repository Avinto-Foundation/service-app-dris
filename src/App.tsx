import { useEffect, useState } from "react";
import type { Service } from "./types/service";
import type { Category } from "./types/category";
import FilterPill from "./components/filterPill";

function App() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [categoryError, setCategoryError] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");

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

  const fetchCategories = async () => {
    try {
      setCategoryLoading(true);
      setCategoryError("");

      const response = await fetch("http://localhost:3000/categories");

      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }

      const data: Category[] = await response.json();

      setCategories(data);
    } catch (error) {
      setCategoryError("Failed to load categories");
    } finally {
      setCategoryLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
    fetchCategories();
  }, []);

  return (
    <div>
      <h1>ServiceApp</h1>
      <p>Local service directory</p>

      <div>
        <FilterPill
          label="All"
          selected={selectedCategory === "All"}
          onClick={() => setSelectedCategory("All")}
        />

        {categories.map((category) => (
          <FilterPill
            key={category.id}
            label={category.label}
            selected={selectedCategory === category.value}
            onClick={() => setSelectedCategory(category.value)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;