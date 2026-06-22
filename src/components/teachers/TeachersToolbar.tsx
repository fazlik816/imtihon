import { useState } from "react";
import Icon from "../ui/Icon";
import { teacherCategories } from "../../data/teachers.data";

const TeachersToolbar = () => {
  const [active, setActive] = useState("all");

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="relative w-full lg:max-w-md">
        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
          <Icon.search className="h-4 w-4" />
        </span>
        <input
          type="text"
          placeholder="O'qituvchi ismini qidiring..."
          className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 transition outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {teacherCategories.map((category) => (
          <button
            key={category.value}
            type="button"
            onClick={() => setActive(category.value)}
            className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition ${
              active === category.value
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TeachersToolbar;
