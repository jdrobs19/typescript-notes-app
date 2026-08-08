import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../useLocalStorage";

type HeaderProps = {
  title?: string;
  searchTitle: string;
  setSearchTitle: (v: string) => void;
};

export function Header({ searchTitle, setSearchTitle }: HeaderProps) {
  const [isDark, setIsDark] = useLocalStorage<boolean>("DARK", false);

  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDark]);

  return (
    <header className="w-full bg-transparent py-4">
      <div className="max-w-5xl mx-auto px-4 flex items-center gap-4">
        <Link to="/" className="inline-flex items-center gap-3 text-xl font-semibold text-[color:var(--text)]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[color:var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
            <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          </svg>
          Notes
        </Link>

        <div className="flex-1">
          <input
            aria-label="Search notes"
            placeholder="Search title..."
            value={searchTitle}
            onChange={e => setSearchTitle(e.target.value)}
            className="w-full bg-[color:var(--card)] px-3 py-2 rounded-md input-focus"
          />
        </div>

        <div className="flex items-center gap-3">
          <Link to="/new" className="inline-flex items-center px-3 py-2 bg-[color:var(--accent)] text-white rounded-md hover:opacity-95">
            Create
          </Link>

          <button
            aria-pressed={isDark}
            onClick={() => setIsDark(prev => !prev)}
            className="p-2 rounded-md bg-[color:var(--card)] hover:bg-opacity-90"
            title="Toggle dark mode"
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[color:var(--text)]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 116.707 2.707a7 7 0 0010.586 10.586z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[color:var(--text)]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 2.03a1 1 0 011.415 0l.707.707a1 1 0 01-1.414 1.414l-.708-.707a1 1 0 010-1.414zM18 9a1 1 0 110 2h-1a1 1 0 110-2h1zM15.64 15.364a1 1 0 010 1.414l-.707.707a1 1 0 11-1.415-1.414l.708-.707a1 1 0 011.414 0zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4.22 15.364a1 1 0 011.414 0l.707.707A1 1 0 014.928 17.485l-.707-.707a1 1 0 010-1.414zM3 9a1 1 0 100 2H2a1 1 0 100-2h1zM5.64 4.737a1 1 0 010 1.414L4.934 6.858A1 1 0 013.52 5.444l.707-.707a1 1 0 011.414 0z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
