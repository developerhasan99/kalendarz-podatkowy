$(function() {
    
const $calendar = $('.js-calendar')

const $monthEle = $calendar.find('.js-month');
const $yearEle = $calendar.find('.js-year');
const $btnNext = $calendar.find('.js-btn-next');
const $btnPrev = $calendar.find('.js-btn-prev');
const $dateContainer = $calendar.find('.date-container');
const $eventContainer = $calendar.find('.js-event-container')
//Custom no-event text
const noEventMessage = 'W tym dniu nie ma żadnego wydarzenia';

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();


//Custom months
const monthNames = ["Styczeń", "Luty", "Marzec", "Kwieceiń", "Maj", "Czerwiec",
  "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"
];

//format dd.mm.yyyy
const today = (new Date()).toLocaleDateString('de-DE');

function displayInfo() {
    // Hiển thị tên tháng
    let currentMonthName = monthNames[currentMonth];

    $monthEle.text(currentMonthName);

    // Hiển thị năm
    $yearEle.text(currentYear);
    
    // Hiển thị ngày trong tháng
    renderDate();
}

// Lấy số ngày của 1 tháng
function getDaysInMonth() {
    return new Date(currentYear, currentMonth + 1, 0).getDate();
}

// Lấy ngày bắt đầu của tháng
function getStartDayInMonth() {
    return new Date(currentYear, currentMonth, 1).getDay();
}

// Active current day
function activeCurrentDay(day) {
    let day1 = new Date().toDateString();
    let day2 = new Date(currentYear, currentMonth, day).toDateString();
    return day1 == day2 ? 'today active' : '';
}

function isHavingEvent(date) {
    let hasEvent = false;
    allEvents.forEach(element => {
        const date1 = moment(date, 'D-M-YYYY');
        const date2 = moment(element.day, 'D-M-YYYY');
        if (date1.format('D') === date2.format('D') &&
        date1.format('M') === date2.format('M') &&
        date1.format('YYYY') === date2.format('YYYY')) {
            hasEvent = true;
        }
    });
    return hasEvent === true ? 'event' : '';
}

// Hiển thị ngày trong tháng lên trên giao diện
function renderDate() {
    let daysInMonth = getDaysInMonth();
    let startDay = getStartDayInMonth();
    let allDayInMonth = [];
    let dom = '';

    $dateContainer.empty();

    for (let i = 0; i < startDay; i++) {
        allDayInMonth.push('<div class="calendar__day outside"></div>')
    }

    for (let i = 0; i < daysInMonth; i++) {
        allDayInMonth.push(`
        <div class="calendar__day inside ${activeCurrentDay(i + 1)} ${isHavingEvent(`${i + 1}.${currentMonth + 1}.${currentYear}`)}">
            ${i + 1}
        </div>`
        )
    }

    if (!(allDayInMonth.length % 7 == 0)) {
        while(!(allDayInMonth.length % 7 == 0)) {
            allDayInMonth.push('<div class="calendar__day outside"></div>')
        }
    }

    for (let i = 0; i < allDayInMonth.length; i++) {
        if (i == 0) {
            dom += `<div class='calendar__date-row'>`
        }

        dom += allDayInMonth[i];
        
        if ((i+1) % 7 == 0) {
            if (i == allDayInMonth.length) {
                dom += `</div>`
            } else {
                dom += `
                </div>
                <div class='calendar__date-row'>
            `
            }
        }


    }

    $dateContainer.html(dom);
}

//render events
function renderEvent(date) {
    const dateTimeStamp = moment(date, 'dd-mm-yyyy');
    $eventContainer.empty();
    let matchEvent = null;

    allEvents.forEach(element => {
        const elementTimeStamp = moment(element.day, 'dd-mm-yyyy');
        if ((new Date(elementTimeStamp)).getTime() === (new Date(dateTimeStamp)).getTime()) {
            matchEvent = element;
        }

    });

    if (matchEvent == null) {
        $eventContainer.append(`<div class="calendar__info"><p>${noEventMessage}</p></div>`);
    } else {
        let dom = '';
        dom += `<div class="calendar__info"><p>${matchEvent.day}</p></div>`;
        matchEvent.events.forEach(element => {
            dom += `<p class="calendar__desc">${element}</p>`
        });
        $eventContainer.append(dom);
    }

}

// first render
displayInfo();
// render today events
renderEvent(today);
// renderEvent('16.01.2023');

// Xử lý khi ấn vào nút next month
$btnNext.on('click', function () {
    if (currentMonth == 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    displayInfo();
});

// Xử lý khi ấn vào nút previous month
$btnPrev.on('click', function () {
    if (currentMonth == 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    displayInfo();
});

$dateContainer.on('click', (event) => {
    const $targetElement = $calendar.find(event.target);
    const $allInsideDay = $calendar.find('.calendar__day.inside ')
    if ($targetElement.hasClass('inside') && !$targetElement.hasClass('active')) {
        $allInsideDay.removeClass('active');
        $targetElement.addClass('active');
        let selectedDate = `${$targetElement.text()}.${currentMonth + 1}.${currentYear}`;
        renderEvent(selectedDate);
    }
})

});
