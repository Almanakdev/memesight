import React from 'react';
import {
  Activity,
  ArrowRight,
  Bell,
  Bot,
  Brain,
  CircleAlert,
  Crosshair,
  Gauge,
  GitBranch,
  LayoutDashboard,
  LineChart,
  Orbit,
  Radar,
  Search,
  ShieldAlert,
  Sparkles,
  Wallet,
} from 'lucide-react';

const agents = [
  {
    name: 'Scout',
    icon: Search,
    tone: 'cyan',
    description: 'Scans new launches, early momentum, holder velocity, and graduation signals in real time.',
  },
  {
    name: 'Narrative',
    icon: Brain,
    tone: 'violet',
    description: 'Performs narrative forensics to decode meme format, attention vectors, and cluster lineage.',
  },
  {
    name: 'Risk',
    icon: ShieldAlert,
    tone: 'pink',
    description: 'Runs wallet graph analysis to flag bundling, insider overlap, sybil behavior, and manipulation.',
  },
  {
    name: 'Strategy',
    icon: Crosshair,
    tone: 'amber',
    description: 'Synthesizes all signals into briefings, watchlists, conviction scores, and trade setup logic.',
  },
];

const signals = [
  ['Narrative Heat', '91 / 100'],
  ['Graduation Probability', '74%'],
  ['Wallet Manipulation Risk', 'Medium'],
  ['Cluster Match', 'Frog Finance v2'],
];

const launches = [
  { ticker: '$FROGOD', chain: 'pump.fun', score: 82, narrative: 'absurd mascot', risk: 'Low', momentum: '+148%' },
  { ticker: '$BUBA', chain: 'pump.fun', score: 76, narrative: 'cute chaos', risk: 'Medium', momentum: '+89%' },
  { ticker: '$SIGMEME', chain: 'pump.fun', score: 68, narrative: 'AI cult', risk: 'High', momentum: '+52%' },
  { ticker: '$MOGX', chain: 'pump.fun', score: 80, narrative: 'remix meta', risk: 'Low', momentum: '+121%' },
];

const briefings = [
  'Scout detected anomalous launch acceleration in the first 11 minutes with above-baseline holder spread.',
  'Narrative mapped this token into a high-conversion “cute + absurd authority” cluster with strong repost potential.',
  'Risk found moderate wallet overlap with two prior launches but low concentration among top 10 non-dev holders.',
  'Strategy upgraded to Watchlist A with a 74% graduation probability and a favorable narrative-to-risk ratio.',
];

const features = [
  {
    title: 'Token Genome Fingerprinting',
    text: 'A 12-dimension radar profile that scores each launch across meme structure, virality triggers, wallet health, and market behavior.',
    icon: Radar,
  },
  {
    title: 'Narrative Cluster Detection',
    text: 'Groups related launches into cultural families so you can see what kind of story is spreading before it becomes obvious.',
    icon: Orbit,
  },
  {
    title: 'Graph-Based Wallet Forensics',
    text: 'Maps suspicious wallet relationships, insider loops, bundlers, and launch-time coordination patterns.',
    icon: GitBranch,
  },
  {
    title: 'Actionable Intelligence Briefings',
    text: 'Turns raw signal flow into concise operator-grade briefings built for fast decision making.',
    icon: Sparkles,
  },
];

