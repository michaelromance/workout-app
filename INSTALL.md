# Workout App — Install on iPhone (No-Jargon Walkthrough)

Total time: about 15 minutes, one-time. After this, the app lives on your iPhone home screen and you never have to touch GitHub again.

## What's going on in plain English

Your iPhone can "install" any website that's set up like an app — it just needs to be on the internet at a secure (`https://`) address. We're going to put this Workout App's files on a free website hosting service called **GitHub Pages**, get a URL like `https://michael-owens.github.io/workout-app/`, then open that URL on your iPhone and tap "Add to Home Screen."

You don't need to know anything about coding, git, or terminals. You'll use a web browser the whole time.

---

## Part 1 — Make a free GitHub account (3 min)

1. On your computer, open a browser and go to **[github.com](https://github.com)**.
2. Click **Sign up** (top right).
3. Enter your email, pick a password, pick a username. Your username becomes part of the URL later. Pick something short like your first name + last name. Example: `michaelowens`.
4. Verify your email (they'll send you a code).
5. When it asks what plan, pick **Free**. When it asks about "team size" or "interests," click through — doesn't matter, just pick anything. You land on your new dashboard.

Remember your username — write it down. You'll need it in Part 4.

---

## Part 2 — Create a new repository (2 min)

A "repository" (repo) is just a folder on GitHub. We're making one to hold the app.

1. Top-right, click the **+** icon → **New repository**.
2. Fill in:
   - **Repository name**: `workout-app` (lowercase, with the dash, exactly like that)
   - **Description**: you can leave blank
   - **Public or Private**: pick **Public**. *(Public is required for free GitHub Pages hosting. Nobody's going to find it — it's just a URL only you know. Your workout data stays on your phone, not in the repo.)*
   - **Add a README file**: leave this **unchecked**
   - Everything else: leave as-is
3. Click the green **Create repository** button at the bottom.

You'll land on a mostly empty page that says "Quick setup — if you've done this kind of thing before" and has a bunch of command-line instructions. **Ignore all of that.** We're going to upload files through the browser.

---

## Part 3 — Upload the app files (3 min)

1. On that same repo page, look for a link that says **"uploading an existing file"** (it's a small link in the middle of the page, inside a section that says "...or create a new repository on the command line"). Click it.
   - If you don't see it, go directly to: `https://github.com/YOUR-USERNAME/workout-app/upload/main` (replace `YOUR-USERNAME`).
2. You'll see a big box that says **"Drag files here to add them to your repository"**.
3. On your computer, open the folder named **Workout App** (the one this `INSTALL.md` is inside).
4. Select **everything inside it** — `index.html`, `block1.json`, `manifest.webmanifest`, `sw.js`, the `icons` folder, and this `INSTALL.md`. (On Mac: Cmd+A inside the folder. On Windows: Ctrl+A.)
5. Drag the selected items onto the GitHub upload box. Wait a few seconds for them to upload — you'll see each filename appear.
6. Scroll down to the **"Commit changes"** box. You don't have to type anything.
7. Click the green **Commit changes** button.

GitHub thinks for a second, then takes you back to your repo. You should now see `index.html`, `icons/`, `block1.json`, etc. listed. If you see them, you're good.

---

## Part 4 — Turn on GitHub Pages (2 min)

This is the step that makes the files actually reachable at a URL.

1. On your repo page, click the **Settings** tab (top row of the repo, far right — looks like a gear icon).
2. In the left sidebar of Settings, scroll down and click **Pages**.
3. You'll see a section titled **"Build and deployment"**. Under **Source**, it probably says "Deploy from a branch." Leave that.
4. Under that, you'll see two dropdowns:
   - **Branch**: click the dropdown, pick `main`
   - The second dropdown next to it: leave as `/ (root)`
5. Click **Save**.

A yellow/gray banner near the top says something like "Your site is live at https://YOUR-USERNAME.github.io/workout-app/" — but it won't work yet. Give it **60 seconds** (GitHub is building it). Refresh the Settings → Pages page after a minute and the banner should turn green.

**Copy that URL.** It'll be something like `https://michaelowens.github.io/workout-app/`. That's your app's home.

---

## Part 5 — Test it on your computer (1 min, optional but smart)

1. Paste the URL in a new browser tab.
2. You should see the Workout App: "Block 1" header, six weeks listed with dates, today's cell highlighted in green.
3. Click around — tap a day, tap an exercise, mark a set done. Everything should just work.

If you see a plain directory listing or a 404 page, wait another minute and refresh. GitHub Pages can take a few minutes on first publish.

---

## Part 6 — Add to iPhone home screen (2 min)

This is the "install" step.

1. On your iPhone, open **Safari** (must be Safari, not Chrome — iOS only lets Safari install PWAs).
2. Type or paste your URL: `https://YOUR-USERNAME.github.io/workout-app/`
3. The app loads. You'll see the Block view with the 6 weeks.
4. At the bottom of Safari, tap the **Share** button (square with an up-arrow).
5. Scroll down the share sheet and tap **Add to Home Screen**.
6. Name it however you want (default "Workout" is fine). Tap **Add** in the top right.
7. Your iPhone home screen now has a green-barbell icon called Workout. Tap it.

The app opens **full-screen** — no Safari address bar, no tabs. Looks and feels like a real app. That's it.

---

## When you change Block data later

When Block 1 ends and we build Block 2, I'll give you a new `block1.json` (or `block2.json`). To update the app:

1. Go back to your repo: `https://github.com/YOUR-USERNAME/workout-app`
2. Click on `block1.json` in the file list.
3. Click the **pencil icon** (top right of the file view) to edit.
4. Delete everything in the box, paste in the new JSON contents.
5. Scroll down, click **Commit changes**.
6. On your iPhone, force-close the app and reopen it. New block loads.

Or — even simpler — I just text you the updated file, and you do a new drag-and-drop upload that replaces the old one.

---

## Using the app day-to-day

- **Block view** (default tab): your whole 6-week plan. Today's cell is highlighted green. Tap any cell to open that session.
- **Today**: tap an exercise to expand it. Enter reps/weight/RPE per set, tap the circle to mark done. A rest timer starts automatically. Every number is editable — if the plan says 8 reps but you got 10, type 10.
- **Ready**: 1-5 soreness check-in for legs/chest/back/shoulders/arms. Fill this before training.
- **Progress**: streak count, total sessions, total volume, recent sessions, personal records.

Everything is stored on your phone, works offline after first open.

---

## Backing up your data

In the app: **Progress** tab → **Export JSON backup**. Downloads a file with all your logs. Email it to yourself once a week — iPhone Safari can occasionally wipe local storage if your phone is low on space.

---

## Troubleshooting

- **"404 Not Found" when I visit the GitHub Pages URL**: Wait another 2-3 minutes after enabling Pages. First build is slow.
- **App loads but shows "Could not load block1.json"**: You probably uploaded the files into a subfolder instead of the repo root. Go to your repo — `index.html` should be right there at the top level, not inside a folder.
- **Home screen icon looks generic (just a screenshot)**: Delete the home screen icon, in Safari tap Share → Add to Home Screen again. iOS sometimes caches icons on first install.
- **Rest timer doesn't make sound**: iPhone PWAs can't vibrate or play unprompted audio. The timer still counts down on screen; I'll add a visual flash/sound later.
- **Data disappeared**: iOS occasionally evicts browser storage. This is why Export JSON Backup exists — do it weekly.

---

## What's not in this version yet (coming in M3)

- **RPE auto-regulation.** You're logging RPE but the app isn't yet using it to propose next week's weights. For now, the plan is what `block1.json` says. In M3 the engine will read your actual RPEs and adjust.
- **Ceiling detection.** App won't yet warn you when you've hit equipment max and need to migrate patterns.
- **Exercise swap mid-session.** If the cable row station is taken, you'll mentally sub and log under the same exercise name.
- **PR celebration.** PRs show up in the Progress tab but don't pop a banner. Coming.

For Weeks 1-2 (Phase 0), the app's job is mostly just to log. Which is exactly right for calibration. We'll layer in the engine before Weeks 3-4 when weight progression kicks in.
