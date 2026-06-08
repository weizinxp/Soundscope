import { User, Music, Calendar, Award, Settings, Share2 } from "lucide-react";

export function Profile() {
  const userStats = [
    { label: "Total Plays", value: "12,847", icon: Music },
    { label: "Member Since", value: "Jan 2024", icon: Calendar },
    { label: "Achievements", value: "24", icon: Award },
  ];

  const recentActivity = [
    { type: "listen", content: "Listened to 'Never Be Like You' by Flume", time: "2 hours ago" },
    { type: "post", content: "Posted in Electronic Music Discussion", time: "5 hours ago" },
    { type: "follow", content: "Started following ODESZA", time: "1 day ago" },
    { type: "playlist", content: "Created playlist 'Late Night Vibes'", time: "2 days ago" },
    { type: "achievement", content: "Unlocked 'Genre Explorer' achievement", time: "3 days ago" },
  ];

  const topGenres = [
    { name: "Electronic", percentage: 45, color: "from-purple-500 to-pink-500" },
    { name: "Indie", percentage: 25, color: "from-blue-500 to-cyan-500" },
    { name: "Alternative", percentage: 15, color: "from-teal-500 to-green-500" },
    { name: "Ambient", percentage: 10, color: "from-indigo-500 to-purple-500" },
    { name: "Other", percentage: 5, color: "from-gray-500 to-gray-600" },
  ];

  const badges = [
    { name: "Early Adopter", icon: "🚀", description: "Joined in the first month" },
    { name: "Genre Explorer", icon: "🎵", description: "Listened to 50+ genres" },
    { name: "Night Owl", icon: "🦉", description: "Most active after midnight" },
    { name: "Community Star", icon: "⭐", description: "100+ helpful posts" },
    { name: "Playlist Curator", icon: "📝", description: "Created 25+ playlists" },
    { name: "Concert Goer", icon: "🎤", description: "Attended 10+ concerts" },
  ];

  return (
    <div className="min-h-screen pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative mb-8">
          <div className="h-48 rounded-3xl bg-gradient-to-r from-[var(--wave-gradient-1)] via-[var(--wave-gradient-2)] to-[var(--wave-gradient-3)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
          </div>

          <div className="relative -mt-16 px-6">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-[var(--wave-gradient-1)] to-[var(--wave-gradient-2)] flex items-center justify-center text-white text-5xl font-bold border-4 border-background shadow-xl">
                <User className="w-16 h-16" />
              </div>

              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-2">Alex Johnson</h1>
                <p className="text-muted-foreground mb-4">@alexjohnson · Music enthusiast & playlist curator</p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-6 py-2 rounded-xl bg-primary text-primary-foreground hover:scale-105 transition-transform">
                    <Settings className="w-4 h-4 inline-block mr-2" />
                    Edit Profile
                  </button>
                  <button className="px-6 py-2 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                    <Share2 className="w-4 h-4 inline-block mr-2" />
                    Share Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {userStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-[var(--wave-gradient-1)] to-[var(--wave-gradient-2)]">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h2 className="text-xl font-semibold mb-6">Listening Profile</h2>
              <div className="space-y-4">
                {topGenres.map((genre) => (
                  <div key={genre.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{genre.name}</span>
                      <span className="text-sm text-muted-foreground">{genre.percentage}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${genre.color} rounded-full transition-all`}
                        style={{ width: `${genre.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm mb-1">{activity.content}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h2 className="text-xl font-semibold mb-6">Achievements</h2>
              <div className="grid grid-cols-2 gap-3">
                {badges.map((badge) => (
                  <div
                    key={badge.name}
                    className="p-4 rounded-xl bg-accent hover:bg-accent/80 transition-colors cursor-pointer group"
                    title={badge.description}
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                      {badge.icon}
                    </div>
                    <div className="text-xs font-medium leading-tight">{badge.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
              <h3 className="font-semibold mb-2">Your Musical Identity</h3>
              <p className="text-sm text-muted-foreground mb-4">
                You're an Electronic music enthusiast who loves discovering new artists and sharing your finds with the community.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs">Curator</span>
                <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs">Explorer</span>
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs">Community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
