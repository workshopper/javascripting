for(let i = 0; i < 10; ++i) {
	console.log(i);
}

if (typeof(i) !== 'undefined') throw new Error("i shouldn't be defined here!");