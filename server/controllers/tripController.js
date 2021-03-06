module.exports = {
	read: (req, res) => {
		const db = req.app.get('db');
		const {user} = req.params;

		db.trips.trip_read([user])
			.then(trip => res.status(200).send(trip))
			.catch(err => console.log(`Error Message: ${err}`))
	},

	readLast: (req, res) => {
		const db = req.app.get('db');

		db.trips.trip_read_last()
			.then(trip => res.status(200).send(trip[0]))
			.catch(err => console.log(`Error Message: ${err}`))
	},

	find: (req, res) => {
		const db = req.app.get('db');
		const {id} = req.params;

		db.trips.trip_find([id])
			.then(trip => res.status(200).send(trip[0]))
			.catch(err => console.log(`Error Message: ${err}`))
	},

	create: (req, res) => {
		const db = req.app.get('db');
		const {trip_id, user_id, trip_location, trip_start_date, trip_end_date, trip_budget, trip_background, trip_bg_color} = req.body;

		db.trips.trip_create([trip_id, user_id, trip_location, trip_start_date, trip_end_date, trip_budget, trip_background, trip_bg_color])
			.then(trip => res.status(200).send(trip))
			.catch(err => console.log(`Error Message: ${err}`))
	},

	update: (req, res) => {
		const db = req.app.get('db');
		const {trip_location, trip_start_date, trip_end_date, trip_budget} = req.body;
		const {id} = req.params;

		db.trips.trip_update([trip_location, trip_start_date, trip_end_date, trip_budget, id])
			.then(trip => res.status(200).send(trip))
			.catch(err => console.log(`Error Message: ${err}`))
	},

	budget: (req, res) => {
		const db = req.app.get('db');
		const {budget} = req.body;
		const {id} = req.params;

		db.trips.trip_budget([budget, id])
			.then(trip => res.status(200).send(trip))
			.catch(err => console.log(`Error Message: ${err}`))
	},

	total: (req, res) => {
		const db = req.app.get('db');
		const {id} = req.params;

		db.trips.trip_total_budget([id])
			.then(trip => res.status(200).send(trip[0]))
			.catch(err => console.log(`Error Message: ${err}`))
	},

	location: (req, res) => {
		const db = req.app.get('db');
		const {location} = req.body;
		const {id} = req.params;

		db.trips.trip_location([location, id])
			.then(trip => res.status(200).send(trip))
			.catch(err => console.log(`Error Message: ${err}`))
	},

	startDate: (req, res) => {
		const db = req.app.get('db');
		const {startDate} = req.body;
		const {id} = req.params;

		db.trips.trip_start_date([startDate, id])
			.then(trip => res.status(200).send(trip))
			.catch(err => console.log(`Error Message: ${err}`))
	},

	endDate: (req, res) => {
		const db = req.app.get('db');
		const {endDate} = req.body;
		const {id} = req.params;

		db.trips.trip_end_date([endDate, id])
			.then(trip => res.status(200).send(trip))
			.catch(err => console.log(`Error Message: ${err}`))
	},

	delete: (req, res) => {
		const db = req.app.get('db');
		const {id} = req.params;

		db.trips.trip_delete([id])
			.then(trip => res.status(200).send(trip))
			.catch(err => console.log(`Error Message: ${err}`))
	}
}