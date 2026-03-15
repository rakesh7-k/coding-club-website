const STORAGE_KEY = "codeNexusState";

const defaultState = {
  user: {
    name: "Rakesh",
    handle: "rakesh123",
    avatar: "",
    guild: "DSA Guild",
    level: 8,
    xp: 1780,
    rank: 18,
    achievements: ["First Solve", "Guild Member"],
    tags: ["Graphs", "DP", "Web Dev", "C++"],
    isAdmin: false,
  },
  stats: {
    streak: 21,
    problemsThisWeek: 32,
    problemsTotal: 640,
    guildContribution: 1400,
    weeklyActivity: Array.from({ length: 28 }, () => Math.floor(Math.random() * 3)),
    lastVisit: new Date().toISOString(),
  },
  guilds: [
    { id: "dsa", name: "DSA Guild", tag: "DSA", members: 45, xp: 1240, weeklyPoints: 1200, status: "Active", challenge: "Solve 180 problems", warScore: 0 },
    { id: "ai", name: "AI Guild", tag: "AI", members: 28, xp: 980, weeklyPoints: 860, status: "New", challenge: "Deploy 2 models", warScore: 0 },
    { id: "web", name: "Web Dev Guild", tag: "WEB", members: 32, xp: 1120, weeklyPoints: 975, status: "Hot", challenge: "Build 3 full-stack apps", warScore: 0 },
    { id: "cp", name: "Competitive Programming", tag: "CP", members: 18, xp: 1310, weeklyPoints: 1420, status: "Elite", challenge: "Top 3 in weekly contest", warScore: 0 },
  ],
  leaderboard: [
    { id: "rakesh", name: "Rakesh", guild: "DSA Guild", problems: 320, streak: 25, xp: 1780, battleWins: 18 },
    { id: "arjun", name: "Arjun", guild: "AI Guild", problems: 290, streak: 18, xp: 1650, battleWins: 14 },
    { id: "priya", name: "Priya", guild: "Web Dev Guild", problems: 250, streak: 12, xp: 1490, battleWins: 11 },
    { id: "sara", name: "Sara", guild: "Competitive Programming", problems: 220, streak: 9, xp: 1380, battleWins: 9 },
    { id: "rahul", name: "Rahul", guild: "DSA Guild", problems: 198, streak: 6, xp: 1240, battleWins: 7 },
  ],
  events: [
    { id: "hackathon", title: "Hackathon Blitz 2026", type: "contest", start: "2026-03-13T09:00:00", end: "2026-03-15T18:00:00", registered: false, checkedIn: false },
    { id: "aiWorkshop", title: "Workshop: AI for Interviews", type: "workshop", start: "2026-03-18T18:00:00", end: "2026-03-18T20:00:00", registered: false, checkedIn: false },
    { id: "studyJam", title: "Weekly Study Jam", type: "meetup", start: "2026-03-14T19:00:00", end: "2026-03-14T21:00:00", registered: false, checkedIn: false },
  ],
  resources: [
    { id: "dsa-roadmap", title: "DSA Roadmap", url: "https://www.geeksforgeeks.org/data-structures/", category: "DSA", difficulty: "Beginner", tags: ["DSA", "Roadmap"], recommended: true },
    { id: "web-roadmap", title: "Web Dev Starter", url: "https://www.geeksforgeeks.org/web-development/", category: "Web", difficulty: "Beginner", tags: ["Web", "Frontend"], recommended: false },
    { id: "ml-hub", title: "ML Hub", url: "https://www.geeksforgeeks.org/machine-learning/", category: "AI", difficulty: "Intermediate", tags: ["ML", "AI"], recommended: false },
    { id: "cp-portal", title: "Competitive Programming Portal", url: "https://www.geeksforgeeks.org/competitive-programming/", category: "CP", difficulty: "Advanced", tags: ["CP", "Speed"], recommended: false },
  ],
  battle: {
    history: [],
    winRate: 0.51,
    lastOpponent: "Opponent",
    currentChallenge: null,
    challenges: [
      { id: 1, title: "Two Sum", difficulty: "Easy", description: "Find two numbers that add up to target.", timeLimit: 600 },
      { id: 2, title: "Valid Parentheses", difficulty: "Easy", description: "Check if parentheses are valid.", timeLimit: 600 },
      { id: 3, title: "Merge Two Sorted Lists", difficulty: "Easy", description: "Merge two sorted linked lists.", timeLimit: 600 },
      { id: 4, title: "Maximum Subarray", difficulty: "Medium", description: "Find contiguous subarray with max sum.", timeLimit: 900 },
      { id: 5, title: "Climbing Stairs", difficulty: "Easy", description: "Ways to climb n stairs.", timeLimit: 600 },
      { id: 6, title: "Binary Tree Level Order", difficulty: "Medium", description: "Traverse binary tree level by level.", timeLimit: 900 },
    ],
  },
  projects: [
    {
      id: 1,
      title: "DSA Visualizer",
      desc: "Interactive tool to visualize data structures and algorithms.",
      repo: "https://github.com/example/dsa-visualizer",
      tags: ["DSA", "React", "Visualization"],
      author: "Rakesh",
      date: "2026-03-10T10:00:00",
    },
  ],
  blogs: [
    {
      id: 1,
      title: "Mastering Graph Algorithms",
      content: "Graphs are everywhere in coding interviews. Here's how to approach them...",
      tags: ["DSA", "Graphs", "Interview Prep"],
      author: "Arjun",
      date: "2026-03-12T14:00:00",
      likes: 5,
    },
  ],
  doubts: [
    {
      id: 1,
      question: "How to implement Dijkstra's algorithm?",
      answer: "Use a priority queue and update distances...",
      author: "Rakesh",
      answeredBy: "Priya",
      date: "2026-03-11T16:00:00",
      votes: 3,
    },
  ],
  realm: {
    level: 1,
    resources: 45,
    nextUpgrade: "UI Animation +20%",
  },
  flow: {
    time: 0,
    boost: 0,
    frustration: 16,
    mood: "Calm",
  },
  xp: 125,
  skills: [
    { name: "Data Structures", unlocked: true },
    { name: "Web Alchemy", unlocked: false },
    { name: "AI Resonance", unlocked: false },
    { name: "System Sorcery", unlocked: false },
    { name: "Quantum Debugging", unlocked: false },
  ],
  map: {
    hubs: [
      { x: 18, y: 28, label: "Hack Lab" },
      { x: 72, y: 24, label: "Midnight Coders" },
      { x: 43, y: 66, label: "Crash Mode" },
      { x: 30, y: 78, label: "UI Den" },
      { x: 81, y: 60, label: "Algorithm Alley" },
    ],
  },
  easterUnlocked: false,
  notifications: [
    { id: 1, message: "Welcome to Code Nexus! Complete your profile to get started.", read: false, date: new Date().toISOString() },
    { id: 2, message: "Hackathon Blitz starts in 2 days. Register now!", read: false, date: new Date().toISOString() },
  ],
  settings: {
    theme: "default",
  },
  announcements: [],
};

