// Select the elements using querySelector with appropriate selectors
const order1Root = document.querySelector('[data-key="order1"]');
const order2Root = document.querySelector('[data-key="order2"]');
const order3Root = document.querySelector('[data-key="order3"]');

const order1Biscuits = order1Root.querySelector('.biscuits .count');
const order1Donuts = order1Root.querySelector('.donuts .count');
const order1Pancakes = order1Root.querySelector('.pancakes .count');
const order1Status = order1Root.querySelector('.status dd');

const order2Biscuits = order2Root.querySelector('.biscuits .count');
const order2Donuts = order2Root.querySelector('.donuts .count');
const order2Pancakes = order2Root.querySelector('.pancakes .count');
const order2Status = order2Root.querySelector('.status dd');

const order3Biscuits = order3Root.querySelector('.biscuits .count');
const order3Donuts = order3Root.querySelector('.donuts .count');
const order3Pancakes = order3Root.querySelector('.pancakes .count');
const order3Status = order3Root.querySelector('.status dd');

// Retrieve data attributes and update the content
order1Biscuits.textContent = order1Root.getAttribute('data-biscuits');
order1Donuts.textContent = order1Root.getAttribute('data-donuts');
order1Pancakes.textContent = order1Root.getAttribute('data-pancakes');
order1Status.textContent = order1Root.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

order2Biscuits.textContent = order2Root.getAttribute('data-biscuits');
order2Donuts.textContent = order2Root.getAttribute('data-donuts');
order2Pancakes.textContent = order2Root.getAttribute('data-pancakes');
order2Status.textContent = order2Root.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

order3Biscuits.textContent = order3Root.getAttribute('data-biscuits');
order3Donuts.textContent = order3Root.getAttribute('data-donuts');
order3Pancakes.textContent = order3Root.getAttribute('data-pancakes');
order3Status.textContent = order3Root.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';
