import { MessageSquare, TrendingUp, Heart, MessageCircle, Share2, Search } from "lucide-react";
import { useState } from "react";

export function Forum() {
  const [searchQuery, setSearchQuery] = useState("");

  const trendingTopics = [
    { tag: "Electronic", count: 1234 },
    { tag: "New Releases", count: 987 },
    { tag: "Indie", count: 756 },
    { tag: "Concert Reviews", count: 654 },
  ];

  const posts = [
    {
      id: 1,
      author: "MusicLover_92",
      avatar: "from-purple-500 to-pink-500",
      title: "Just discovered Bonobo and I'm blown away",
      content: "I can't believe I slept on Bonobo for so long. 'Migration' is an absolute masterpiece. The way he blends electronic elements with live instrumentation is incredible. What are your favorite Bonobo tracks?",
      category: "Discussion",
      likes: 142,
      comments: 38,
      timestamp: "2 hours ago",
      trending: true,
    },
    {
      id: 2,
      author: "ElectroNerd",
      avatar: "from-cyan-500 to-blue-500",
      title: "Recommendations for fans of Jon Hopkins?",
      content: "I've been obsessed with Jon Hopkins lately, especially 'Immunity' and 'Singularity'. Looking for similar artists with that perfect blend of ambient and techno. Any suggestions?",
      category: "Recommendations",
      likes: 98,
      comments: 45,
      timestamp: "5 hours ago",
      trending: true,
    },
    {
      id: 3,
      author: "VinylCollector",
      avatar: "from-amber-500 to-orange-500",
      title: "My collection of rare electronic vinyl pressings",
      content: "Just wanted to share my collection of limited edition electronic music vinyl. Including first pressings of classic Aphex Twin, Boards of Canada, and more. Happy to answer questions!",
      category: "Collection",
      likes: 234,
      comments: 67,
      timestamp: "8 hours ago",
      trending: false,
    },
    {
      id: 4,
      author: "ConcertGoer_99",
      avatar: "from-green-500 to-teal-500",
      title: "ODESZA live show review - absolutely phenomenal",
      content: "Caught ODESZA last night and wow. The production, the visuals, the energy - everything was perfect. If you have a chance to see them live, DO NOT miss it. Best concert experience of my life.",
      category: "Live Shows",
      likes: 187,
      comments: 52,
      timestamp: "12 hours ago",
      trending: true,
    },
    {
      id: 5,
      author: "PlaylistCurator",
      avatar: "from-rose-500 to-red-500",
      title: "Perfect rainy day playlist - 4 hours of chill vibes",
      content: "Spent the afternoon curating the ultimate rainy day playlist. Mix of downtempo, ambient, and lo-fi. Link in comments. Would love to hear your rainy day favorites!",
      category: "Playlists",
      likes: 156,
      comments: 41,
      timestamp: "1 day ago",
      trending: false,
    },
    {
      id: 6,
      author: "GenreExplorer",
      avatar: "from-indigo-500 to-purple-500",
      title: "The evolution of UK garage - a deep dive",
      content: "Been researching the history and evolution of UK garage from the 90s to today. The influence it's had on modern electronic music is fascinating. Anyone else into garage?",
      category: "Discussion",
      likes: 89,
      comments: 28,
      timestamp: "1 day ago",
      trending: false,
    },
  ];

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Community Forum</h1>
          <p className="text-muted-foreground">Connect with music enthusiasts from around the world</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search discussions..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-card border border-border focus:border-primary/50 outline-none transition-colors"
              />
            </div>

            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${post.avatar} flex items-center justify-center text-white font-semibold flex-shrink-0`}>
                      {post.author[0]}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="font-medium">{post.author}</span>
                        <span className="text-muted-foreground">·</span>
                        <span className="text-sm text-muted-foreground">{post.timestamp}</span>
                        {post.trending && (
                          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs">
                            <TrendingUp className="w-3 h-3" />
                            Trending
                          </div>
                        )}
                      </div>

                      <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                      <p className="text-muted-foreground mb-4">{post.content}</p>

                      <div className="flex items-center gap-4">
                        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm">
                          {post.category}
                        </div>

                        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                          <Heart className="w-5 h-5" />
                          <span>{post.likes}</span>
                        </button>

                        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                          <MessageCircle className="w-5 h-5" />
                          <span>{post.comments}</span>
                        </button>

                        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors ml-auto">
                          <Share2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <button className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--wave-gradient-1)] to-[var(--wave-gradient-2)] text-white font-medium hover:shadow-lg transition-shadow">
                <MessageSquare className="w-5 h-5 inline-block mr-2" />
                New Post
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h2 className="font-semibold">Trending Topics</h2>
              </div>
              <div className="space-y-3">
                {trendingTopics.map((topic) => (
                  <div
                    key={topic.tag}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-accent transition-colors cursor-pointer"
                  >
                    <span className="font-medium">{topic.tag}</span>
                    <span className="text-sm text-muted-foreground">{topic.count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
              <h3 className="font-semibold mb-2">Community Guidelines</h3>
              <p className="text-sm text-muted-foreground">
                Be respectful, share your passion for music, and help others discover new sounds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