const mergeDeep = (target, source) => {
  for (const key in source) {
    if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
      if (!target[key] || typeof target[key] !== "object") {
        target[key] = {};
      }
      mergeDeep(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
};

const loadState = async () => {
  try {
    // Check if user is authenticated
    const user = firebaseAuth.currentUser;
    if (user) {
      // Load from Firebase
      const result = await FirebaseAuth.getUserData(user.uid);
      if (result.success) {
        return mergeDeep(structuredClone(defaultState), result.data);
      }
    }
    // Fallback to localStorage or default
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(defaultState);
    const parsed = JSON.parse(raw);
    return mergeDeep(structuredClone(defaultState), parsed);
  } catch (err) {
    console.warn("Failed to load state", err);
    return structuredClone(defaultState);
  }
};

const saveState = async () => {
  try {
    const user = firebaseAuth.currentUser;
    if (user) {
      // Save to Firebase
      await FirebaseAuth.updateUserData(user.uid, state);
    } else {
      // Save to localStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  } catch (err) {
    console.warn("Failed to save state", err);
    // Fallback to localStorage
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (localErr) {
      // ignore
    }
  }
};

let state = null;

window.addEventListener("DOMContentLoaded", async () => {
  // Wait for Firebase to initialize
  await new Promise(resolve => {
    const checkFirebase = () => {
      if (window.firebaseAuth) {
        resolve();
      } else {
        setTimeout(checkFirebase, 100);
      }
    };
    checkFirebase();
  });

  state = await loadState();

  // Initialize selectors after state is loaded
  window.selectors = {
    tagline: document.querySelector("#tagline .typing"),
    blinker: document.querySelector("#tagline .blinker"),
    arenaBoard: document.querySelector("#arenaBoard"),
    matchStatus: document.querySelector("#matchStatus"),
    streakDisplay: document.querySelector("#streakDisplay"),
    arenaLog: document.querySelector("#arenaLog"),
    realmLevel: document.querySelector("#realmLevel"),
    realmResources: document.querySelector("#realmResources"),
    nextUpgrade: document.querySelector("#nextUpgrade"),
    mentorHint: document.querySelector("#mentorHint"),
    flowTime: document.querySelector("#flowTime"),
    focusBoost: document.querySelector("#focusBoost"),
    frustrationFill: document.querySelector("#frustrationFill"),
    moodStatus: document.querySelector("#moodStatus"),
    xpBalance: document.querySelector("#xpBalance"),
    skillBadges: document.querySelector("#skillBadges"),
    skillTree: document.querySelector("#skillTree"),
    campusMap: document.querySelector("#campusMap"),
    hotspotCount: document.querySelector("#hotspotCount"),
  };

  ui.init();
  AuthUI.init();
});

const ui = {
  init: () => {
    const selectors = window.selectors;
    ui.bindEvents();
    ui.initLogoEasterEgg();
    ui.initScrollTriggers();
    ui.applyTheme();
    ui.syncState();

    const page = document.body?.dataset.page?.toLowerCase() || "";

    if (selectors.arenaBoard) ui.buildArenaBoard();
    if (selectors.skillBadges) ui.populateSkillBadges();
    if (selectors.skillTree) ui.buildSkillTree();
    if (selectors.campusMap) ui.renderMap();
    if (selectors.realmLevel) ui.updateRealm();
    if (selectors.flowTime) ui.updateFlow();
    if (selectors.tagline) ui.initHeroAnimation();

    // Page-specific init
    if (page === "home") ui.initHome();
    if (page === "dashboard") ui.initDashboard();
    if (page === "leaderboard") ui.initLeaderboard();
    if (page === "profile") ui.initProfile();
    if (page === "events") ui.initEvents();
    if (page === "battle") ui.initBattle();

    ui.scheduleNotifications();
    ui.startLiveUpdates();
  },
  initHome: () => {
    // Home page can show subtle particle background or welcome animation.
    // (No specific elements in the minimalist home view, but this keeps the pattern.)
  },
  initDashboard: () => {
    const input = document.getElementById("mentorInput");
    const output = document.getElementById("mentorOutput");
    const button = document.getElementById("mentorBtn");

    if (button && input && output) {
      button.addEventListener("click", () => {
        const topic = input.value.trim();
        if (!topic) {
          ui.toast("Type a topic like 'Graphs' to get started.");
          return;
        }
        ui.generateMentorPlan(topic, output);
      });
    }

    const addProjectBtn = document.getElementById("addProjectBtn");
    if (addProjectBtn) {
      addProjectBtn.addEventListener("click", ui.showAddProjectModal);
    }

    const addBlogBtn = document.getElementById("addBlogBtn");
    if (addBlogBtn) {
      addBlogBtn.addEventListener("click", ui.showAddBlogModal);
    }

    const askDoubtBtn = document.getElementById("askDoubtBtn");
    if (askDoubtBtn) {
      askDoubtBtn.addEventListener("click", ui.showAskDoubtModal);
    }

    const progressReportBtn = document.getElementById("progressReportBtn");
    if (progressReportBtn) {
      progressReportBtn.addEventListener("click", ui.generateProgressReport);
    }

    ui.updateDashboard();
  },
  initLeaderboard: () => {
    const card = document.querySelector(".card");
    if (!card) return;

    if (!document.getElementById("leaderboardFilter")) {
      const headerRow = document.createElement("div");
      headerRow.className = "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3";
      headerRow.innerHTML = `
        <div class=\"flex items-center gap-2\">
          <span class=\"text-sm text-text-muted\">View:</span>
          <select id=\"leaderboardFilter\" class=\"input\" style=\"max-width: 200px;\">
            <option value=\"overall\">Overall XP</option>
            <option value=\"weekly\">This Week</option>
            <option value=\"guild\">Guild Score</option>
            <option value=\"battle\">Battle Wins</option>
          </select>
        </div>
      `;
      card.insertBefore(headerRow, card.querySelector(".mt-6"));
    }

    const select = document.getElementById("leaderboardFilter");
    if (select) {
      select.onchange = () => ui.updateLeaderboard(select.value);
      ui.updateLeaderboard(select.value);
    } else {
      ui.updateLeaderboard();
    }
  },
  initProfile: () => {
    const usernameInput = document.getElementById("gfgUsername");
    const viewButton = document.getElementById("gfgButton");

    if (!usernameInput || !viewButton) return;

    viewButton.addEventListener("click", () => {
      const username = usernameInput.value.trim();
      if (!username) {
        ui.toast("Enter your GfG username first.");
        return;
      }
      state.user.handle = username;
      saveState();
      const url = `https://www.geeksforgeeks.org/user/${encodeURIComponent(username)}`;
      window.open(url, "_blank");
    });

    ui.updateProfile();
  },
  initEvents: () => {
    ui.updateEvents();

    // QR Code generation
    const generateBtn = document.getElementById("generateQR");
    const qrContainer = document.getElementById("qrCode");

    if (generateBtn && qrContainer) {
      generateBtn.addEventListener("click", () => {
        const checkInData = {
          user: state.user.name,
          event: "Hackathon Blitz 2026",
          timestamp: new Date().toISOString(),
          code: Math.random().toString(36).substr(2, 9)
        };

        qrContainer.innerHTML = "";
        QRCode.toCanvas(qrContainer, JSON.stringify(checkInData), {
          width: 150,
          height: 150,
          colorDark: "#00C853",
          colorLight: "#0f172a"
        }, (error) => {
          if (error) console.error(error);
          else {
            ui.toast("QR Code generated! Show this at check-in.");
            ui.addNotification("Check-in QR code ready for Hackathon Blitz!");
          }
        });
      });
    }
  },
  initBattle: () => {
    const challengeSelect = document.getElementById("challengeSelect");
    const challengeDesc = document.getElementById("challengeDesc");
    const currentProblem = document.getElementById("currentProblem");
    const problemDesc = document.getElementById("problemDesc");
    const startBtn = document.getElementById("startBattleBtn");

    // Populate challenges
    if (challengeSelect) {
      state.battle.challenges.forEach(challenge => {
        const option = document.createElement("option");
        option.value = challenge.id;
        option.textContent = `${challenge.title} (${challenge.difficulty})`;
        challengeSelect.appendChild(option);
      });

      challengeSelect.addEventListener("change", (e) => {
        const selectedId = parseInt(e.target.value);
        const challenge = state.battle.challenges.find(c => c.id === selectedId);
        if (challenge) {
          state.battle.currentChallenge = challenge;
          challengeDesc.textContent = challenge.description;
          currentProblem.textContent = challenge.title;
          problemDesc.textContent = challenge.description;
          startBtn.disabled = false;
        } else {
          state.battle.currentChallenge = null;
          challengeDesc.textContent = "";
          currentProblem.textContent = "Select a challenge above";
          problemDesc.textContent = "Choose a challenge to begin.";
          startBtn.disabled = true;
        }
      });
    }

    const progressA = document.getElementById("progressA");
    const progressB = document.getElementById("progressB");
    const progressAText = document.getElementById("progressAText");
    const progressBText = document.getElementById("progressBText");
    const timer = document.getElementById("battleTimer");

    const updateProgress = (a, b) => {
      if (progressA) progressA.style.width = `${a}%`;
      if (progressB) progressB.style.width = `${b}%`;
      if (progressAText) progressAText.textContent = `${a}%`;
      if (progressBText) progressBText.textContent = `${b}%`;
    };

    let battleSeconds = 360;
    const tick = () => {
      battleSeconds = Math.max(0, battleSeconds - 1);
      if (timer) timer.textContent = `${String(Math.floor(battleSeconds / 60)).padStart(2, "0")}:${String(battleSeconds % 60).padStart(2, "0")}`;
      if (battleSeconds <= 0) return;
      setTimeout(tick, 1000);
    };

    if (startBtn) {
      startBtn.addEventListener("click", () => {
        if (!state.battle.currentChallenge) {
          ui.toast("Select a challenge first!");
          return;
        }
        battleSeconds = state.battle.currentChallenge.timeLimit;
        tick();
        ui.toast("Battle started! Solve fast to win.");
        updateProgress(0, 0);
        ui.addNotification("Battle started! Good luck!");
      });
    }

    if (simulateBtn) {
      simulateBtn.addEventListener("click", () => {
        if (!state.battle.currentChallenge) {
          ui.toast("Select a challenge first!");
          return;
        }
        const a = Math.min(100, Math.floor(Math.random() * 80 + 20));
        const b = Math.min(100, Math.floor(Math.random() * 80 + 20));
        updateProgress(a, b);
        const winner = a > b ? "Player A" : "Player B";
        const xpGain = winner === "Player A" ? 100 : 40;
        ui.toast(`${winner} wins the round! +${xpGain} XP`);
        ui.recordBattleOutcome(winner, xpGain, { you: a, opponent: b });
        ui.addNotification(`Battle result: ${winner} won!`);
      });
    }

    ui.updateBattle();
  },
  buildArenaBoard: () => {
    selectors.arenaBoard.innerHTML = "";
    for (let i = 1; i <= 20; i += 1) {
      const tile = document.createElement("div");
      tile.classList.add("arena-tile");
      tile.textContent = `NODE ${i}`;
      tile.dataset.index = i;
      tile.addEventListener("click", () => ui.handleTileClick(tile));
      selectors.arenaBoard.appendChild(tile);
    }
  },
  handleTileClick: (tile) => {
    if (state.matchActive) return;
    const idx = tile.dataset.index;
    ui.logArena(`You scanned node ${idx}. Preparing for battle...`);
    gsap.fromTo(
      tile,
      { scale: 1, boxShadow: "0 0 0 rgba(255,255,255,0)" },
      {
        scale: 1.08,
        boxShadow: "0 0 24px rgba(64,243,255,0.7)",
        duration: 0.38,
        yoyo: true,
        repeat: 1,
      }
    );
  },
  logArena: (text) => {
    if (!selectors.arenaLog) return;
    const item = document.createElement("div");
    item.textContent = `> ${text}`;
    selectors.arenaLog.prepend(item);
  },
  updateStreak: () => {
    selectors.streakDisplay.innerHTML = "";
    for (let i = 0; i < 3; i++) {
      const dot = document.createElement("span");
      dot.classList.add("streak-dot");
      if (i >= state.streak) dot.style.opacity = "0.25";
      selectors.streakDisplay.appendChild(dot);
    }
  },
  updateRealm: () => {
    selectors.realmLevel.textContent = state.realm.level;
    selectors.realmResources.textContent = state.realm.resources;
    selectors.nextUpgrade.textContent = state.realm.nextUpgrade;
    selectors.mentorHint.textContent = ui.pickMentorHint();
  },
  pickMentorHint: () => {
    const hints = [
      "Protobot suggests: Push an extra commit for a bonus reward.",
      "The realm thrives when you share a 1-minute code peek.",
      "Fuel your realm with a new feature seed (think: 10 lines).",
    ];
    return hints[Math.floor(Math.random() * hints.length)];
  },
  updateFlow: () => {
    selectors.flowTime.textContent = ui.formatTime(state.flow.time);
    selectors.focusBoost.textContent = `${state.flow.boost}%`;
    selectors.moodStatus.textContent = state.flow.mood;
    selectors.frustrationFill.style.width = `${state.flow.frustration}%`;
    if (state.flow.frustration > 80) {
      selectors.moodStatus.textContent = "Stressed";
      selectors.moodStatus.style.color = "rgba(255,105,150,0.9)";
    } else {
      selectors.moodStatus.style.color = "rgba(144, 255, 245, 0.9)";
    }
  },
  formatTime: (s) => {
    const mm = `${Math.floor(s / 60)}`.padStart(2, "0");
    const ss = `${s % 60}`.padStart(2, "0");
    return `${mm}:${ss}`;
  },
  populateSkillBadges: () => {
    selectors.skillBadges.innerHTML = "";
    state.skills.forEach((skill) => {
      const badge = document.createElement("div");
      badge.classList.add("skill-badge");
      if (skill.unlocked) badge.style.background = "rgba(64, 243, 255, 0.22)";
      badge.textContent = `${skill.name}${skill.unlocked ? " ✔" : ""}`;
      badge.addEventListener("click", () => ui.tryUnlockSkill(skill));
      selectors.skillBadges.appendChild(badge);
    });
  },
  tryUnlockSkill: (skill) => {
    if (skill.unlocked) return;
    if (state.xp < 50) {
      ui.toast("Not enough XP to unlock. Keep battling!");
      return;
    }
    state.xp -= 50;
    skill.unlocked = true;
    ui.updateXp();
    ui.populateSkillBadges();
    ui.animateSkillUnlock(skill.name);
  },
  updateXp: () => {
    selectors.xpBalance.textContent = `${state.xp} XP`;
  },
  animateSkillUnlock: (name) => {
    const toast = document.createElement("div");
    toast.className = "toast-message";
    toast.textContent = `Unlocked ${name}!`;
    document.body.appendChild(toast);
    gsap.fromTo(
      toast,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(toast, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            delay: 2,
            onComplete: () => toast.remove(),
          });
        },
      }
    );
  },
  buildSkillTree: () => {
    selectors.skillTree.innerHTML = "";
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("viewBox", "0 0 800 500");

    const nodes = [
      { id: "root", x: 400, y: 420, label: "Root" },
      { id: "ds", x: 240, y: 310, label: "Data Structures" },
      { id: "web", x: 560, y: 310, label: "Web Alchemy" },
      { id: "ai", x: 320, y: 180, label: "AI Resonance" },
      { id: "sys", x: 480, y: 180, label: "System Sorcery" },
    ];

    const edges = [
      ["root", "ds"],
      ["root", "web"],
      ["ds", "ai"],
      ["web", "sys"],
    ];

    edges.forEach(([a, b]) => {
      const source = nodes.find((n) => n.id === a);
      const target = nodes.find((n) => n.id === b);
      const line = document.createElementNS(svgNS, "line");
      line.setAttribute("x1", source.x);
      line.setAttribute("y1", source.y);
      line.setAttribute("x2", target.x);
      line.setAttribute("y2", target.y);
      line.setAttribute("stroke", "rgba(64,243,255,0.25)");
      line.setAttribute("stroke-width", "3");
      line.setAttribute("stroke-linecap", "round");
      svg.appendChild(line);
    });

    nodes.forEach((node) => {
      const group = document.createElementNS(svgNS, "g");
      group.setAttribute("transform", `translate(${node.x - 40}, ${node.y - 40})`);
      group.style.cursor = "pointer";

      const circle = document.createElementNS(svgNS, "circle");
      circle.setAttribute("cx", 40);
      circle.setAttribute("cy", 40);
      circle.setAttribute("r", 36);
      circle.setAttribute("fill", "rgba(255,255,255,0.06)");
      circle.setAttribute("stroke", "rgba(255,255,255,0.15)");
      circle.setAttribute("stroke-width", "2");
      circle.setAttribute("filter", "url(#glow)");
      group.appendChild(circle);

      const text = document.createElementNS(svgNS, "text");
      text.setAttribute("x", 40);
      text.setAttribute("y", 46);
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("font-size", "12");
      text.setAttribute("fill", "rgba(255,255,255,0.78)");
      text.setAttribute("font-family", "Inter, sans-serif");
      text.textContent = node.label;
      group.appendChild(text);

      group.addEventListener("mouseenter", () => {
        gsap.to(circle, { scale: 1.05, duration: 0.25 });
      });
      group.addEventListener("mouseleave", () => {
        gsap.to(circle, { scale: 1, duration: 0.25 });
      });

      svg.appendChild(group);
    });

    const defs = document.createElementNS(svgNS, "defs");
    const filter = document.createElementNS(svgNS, "filter");
    filter.setAttribute("id", "glow");
    const feGaussian = document.createElementNS(svgNS, "feGaussianBlur");
    feGaussian.setAttribute("stdDeviation", "4");
    feGaussian.setAttribute("result", "coloredBlur");
    filter.appendChild(feGaussian);
    const feMerge = document.createElementNS(svgNS, "feMerge");
    const feMergeNode1 = document.createElementNS(svgNS, "feMergeNode");
    feMergeNode1.setAttribute("in", "coloredBlur");
    const feMergeNode2 = document.createElementNS(svgNS, "feMergeNode");
    feMergeNode2.setAttribute("in", "SourceGraphic");
    feMerge.appendChild(feMergeNode1);
    feMerge.appendChild(feMergeNode2);
    filter.appendChild(feMerge);
    defs.appendChild(filter);

    svg.insertBefore(defs, svg.firstChild);
    selectors.skillTree.appendChild(svg);
  },
  renderMap: () => {
    selectors.campusMap.innerHTML = "";
    state.map.hubs.forEach((hub) => {
      const dot = document.createElement("div");
      dot.classList.add("map-node");
      dot.style.left = `${hub.x}%`;
      dot.style.top = `${hub.y}%`;
      dot.title = hub.label;
      dot.addEventListener("click", () => ui.toast(`Jumped into ${hub.label}`));
      selectors.campusMap.appendChild(dot);
    });
    selectors.hotspotCount.textContent = `${Math.floor(Math.random() * 4) + 1}`;
  },
  bindEvents: () => {
    document.querySelector("#launchArena").addEventListener("click", ui.startBattle);
    document.querySelector("#startBattle").addEventListener("click", ui.startBattle);
    document.querySelector("#toggleArenaLog").addEventListener("click", () => {
      selectors.arenaLog.classList.toggle("hidden");
    });
    document.querySelector("#advanceRealm").addEventListener("click", ui.advanceRealm);
    document.querySelector("#startFlow").addEventListener("click", ui.launchFlowPod);
    document.querySelector("#gainSkill").addEventListener("click", ui.spendXp);
    document.querySelector("#joinBtn").addEventListener("click", () => {
      ui.scrollToSection("arena");
    });
    document.querySelector("#viewRealm").addEventListener("click", () => {
      ui.scrollToSection("realm");
    });
    document.getElementById("themeToggle").addEventListener("click", ui.toggleTheme);

    // Notification dropdown
    const notificationBtn = document.getElementById("notificationBtn");
    const notificationDropdown = document.getElementById("notificationDropdown");
    if (notificationBtn && notificationDropdown) {
      notificationBtn.addEventListener("click", () => {
        notificationDropdown.classList.toggle("hidden");
        if (!notificationDropdown.classList.contains("hidden")) {
          ui.updateNotifications();
        }
      });
      // Close dropdown when clicking outside
      document.addEventListener("click", (e) => {
        if (!notificationBtn.contains(e.target) && !notificationDropdown.contains(e.target)) {
          notificationDropdown.classList.add("hidden");
        }
      });
    }

    document.addEventListener("mousemove", ui.trackCursor);

    const panels = document.querySelectorAll(".nav-link");
    panels.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const target = link.getAttribute("href").replace("#", "");
        ui.scrollToSection(target);
      });
    });

    const appearTargets = document.querySelectorAll(".panel");
    appearTargets.forEach((panel) => {
      panel.addEventListener("mouseenter", () => {
        document.body.style.cursor = "default";
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        ui.closeEasterEgg();
      }
    });
  },
  scrollToSection: (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  },
  startBattle: () => {
    if (state.matchActive) return;
    state.matchActive = true;
    state.matchStart = Date.now();
    selectors.matchStatus.textContent = "Match started";
    ui.logArena("Match initiated. Deploying code bots...");
    ui.updateStreak();

    const tiles = Array.from(document.querySelectorAll(".arena-tile"));
    gsap.to(tiles, {
      scale: 1.05,
      duration: 0.25,
      stagger: 0.02,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });

    setTimeout(() => {
      const wins = Math.floor(Math.random() * 100);
      const outcome = wins > 45 ? "Victory" : "Defeat";
      const xpGain = outcome === "Victory" ? 18 : 8;
      state.user.xp = (state.user.xp || 0) + xpGain;
      state.xp = state.user.xp;
      state.streak = outcome === "Victory" ? Math.min(3, state.streak + 1) : 0;
      ui.updateStreak();
      selectors.matchStatus.textContent = `${outcome} (+${xpGain} XP)`;
      ui.updateXp();
      ui.logArena(`Match ended: ${outcome} (+${xpGain} XP)`);
      state.matchActive = false;
      ui.throwXpBurst(xpGain);
      ui.recordBattleOutcome(outcome === "Victory" ? "Player A" : "Player B", xpGain, { you: wins, opponent: 100 - wins });
      if (state.streak === 3) {
        ui.sparkVictory();
      }
      saveState();
    }, 2200);
  },
  throwXpBurst: (amount) => {
    const badge = document.createElement("div");
    badge.className = "xp-burst";
    badge.textContent = `+${amount} XP`;
    badge.style.position = "fixed";
    badge.style.left = "50%";
    badge.style.top = "35%";
    badge.style.transform = "translate(-50%, -50%)";
    badge.style.padding = "0.8rem 1.2rem";
    badge.style.borderRadius = "1.5rem";
    badge.style.background = "rgba(64, 243, 255, 0.14)";
    badge.style.backdropFilter = "blur(12px)";
    badge.style.border = "1px solid rgba(255,255,255,0.14)";
    badge.style.color = "rgba(255,255,255,0.95)";
    badge.style.zIndex = "9999";
    document.body.appendChild(badge);

    gsap.fromTo(
      badge,
      { y: -20, opacity: 0 },
      {
        y: -120,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(badge, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => badge.remove(),
          });
        },
      }
    );
  },
  sparkVictory: () => {
    const confetti = document.createElement("div");
    confetti.className = "victory-confetti";
    confetti.style.position = "fixed";
    confetti.style.inset = "0";
    confetti.style.pointerEvents = "none";
    document.body.appendChild(confetti);

    const colors = ["#40f3ff", "#d95bff", "#ffffff"];
    for (let i = 0; i < 32; i += 1) {
      const piece = document.createElement("div");
      piece.style.position = "absolute";
      piece.style.width = "8px";
      piece.style.height = "24px";
      piece.style.background = colors[i % colors.length];
      piece.style.borderRadius = "3px";
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.top = "-8%";
      piece.style.opacity = String(0.8 + Math.random() * 0.2);
      confetti.appendChild(piece);
      gsap.to(piece, {
        y: "120vh",
        rotation: Math.random() * 360,
        duration: 1.6 + Math.random() * 0.8,
        ease: "power1.out",
        onComplete: () => piece.remove(),
      });
    }

    setTimeout(() => confetti.remove(), 2200);
  },
  advanceRealm: () => {
    state.realm.level += 1;
    state.realm.resources += 25;
    state.realm.nextUpgrade = "Deploy Cloud Companion +30%";
    ui.updateRealm();
    ui.toast("Realm expanded! Unlock a new customization tier.");
  },
  launchFlowPod: () => {
    const pod = document.createElement("div");
    pod.className = "flow-pod";
    pod.style.position = "fixed";
    pod.style.inset = "0";
    pod.style.display = "grid";
    pod.style.placeItems = "center";
    pod.style.background = "rgba(0,0,0,0.75)";
    pod.style.zIndex = "9999";
    pod.innerHTML = `
      <div class="p-10 text-center rounded-3xl bg-black/70 border border-white/10 shadow-glow">
        <h2 class="text-3xl font-bold mb-4">Flow Pod Active</h2>
        <p class="text-white/70 mb-6">A fellow coder has joined your session. Sync eyes, share a snippet, and get a shared XP boost.</p>
        <button id="closePod" class="btn-cta">Sync Now</button>
      </div>
    `;
    document.body.appendChild(pod);

    document.getElementById("closePod").addEventListener("click", () => {
      gsap.to(pod, {
        opacity: 0,
        duration: 0.4,
        onComplete: () => pod.remove(),
      });
      state.flow.boost += 12;
      state.flow.time += 90;
      state.flow.frustration = Math.max(0, state.flow.frustration - 22);
      ui.updateFlow();
      ui.toast("Flow Pod session complete. Boost +12%.");
    });
  },
  spendXp: () => {
    if (state.xp < 30) {
      ui.toast("Not enough XP yet. Keep battling!");
      return;
    }
    state.xp -= 30;
    state.flow.boost += 6;
    ui.updateXp();
    ui.updateFlow();
    ui.toast("XP spent: Power boost applied.");
  },
  toast: (message) => {
    const toast = document.createElement("div");
    toast.className = "toast-message";
    toast.textContent = message;
    document.body.appendChild(toast);
    gsap.fromTo(
      toast,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(toast, {
            opacity: 0,
            y: -20,
            duration: 0.4,
            delay: 2.2,
            onComplete: () => toast.remove(),
          });
        },
      }
    );
  },
  toggleTheme: () => {
    document.body.classList.toggle("theme-alt");
    const toggle = document.getElementById("themeToggle");
    toggle.textContent = document.body.classList.contains("theme-alt") ? "☀️" : "🌙";
  },
  initScrollTriggers: () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#arena .arena-tile", {
      opacity: 0,
      y: 35,
      stagger: 0.06,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#arena",
        start: "top 70%",
      },
    });

    gsap.from("#realm .realm-card", {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#realm",
        start: "top 70%",
      },
    });

    gsap.from("#flow .flow-metrics", {
      opacity: 0,
      y: 35,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#flow",
        start: "top 75%",
      },
    });

    gsap.from("#skill .skill-tree", {
      opacity: 0,
      y: 45,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#skill",
        start: "top 70%",
      },
    });

    gsap.from("#map .campus-map", {
      opacity: 0,
      y: 45,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#map",
        start: "top 70%",
      },
    });
  },
  trackCursor: (event) => {
    const glow = document.querySelectorAll(".glow-cursor");
    glow.forEach((g) => {
      g.style.left = `${event.clientX}px`;
      g.style.top = `${event.clientY}px`;
    });
  },
  initHeroAnimation: () => {
    const taglineText = "Where campus coders merge. Code, compete, collaborate.";
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index >= taglineText.length) {
        clearInterval(typeInterval);
        gsap.to(selectors.blinker, { opacity: 0, duration: 0.35, repeat: -1, yoyo: true });
        return;
      }
      selectors.tagline.textContent += taglineText[index];
      index += 1;
    }, 50);

    const orbitContainer = document.getElementById("orbit");
    for (let i = 0; i < 4; i += 1) {
      const orb = document.createElement("div");
      orb.className = "orbit-symbol";
      orb.textContent = ["<>", "{ }", "⚡", "🧠"][i];
      const size = 26 + i * 6;
      orb.style.width = `${size}px`;
      orb.style.height = `${size}px`;
      orb.style.position = "absolute";
      orb.style.left = "50%";
      orb.style.top = "50%";
      orb.style.transform = "translate(-50%, -50%)";
      orb.style.fontSize = "1.4rem";
      orb.style.opacity = "0.8";
      orb.style.pointerEvents = "none";
      orbitContainer.appendChild(orb);
      gsap.to(orb, {
        rotation: 360,
        duration: 18 - i * 2,
        repeat: -1,
        ease: "none",
        motionPath: {
          path: [{ x: 0, y: 0 }, { x: 0, y: -140 + i * 10 }, { x: 260 - i * 30, y: -140 + i * 10 }, { x: 0, y: 0 }],
          curviness: 1.2,
        },
      });
    }

    ui.initCanvasParticles();
  },
  initCanvasParticles: () => {
    const canvas = document.getElementById("heroCanvas");
    const ctx = canvas.getContext("2d");
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = [];
    for (let i = 0; i < 160; i += 1) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 0.5 + Math.random() * 1.4,
        vx: -0.05 + Math.random() * 0.1,
        vy: -0.05 + Math.random() * 0.1,
        hue: 190 + Math.random() * 120,
        alpha: 0.3 + Math.random() * 0.4,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -40) p.x = canvas.width + 40;
        if (p.x > canvas.width + 40) p.x = -40;
        if (p.y < -40) p.y = canvas.height + 40;
        if (p.y > canvas.height + 40) p.y = -40;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 5);
        gradient.addColorStop(0, `hsla(${p.hue}, 98%, 72%, ${p.alpha})`);
        gradient.addColorStop(1, `hsla(${p.hue}, 82%, 52%, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 6, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
    ui.spawnRitLogoParticles();
  },
  spawnRitLogoParticles: () => {
    const stage = document.getElementById("logoParticles");
    stage.innerHTML = "";
    const count = 90;
    for (let i = 0; i < count; i += 1) {
      const dot = document.createElement("div");
      dot.className = "particle-dot";
      dot.style.left = `${50 + (Math.random() - 0.5) * 60}%`;
      dot.style.top = `${50 + (Math.random() - 0.5) * 60}%`;
      dot.style.opacity = "0";
      stage.appendChild(dot);
      gsap.to(dot, {
        opacity: 0.75,
        x: (Math.random() - 0.5) * 90,
        y: (Math.random() - 0.5) * 90,
        duration: 1.8 + Math.random() * 0.8,
        delay: Math.random() * 0.5,
        ease: "power2.out",
        yoyo: true,
        repeat: -1,
      });
    }
  },
  initLogoEasterEgg: () => {
    const logo = document.getElementById("logo");
    if (!logo) return;

    let clicks = 0;
    logo.addEventListener("click", () => {
      clicks += 1;
      if (clicks >= 5) {
        clicks = 0;
        state.user.isAdmin = !state.user.isAdmin;
        saveState();
        ui.toast(state.user.isAdmin ? "Admin mode enabled!" : "Admin mode disabled.");
        ui.updateDashboard();
      }
      setTimeout(() => {
        clicks = 0;
      }, 2500);
    });

    const closeBtn = document.getElementById("closeEaster");
    if (closeBtn) closeBtn.addEventListener("click", ui.closeEasterEgg);
  },
  showEasterEgg: () => {
    if (state.easterUnlocked) return;
    state.easterUnlocked = true;
    document.getElementById("easterEgg").classList.remove("hidden");
    document.body.classList.add("theme-alt");
  },
  closeEasterEgg: () => {
    document.getElementById("easterEgg").classList.add("hidden");
  },
  generateMentorPlan: (topic, outputEl) => {
    const plans = {
      "graphs": [
        "Master graph traversal: Start with BFS/DFS on LeetCode easy problems.",
        "Learn shortest paths: Dijkstra's algorithm with priority queues.",
        "Practice topological sort and cycle detection.",
        "Solve graph problems daily for 30 minutes.",
        "Recommended: GfG Graph series + LeetCode 200+ graph problems."
      ],
      "dp": [
        "Begin with 1D DP: Fibonacci, climbing stairs.",
        "Move to 2D DP: Knapsack, longest common subsequence.",
        "Understand state transitions and memoization.",
        "Practice 50 DP problems on GfG/LeetCode.",
        "Tip: Draw the recursion tree to visualize."
      ],
      "trees": [
        "Learn binary tree traversals: inorder, preorder, postorder.",
        "Master BST operations: insert, delete, search.",
        "Practice tree problems: height, diameter, LCA.",
        "Implement AVL/Red-Black trees for advanced.",
        "Recommended: Tree visualization tools."
      ],
      "arrays": [
        "Master two pointers and sliding window techniques.",
        "Learn sorting algorithms and their applications.",
        "Practice prefix sums and difference arrays.",
        "Solve array rotation and manipulation problems.",
        "Focus on O(n) solutions for optimization."
      ],
      "strings": [
        "Learn string hashing and KMP algorithm.",
        "Practice anagram and palindrome problems.",
        "Master substring search and manipulation.",
        "Understand tries and suffix arrays.",
        "Solve pattern matching challenges."
      ],
      "greedy": [
        "Learn greedy choice property and optimal substructure.",
        "Practice interval scheduling and Huffman coding.",
        "Solve fractional knapsack and activity selection.",
        "Combine with DP for complex problems.",
        "Validate greedy solutions with counterexamples."
      ]
    };

    const normalized = topic.toLowerCase();
    let plan = plans[normalized];
    if (!plan) {
      // Fallback for unknown topics
      plan = [
        `Research ${topic} fundamentals on GeeksforGeeks.`,
        `Find 5-10 practice problems on LeetCode related to ${topic}.`,
        `Watch tutorial videos and implement examples.`,
        `Join study groups for ${topic} discussions.`,
        `Track progress and revise weekly.`
      ];
    }

    const suggestions = ui.recommendedResourcesByTopic(topic);
    if (suggestions.length) {
      plan.push("Recommended resources:");
      suggestions.slice(0, 2).forEach((res) => {
        plan.push(`<a href=\"${res.url}\" target=\"_blank\">• ${res.title}</a>`);
      });
    }
    outputEl.innerHTML = plan.map((line) => `<div>• ${line}</div>`).join("");
  },
  applyTheme: () => {
    const isAlt = state.settings?.theme === "alt";
    document.body.classList.toggle("theme-alt", isAlt);
    const toggle = document.getElementById("themeToggle");
    if (toggle) toggle.textContent = isAlt ? "☀️" : "🌙";
  },
  syncState: () => {
    state.xp = state.user?.xp ?? state.xp;
    state.streak = state.stats?.streak ?? state.streak;
    state.matchActive = state.matchActive ?? false;

    ui.updateDashboard();
    ui.updateLeaderboard();
    ui.updateProfile();
    ui.updateEvents();
    ui.updateGuilds();
    ui.updateResources();
    ui.updateNotifications();

    saveState();
  },
  startLiveUpdates: () => {
    // Simulate leaderboard shifts and activity updates.
    ui.liveUpdateInterval = setInterval(() => {
      ui.simulateLeaderboardShuffle();
      ui.simulateGuildWarProgress();
      ui.updateLeaderboard();
      ui.updateGuilds();
    }, 8500);
  },
  scheduleNotifications: () => {
    // Trigger periodic notifications for upcoming events and rank changes.
    ui.notificationInterval = setInterval(() => {
      const now = new Date();
      state.events.forEach((event) => {
        const start = new Date(event.start);
        const diff = start - now;
        if (!event.registered || event.notified || diff <= 0) return;
        if (diff <= 1000 * 60 * 60 * 12) {
          ui.toast(`Reminder: ${event.title} starts soon!`);
          event.notified = true;
          saveState();
        }
      });
    }, 30_000);
  },
  updateDashboard: () => {
    // Update snapshot cards.
    const widget = document.querySelector(".card .card-title:contains('Weekly Snapshot')");
    // Fallback: update by selector based on existing card structure.
    const cards = Array.from(document.querySelectorAll(".card"));
    const snapshotCard = cards.find((c) => c.querySelector(".card-title")?.textContent.includes("Weekly Snapshot"));
    if (!snapshotCard) return;

    const solvedEl = snapshotCard.querySelector(".text-2xl.font-bold");
    if (solvedEl) solvedEl.textContent = state.stats.problemsThisWeek;

    const streakEl = snapshotCard.querySelector(".text-2xl.font-bold + .tag");

    // Add progress ring and heatmap if not present
    if (!snapshotCard.querySelector(".progress-ring")) {
      const ring = document.createElement("div");
      ring.className = "progress-ring mt-6";
      ring.innerHTML = `
        <div class=\"ring-label\">Weekly progress</div>
        <div class=\"ring\"><div class=\"ring-fill\"></div></div>
        <div class=\"ring-info\">${state.stats.problemsThisWeek} / 45 problems</div>
      `;
      snapshotCard.appendChild(ring);
      ui.renderActivityHeatmap(snapshotCard);
    }

    // Update achievements
    const achievementsList = document.getElementById("achievementsList");
    if (achievementsList) {
      achievementsList.innerHTML = "";
      const achievements = state.user.achievements || [];
      achievements.slice(0, 4).forEach((achievement) => {
        const badge = document.createElement("div");
        badge.className = "card p-3 text-center";
        badge.innerHTML = `
          <div class="text-2xl mb-1">🏆</div>
          <div class="text-sm font-semibold">${achievement}</div>
        `;
        achievementsList.appendChild(badge);
      });
    }

    ui.updateProjectGallery();
    ui.updateBlogPosts();
    ui.updateDoubtsList();
    ui.updateAdminPanel();
  renderActivityHeatmap: (container) => {
    if (container.querySelector(".heatmap-grid")) return;
    const wrapper = document.createElement("div");
    wrapper.className = "heatmap-grid mt-5";
    wrapper.innerHTML = `<div class=\"heatmap-title\">Weekly Activity Heatmap</div>`;
    const grid = document.createElement("div");
    grid.className = "heatmap-grid-inner";
    const data = state.stats.weeklyActivity;
    for (let i = 0; i < 28; i += 1) {
      const dot = document.createElement("div");
      const intensity = data[i] || 0;
      dot.className = "heatmap-dot";
      dot.style.opacity = `${0.25 + intensity * 0.2}`;
      dot.title = `${Math.round(intensity * 100)}% activity`;
      grid.appendChild(dot);
    }
    wrapper.appendChild(grid);
    container.appendChild(wrapper);
  },
  recommendedResourcesByTopic: (topic) => {
    const normalized = topic.toLowerCase();
    return state.resources.filter((res) => {
      return res.title.toLowerCase().includes(normalized) || res.tags.some((t) => t.toLowerCase().includes(normalized));
    });
  },
  updateLeaderboard: async (category = "overall") => {
    const body = document.getElementById("leaderboardBody");
    if (!body) return;

    // Load leaderboard from Firebase
    const result = await FirebaseAuth.getLeaderboard();
    let leaderboard = state.leaderboard; // fallback
    if (result.success) {
      leaderboard = result.data;
    }

    const sorted = [...leaderboard];
    if (category === "weekly") {
      sorted.sort((a, b) => (b.problems || 0) - (a.problems || 0));
    } else if (category === "guild") {
      sorted.sort((a, b) => (b.xp || 0) - (a.xp || 0));
    } else if (category === "battle") {
      sorted.sort((a, b) => (b.battleWins || 0) - (a.battleWins || 0));
    } else {
      sorted.sort((a, b) => (b.xp || 0) - (a.xp || 0));
    }

    body.innerHTML = "";
    sorted.forEach((row, idx) => {
      const tr = document.createElement("tr");
      tr.className = "bg-[rgba(15,23,42,0.75)] hover:bg-[rgba(47,141,70,0.22)] transition-all";
      const badge = ["🥇", "🥈", "🥉"][idx] || "";
      tr.innerHTML = `
        <td class="py-3 pl-4 font-semibold">${idx + 1}</td>
        <td class="py-3">${badge} ${row.name}</td>
        <td class="py-3">${row.problems || 0}</td>
        <td class="py-3">🔥 ${row.streak || 0}</td>
        <td class="py-3">${row.guild || 'No Guild'}</td>
        <td class="py-3 font-semibold">${row.xp || 0} XP</td>
      `;
      body.appendChild(tr);
    });
  },
  simulateLeaderboardShuffle: () => {
    // Randomly adjust XP and positions to simulate live updates
    state.leaderboard.forEach((player) => {
      const delta = Math.floor((Math.random() - 0.5) * 20);
      player.xp = Math.max(0, (player.xp || 0) + delta);
      player.problems = Math.max(0, (player.problems || 0) + Math.floor(Math.random() * 2));
    });
    saveState();
  },
  simulateGuildWarProgress: () => {
    // Randomly change war score for guilds.
    state.guilds.forEach((guild) => {
      guild.warScore = Math.max(0, Math.min(100, (guild.warScore || 0) + Math.floor((Math.random() - 0.5) * 10)));
    });
    saveState();
  },
  updateGuilds: async () => {
    const page = document.body?.dataset.page?.toLowerCase();
    if (page !== "guilds") return;

    // Load guilds from Firebase
    const result = await FirebaseAuth.getGuilds();
    let guilds = state.guilds; // fallback
    if (result.success) {
      guilds = result.data;
    }

    const cards = Array.from(document.querySelectorAll(".card")).filter((c) => c.querySelector(".card-title"));
    guilds.forEach((guild, idx) => {
      const card = cards[idx];
      if (!card) return;
      const members = card.querySelector(".text-text-muted + div");
      if (members) members.textContent = `Members: ${guild.members || 0}`;
      const points = card.querySelector(".text-text-muted + div + div");
      if (points) points.textContent = `Weekly Points: ${guild.weeklyPoints || 0}`;
      const challenge = card.querySelector(".text-text-muted + div + div + div");
      if (challenge) challenge.textContent = `Challenge: ${guild.challenge || 'No challenge'}`;
      const button = card.querySelector("button");
      if (button) {
        button.textContent = state.user.guild === guild.name ? "Leave Guild" : "Join Guild";
        button.onclick = async () => {
          if (state.user.guild === guild.name) {
            state.user.guild = "";
            ui.toast(`You left ${guild.name}.`);
          } else {
            state.user.guild = guild.name;
            // Join guild in Firebase
            await FirebaseAuth.joinGuild(firebaseAuth.currentUser.uid, guild.id);
            ui.toast(`Joined ${guild.name}!`);
          }
          saveState();
          ui.updateProfile();
          ui.updateDashboard();
          ui.updateGuilds();
        };
      }
    });

    // Update war progress
    const dsaGuild = guilds.find(g => g.name === "DSA Guild");
    const aiGuild = guilds.find(g => g.name === "AI Guild");
    if (dsaGuild && aiGuild) {
      const total = (dsaGuild.warScore || 0) + (aiGuild.warScore || 0);
      const dsaPercent = total > 0 ? Math.round((dsaGuild.warScore / total) * 100) : 50;
      const aiPercent = 100 - dsaPercent;

      const dsaProgress = document.getElementById("dsaProgress");
      const aiProgress = document.getElementById("aiProgress");
      const dsaScore = document.getElementById("dsaScore");
      const aiScore = document.getElementById("aiScore");

      if (dsaProgress) dsaProgress.style.width = `${dsaPercent}%`;
      if (aiProgress) aiProgress.style.width = `${aiPercent}%`;
      if (dsaScore) dsaScore.textContent = `${dsaPercent}%`;
      if (aiScore) aiScore.textContent = `${aiPercent}%`;
    }

    // Contribute button
    const contributeBtn = document.getElementById("contributeWar");
    if (contributeBtn) {
      contributeBtn.onclick = () => {
        if (!state.user.guild) {
          ui.toast("Join a guild first!");
          return;
        }
        const guild = state.guilds.find(g => g.name === state.user.guild);
        if (guild) {
          guild.warScore += 10;
          state.user.xp += 25;
          ui.toast(`Contributed to ${guild.name}! +25 XP`);
          ui.addNotification(`War contribution: +25 XP for ${guild.name}`);
          saveState();
          ui.updateGuilds();
        }
      };
    }
  },
  updateEvents: async () => {
    const page = document.body?.dataset.page?.toLowerCase();
    if (page !== "events") return;

    // Load events from Firebase
    const result = await FirebaseAuth.getEvents();
    let events = state.events; // fallback
    if (result.success) {
      events = result.data;
    }

    // Update countdown based on main hackathon event
    const hack = events.find((e) => e.id === "hackathon");
    const countdown = document.getElementById("countdown");
    if (hack && countdown) {
      ui.startCountdown(new Date(hack.start), countdown);
    }
    const register = document.getElementById("registerHack");
    if (register) {
      register.textContent = hack?.registered ? "Registered" : "Register";
      register.onclick = async () => {
        if (hack) {
          hack.registered = !hack.registered;
          if (hack.registered) {
            await FirebaseAuth.registerForEvent(firebaseAuth.currentUser.uid, hack.id);
          }
          ui.toast(hack.registered ? "You're in!" : "Registration canceled.");
          saveState();
          ui.updateEvents();
        }
      };
    }
  },
  updateResources: () => {
    const page = document.body?.dataset.page?.toLowerCase();
    if (page !== "resources") return;
    const container = document.querySelector(".content");
    if (!container) return;

    // Add a recommendation section if not present
    if (!document.getElementById("recommendedResources")) {
      const card = document.createElement("div");
      card.className = "card";
      card.id = "recommendedResources";
      card.innerHTML = `
        <div class="card-title">Recommended For You</div>
        <p class="text-text-muted mt-2">Based on your recent activity, these resources are a great next step.</p>
        <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3" id="recommendedList"></div>
      `;
      container.insertBefore(card, container.firstChild);
    }

    const list = document.getElementById("recommendedList");
    if (!list) return;
    list.innerHTML = "";
    const recs = state.resources
      .filter((r) => r.recommended || state.user.tags.some((tag) => r.tags.includes(tag)))
      .slice(0, 4);
    recs.forEach((res) => {
      const card = document.createElement("div");
      card.className = "card p-4";
      card.innerHTML = `
        <div class="text-lg font-semibold">${res.title}</div>
        <div class="text-text-muted text-sm mt-1">${res.category} • ${res.difficulty}</div>
        <a class="btn-secondary mt-4 inline-flex" href="${res.url}" target="_blank">Open</a>
      `;
      list.appendChild(card);
    });
  },
  updateProfile: () => {
    const page = document.body?.dataset.page?.toLowerCase();
    if (page !== "profile") return;
    const nameEl = document.querySelector(".card .text-xl.font-semibold");
    if (nameEl) nameEl.textContent = state.user.name;
    const rankEl = Array.from(document.querySelectorAll(".card .font-semibold")).find((el) => el.textContent?.startsWith("#"));
    if (rankEl) rankEl.textContent = `#${state.user.rank}`;
    const solvedEl = Array.from(document.querySelectorAll(".card .font-semibold")).find((el) => /^2/.test(el.textContent || ""));
    const solved = state.stats.problemsTotal;
    const solvedNodes = Array.from(document.querySelectorAll(".card .text-text-muted + .font-semibold"));
    solvedNodes.forEach((el) => {
      if (el.previousElementSibling && el.previousElementSibling.textContent === "Solved Problems") {
        el.textContent = solved;
      }
    });

    const streakNodes = Array.from(document.querySelectorAll(".card .text-text-muted + .font-semibold"));
    streakNodes.forEach((el) => {
      if (el.previousElementSibling && el.previousElementSibling.textContent === "Current Streak") {
        el.textContent = `${state.stats.streak} days`;
      }
    });

    const tagsContainer = document.querySelector(".tag");
    if (tagsContainer) {
      const tagWrapper = tagsContainer.parentElement;
      if (tagWrapper) {
        tagWrapper.innerHTML = state.user.tags.map((tag) => `<span class=\"tag\">${tag}</span>`).join(" ");
      }
    }

    const input = document.getElementById("gfgUsername");
    if (input) {
      input.value = state.user.handle || "";
      input.addEventListener("change", (e) => {
        state.user.handle = e.target.value;
        saveState();
      });
    }
  },
  checkAchievements: () => {
    const achievements = new Set(state.user.achievements || []);
    if (state.stats.problemsTotal >= 10) achievements.add("10 Problems Solved");
    if (state.stats.streak >= 7) achievements.add("Week-long Streak");
    if (state.stats.streak >= 21) achievements.add("Coding Fire");
    if (state.battle.history.length >= 5) achievements.add("Battle Veteran");
    state.user.achievements = Array.from(achievements);
    saveState();
  },
  recordActivity: (type, value = 1) => {
    if (!state.stats.weeklyActivity) state.stats.weeklyActivity = Array.from({ length: 28 }, () => 0);
    const idx = state.stats.weeklyActivity.length - 1;
    state.stats.weeklyActivity[idx] = (state.stats.weeklyActivity[idx] || 0) + value;
    state.stats.problemsThisWeek += type === "solve" ? value : 0;
    state.stats.problemsTotal += type === "solve" ? value : 0;
    ui.checkAchievements();
    saveState();
  },
  updateBattle: () => {
    const page = document.body?.dataset.page?.toLowerCase();
    if (page !== "battle") return;

    const container = document.querySelector("main .content");
    if (!container) return;

    if (!document.getElementById("battleHistory")) {
      const historyCard = document.createElement("div");
      historyCard.id = "battleHistory";
      historyCard.className = "card mt-6";
      historyCard.innerHTML = `
        <div class="card-title">Battle History</div>
        <div class="text-text-muted mt-2">Track recent duels and win rate.</div>
        <div class="mt-4" id="battleHistoryList"></div>
      `;
      container.appendChild(historyCard);
    }

    const list = document.getElementById("battleHistoryList");
    if (!list) return;
    list.innerHTML = "";

    const history = (state.battle.history || []).slice(-5).reverse();
    history.forEach((entry) => {
      const row = document.createElement("div");
      row.className = "flex items-center justify-between text-sm py-2 border-b border-white/10";
      row.innerHTML = `
        <div>
          <div class="font-semibold">${entry.opponent}</div>
          <div class="text-text-muted">${new Date(entry.date).toLocaleString()}</div>
        </div>
        <div class="text-right">
          <div class="font-semibold">${entry.result}</div>
          <div class="text-text-muted">+${entry.xp} XP</div>
        </div>
      `;
      list.appendChild(row);
    });

    const winRate = Math.round((state.battle.winRate || 0) * 100);
    if (!document.getElementById("battleWinRate")) {
      const winRateCard = document.createElement("div");
      winRateCard.className = "card mt-6";
      winRateCard.id = "battleWinRate";
      winRateCard.innerHTML = `
        <div class="card-title">Win Rate</div>
        <div class="text-text-muted mt-2">Your performance in the arena.</div>
        <div class="mt-4 text-3xl font-bold">${winRate}%</div>
      `;
      container.appendChild(winRateCard);
    } else {
      document.getElementById("battleWinRate").querySelector(".text-3xl").textContent = `${winRate}%`;
    }
  },
  showAddProjectModal: () => {
    const modal = document.createElement("div");
    modal.className = "fixed inset-0 bg-black/50 flex items-center justify-center z-50";
    modal.innerHTML = `
      <div class="bg-card p-6 rounded-2xl border border-border max-w-md w-full mx-4">
        <h3 class="text-xl font-bold mb-4">Add New Project</h3>
        <input id="projectTitle" class="input mb-3" placeholder="Project Title" />
        <textarea id="projectDesc" class="input mb-3" placeholder="Description" rows="3"></textarea>
        <input id="projectRepo" class="input mb-3" placeholder="GitHub Repo URL" />
        <input id="projectTags" class="input mb-3" placeholder="Tags (comma separated)" />
        <div class="flex gap-3">
          <button id="saveProject" class="btn-primary flex-1">Save</button>
          <button id="cancelProject" class="btn-secondary flex-1">Cancel</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById("saveProject").addEventListener("click", () => {
      const title = document.getElementById("projectTitle").value.trim();
      const desc = document.getElementById("projectDesc").value.trim();
      const repo = document.getElementById("projectRepo").value.trim();
      const tags = document.getElementById("projectTags").value.trim().split(",").map(t => t.trim());

      if (!title || !desc) {
        ui.toast("Please fill in title and description.");
        return;
      }

      state.projects = state.projects || [];
      state.projects.push({
        id: Date.now(),
        title,
        desc,
        repo,
        tags,
        author: state.user.name,
        date: new Date().toISOString(),
      });
      saveState();
      ui.updateProjectGallery();
      modal.remove();
      ui.toast("Project added!");
    });

    document.getElementById("cancelProject").addEventListener("click", () => modal.remove());
  },
  showAddBlogModal: () => {
    const modal = document.createElement("div");
    modal.className = "fixed inset-0 bg-black/50 flex items-center justify-center z-50";
    modal.innerHTML = `
      <div class="bg-card p-6 rounded-2xl border border-border max-w-md w-full mx-4">
        <h3 class="text-xl font-bold mb-4">Write Blog Post</h3>
        <input id="blogTitle" class="input mb-3" placeholder="Post Title" />
        <textarea id="blogContent" class="input mb-3" placeholder="Content" rows="5"></textarea>
        <input id="blogTags" class="input mb-3" placeholder="Tags (comma separated)" />
        <div class="flex gap-3">
          <button id="saveBlog" class="btn-primary flex-1">Post</button>
          <button id="cancelBlog" class="btn-secondary flex-1">Cancel</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById("saveBlog").addEventListener("click", () => {
      const title = document.getElementById("blogTitle").value.trim();
      const content = document.getElementById("blogContent").value.trim();
      const tags = document.getElementById("blogTags").value.trim().split(",").map(t => t.trim());

      if (!title || !content) {
        ui.toast("Please fill in title and content.");
        return;
      }

      state.blogs = state.blogs || [];
      state.blogs.push({
        id: Date.now(),
        title,
        content,
        tags,
        author: state.user.name,
        date: new Date().toISOString(),
        likes: 0,
      });
      saveState();
      ui.updateBlogPosts();
      modal.remove();
      ui.toast("Blog post published!");
    });

    document.getElementById("cancelBlog").addEventListener("click", () => modal.remove());
  },
  updateBlogPosts: () => {
    const posts = document.getElementById("blogPosts");
    if (!posts) return;

    posts.innerHTML = "";
    const blogs = (state.blogs || []).slice(-3).reverse(); // Show last 3

    blogs.forEach((blog) => {
      const card = document.createElement("div");
      card.className = "card p-4";
      card.innerHTML = `
        <div class="text-lg font-semibold">${blog.title}</div>
        <div class="text-text-muted text-sm mt-1">${blog.content.substring(0, 100)}...</div>
        <div class="mt-2 flex flex-wrap gap-1">
          ${blog.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <div class="mt-3 flex items-center justify-between text-sm text-text-muted">
          <span>By ${blog.author}</span>
          <button class="like-btn" data-id="${blog.id}">👍 ${blog.likes}</button>
        </div>
      `;
      posts.appendChild(card);
    });

    // Add like functionality
    document.querySelectorAll(".like-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const id = parseInt(e.target.dataset.id);
        const blog = state.blogs.find(b => b.id === id);
        if (blog) {
          blog.likes += 1;
          saveState();
          ui.updateBlogPosts();
        }
      });
    });
  },
  showAskDoubtModal: () => {
    const modal = document.createElement("div");
    modal.className = "fixed inset-0 bg-black/50 flex items-center justify-center z-50";
    modal.innerHTML = `
      <div class="bg-card p-6 rounded-2xl border border-border max-w-md w-full mx-4">
        <h3 class="text-xl font-bold mb-4">Ask a Question</h3>
        <input id="doubtTitle" class="input mb-3" placeholder="Question Title" />
        <textarea id="doubtDesc" class="input mb-3" placeholder="Details" rows="4"></textarea>
        <input id="doubtTags" class="input mb-3" placeholder="Tags (comma separated)" />
        <div class="flex gap-3">
          <button id="saveDoubt" class="btn-primary flex-1">Post</button>
          <button id="cancelDoubt" class="btn-secondary flex-1">Cancel</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById("saveDoubt").addEventListener("click", () => {
      const title = document.getElementById("doubtTitle").value.trim();
      const desc = document.getElementById("doubtDesc").value.trim();
      const tags = document.getElementById("doubtTags").value.trim().split(",").map(t => t.trim());

      if (!title || !desc) {
        ui.toast("Please fill in title and details.");
        return;
      }

      state.doubts = state.doubts || [];
      state.doubts.push({
        id: Date.now(),
        question: title,
        details: desc,
        tags,
        author: state.user.name,
        date: new Date().toISOString(),
        answer: "",
        answeredBy: "",
        votes: 0,
      });
      saveState();
      ui.updateDoubtsList();
      modal.remove();
      ui.toast("Question posted!");
    });

    document.getElementById("cancelDoubt").addEventListener("click", () => modal.remove());
  },
  updateDoubtsList: () => {
    const list = document.getElementById("doubtsList");
    if (!list) return;

    list.innerHTML = "";
    const doubts = (state.doubts || []).slice(-3).reverse(); // Show last 3

    doubts.forEach((doubt) => {
      const card = document.createElement("div");
      card.className = "card p-4";
      card.innerHTML = `
        <div class="text-lg font-semibold">${doubt.question}</div>
        <div class="text-text-muted text-sm mt-1">${doubt.details.substring(0, 80)}...</div>
        <div class="mt-2 flex flex-wrap gap-1">
          ${doubt.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
        </div>
        ${doubt.answer ? `<div class="mt-3 p-3 bg-surface rounded-lg"><strong>Answer:</strong> ${doubt.answer}</div>` : ""}
        <div class="mt-3 flex items-center justify-between text-sm text-text-muted">
          <span>By ${doubt.author}</span>
          <button class="vote-btn" data-id="${doubt.id}">👍 ${doubt.votes}</button>
        </div>
      `;
      list.appendChild(card);
    });

    // Add vote functionality
    document.querySelectorAll(".vote-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const id = parseInt(e.target.dataset.id);
        const doubt = state.doubts.find(d => d.id === id);
        if (doubt) {
          doubt.votes += 1;
          saveState();
          ui.updateDoubtsList();
        }
      });
    });
  },
  startCountdown: (targetDate, displayEl) => {
    if (ui.countdownTimerId) {
      clearTimeout(ui.countdownTimerId);
    }
    const update = () => {
      const now = new Date();
      const diff = Math.max(0, targetDate - now);
      const hours = String(Math.floor(diff / 3600000)).padStart(2, "0");
      const minutes = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
      const seconds = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
      displayEl.textContent = `${hours}:${minutes}:${seconds}`;
      if (diff > 0) {
        ui.countdownTimerId = setTimeout(update, 1000);
      } else {
        displayEl.textContent = "00:00:00";
      }
    };
    update();
  },
  updateAdminPanel: () => {
    const container = document.querySelector("main .content");
    if (!container) return;

    const existing = document.getElementById("adminPanel");
    if (existing) existing.remove();

    if (!state.user.isAdmin) return;

    const panel = document.createElement("div");
    panel.id = "adminPanel";
    panel.className = "card mt-6";
    panel.innerHTML = `
      <div class="card-title">Admin Control Panel</div>
      <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 class="font-semibold mb-2">Manage Events</h4>
          <button id="editEventsBtn" class="btn-secondary mb-2">Edit Events</button>
        </div>
        <div>
          <h4 class="font-semibold mb-2">Approve Blogs</h4>
          <button id="approveBlogsBtn" class="btn-secondary mb-2">Review Pending</button>
        </div>
        <div>
          <h4 class="font-semibold mb-2">Update Leaderboard</h4>
          <button id="updateLeaderboardBtn" class="btn-secondary mb-2">Adjust Scores</button>
        </div>
        <div>
          <h4 class="font-semibold mb-2">Manage Guilds</h4>
          <button id="manageGuildsBtn" class="btn-secondary mb-2">Guild Controls</button>
        </div>
        <div class="md:col-span-2">
          <h4 class="font-semibold mb-2">Send Announcement</h4>
          <input id="announcementText" class="input mb-2" placeholder="Announcement text" />
          <button id="sendAnnouncementBtn" class="btn-primary">Send</button>
        </div>
      </div>
    `;
    container.appendChild(panel);

    // Add event listeners
    document.getElementById("editEventsBtn").addEventListener("click", ui.showEditEventsModal);
    document.getElementById("approveBlogsBtn").addEventListener("click", ui.showApproveBlogsModal);
    document.getElementById("updateLeaderboardBtn").addEventListener("click", ui.showUpdateLeaderboardModal);
    document.getElementById("manageGuildsBtn").addEventListener("click", ui.showManageGuildsModal);
    document.getElementById("sendAnnouncementBtn").addEventListener("click", () => {
      const text = document.getElementById("announcementText").value.trim();
      if (text) {
        state.announcements = state.announcements || [];
        state.announcements.push({ text, date: new Date().toISOString() });
        saveState();
        ui.toast("Announcement sent!");
        document.getElementById("announcementText").value = "";
        ui.updateAnnouncements();
      }
    });
  },
  showEditEventsModal: () => {
    ui.showModal(`
      <div class="modal-content">
        <h3 class="text-xl font-bold mb-4">Edit Events</h3>
        <div id="eventsList" class="mb-4 max-h-64 overflow-y-auto">
          ${state.events.map((event, idx) => `
            <div class="flex justify-between items-center p-2 bg-gray-700 rounded mb-2">
              <span>${event.title}</span>
              <button class="btn-secondary text-xs" onclick="ui.editEvent(${idx})">Edit</button>
            </div>
          `).join("")}
        </div>
        <button class="btn-primary" onclick="ui.addNewEvent()">Add New Event</button>
        <button class="btn-secondary ml-2" onclick="ui.closeModal()">Close</button>
      </div>
    `);
  },
  editEvent: (idx) => {
    const event = state.events[idx];
    ui.showModal(`
      <div class="modal-content">
        <h3 class="text-xl font-bold mb-4">Edit Event</h3>
        <input id="eventTitle" class="input mb-2" value="${event.title}" />
        <textarea id="eventDesc" class="input mb-2" rows="3">${event.description}</textarea>
        <input id="eventStart" type="datetime-local" class="input mb-2" value="${new Date(event.start).toISOString().slice(0,16)}" />
        <button class="btn-primary" onclick="ui.saveEvent(${idx})">Save</button>
        <button class="btn-secondary ml-2" onclick="ui.closeModal()">Cancel</button>
      </div>
    `);
  },
  saveEvent: (idx) => {
    const title = document.getElementById("eventTitle").value.trim();
    const desc = document.getElementById("eventDesc").value.trim();
    const start = document.getElementById("eventStart").value;
    if (title && desc && start) {
      state.events[idx] = { ...state.events[idx], title, description: desc, start };
      saveState();
      ui.toast("Event updated!");
      ui.closeModal();
      ui.updateEvents();
    }
  },
  addNewEvent: () => {
    ui.showModal(`
      <div class="modal-content">
        <h3 class="text-xl font-bold mb-4">Add New Event</h3>
        <input id="newEventTitle" class="input mb-2" placeholder="Event Title" />
        <textarea id="newEventDesc" class="input mb-2" rows="3" placeholder="Description"></textarea>
        <input id="newEventStart" type="datetime-local" class="input mb-2" />
        <button class="btn-primary" onclick="ui.saveNewEvent()">Save</button>
        <button class="btn-secondary ml-2" onclick="ui.closeModal()">Cancel</button>
      </div>
    `);
  },
  saveNewEvent: () => {
    const title = document.getElementById("newEventTitle").value.trim();
    const desc = document.getElementById("newEventDesc").value.trim();
    const start = document.getElementById("newEventStart").value;
    if (title && desc && start) {
      state.events.push({ id: Date.now(), title, description: desc, start, registered: false });
      saveState();
      ui.toast("Event added!");
      ui.closeModal();
      ui.updateEvents();
    }
  },
  showApproveBlogsModal: () => {
    const pending = state.blogs.filter(b => !b.approved);
    ui.showModal(`
      <div class="modal-content">
        <h3 class="text-xl font-bold mb-4">Approve Blogs</h3>
        <div id="pendingBlogs" class="mb-4 max-h-64 overflow-y-auto">
          ${pending.map((blog, idx) => `
            <div class="p-3 bg-gray-700 rounded mb-2">
              <h4 class="font-semibold">${blog.title}</h4>
              <p class="text-sm text-gray-300">${blog.content.slice(0,100)}...</p>
              <div class="mt-2">
                <button class="btn-primary text-xs mr-2" onclick="ui.approveBlog(${blog.id})">Approve</button>
                <button class="btn-secondary text-xs" onclick="ui.rejectBlog(${blog.id})">Reject</button>
              </div>
            </div>
          `).join("")}
        </div>
        <button class="btn-secondary" onclick="ui.closeModal()">Close</button>
      </div>
    `);
  },
  approveBlog: (id) => {
    const blog = state.blogs.find(b => b.id === id);
    if (blog) {
      blog.approved = true;
      saveState();
      ui.toast("Blog approved!");
      ui.updateBlogPosts();
      ui.closeModal();
    }
  },
  rejectBlog: (id) => {
    state.blogs = state.blogs.filter(b => b.id !== id);
    saveState();
    ui.toast("Blog rejected!");
    ui.updateBlogPosts();
    ui.closeModal();
  },
  showUpdateLeaderboardModal: () => {
    ui.showModal(`
      <div class="modal-content">
        <h3 class="text-xl font-bold mb-4">Update Leaderboard</h3>
        <div id="leaderboardAdjust" class="mb-4 max-h-64 overflow-y-auto">
          ${state.leaderboard.map((player, idx) => `
            <div class="flex justify-between items-center p-2 bg-gray-700 rounded mb-2">
              <span>${player.name} - ${player.xp} XP</span>
              <input type="number" id="xp${idx}" class="input w-20" value="${player.xp}" />
            </div>
          `).join("")}
        </div>
        <button class="btn-primary" onclick="ui.saveLeaderboardUpdates()">Save Changes</button>
        <button class="btn-secondary ml-2" onclick="ui.closeModal()">Cancel</button>
      </div>
    `);
  },
  saveLeaderboardUpdates: () => {
    state.leaderboard.forEach((player, idx) => {
      const newXp = parseInt(document.getElementById(`xp${idx}`).value) || 0;
      player.xp = newXp;
    });
    saveState();
    ui.toast("Leaderboard updated!");
    ui.closeModal();
    ui.updateLeaderboard();
  },
  showManageGuildsModal: () => {
    ui.showModal(`
      <div class="modal-content">
        <h3 class="text-xl font-bold mb-4">Manage Guilds</h3>
        <div id="guildsManage" class="mb-4 max-h-64 overflow-y-auto">
          ${state.guilds.map((guild, idx) => `
            <div class="p-3 bg-gray-700 rounded mb-2">
              <h4 class="font-semibold">${guild.name}</h4>
              <p>Members: ${guild.members.length}, War Score: ${guild.warScore}</p>
              <button class="btn-secondary text-xs mt-2" onclick="ui.editGuild(${idx})">Edit</button>
            </div>
          `).join("")}
        </div>
        <button class="btn-primary" onclick="ui.addNewGuild()">Add Guild</button>
        <button class="btn-secondary ml-2" onclick="ui.closeModal()">Close</button>
      </div>
    `);
  },
  editGuild: (idx) => {
    const guild = state.guilds[idx];
    ui.showModal(`
      <div class="modal-content">
        <h3 class="text-xl font-bold mb-4">Edit Guild</h3>
        <input id="guildName" class="input mb-2" value="${guild.name}" />
        <textarea id="guildDesc" class="input mb-2" rows="3">${guild.description}</textarea>
        <input id="guildWarScore" type="number" class="input mb-2" value="${guild.warScore}" />
        <button class="btn-primary" onclick="ui.saveGuild(${idx})">Save</button>
        <button class="btn-secondary ml-2" onclick="ui.closeModal()">Cancel</button>
      </div>
    `);
  },
  saveGuild: (idx) => {
    const name = document.getElementById("guildName").value.trim();
    const desc = document.getElementById("guildDesc").value.trim();
    const warScore = parseInt(document.getElementById("guildWarScore").value) || 0;
    if (name && desc) {
      state.guilds[idx] = { ...state.guilds[idx], name, description: desc, warScore };
      saveState();
      ui.toast("Guild updated!");
      ui.closeModal();
      ui.updateGuilds();
    }
  },
  addNewGuild: () => {
    ui.showModal(`
      <div class="modal-content">
        <h3 class="text-xl font-bold mb-4">Add New Guild</h3>
        <input id="newGuildName" class="input mb-2" placeholder="Guild Name" />
        <textarea id="newGuildDesc" class="input mb-2" rows="3" placeholder="Description"></textarea>
        <button class="btn-primary" onclick="ui.saveNewGuild()">Save</button>
        <button class="btn-secondary ml-2" onclick="ui.closeModal()">Cancel</button>
      </div>
    `);
  },
  saveNewGuild: () => {
    const name = document.getElementById("newGuildName").value.trim();
    const desc = document.getElementById("newGuildDesc").value.trim();
    if (name && desc) {
      state.guilds.push({ id: Date.now(), name, description: desc, members: [], warScore: 0 });
      saveState();
      ui.toast("Guild added!");
      ui.closeModal();
      ui.updateGuilds();
    }
  },
  generateProgressReport: () => {
    const report = {
      period: "Last 7 days",
      problemsSolved: state.stats.problemsThisWeek,
      xpGained: state.user.xp - (state.user.xp - 150), // approximate
      streak: state.stats.streak,
      battlesWon: state.battle.history.filter(b => b.result === "Victory").length,
      guildContribution: state.stats.guildContribution,
      achievements: state.user.achievements.slice(-3),
      recommendations: [
        "Focus on " + (state.user.tags[Math.floor(Math.random() * state.user.tags.length)] || "DSA") + " problems",
        "Join more guild challenges",
        "Participate in battle arena to boost XP"
      ]
    };

    ui.showModal(`
      <div class="modal-content max-w-2xl">
        <h3 class="text-2xl font-bold mb-4">Weekly Progress Report</h3>
        <div class="grid grid-cols-2 gap-4 mb-6">
          <div class="bg-surface p-4 rounded-lg">
            <div class="text-2xl font-bold text-[#00C853]">${report.problemsSolved}</div>
            <div class="text-sm text-text-muted">Problems Solved</div>
          </div>
          <div class="bg-surface p-4 rounded-lg">
            <div class="text-2xl font-bold text-[#00C853]">${report.xpGained}</div>
            <div class="text-sm text-text-muted">XP Gained</div>
          </div>
          <div class="bg-surface p-4 rounded-lg">
            <div class="text-2xl font-bold text-[#00C853]">${report.streak}</div>
            <div class="text-sm text-text-muted">Day Streak</div>
          </div>
          <div class="bg-surface p-4 rounded-lg">
            <div class="text-2xl font-bold text-[#00C853]">${report.battlesWon}</div>
            <div class="text-sm text-text-muted">Battles Won</div>
          </div>
        </div>
        <div class="mb-4">
          <h4 class="font-semibold mb-2">Recent Achievements</h4>
          <ul class="list-disc list-inside text-sm">
            ${report.achievements.map(a => `<li>${a}</li>`).join("")}
          </ul>
        </div>
        <div class="mb-4">
          <h4 class="font-semibold mb-2">Recommendations</h4>
          <ul class="list-disc list-inside text-sm">
            ${report.recommendations.map(r => `<li>${r}</li>`).join("")}
          </ul>
        </div>
        <button class="btn-primary" onclick="ui.closeModal()">Close</button>
      </div>
    `);
  },
  updateNotifications: () => {
    const list = document.getElementById("notificationList");
    if (!list) return;
    list.innerHTML = "";
    const unread = state.notifications.filter(n => !n.read);
    if (unread.length === 0) {
      list.innerHTML = '<div class="text-text-muted text-sm">No new notifications</div>';
      return;
    }
    unread.slice(0, 10).forEach((notif) => {
      const item = document.createElement("div");
      item.className = "p-2 bg-surface rounded text-sm cursor-pointer hover:bg-surface/80";
      item.textContent = notif.message;
      item.onclick = () => {
        notif.read = true;
        saveState();
        ui.updateNotifications();
        ui.toast("Notification marked as read");
      };
      list.appendChild(item);
    });
  },
  addNotification: (message) => {
    state.notifications.push({
      id: Date.now(),
      message,
      read: false,
      date: new Date().toISOString()
    });
    saveState();
    ui.updateNotifications();
  },
  showModal: (content) => {
    const modal = document.createElement("div");
    modal.id = "modal";
    modal.className = "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";
    modal.innerHTML = `
      <div class="bg-gray-800 p-6 rounded-lg max-w-md w-full mx-4">
        ${content}
      </div>
    `;
    document.body.appendChild(modal);
  },
  closeModal: () => {
    const modal = document.getElementById("modal");
    if (modal) modal.remove();
  },
};

window.addEventListener("DOMContentLoaded", () => {
  ui.init();
});

// CSS-injected helpers
const style = document.createElement("style");
style.textContent = `
.toast-message {
  position: fixed;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.9rem 1.5rem;
  border-radius: 1.5rem;
  background: rgba(13, 17, 30, 0.88);
  border: 1px solid rgba(64, 243, 255, 0.16);
  color: rgba(255, 255, 255, 0.92);
  font-weight: 600;
  letter-spacing: 0.02em;
  z-index: 9999;
  backdrop-filter: blur(12px);
  box-shadow: 0 28px 50px -24px rgba(0,0,0,0.7);
}

.theme-alt {
  --bg: #04040a;
  --bg2: #0b0616;
  --surface: rgba(255, 255, 255, 0.08);
  --border: rgba(255, 255, 255, 0.18);
  --accent: #ffd65b;
  --accent2: #ff4ccd;
  background: radial-gradient(circle at top, #06030c 0%, #02010a 60%, #010008 100%);
}

.orbit-symbol {
  font-family: "JetBrains Mono", monospace;
  user-select: none;
  mix-blend-mode: screen;
  pointer-events: none;
}

.particle-dot {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.85);
  filter: drop-shadow(0 0 14px rgba(64, 243, 255, 0.65));
}
`;
document.head.appendChild(style);
