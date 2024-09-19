const wrapper = document.querySelector('.wrapper');
const boardWrapper = document.getElementById('boardWrapper');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const iconCloseBoard = document.querySelector('.icon-close-board');
const loginForm = document.getElementById('loginForm');
const passwordInput = document.getElementById('passwordInput');
const errorMessage = document.getElementById('errorMessage');
const menuContent = document.getElementById('menuContent');

const menu1Btn = document.getElementById('menu1Btn');
const menu2Btn = document.getElementById('menu2Btn');

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    errorMessage.style.display = 'none';
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const enteredPassword = passwordInput.value;


    if (enteredPassword === '145145') {
        wrapper.classList.remove('active-popup');

        boardWrapper.style.display = 'flex';
        setTimeout(() => {
            boardWrapper.classList.add('active-board');
        }, 100);
    } else {
        errorMessage.style.display = 'block';
    }
});

iconCloseBoard.addEventListener('click', () => {
    boardWrapper.classList.remove('active-board');
    setTimeout(() => {
        boardWrapper.style.display = 'none';
    }, 400);
});


menu1Btn.addEventListener('click', () => {
    menuContent.innerHTML = '<img src="human-fall-flat.jpg" alt="Cool Image" style="max-width:80%; height:80%;">';
});

menu2Btn.addEventListener('click', () => {
    displayAttendance();
});

function getNextSaturdayAt20() {
    const now = new Date();


    const dayOfWeek = now.getUTCDay();

    const daysUntilSaturday = (6 - dayOfWeek + 7) % 7;
    const nextSaturday = new Date(now);
    nextSaturday.setUTCDate(now.getUTCDate() + daysUntilSaturday);
    nextSaturday.setUTCHours(18, 0, 0, 0);

    return nextSaturday;
}

function updateCountdown() {
    const now = new Date();
    const targetDate = getNextSaturdayAt20();
    const timeDiff = targetDate - now;

    if (timeDiff <= 0) {
        document.getElementById('countdown').innerHTML = 'KEKW XD';
        setTimeout(updateCountdown, 2 * 60 * 60 * 1000);

        return;
    }

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML =
        (hours < 10 ? '0' : '') + hours + ':' +
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds;
    setTimeout(updateCountdown, 1000);
}

const attendance = {

    Stuno: 1,
    GL: 1,
    Remus: 0,
    Oznal: 0,
    Fjucks: 1,
    Göksal: 1,
    Totte: 1,
    Busgafi: -1
};

function displayAttendance() {
    let content = '<div class="attendance-list">';

    for (const name in attendance) {
        content += `<p>${name}: ${attendance[name]}</p>`;
    }

    content += '</div>';
    menuContent.innerHTML = content;
}

updateCountdown();

