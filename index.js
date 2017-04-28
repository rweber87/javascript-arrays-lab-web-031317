const app = "I don't do much."

function destructivelyAppendKitten(name) {
	return kittens.push(name);
};

function destructivelyPrependKitten(name) {
	return kittens.unshift(name);
};

function destructivelyRemoveLastKitten() {
	return kittens.pop();
};

function destructivelyRemoveFirstKitten() {
	return kittens.shift();
};

function appendKitten(name) {
	var new_array = []
	for (var i = 0; i < kittens.length;  i++) {
	 	new_array.push(kittens[i]);
	 }
	new_array.push(name); 
	return new_array;
};

function prependKitten(name) {
	var new_array = [name]
	for (var i = 0; i < kittens.length;  i++) {
	 	new_array.push(kittens[i]);
	 } 
	return new_array;
};

function removeLastKitten() {
	var new_array = kittens.slice(0, kittens.length - 1)
	return new_array;
};

function removeFirstKitten() {
	var new_array = kittens.slice(1, kittens.length)
	return new_array;
};
