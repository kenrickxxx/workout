// ============================================
// DUMBBELL ONLY WORKOUT SCHEDULE
// Optimized for home workout with minimal equipment
// ============================================

const workoutSchedule = {
    'Senin': {
        icon: '🦵',
        focus: 'Leg Day + Core',
        muscle: 'leg',
        description: 'Quads, Hamstrings, Glutes, Calves',
        duration: '50-60 menit',
        exercises: [
            { name: 'Goblet Squat', sets: 4, reps: '10-12', rest: 90, muscle: 'quads', completed: 0 },
            { name: 'Dumbbell RDL', sets: 4, reps: '10-12', rest: 90, muscle: 'hamstrings', completed: 0 },
            { name: 'Bulgarian Split Squat', sets: 3, reps: '10 each', rest: 90, muscle: 'quads', completed: 0 },
            { name: 'Dumbbell Hip Thrust', sets: 4, reps: '12-15', rest: 75, muscle: 'glutes', completed: 0 },
            { name: 'Calf Raise (Standing)', sets: 4, reps: '15-20', rest: 60, muscle: 'calves', completed: 0 },
            { name: 'Plank', sets: 3, reps: '45 sec', rest: 45, muscle: 'core', completed: 0 },
            { name: 'Weighted Crunch', sets: 3, reps: '15-20', rest: 45, muscle: 'core', completed: 0 },
            { name: 'Leg Raise', sets: 3, reps: '12-15', rest: 45, muscle: 'core', completed: 0 }
        ]
    },
    
    'Selasa': {
        icon: '🔙',
        focus: 'Back & Biceps',
        muscle: 'back',
        description: 'Lat, Rhomboids, Rear Delt, Biceps',
        duration: '45-55 menit',
        exercises: [
            { name: 'Bent Over Row', sets: 4, reps: '10-12', rest: 90, muscle: 'lats', completed: 0 },
            { name: 'Single Arm Row', sets: 4, reps: '10 each', rest: 75, muscle: 'lats', completed: 0 },
            { name: 'Chest-Supported Row', sets: 3, reps: '12-15', rest: 75, muscle: 'mid-back', completed: 0 },
            { name: 'Reverse Fly', sets: 3, reps: '15-20', rest: 60, muscle: 'rear-delt', completed: 0 },
            { name: 'Dumbbell Pullover', sets: 3, reps: '12-15', rest: 75, muscle: 'lats', completed: 0 },
            { name: 'Bicep Curl', sets: 4, reps: '10-12', rest: 60, muscle: 'biceps', completed: 0 },
            { name: 'Hammer Curl', sets: 3, reps: '12-15', rest: 60, muscle: 'biceps', completed: 0 },
            { name: 'Concentration Curl', sets: 3, reps: '12 each', rest: 60, muscle: 'biceps', completed: 0 }
        ]
    },
    
    'Rabu': {
        icon: '🎯',
        focus: 'Chest & Triceps',
        muscle: 'chest',
        description: 'Pec Major, Front Delt, Triceps',
        duration: '45-55 menit',
        exercises: [
            { name: 'Dumbbell Bench Press', sets: 4, reps: '8-10', rest: 120, muscle: 'chest', completed: 0 },
            { name: 'Incline Floor Press', sets: 4, reps: '10-12', rest: 90, muscle: 'upper-chest', completed: 0 },
            { name: 'Dumbbell Fly', sets: 3, reps: '12-15', rest: 75, muscle: 'chest', completed: 0 },
            { name: 'Close-Grip Press', sets: 3, reps: '10-12', rest: 90, muscle: 'triceps', completed: 0 },
            { name: 'Overhead Extension', sets: 4, reps: '12-15', rest: 60, muscle: 'triceps', completed: 0 },
            { name: 'Tricep Kickback', sets: 3, reps: '15 each', rest: 60, muscle: 'triceps', completed: 0 },
            { name: 'Lateral Raise', sets: 4, reps: '15-20', rest: 60, muscle: 'delts', completed: 0 },
            { name: 'Front Raise', sets: 3, reps: '12-15', rest: 60, muscle: 'front-delt', completed: 0 }
        ]
    },
    
    'Kamis': {
        icon: '🎲',
        focus: 'Shoulders & Forearms',
        muscle: 'shoulder',
        description: 'Side Delt, Traps, Grip Strength',
        duration: '40-50 menit',
        exercises: [
            { name: 'Arnold Press', sets: 4, reps: '10-12', rest: 90, muscle: 'delts', completed: 0 },
            { name: 'Push Press', sets: 3, reps: '8-10', rest: 90, muscle: 'delts', completed: 0 },
            { name: 'Upright Row', sets: 3, reps: '12-15', rest: 75, muscle: 'traps', completed: 0 },
            { name: 'Face Pull (towel)', sets: 4, reps: '15-20', rest: 60, muscle: 'rear-delt', completed: 0 },
            { name: 'Shrug', sets: 4, reps: '12-15', rest: 75, muscle: 'traps', completed: 0 },
            { name: 'Wrist Curl', sets: 4, reps: '15-20', rest: 45, muscle: 'forearms', completed: 0 },
            { name: 'Reverse Wrist Curl', sets: 3, reps: '15-20', rest: 45, muscle: 'forearms', completed: 0 },
            { name: 'Farmer Walk', sets: 3, reps: '45 sec', rest: 60, muscle: 'grip', completed: 0 }
        ]
    },
    
    'Jumat': {
        icon: '⚡',
        focus: 'Full Body HIIT',
        muscle: 'full',
        description: 'Conditioning, Fat Burn, Core',
        duration: '35-45 menit',
        exercises: [
            { name: 'Dumbbell Swing', sets: 4, reps: '20', rest: 60, muscle: 'posterior', completed: 0 },
            { name: 'Thruster', sets: 4, reps: '12-15', rest: 75, muscle: 'full', completed: 0 },
            { name: 'Renegade Row', sets: 3, reps: '10 each', rest: 60, muscle: 'back', completed: 0 },
            { name: 'Devil Press', sets: 3, reps: '10-12', rest: 75, muscle: 'full', completed: 0 },
            { name: 'Burpee + Curl', sets: 3, reps: '8-10', rest: 90, muscle: 'full', completed: 0 },
            { name: 'Mountain Climber', sets: 3, reps: '30 sec', rest: 45, muscle: 'core', completed: 0 },
            { name: 'Russian Twist', sets: 3, reps: '20 each', rest: 45, muscle: 'core', completed: 0 },
            { name: 'Plank to Pushup', sets: 3, reps: '10-12', rest: 60, muscle: 'chest', completed: 0 }
        ]
    }
};