function AgentCard({ agent }) {
  const Icon = agent.icon;
  return (
    <div className={`agent-card tone-${agent.tone}`}>
      <div className="agent-icon-wrap">
        <Icon size={22} />
      </div>
      <h3>{agent.name}</h3>
      <p>{agent.description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="page-shell">
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="grid-lines" />

      <header className="topbar">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div>
            <div className="brand-title">MemeSight</div>
            <div className="brand-sub">Multi-agent meme intelligence</div>
          </div>
        </div>

        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#agents">Agents</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#briefings">Briefings</a>
        </nav>

        <div className="topbar-actions">
          <button className="button button-ghost">Docs</button>
          <button className="button button-primary">Launch App</button>
        </div>
      </header>

      <main>
        <section className="hero section">
          <div className="hero-copy">
            <div className="eyebrow">Powered by DGrid AI Gateway</div>
            <h1>Decode the story before the market prices it in.</h1>
            <p className="hero-text">
              MemeSight AI is a multi-agent intelligence platform for the pump.fun ecosystem on Solana.
              It tracks new token launches, narrative spread, wallet manipulation, and graduation probability
              through one continuous AI pipeline.
            </p>

            <div className="hero-actions">
              <button className="button button-primary">Open Dashboard</button>
              <button className="button button-ghost">
                View Demo <ArrowRight size={16} />
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat-card">
                <span>4 Autonomous Agents</span>
                <strong>Scout · Narrative · Risk · Strategy</strong>
              </div>
              <div className="stat-card">
                <span>Core Output</span>
                <strong>Actionable intelligence briefings</strong>
              </div>
            </div>
          </div>

          <div className="hero-panel" id="dashboard">
            <div className="screen-window">
              <div className="window-top">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="window-title">MemeSight Live Console</div>
                <div className="window-badge">Solana · pump.fun</div>
              </div>

              <div className="dashboard-grid">
                <div className="panel panel-hero-card">
                  <div className="panel-label">Active Briefing</div>
                  <div className="token-header">
                    <div>
                      <h3>$FROGOD</h3>
                      <p>Early narrative breakout detected</p>
                    </div>
                    <div className="score-pill">Conviction 82</div>
                  </div>

                  <div className="mini-radar">
                    <div className="radar-core" />
                    <div className="radar-ring ring-1" />
                    <div className="radar-ring ring-2" />
                    <div className="radar-ring ring-3" />
                    <div className="radar-blip blip-a" />
                    <div className="radar-blip blip-b" />
                    <div className="radar-blip blip-c" />
                  </div>

                  <div className="signal-list">
                    {signals.map(([label, value]) => (
                      <div key={label} className="signal-row">
                        <span>{label}</span>
                        <strong>{value}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="panel panel-list">
                  <div className="panel-header">
                    <span>Live Launch Feed</span>
                    <LayoutDashboard size={16} />
                  </div>
                  {launches.map((launch) => (
                    <div key={launch.ticker} className="launch-row">
                      <div>
                        <strong>{launch.ticker}</strong>
                        <span>{launch.chain}</span>
                      </div>
                      <div>
                        <small>Narrative</small>
                        <strong>{launch.narrative}</strong>
                      </div>
                      <div>
                        <small>Risk</small>
                        <strong>{launch.risk}</strong>
                      </div>
                      <div>
                        <small>Momentum</small>
                        <strong>{launch.momentum}</strong>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="panel panel-chart">
                  <div className="panel-header">
                    <span>Genome + Momentum</span>
                    <LineChart size={16} />
                  </div>
                  <div className="chart-area">
                    <div className="chart-bars">
                      {[36, 58, 48, 77, 55, 89, 71, 96, 68, 84, 73, 90].map((h, i) => (
                        <span key={i} style={{ height: `${h}%` }} />
                      ))}
                    </div>
                    <div className="chart-line" />
                  </div>
                </div>

                <div className="panel panel-risk">
                  <div className="panel-header">
                    <span>Risk Alerts</span>
                    <Bell size={16} />
                  </div>
                  <div className="alert-list">
                    <div className="alert-row danger">
                      <CircleAlert size={14} />
                      Bundled wallet cluster detected at launch
                    </div>
                    <div className="alert-row warn">
                      <Activity size={14} />
                      Two related wallets funded within 90 seconds
                    </div>
                    <div className="alert-row ok">
                      <Gauge size={14} />
                      Holder spread improving after minute 14
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="agents">
          <div className="section-heading">
            <div className="eyebrow">Autonomous pipeline</div>
            <h2>Four specialized agents. One intelligence loop.</h2>
            <p>
              MemeSight does not stop at charts. It transforms raw launch data into a narrative-aware,
              risk-aware, strategy-grade operating view for Solana meme markets.
            </p>
          </div>

          <div className="agent-grid">
            {agents.map((agent) => (
              <AgentCard key={agent.name} agent={agent} />
            ))}
          </div>
        </section>

        <section className="section feature-section" id="features">
          <div className="section-heading narrow">
            <div className="eyebrow">Platform features</div>
            <h2>Beyond charts. We decode meme formation.</h2>
          </div>

          <div className="feature-grid">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="feature-card">
                  <div className="feature-icon">
                    <Icon size={18} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="section intelligence-section" id="briefings">
          <div className="briefing-card">
            <div className="briefing-copy">
              <div className="eyebrow">Operator output</div>
              <h2>AI briefings built for fast decision making.</h2>
              <p>
                Each launch flows through Scout, Narrative, Risk, and Strategy. The result is a compressed
                intelligence layer you can act on in seconds.
              </p>
              <div className="briefing-badges">
                <span><Bot size={14} /> Multi-agent synthesis</span>
                <span><Wallet size={14} /> Wallet graph aware</span>
                <span><Sparkles size={14} /> Narrative-native</span>
              </div>
            </div>

            <div className="briefing-feed">
              {briefings.map((item, index) => (
                <div className="briefing-row" key={item}>
                  <div className="briefing-index">0{index + 1}</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta-section">
          <div className="cta-card">
            <div>
              <div className="eyebrow">Ready for launch</div>
              <h2>Use this as a GitHub starter for MemeSight.</h2>
              <p>
                This demo is structured as a clean Vite + React landing app so you can push it directly,
                customize content, and expand it into a full dashboard product.
              </p>
            </div>
            <div className="cta-actions">
              <button className="button button-primary">Deploy Frontend</button>
              <button className="button button-ghost">Edit Content</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
