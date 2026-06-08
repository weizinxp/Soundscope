import { Sparkles, Music2, Heart, Play } from "lucide-react";
import { useState } from "react";

export function Recommendations() {
  const [activeTab, setActiveTab] = useState<"genre" | "lyrics" | "hybrid">("genre");

  const genreRecs = [
    {
      title: "Dive",
      artist: "Tycho",
      album: "Dive",
      genre: "Electronic / Ambient",
      match: 95,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Bloom",
      artist: "ODESZA",
      album: "Summer's Gone",
      genre: "Electronic / Chillwave",
      match: 92,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Cirrus",
      artist: "Bonobo",
      album: "The North Borders",
      genre: "Electronic / Downtempo",
      match: 90,
      color: "from-teal-500 to-green-500",
    },
    {
      title: "Open Eye Signal",
      artist: "Jon Hopkins",
      album: "Immunity",
      genre: "Electronic / Techno",
      match: 88,
      color: "from-indigo-500 to-blue-500",
    },
  ];

  const lyricalRecs = [
    {
      title: "Holocene",
      artist: "Bon Iver",
      album: "Bon Iver",
      theme: "Introspective / Nature",
      match: 93,
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Re: Stacks",
      artist: "Bon Iver",
      album: "For Emma, Forever Ago",
      theme: "Melancholic / Reflective",
      match: 91,
      color: "from-rose-500 to-red-500",
    },
    {
      title: "Stubborn Love",
      artist: "The Lumineers",
      album: "The Lumineers",
      theme: "Hopeful / Romantic",
      match: 87,
      color: "from-yellow-500 to-amber-500",
    },
    {
      title: "First Day of My Life",
      artist: "Bright Eyes",
      album: "I'm Wide Awake, It's Morning",
      theme: "Optimistic / Love",
      match: 85,
      color: "from-pink-500 to-rose-500",
    },
  ];

  const hybridRecs = [
    {
      title: "Lua",
      artist: "Bright Eyes",
      album: "I'm Wide Awake, It's Morning",
      description: "Indie folk with introspective lyrics",
      genreMatch: 88,
      lyricMatch: 94,
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "Skinny Love",
      artist: "Bon Iver",
      album: "For Emma, Forever Ago",
      description: "Acoustic with emotional depth",
      genreMatch: 85,
      lyricMatch: 96,
      color: "from-fuchsia-500 to-pink-500",
    },
    {
      title: "Outro",
      artist: "M83",
      album: "Hurry Up, We're Dreaming",
      description: "Epic electronic with uplifting themes",
      genreMatch: 93,
      lyricMatch: 82,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Weight of Sound",
      artist: "Stick Figure",
      album: "Set in Stone",
      description: "Reggae with positive vibes",
      genreMatch: 78,
      lyricMatch: 89,
      color: "from-green-500 to-teal-500",
    },
  ];

  const tabs = [
    { id: "genre" as const, label: "Genre Based", icon: Music2 },
    { id: "lyrics" as const, label: "Lyrical Themes", icon: Heart },
    { id: "hybrid" as const, label: "Hybrid Match", icon: Sparkles },
  ];

  return (
    <div className="min-h-screen pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Discover New Music</h1>
          <p className="text-muted-foreground">Personalized recommendations based on your taste</p>
        </div>

        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[var(--wave-gradient-1)] to-[var(--wave-gradient-2)] text-white shadow-lg"
                    : "bg-card border border-border hover:border-primary/50"
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {activeTab === "genre" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {genreRecs.map((rec) => (
              <div
                key={rec.title}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${rec.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="relative">
                  <div className={`w-full aspect-square rounded-xl bg-gradient-to-br ${rec.color} mb-4 flex items-center justify-center`}>
                    <Music2 className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1">{rec.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{rec.artist}</p>
                  <p className="text-xs text-muted-foreground mb-3">{rec.genre}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-primary font-semibold">{rec.match}%</span>
                      <span className="text-muted-foreground"> match</span>
                    </div>
                    <button className="p-2 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform">
                      <Play className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "lyrics" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lyricalRecs.map((rec) => (
              <div
                key={rec.title}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${rec.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="relative">
                  <div className={`w-full aspect-square rounded-xl bg-gradient-to-br ${rec.color} mb-4 flex items-center justify-center`}>
                    <Heart className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1">{rec.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{rec.artist}</p>
                  <p className="text-xs text-muted-foreground mb-3">{rec.theme}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-primary font-semibold">{rec.match}%</span>
                      <span className="text-muted-foreground"> match</span>
                    </div>
                    <button className="p-2 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform">
                      <Play className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "hybrid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hybridRecs.map((rec) => (
              <div
                key={rec.title}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${rec.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="relative flex gap-6">
                  <div className={`w-32 h-32 rounded-xl bg-gradient-to-br ${rec.color} flex items-center justify-center flex-shrink-0`}>
                    <Sparkles className="w-12 h-12 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{rec.title}</h3>
                    <p className="text-muted-foreground mb-2">{rec.artist}</p>
                    <p className="text-sm text-muted-foreground mb-4">{rec.description}</p>
                    <div className="space-y-2 mb-4">
                      <div>
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Genre Match</span>
                          <span className="font-semibold">{rec.genreMatch}%</span>
                        </div>
                        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[var(--wave-gradient-1)] to-[var(--wave-gradient-2)] rounded-full"
                            style={{ width: `${rec.genreMatch}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Lyric Match</span>
                          <span className="font-semibold">{rec.lyricMatch}%</span>
                        </div>
                        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[var(--wave-gradient-2)] to-[var(--wave-gradient-3)] rounded-full"
                            style={{ width: `${rec.lyricMatch}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <button className="px-6 py-2 rounded-xl bg-primary text-primary-foreground hover:scale-105 transition-transform">
                      Listen Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