// Tips database
const tips = [
    "Progressive overload: Naikkan weight 2.5kg setiap 2 minggu",
    "Form > Weight: Fokus teknik sebelum beban berat",
    "Rest yang cukup: Tidur 7-8 jam untuk recovery maksimal",
    "Nutrisi: Protein 2g per kg berat badan",
    "Warm up: 5-10 menit cardio ringan sebelum latihan",
    "Cooldown: Stretching 5 menit setelah latihan",
    "Hydration: Minum 500ml air sebelum latihan",
    "Mind-muscle connection: Rasakan otot yang dilatih"
];

// Quotes
const quotes = [
    "Sweat is just fat crying 💧",
    "No pain, no gain! 💪",
    "Your only limit is you 🚀",
    "Be stronger than your excuses 🦁",
    "The body achieves what the mind believes 🧠",
    "Don't stop when you're tired, stop when you're done 🏁",
    "Discipline equals freedom 🔓",
    "Train insane or remain the same 🐺",
    "Sore today, strong tomorrow 🦾",
    "Beast mode activated! 🦍",
    "Iron sharpens iron ⚔️",
    "Pain is weakness leaving the body 🔥"
];

// State
let currentDay = null;
let timerInterval = null;
let timerSeconds = 60;
let isTimerRunning = false;
let currentLevel = 1;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Splash screen
    setTimeout(() => {
        document.getElementById('splash').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('splash').style.display = 'none';
        }, 500);
    }, 2000);

    // Set random quote and tip
    document.getElementById('daily-quote').textContent = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('daily-tip').textContent = tips[Math.floor(Math.random() * tips.length)];

    // Load data
    loadProgress();
    updateStats();
    updateLevel();
    
    // Check today
    const today = getTodayName();
    if (workoutSchedule[today]) {
        document.getElementById('today-title').textContent = `${today}: ${workoutSchedule[today].focus}`;
    }

    // Register service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(console.error);
    }

    // Request notification permission
    if ('Notification' in navigator) {
        Notification.requestPermission();
    }
});

// Helper functions
function getTodayName() {
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    return days[new Date().getDay()];
}

