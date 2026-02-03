import React from 'react';
import { ServerIcon, GlobeAltIcon, CpuChipIcon } from '@heroicons/react/24/outline';

const TechnicalOverview = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
                        Understanding Xtream Codes Architecture
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        A deep dive into the standardized API protocol that powers modern IPTV content delivery.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center">
                                <ServerIcon className="w-6 h-6 text-indigo-600 mr-2" />
                                The API Authentication Handshake
                            </h3>
                            <p className="text-slate-700 leading-relaxed">
                                The Xtream Codes protocol utilizes a <a href="https://restfulapi.net/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500 underline">RESTful API structure</a> to manage user sessions. When you input your credentials into a client, a <code>POST</code> request is sent to the provider's middleware (often typically on port 80 or 8080). The server validates the `username` and `password` against its database. Upon success, it returns a JSON object containing the user's profile, including `active_cons`, `created_at`, `max_connections`, and `exp_date`. This handshake is crucial for authorizing the subsequent stream delivery.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center">
                                <CpuChipIcon className="w-6 h-6 text-purple-600 mr-2" />
                                M3U Playlist Parsing & HLS Streaming
                            </h3>
                            <p className="text-slate-700 leading-relaxed">
                                Once authenticated, the client requests the channel list via an API endpoint (e.g., <code>get_live_categories</code>). The middleware generates a dynamic M3U playlist. Modern IPTV typically uses <a href="https://developer.apple.com/streaming/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-500 underline">HTTP Live Streaming (HLS)</a> or MPEG-DASH. The stream is chunked into small transport stream (<code>.ts</code>) files, referenced by an <code>.m3u8</code> manifest. This allows for adaptive bitrate streaming, where the client can switch between quality levels (SD, HD, 4K) based on current network bandwidth, reducing buffering.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center">
                                <GlobeAltIcon className="w-6 h-6 text-teal-600 mr-2" />
                                Stalker Middleware (MAC-Based Access)
                            </h3>
                            <p className="text-slate-700 leading-relaxed">
                                Unlike the API-based Xtream protocol, Stalker Middleware (legacy Ministra) relies on hardware address authentication. The client device (STB/MAG Box) sends its MAC address (e.g., <code>00:1A:79:...</code>) in the HTTP header Authorization field. The portal verifies if this physical address is whitelisted. This creates a more rigid but secure coupling between the subscription and the physical hardware, often preferred for dedicated set-top box environments.
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-2xl p-6 shadow-2xl overflow-hidden font-mono text-sm text-gray-300 border border-slate-700">
                        <div className="flex space-x-2 mb-4 border-b border-slate-700 pb-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="ml-2 text-xs text-slate-500">JSON Response Example</span>
                        </div>
                        <pre className="overflow-x-auto">
                            {`{
  "user_info": {
    "username": "user123",
    "password": "encrypted_hash",
    "message": "Authentication Success",
    "auth": 1,
    "status": "Active",
    "exp_date": "1735689600",
    "is_trial": "0",
    "active_cons": "0",
    "created_at": "1672531200",
    "max_connections": "2",
    "allowed_output_formats": ["m3u8", "ts", "rtmp"]
  },
  "server_info": {
    "url": "http://line.provider.com",
    "port": "80",
    "https_port": "443",
    "server_protocol": "http",
    "rtmp_port": "8880",
    "timezone": "Europe/London",
    "timestamp_now": 1704067200,
    "time_now": "2024-01-01 00:00:00"
  }
}`}
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnicalOverview;
