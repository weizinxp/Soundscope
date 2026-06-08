import { Clock, Music, TrendingUp, Calendar } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

export function Dashboard() {
  const stats = [
    { label: "Total Listening Time", value: "342 hours", icon: Clock, change: "+12% this month" },
    { label: "Unique Artists", value: "487", icon: Music, change: "+23 new" },
    { label: "Top Genre", value: "Electronic", icon: TrendingUp, change: "45% of plays" },
    { label: "Active Days", value: "28/30", icon: Calendar, change: "93% streak" },
  ];

  const topArtists = [
    { name: "Flume", plays: 234, hours: 18.5 },
    { name: "ODESZA", plays: 189, hours: 15.2 },
    { name: "Tycho", plays: 156, hours: 12.8 },
    { name: "Bonobo", plays: 143, hours: 11.3 },
    { name: "Jon Hopkins", plays: 128, hours: 10.1 },
  ];

  const topSongs = [
    { title: "Never Be Like You", artist: "Flume", plays: 87 },
    { title: "Say My Name", artist: "ODESZA", plays: 76 },
    { title: "Awake", artist: "Tycho", plays: 65 },
    { title: "Kerala", artist: "Bonobo", plays: 58 },
    { title: "Emerald Rush", artist: "Jon Hopkins", plays: 52 },
  ];

  const listeningTrends = [
    { id: "jan", month: "Jan", hours: 45 },
    { id: "feb", month: "Feb", hours: 52 },
    { id: "mar", month: "Mar", hours: 48 },
    { id: "apr", month: "Apr", hours: 61 },
    { id: "may", month: "May", hours: 58 },
    { id: "jun", month: "Jun", hours: 78 },
  ];

  const hourlyActivity = [
    { id: "h0", hour: "12AM", plays: 15 },
    { id: "h3", hour: "3AM", plays: 8 },
    { id: "h6", hour: "6AM", plays: 25 },
    { id: "h9", hour: "9AM", plays: 45 },
    { id: "h12", hour: "12PM", plays: 62 },
    { id: "h15", hour: "3PM", plays: 78 },
    { id: "h18", hour: "6PM", plays: 95 },
    { id: "h21", hour: "9PM", plays: 110 },
  ];

  const genreProfile = [
    { id: "electronic", genre: "Electronic", value: 85 },
    { id: "indie", genre: "Indie", value: 72 },
    { id: "alternative", genre: "Alternative", value: 65 },
    { id: "ambient", genre: "Ambient", value: 78 },
    { id: "hiphop", genre: "Hip Hop", value: 45 },
    { id: "rock", genre: "Rock", value: 52 },
  ];

  return (
    <div className="min-h-screen pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Your Music Dashboard</h1>
          <p className="text-muted-foreground">Deep insights into your listening habits</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-xl bg-gradient-to-r from-[var(--wave-gradient-1)] to-[var(--wave-gradient-2)]">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
                <div className="text-xs text-primary">{stat.change}</div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="p-6 rounded-2xl bg-card border border-border">
            <h2 className="text-xl font-semibold mb-6">Listening Trends</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={listeningTrends} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="month" stroke="var(--muted-foreground)" tick={{ fill: "var(--muted-foreground)" }} />
                <YAxis stroke="var(--muted-foreground)" tick={{ fill: "var(--muted-foreground)" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "0.75rem",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="hours"
                  stroke="var(--chart-1)"
                  strokeWidth={3}
                  dot={{ fill: "var(--chart-1)", r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border">
            <h2 className="text-xl font-semibold mb-6">Listening by Time of Day</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={hourlyActivity} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="hour" stroke="var(--muted-foreground)" tick={{ fill: "var(--muted-foreground)" }} />
                <YAxis stroke="var(--muted-foreground)" tick={{ fill: "var(--muted-foreground)" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "0.75rem",
                  }}
                />
                <Bar dataKey="plays" fill="var(--chart-2)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="p-6 rounded-2xl bg-card border border-border">
            <h2 className="text-xl font-semibold mb-6">Top Artists</h2>
            <div className="space-y-4">
              {topArtists.map((artist, index) => (
                <div key={artist.name} className="flex items-center gap-4">
                  <div className="text-2xl font-bold text-muted-foreground w-6">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium mb-1">{artist.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {artist.plays} plays · {artist.hours}h
                    </div>
                    <div className="mt-1 h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[var(--wave-gradient-1)] to-[var(--wave-gradient-2)] rounded-full"
                        style={{ width: `${(artist.plays / topArtists[0].plays) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border">
            <h2 className="text-xl font-semibold mb-6">Top Songs</h2>
            <div className="space-y-4">
              {topSongs.map((song, index) => (
                <div key={song.title} className="flex items-center gap-4">
                  <div className="text-2xl font-bold text-muted-foreground w-6">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium mb-1">{song.title}</div>
                    <div className="text-sm text-muted-foreground">{song.artist}</div>
                    <div className="mt-1 h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[var(--wave-gradient-2)] to-[var(--wave-gradient-3)] rounded-full"
                        style={{ width: `${(song.plays / topSongs[0].plays) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border">
            <h2 className="text-xl font-semibold mb-6">Genre Profile</h2>
            <ResponsiveContainer width="100%" height={280}>
              <RadarChart data={genreProfile} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <PolarGrid stroke="var(--border)" />
                <PolarAngleAxis
                  dataKey="genre"
                  stroke="var(--muted-foreground)"
                  tick={{ fill: "var(--muted-foreground)" }}
                />
                <PolarRadiusAxis
                  stroke="var(--muted-foreground)"
                  tick={{ fill: "var(--muted-foreground)" }}
                />
                <Radar
                  name="Preference"
                  dataKey="value"
                  stroke="var(--chart-3)"
                  fill="var(--chart-3)"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