function showPage(pageName) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    
    document.getElementById(`${pageName}-page`).classList.add('active');
    event.target.classList.add('active');
    
    if (pageName === 'progress') {
        updateStats();
        renderChart();
    } else if (pageName === 'profile') {
        updateLevel();
    }
}

function showDayDetail(day) {
    if (!workoutSchedule[day]) return;
    
    currentDay = day;
    const schedule = workoutSchedule[day];
    
    document.getElementById('modal-day-title').textContent = `${day} ${schedule.icon}`;
    document.getElementById('modal-day-focus').textContent = schedule.focus;
    document.getElementById('modal-exercise-count').textContent = `${schedule.exercises.length} exercises`;
    
    const totalSets = schedule.exercises.reduce((sum, ex) => sum + ex.sets, 0);
    document.getElementById('modal-set-count').textContent = `${totalSets} sets total`;
    
    const container = document.getElementById('modal-exercises');
    container.innerHTML = schedule.exercises.map((ex, i) => `
        <div class="modal-exercise">
            <strong>${i + 1}. ${ex.name}</strong>
            <small>${ex.sets} sets × ${ex.reps} reps • Rest ${ex.rest}s • ${ex.muscle}</small>
        </div>
    `).join('');
    
    document.getElementById('day-modal').classList.add('active');
}

function closeModal() {
    document.getElementById('day-modal').classList.remove('active');
}

function startWorkoutFromModal() {
    closeModal();
    showPage('today');
    document.querySelector('.nav-btn:nth-child(2)').classList.add('active');
    startWorkout(currentDay);
}

function startTodayWorkout() {
    const today = getTodayName();
    
    if (workoutSchedule[today]) {
        startWorkout(today);
    } else {
        alert('Hari ini hari istirahat! 🎉 Recovery itu penting juga.');
    }
}

function startWorkout(day) {
    currentDay = day;
    const schedule = workoutSchedule[day];
    
    document.getElementById('empty-today').classList.add('hidden');
    document.getElementById('active-workout').classList.remove('hidden');
    document.getElementById('total-exercises').textContent = schedule.exercises.length;
    document.getElementById('workout-focus').textContent = schedule.focus;
    document.getElementById('workout-duration').textContent = schedule.duration;
    
    renderExercises();
    updateProgress();
}

function renderExercises() {
    const schedule = workoutSchedule[currentDay];
    const container = document.getElementById('exercise-list');
    
    container.innerHTML = schedule.exercises.map((ex, index) => `
        <div class="exercise-item ${ex.completed === ex.sets ? 'completed' : ''}" data-index="${index}">
            <div class="exercise-header">
                <span class="exercise-name">${ex.name}</span>
                <span class="exercise-badge">${ex.muscle}</span>
            </div>
            <div class="exercise-sets">
                ${ex.sets} sets × ${ex.reps} reps • Rest ${ex.rest}s
            </div>
            <div class="exercise-actions">
                ${Array(ex.sets).fill(0).map((_, i) => `
                    <button class="btn-set ${i < ex.completed ? 'active' : ''}" 
                            onclick="toggleSet(${index}, ${i})"
                            ${i > ex.completed ? 'disabled' : ''}>
                        ${i < ex.completed ? '✓' : i + 1}
                    </button>
                `).join('')}
                <button class="btn-timer" onclick="openTimer('${ex.name}', ${ex.rest})">⏱️</button>
            </div>
        </div>
    `).join('');
}

function toggleSet(exIndex, setIndex) {
    const schedule = workoutSchedule[currentDay];
    const exercise = schedule.exercises[exIndex];
    
    if (setIndex < exercise.completed) {
        // Undo sets
        exercise.completed = setIndex;
    } else {
        // Complete set
        exercise.completed = setIndex + 1;
        playSound();
        
        // Auto start timer if enabled
        if (document.getElementById('auto-timer').checked && exercise.completed < exercise.sets) {
            setTimeout(() => openTimer('Rest', exercise.rest), 300);
        }
    }
    
    renderExercises();
    updateProgress();
    saveProgress();
}

