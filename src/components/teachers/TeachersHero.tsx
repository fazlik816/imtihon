import { Link } from "react-router-dom";
import Icon from "../ui/Icon";

const TeachersHero = () => {
  return (
    <section className="bg-linear-to-b from-blue-50/70 via-indigo-50/40 to-white">
      <div className="mx-auto max-w-6xl px-6 py-14 text-center">
        <nav className="flex items-center justify-center gap-2 text-sm text-slate-500">
          <Link to="/" className="transition hover:text-slate-700">
            Bosh sahifa
          </Link>
          <Icon.chevronRight className="h-4 w-4 text-slate-300" />
          <span className="font-medium text-slate-700">O'qituvchilar</span>
        </nav>

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900">
          Bizning o'qituvchilar
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-500">
          42 ta tajribali mutaxassis o'z bilim va tajribasini siz bilan
          ulashishga tayyor.
        </p>
      </div>
    </section>
  );
};

export default TeachersHero;
