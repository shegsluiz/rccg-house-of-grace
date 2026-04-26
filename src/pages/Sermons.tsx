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

import React, { useEffect, useState } from "react";
import { OptimizedImage } from "../components/OptimizedImage";

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
interface VideoCardProps {
  video: VideoItem;
  featured?: boolean;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, featured = false }) => {
  const [playing, setPlaying] = useState(false);

  if (featured) {
    return (
      <div className="hog-card overflow-hidden mb-16">
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
                <OptimizedImage
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform text-white">
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
            <span className="hog-eyebrow">
              Latest Upload · {timeAgo(video.publishedAt)}
            </span>
            <h2 className="hog-heading text-2xl md:text-3xl">
              {video.title}
            </h2>
            <div className="hog-rule" />
            <p className="hog-body text-sm">{video.description}</p>
            <p className="text-hog-text-ghost text-xs font-medium">{formatDate(video.publishedAt)}</p>
            <div className="flex gap-3 mt-2 flex-wrap">
              <button
                onClick={() => setPlaying(true)}
                className="hog-btn-primary py-2.5 px-6 text-sm"
              >
                Watch Now →
              </button>
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noreferrer"
                className="hog-btn-outline-dark py-2.5 px-6 text-sm"
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
    <div className="hog-card overflow-hidden flex flex-col group">
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
            <OptimizedImage
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-lg text-white">
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
        <p className="text-xs text-hog-text-ghost uppercase tracking-widest font-bold">{timeAgo(video.publishedAt)}</p>
        <h3 className="font-bold text-sm leading-snug line-clamp-2 flex-1 text-hog-text-dark font-display">
          {video.title}
        </h3>
        <a
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noreferrer"
          className="text-hog-green-600 text-xs hover:text-hog-green-700 transition mt-1 font-bold"
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
    <div className="hog-card overflow-hidden animate-pulse">
      <div className="aspect-video bg-hog-green-100/10" />
      <div className="p-5 flex flex-col gap-3">
        <div className="h-2 bg-hog-green-100/10 rounded w-1/3" />
        <div className="h-3 bg-hog-green-100/10 rounded w-full" />
        <div className="h-3 bg-hog-green-100/10 rounded w-2/3" />
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
    <div className="bg-hog-black text-hog-text-light min-h-screen font-sans selection:bg-hog-green-100">

      {/* ── Hero ── */}
      <section className="hog-section-black relative pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-hog-green-800/10 via-hog-black/60 to-transparent pointer-events-none" />
        <div className="relative z-10 container-wide text-center">
          <p className="hog-eyebrow mb-6 inline-block bg-hog-black-card px-6 py-2 rounded-full border border-hog-black-border shadow-lg">
            Watch & Be Blessed
          </p>
          <h1 className="hog-heading text-4xl sm:text-6xl md:text-7xl mb-6">
            Sermons &{" "}
            <span className="text-hog-green-400">
              Messages
            </span>
          </h1>
          <div className="hog-rule mx-auto mb-6" />
          <p className="hog-body text-lg max-w-2xl mx-auto">
            Catch up on our latest services, sermons, and live streams — all in
            one place. Every message is available for you to watch, re-watch,
            and share.
          </p>
          <a
            href="https://www.youtube.com/@rccghouseofgrace5858"
            target="_blank"
            rel="noreferrer"
            className="hog-btn-primary mt-8 py-3 px-8 text-sm"
          >
            Subscribe on YouTube →
          </a>
        </div>
      </section>

      {/* ── Filters & Search ── */}
      <section className="hog-section-cream py-10">
        <div className="container-wide flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Filter pills */}
          <div className="flex gap-2 flex-wrap">
            {(["all", "live", "uploads"] as FilterType[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition border ${
                  filter === f
                    ? "bg-hog-green-500 border-transparent text-white shadow-lg"
                    : "border-hog-green-100 text-hog-text-dim hover:border-hog-green-300 hover:text-hog-text-dark bg-white"
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
            className="hog-input-dark w-full sm:w-64"
          />
        </div>
      </section>

      {/* ── Video Gallery ── */}
      <section className="hog-section-cream section pt-0 pb-28">
        <div className="container-wide">

          {/* Error state */}
          {error && (
            <div className="hog-card bg-red-50/50 border-red-200 p-8 text-center mb-10">
              <p className="text-red-600 text-sm mb-2 font-bold">⚠️ Could not load videos</p>
              <p className="text-hog-text-dim text-sm">{error}</p>
              <p className="text-hog-text-ghost text-xs mt-3">
                Make sure <code className="text-hog-green-600 font-bold">VITE_YOUTUBE_API_KEY</code> is set in your <code className="text-hog-green-600 font-bold">.env</code> file.
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
            <div className="text-center py-20 text-warm-400">
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
                    <p className="hog-eyebrow text-hog-green-600">
                      More Messages
                    </p>
                    <div className="flex-1 h-px bg-hog-green-100" />
                    <span className="text-hog-text-ghost text-xs font-bold">{rest.length} videos</span>
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
            <div className="mt-16 hog-card bg-hog-black p-10 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-hog-green-500/5 group-hover:bg-hog-green-500/10 transition-colors" />
              <div className="relative z-10">
                <p className="hog-eyebrow text-hog-green-400 mb-3">
                  Never Miss A Message
                </p>
                <h3 className="hog-heading text-2xl mb-3 text-white">
                  Subscribe to our YouTube channel
                </h3>
                <p className="hog-body text-hog-text-dim text-sm mb-6 max-w-md mx-auto">
                  Get notified the moment we go live or upload a new message.
                  Subscribe and turn on notifications so you never miss a word
                  from God.
                </p>
                <a
                  href="https://www.youtube.com/@rccghouseofgrace5858"
                  target="_blank"
                  rel="noreferrer"
                  className="hog-btn-primary py-3 px-8 text-sm"
                >
                  Subscribe on YouTube →
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
