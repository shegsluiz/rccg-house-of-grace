// src/pages/Sermons.tsx
// Pulls live videos from RCCG House of Grace YouTube channel via YouTube Data API v3
// Brand: bg-black, Inter + Space Grotesk, green-emerald gradient accents, glassmorphism cards
//
// SETUP REQUIRED:
// 1. Go to https://console.cloud.google.com
// 2. Create a project → Enable "YouTube Data API v3"
// 3. Create an API Key → copy it
// 4. Add to your .env file:  VITE_YOUTUBE_API_KEY=your_api_key_here
// 5. The channel ID is already set below.

import { useEffect, useState } from "react";

const CHANNEL_ID = "UCV_ngO2hpet078gqzKptM9g";
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY as string;
const MAX_RESULTS = 20;

type VideoItem = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  isLive?: boolean;
};

type FilterType = "all" | "live" | "uploads";

// ── Helpers ────────────────────────────────────────────────────────────────────
function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} week${Math.floor(days / 7) > 1 ? "s" : ""} ago`;
  if (days < 365) return `${Math.floor(days / 30)} month${Math.floor(days / 30) > 1 ? "s" : ""} ago`;
  return `${Math.floor(days / 365)} year${Math.floor(days / 365) > 1 ? "s" : ""} ago`;
}

// ── API fetch ─────────────────────────────────────────────────────────────────
async function fetchVideos(): Promise<VideoItem[]> {
  // Step 1: get uploads playlist ID from channel
  const channelRes = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
  );
  const channelData = await channelRes.json();
  const uploadsPlaylistId =
    channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

  if (!uploadsPlaylistId) throw new Error("Could not find uploads playlist.");

  // Step 2: get videos from uploads playlist
  const playlistRes = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${MAX_RESULTS}&key=${API_KEY}`
  );
  const playlistData = await playlistRes.json();

  return (playlistData.items || []).map((item: any) => ({
    id: item.snippet.resourceId.videoId,
    title: item.snippet.title,
    description: item.snippet.description?.slice(0, 120) + "...",
    thumbnail:
      item.snippet.thumbnails?.maxres?.url ||
      item.snippet.thumbnails?.high?.url ||
      item.snippet.thumbnails?.medium?.url,
    publishedAt: item.snippet.publishedAt,
    isLive: item.snippet.title?.toLowerCase().includes("live") ||
            item.snippet.title?.toLowerCase().includes("stream") ||
            item.snippet.title?.toLowerCase().includes("service"),
  }));
}

// ── Components ────────────────────────────────────────────────────────────────
function VideoCard({ video, featured = false }: { video: VideoItem; featured?: boolean }) {
  const [playing, setPlaying] = useState(false);

  if (featured) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.07] transition mb-16">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative aspect-video cursor-pointer group" onClick={() => setPlaying(true)}>
            {playing ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition">
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    ▶
                  </div>
                </div>
                {video.isLive && (
                  <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    • Stream
                  </span>
                )}
              </>
            )}
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-green-400">
              Latest Upload · {timeAgo(video.publishedAt)}
            </span>
            <h2
              className="text-2xl md:text-3xl font-bold leading-snug"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {video.title}
            </h2>
            <div className="w-10 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
            <p className="text-zinc-400 text-sm leading-relaxed">{video.description}</p>
            <p className="text-zinc-600 text-xs">{formatDate(video.publishedAt)}</p>
            <div className="flex gap-3 mt-2 flex-wrap">
              <button
                onClick={() => setPlaying(true)}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold hover:opacity-90 transition"
              >
                Watch Now →
              </button>
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full border border-white/10 text-sm text-white hover:bg-white/10 transition"
              >
                Open on YouTube ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition flex flex-col group">
      <div
        className="relative aspect-video cursor-pointer"
        onClick={() => setPlaying(true)}
      >
        {playing ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-lg">
                ▶
              </div>
            </div>
            {video.isLive && (
              <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                • Stream
              </span>
            )}
          </>
        )}
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <p className="text-xs text-zinc-500 uppercase tracking-widest">{timeAgo(video.publishedAt)}</p>
        <h3
          className="font-bold text-sm leading-snug line-clamp-2 flex-1"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {video.title}
        </h3>
        <a
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noreferrer"
          className="text-green-400 text-xs hover:text-emerald-400 transition mt-1"
        >
          Watch on YouTube ↗
        </a>
      </div>
    </div>
  );
}

