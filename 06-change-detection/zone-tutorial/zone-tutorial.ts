import 'zone.js';

console.log(Zone.current.name);

const angularRoom = Zone.current.fork({
	name: 'angular',
	onHasTask: () => {
		console.log('something happend trigger CD');
	}
});

angularRoom.run(() => {
	console.log('this is running now in angular room');
	console.log(Zone.current.name);
	
	setTimeout(() => {
		console.log('timer is running');
	}, 1000)
})