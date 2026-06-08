import { Link, useLocation } from "react-router-dom";
import { Home, BarChart3, Sparkles, MessageSquare, User, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function Navigation() {
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Dashboard", path: "/dashboard", icon: BarChart3 },
    { name: "Discover", path: "/recommendations", icon: Sparkles },
    { name: "Forum", path: "/forum", icon: MessageSquare },
    { name: "Profile", path: "/profile", icon: User },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-border/50" style={{ backgroundColor: "var(--glass-bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--wave-gradient-1)] to-[var(--wave-gradient-2)] rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-[var(--wave-gradient-1)] to-[var(--wave-gradient-2)] rounded-xl p-2">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L12 20M12 4C14 6 18 8 18 12C18 16 14 18 12 20M12 4C10 6 6 8 6 12C6 16 10 18 12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="2" fill="currentColor"/>
                </svg>
              </div>
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-[var(--wave-gradient-1)] to-[var(--wave-gradient-2)] bg-clip-text text-transparent">
              SoundScope
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                    active
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-xl hover:bg-accent transition-colors"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div className="md:hidden border-t border-border/50 backdrop-blur-xl" style={{ backgroundColor: "var(--glass-bg)" }}>
        <div className="flex items-center justify-around px-2 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