function updateProgress() {
    const schedule = workoutSchedule[currentDay];
    const totalSets = schedule.exercises.reduce((sum, ex) => sum + ex.sets, 0);
    const completedSets = schedule.exercises.reduce((sum, ex) => sum + ex.completed, 0);
    const percent = Math.round((completedSets / totalSets) * 100);
    
    document.getElementById('progress-percent').textContent = `${percent}%`;
    document.getElementById('completed-exercises').textContent = 
        schedule.exercises.filter(ex => ex.completed === ex.sets).length;
    document.getElementById('sets-progress').textContent = `${completedSets} / ${totalSets} set selesai`;
    
    const circle = document.getElementById('progress-circle');
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
    
    if (percent === 100) {
        setTimeout(finishWorkout, 800);
    }
}

function finishWorkout() {
    const schedule = workoutSchedule[currentDay];
    const totalSets = schedule.exercises.reduce((sum, ex) => sum + ex.sets, 0);
    const volume = totalSets * 10; // Estimasi reps
    
    // Save completion
    const progress = JSON.parse(localStorage.getItem('workoutProgress') || '{}');
    progress[currentDay] = {
        completed: true,
        date: new Date().toISOString(),
        volume: volume
    };
    progress.lastWorkout = new Date().toISOString();
    localStorage.setItem('workoutProgress', JSON.stringify(progress));
    
    // Update streak
    updateStreak();
    
    // Show celebration
    showCelebration(volume, schedule.focus);
    
    // Reset for next time
    schedule.exercises.forEach(ex => ex.completed = 0);
    saveProgress();
}

function showCelebration(volume, focus) {
    const messages = [
        `Beast mode! ${volume} reps completed! 🔥`,
        `Level up! ${focus} conquered! 💪`,
        `Iron sharpens iron! Great work! ⚔️`,
        `Satu langkah lebih dekat ke goals! 🎯`,
        `Your future self will thank you! 🦾`
    ];
    
    const stats = [
        { label: 'Workout', value: focus },
        { label: 'Volume', value: `${volume} reps` },
        { label: 'Duration', value: '~45 menit' },
        { label: 'Calories', value: '~300-400 kcal' }
    ];
    
    document.getElementById('workout-summary').innerHTML = stats.map(s => `
        <div class="summary-item">
            <span>${s.label}</span>
            <span>${s.value}</span>
        </div>
    `).join('');
    
    document.getElementById('celebration-message').textContent = 
        messages[Math.floor(Math.random() * messages.length)];
    
    document.getElementById('celebration').classList.remove('hidden');
    createConfetti();
}

function closeCelebration() {
    document.getElementById('celebration').classList.add('hidden');
    document.getElementById('empty-today').classList.remove('hidden');
    document.getElementById('active-workout').classList.add('hidden');
    showPage('schedule');
    updateStats();
}

// Timer functions
function openTimer(exerciseName, defaultTime = 60) {
    document.getElementById('timer-exercise-name').textContent = exerciseName;
    document.getElementById('timer-modal').classList.add('active');
    setTimer(defaultTime);
}

function closeTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
    document.getElementById('timer-modal').classList.remove('active');
    document.getElementById('timer-toggle').textContent = '▶️';
}

function setTimer(seconds) {
    clearInterval(timerInterval);
    isTimerRunning = false;
    timerSeconds = seconds;
    updateTimerDisplay();
    document.getElementById('timer-toggle').textContent = '▶️';
}

function toggleTimer() {
    if (isTimerRunning) {
        clearInterval(timerInterval);
        isTimerRunning = false;
        document.getElementById('timer-toggle').textContent = '▶️';
    } else {
        isTimerRunning = true;
        document.getElementById('timer-toggle').textContent = '⏸️';
        timerInterval = setInterval(() => {
            timerSeconds--;
            updateTimerDisplay();
            if (timerSeconds <= 0) {
                clearInterval(timerInterval);
                isTimerRunning = false;
                playSound();
                document.getElementById('timer-toggle').textContent = '🔁';
                // Auto close after 2 seconds
                setTimeout(closeTimer, 2000);
            }
        }, 1000);
    }
}

function adjustTimer(seconds) {
    timerSeconds = Math.max(5, timerSeconds + seconds);
    updateTimerDisplay();
}

function updateTimerDisplay() {
    document.getElementById('timer-display').textContent = timerSeconds;
}

