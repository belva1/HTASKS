const citiesAndCountries = {
	'Киев': 'Украина',
	'Вашингтон': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};

const result = []

for (let key in citiesAndCountries) {result.push(key + ' - это ' + citiesAndCountries[key])}

console.log(result)

