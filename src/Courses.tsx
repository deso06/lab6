import { Link, useSearchParams } from "react-router-dom";
import { courses } from "./data";

const Courses = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get("sort") || "asc";

  const sorted = [...courses].sort((a, b) => 
    sortOrder === "desc" ? b.title.localeCompare(a.title) : a.title.localeCompare(b.title)
  );

  return (
    <div>
      <h1>Актуальные курсы</h1>
      <button onClick={() => setSearchParams({ sort: sortOrder === "asc" ? "desc" : "asc" })}>
        Сортировка: {sortOrder.toUpperCase()}
      </button>
      <ul>
        {sorted.map((c) => (
          <li key={c.id}>
            <Link to={`/courses/${c.id}`}>{c.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Courses;