// Stats and progress
function updateStats() {
    const progress = JSON.parse(localStorage.getItem('workoutProgress') || '{}');
    const workouts = Object.keys(progress).filter(k => 
        k !== 'lastWorkout' && progress[k] && progress[k].completed
    ).length;
    
    const totalMinutes = workouts * 50; // Estimasi 50 menit per workout
    const streak = calculateStreak();
    
    document.getElementById('total-workouts').textContent = workouts;
    document.getElementById('total-time').textContent = totalMinutes;
    document.getElementById('current-streak').textContent = streak;
    document.getElementById('streak-count').textContent = streak;
    
    // Calculate consistency (target: 4 workouts per week)
    const weeksActive = Math.max(1, Math.floor(workouts / 4));
    const consistency = Math.min(100, Math.round((workouts / (weeksActive * 4)) * 100));
    document.getElementById('completion-rate').textContent = `${consistency}%`;
    
    // Update day cards
    Object.keys(workoutSchedule).forEach(day => {
        const status = document.getElementById(`status-${day}`);
        const card = document.querySelector(`[data-day="${day}"]`);
        
        if (progress[day] && progress[day].completed) {
            const lastDone = new Date(progress[day].date);
            const thisWeek = isThisWeek(lastDone);
            status.textContent = thisWeek ? '✅' : '☑️';
            card.classList.add('completed');
        } else {
            status.textContent = '⭕';
            card.classList.remove('completed');
        }
    });
    
    renderAchievements(workouts, streak);
}

function isThisWeek(date) {
    const now = new Date();
    const weekStart = new Date(now.setDate(now.getDate() - now.getDay()));
    weekStart.setHours(0, 0, 0, 0);
    return date >= weekStart;
}

function calculateStreak() {
    const streak = parseInt(localStorage.getItem('streak') || '0');
    const lastWorkout = localStorage.getItem('lastWorkoutDate');
    
    if (!lastWorkout) return 0;
    
    const last = new Date(lastWorkout);
    const today = new Date();
    const diffTime = Math.abs(today - last);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    // Reset streak if missed more than 2 days
    if (diffDays > 2) {
        localStorage.setItem('streak', '0');
        return 0;
    }
    
    return streak;
}

function updateStreak() {
    const today = new Date().toDateString();
    const lastDate = localStorage.getItem('lastWorkoutDate');
    
    if (lastDate !== today) {
        let streak = parseInt(localStorage.getItem('streak') || '0');
        streak++;
        localStorage.setItem('streak', streak.toString());
        localStorage.setItem('lastWorkoutDate', today);
        
        // Check streak achievements
        if (streak === 7) showNotification('🔥 Streak 7 hari! Keep it up!');
        if (streak === 30) showNotification('🌟 Streak 30 hari! You are a beast!');
    }
}

function updateLevel() {
    const workouts = parseInt(document.getElementById('total-workouts').textContent);
    const levels = [
        { min: 0, name: 'Beginner', icon: '🌱' },
        { min: 5, name: 'Novice', icon: '🌿' },
        { min: 15, name: 'Intermediate', icon: '🌳' },
        { min: 30, name: 'Advanced', icon: '🦁' },
        { min: 50, name: 'Beast', icon: '🦍' },
        { min: 100, name: 'Legend', icon: '👑' }
    ];
    
    const current = levels.slice().reverse().find(l => workouts >= l.min);
    document.getElementById('user-level').textContent = current.name;
    document.getElementById('user-avatar').textContent = current.icon;
    
    // Progress to next level
    const nextLevel = levels.find(l => l.min > workouts);
    if (nextLevel) {
        const prevMin = levels[levels.indexOf(nextLevel) - 1].min;
        const progress = ((workouts - prevMin) / (nextLevel.min - prevMin)) * 100;
        document.getElementById('level-bar').style.width = `${progress}%`;
    } else {
        document.getElementById('level-bar').style.width = '100%';
    }
}

function renderChart() {
    const container = document.getElementById('week-chart');
    const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
    const progress = JSON.parse(localStorage.getItem('workoutProgress') || '{}');
    
    container.innerHTML = days.map(day => {
        const isDone = progress[day] && progress[day].completed && isThisWeek(new Date(progress[day].date));
        return `
            <div class="chart-bar ${isDone ? 'active' : ''}" 
                 style="height: ${isDone ? '100%' : '20%'}" 
                 data-day="${day.substring(0, 3)}">
            </div>
        `;
    }).join('');
}

