import { Link } from "react-router-dom";
import { BarChart3, Sparkles, Users, TrendingUp, Music, Activity } from "lucide-react";
import { motion } from "motion/react";

export function Landing() {
  const features = [
    {
      icon: BarChart3,
      title: "Deep Analytics",
      description: "Track your listening habits across Spotify and YouTube Music with detailed insights and beautiful visualizations.",
    },
    {
      icon: Sparkles,
      title: "Smart Recommendations",
      description: "Discover new music based on your taste, lyrical themes, and listening patterns.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with music lovers, share recommendations, and discuss your favorite artists.",
    },
  ];

  const stats = [
    { label: "Total Listens", value: "1.2M+", gradient: "from-[var(--wave-gradient-1)] to-[var(--wave-gradient-2)]" },
    { label: "Artists Tracked", value: "50K+", gradient: "from-[var(--wave-gradient-2)] to-[var(--wave-gradient-3)]" },
    { label: "Active Users", value: "25K+", gradient: "from-[var(--wave-gradient-3)] to-[var(--wave-gradient-1)]" },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 backdrop-blur-sm border border-border mb-8">
              <Activity className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Unified Music Analytics Platform</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--wave-gradient-1)] via-[var(--wave-gradient-2)] to-[var(--wave-gradient-3)] bg-clip-text text-transparent">
              Your Music Journey,
              <br />
              Visualized
            </h1>

            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Combine your Spotify and YouTube Music listening data into one powerful analytics dashboard.
              Discover insights, get personalized recommendations, and connect with fellow music enthusiasts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/dashboard"
                className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-[var(--wave-gradient-1)] to-[var(--wave-gradient-2)] text-white font-medium shadow-lg hover:shadow-xl transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--wave-gradient-1)] to-[var(--wave-gradient-2)] rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <span className="relative flex items-center gap-2">
                  Get Started
                  <TrendingUp className="w-5 h-5" />
                </span>
              </Link>

              <Link
                to="/recommendations"
                className="px-8 py-4 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                Explore Features
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 rounded-2xl backdrop-blur-sm border border-border overflow-hidden group hover:border-primary/50 transition-colors"
                style={{ backgroundColor: "var(--glass-bg)" }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                <div className="relative">
                  <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need</h2>
            <p className="text-xl text-muted-foreground">Powerful features to understand and enhance your music experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all"
                >
                  <div className="mb-4 relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--wave-gradient-1)] to-[var(--wave-gradient-2)] rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative p-3 bg-gradient-to-r from-[var(--wave-gradient-1)] to-[var(--wave-gradient-2)] rounded-xl">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Music className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h2 className="text-4xl font-bold mb-4">Ready to dive into your music data?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of music lovers discovering new insights about their listening habits.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[var(--wave-gradient-1)] to-[var(--wave-gradient-2)] text-white font-medium shadow-lg hover:shadow-xl transition-all"
          >
            Start Exploring
            <TrendingUp className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