// ── Skeleton loader ───────────────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden animate-pulse">
      <div className="aspect-video bg-white/5" />
      <div className="p-5 flex flex-col gap-3">
        <div className="h-2 bg-white/5 rounded w-1/3" />
        <div className="h-3 bg-white/5 rounded w-full" />
        <div className="h-3 bg-white/5 rounded w-2/3" />
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function Sermons() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchVideos()
      .then(setVideos)
      .catch(() => setError("Could not load videos. Please check your YouTube API key in .env."))
      .finally(() => setLoading(false));
  }, []);

  const filtered = videos
    .filter((v) => {
      if (filter === "live") return v.isLive;
      if (filter === "uploads") return !v.isLive;
      return true;
    })
    .filter((v) =>
      search.trim() === "" ? true : v.title.toLowerCase().includes(search.toLowerCase())
    );

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* ── Hero ── */}
      <section className="relative py-32 px-6 md:px-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 via-black to-black pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-green-400 mb-4">
            Watch & Be Blessed
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Sermons &{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Messages
            </span>
          </h1>
          <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mx-auto mb-6" />
          <p className="text-zinc-400 text-lg leading-relaxed">
            Catch up on our latest services, sermons, and live streams — all in
            one place. Every message is available for you to watch, re-watch,
            and share.
          </p>
          <a
            href="https://www.youtube.com/@rccghouseofgrace5858"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8 px-7 py-3 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-semibold hover:opacity-90 transition"
          >
            Subscribe on YouTube →
          </a>
        </div>
      </section>

      {/* ── Filters & Search ── */}
      <section className="px-6 md:px-20 pb-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Filter pills */}
          <div className="flex gap-2 flex-wrap">
            {(["all", "live", "uploads"] as FilterType[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition border ${
                  filter === f
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 border-transparent text-white"
                    : "border-white/10 text-zinc-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {f === "all" ? "All Videos" : f === "live" ? "🔴 Streams" : "Uploads"}
              </button>
            ))}
          </div>
          {/* Search */}
          <input
            type="text"
            placeholder="Search messages..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-green-500 transition w-full sm:w-64"
          />
        </div>
      </section>

      {/* ── Video Gallery ── */}
      <section className="px-6 md:px-20 pb-28">
        <div className="max-w-6xl mx-auto">

          {/* Error state */}
          {error && (
            <div className="bg-white/5 border border-red-500/20 rounded-3xl p-8 text-center mb-10">
              <p className="text-red-400 text-sm mb-2 font-semibold">⚠️ Could not load videos</p>
              <p className="text-zinc-500 text-sm">{error}</p>
              <p className="text-zinc-600 text-xs mt-3">
                Make sure <code className="text-green-400">VITE_YOUTUBE_API_KEY</code> is set in your <code className="text-green-400">.env</code> file and the YouTube Data API v3 is enabled.
              </p>
            </div>
          )}

          {/* Loading skeletons */}
          {loading && (
            <div className="grid md:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
            </div>
          )}

          {/* Videos */}
          {!loading && !error && filtered.length === 0 && (
            <div className="text-center py-20 text-zinc-600">
              <p className="text-4xl mb-4">🎬</p>
              <p>No videos found{search ? ` for "${search}"` : ""}.</p>
            </div>
          )}

          {!loading && !error && featured && (
            <>
              {/* Featured / latest */}
              <VideoCard video={featured} featured />

              {/* Rest of the grid */}
              {rest.length > 0 && (
                <>
                  <div className="flex items-center gap-4 mb-8">
                    <p className="text-sm font-bold uppercase tracking-widest text-green-400">
                      More Messages
                    </p>
                    <div className="flex-1 h-px bg-white/5" />
                    <span className="text-zinc-600 text-xs">{rest.length} videos</span>
                  </div>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {rest.map((video) => (
                      <VideoCard key={video.id} video={video} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}

          {/* Subscribe CTA */}
          {!loading && !error && (
            <div className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-10 text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-green-400 mb-3">
                Never Miss A Message
              </p>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Subscribe to our YouTube channel
              </h3>
              <p className="text-zinc-400 text-sm mb-6 max-w-md mx-auto leading-relaxed">
                Get notified the moment we go live or upload a new message.
                Subscribe and turn on notifications so you never miss a word
                from God.
              </p>
              <a
                href="https://www.youtube.com/@rccghouseofgrace5858"
                target="_blank"
                rel="noreferrer"
                className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-semibold hover:opacity-90 transition"
              >
                Subscribe on YouTube →
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