function renderAchievements(workouts, streak) {
    const achievements = [
        { icon: '🌱', name: 'First Step', desc: 'Workout pertama selesai', unlocked: workouts >= 1 },
        { icon: '🔥', name: 'On Fire', desc: '5 workout selesai', unlocked: workouts >= 5 },
        { icon: '💪', name: 'Dumbbell Warrior', desc: '15 workout selesai', unlocked: workouts >= 15 },
        { icon: '🏆', name: 'Beast Mode', desc: '30 workout selesai', unlocked: workouts >= 30 },
        { icon: '⚡', name: 'Streak Master', desc: '7 hari streak', unlocked: streak >= 7 },
        { icon: '🌟', name: 'Consistency King', desc: '30 hari streak', unlocked: streak >= 30 },
        { icon: '🎯', name: 'Week Warrior', desc: 'Semua workout minggu ini', unlocked: checkWeekCompletion() },
        { icon: '👑', name: 'Legend', desc: '100 workout selesai', unlocked: workouts >= 100 }
    ];
    
    document.getElementById('achievements-list').innerHTML = achievements.map(ach => `
        <div class="achievement-item ${ach.unlocked ? '' : 'locked'}">
            <div class="achievement-icon">${ach.icon}</div>
            <div class="achievement-info">
                <h4>${ach.name}</h4>
                <p>${ach.desc}</p>
            </div>
        </div>
    `).join('');
}

function checkWeekCompletion() {
    const progress = JSON.parse(localStorage.getItem('workoutProgress') || '{}');
    const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
    return days.every(day => progress[day] && progress[day].completed && isThisWeek(new Date(progress[day].date)));
}

// Data management
function saveProgress() {
    localStorage.setItem('workoutData', JSON.stringify(workoutSchedule));
}

function loadProgress() {
    const saved = localStorage.getItem('workoutData');
    if (saved) {
        const data = JSON.parse(saved);
        Object.keys(data).forEach(day => {
            if (workoutSchedule[day]) {
                workoutSchedule[day].exercises = data[day].exercises;
            }
        });
    }
}

function exportData() {
    const data = {
        workoutSchedule,
        progress: localStorage.getItem('workoutProgress'),
        streak: localStorage.getItem('streak'),
        exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `beastmode-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    showNotification('✅ Data berhasil di-export!');
}

function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                if (data.workoutSchedule) {
                    Object.assign(workoutSchedule, data.workoutSchedule);
                    if (data.progress) localStorage.setItem('workoutProgress', data.progress);
                    if (data.streak) localStorage.setItem('streak', data.streak);
                    saveProgress();
                    updateStats();
                    showNotification('✅ Data berhasil di-import!');
                }
            } catch (err) {
                alert('File tidak valid!');
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

function resetProgress() {
    if (confirm('⚠️ Yakin mau reset SEMUA progress? Ini tidak bisa dibatalkan!')) {
        localStorage.clear();
        location.reload();
    }
}

// Utilities
function playSound() {
    if (document.getElementById('sound-toggle').checked) {
        // Simple beep using Web Audio API
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    }
}

function showNotification(message) {
    if ('Notification' in navigator && Notification.permission === 'granted') {
        new Notification('BeastMode Workout', {
            body: message,
            icon: '💪'
        });
    }
}

function toggleNotifications() {
    const enabled = document.getElementById('notif-toggle').checked;
    if (enabled && 'Notification' in navigator) {
        Notification.requestPermission();
    }
}

function newQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const el = document.getElementById('random-quote');
    el.style.opacity = '0';
    setTimeout(() => {
        el.textContent = quote;
        el.style.opacity = '1';
    }, 200);
}

// Confetti effect
function createConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const colors = ['#ff6b35', '#f7931e', '#ffd93d', '#00d9ff', '#e94560', '#9d4edd'];
    
    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 8 + 4,
            speed: Math.random() * 4 + 2,
            angle: Math.random() * 6.28,
            spin: Math.random() * 0.2 - 0.1
        });
    }
    
    let animationId;
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            p.y += p.speed;
            p.x += Math.sin(p.angle) * 2;
            p.angle += p.spin;
            
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.angle);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
            ctx.restore();
            
            if (p.y > canvas.height) {
                p.y = -20;
                p.x = Math.random() * canvas.width;
            }
        });
        
        if (!document.getElementById('celebration').classList.contains('hidden')) {
            animationId = requestAnimationFrame(animate);
        }
    }
    
    animate();
    
    // Stop after 5 seconds
    setTimeout(() => {
        cancelAnimationFrame(animationId);
    }, 5000);
}

// Prevent zoom on double tap
let lastTouchEnd = 0;
document.addEventListener('touchend', (event) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);