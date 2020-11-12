$(() => {
	const nullAppender = (element) => element < 10 ? `0${element}` : element;

	const timeConverter = (time) => {
		let hours = time.hours;
		const minutes = nullAppender(time.minutes);
		const seconds = nullAppender(time.seconds);
		let ampm = hours >= 12 ? "PM" : "AM";

		if (hours >= 13) {
			hours = hours - 12;
			hours = nullAppender(hours);
		} else {
			hours = nullAppender(hours);
		}

		return `<span>${hours}:${minutes}:${seconds}</span><span>${ampm}</span>`;
	};

	const dateConverter = (date) => {
		const month = nullAppender(date.month);
		const day = nullAppender(date.day);

		return `${day}.${month}.${date.year}`;
	};

	const start = () => {
		$("#clock").text("");

		const date = new Date();

		const currentTime = {
			hours: date.getHours(),
			minutes: date.getMinutes(),
			seconds: date.getSeconds()
		};

		const currentDate = {
			year: date.getFullYear(),
			month: date.getMonth() + 1,
			day: date.getDate()
		};

		const convertedTime = timeConverter(currentTime);
		const convertedDate = dateConverter(currentDate);

		$("#clock").append(`<div class="clock__time">${convertedTime}</div>
							<div class="clock__date">${convertedDate}</div>`);
	};

	start();

	setInterval(start, 1000);
});